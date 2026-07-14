import React from 'react'
import { School, GraduationCap, User } from 'lucide-react'
import { resolveLocalScrapedImage } from '../../utils/localScrapedImages'
import TiltedCard from '../TiltedCard'
import {
  isValidDepartmentText,
  isValidDepartmentImage,
  getFileName,
  getDeptName
} from '../../utils/deptHelpers'


export interface ContentItem {
  type: string
  text?: string
  level?: string
  items?: string[]
  rows?: (string | { text: string; href: string })[][]
  src?: string
  alt?: string
  href?: string
}

interface SectionProps {
  deptCode: string
  sectionName: string
  content: ContentItem[]
  pageUrl: string
}

const isPdfIconImage = (src?: string) => /pdf-icon|new-pdf-icon|pdf-icon4/i.test(src || '')

export function renderContentBlocks(items: ContentItem[], deptCode: string, sectionName: string, pageUrl: string) {
  if (!items || items.length === 0) return null

  const isFacultyPage =
    sectionName.toLowerCase().includes('faculty profile') ||
    sectionName.toLowerCase().includes('supporting staff profile') ||
    sectionName.toLowerCase().includes('staff profile') ||
    (deptCode === 'mech' && (
      sectionName.toLowerCase().includes('alumni interaction') ||
      sectionName.toLowerCase().includes('adjunct professor') ||
      sectionName.toLowerCase().includes('honorary professor')
    ))

  const isPressReleaseSection = sectionName.toLowerCase().includes('press release')
  
  // Group consecutive general images
  const processedItems: (ContentItem | { type: 'image-group'; images: ContentItem[] })[] = []
  let currentImageGroup: ContentItem[] = []

  for (const item of items) {
    const isGeneralImage = item.type === 'image' && item.src && !isPdfIconImage(item.src) && !(() => {
      const filename = getFileName(item.src)
      return filename.includes('photo') || filename.includes('head') || filename.includes('kaliappan') || (item.alt || '').toLowerCase().includes('hod') || (item.alt || '').toLowerCase().includes('head') || (item.alt || '').toLowerCase().includes('principal')
    })()

    if (isGeneralImage) {
      currentImageGroup.push(item)
    } else {
      if (currentImageGroup.length > 0) {
        if (currentImageGroup.length === 1) {
          processedItems.push(currentImageGroup[0])
        } else {
          processedItems.push({ type: 'image-group', images: [...currentImageGroup] })
        }
        currentImageGroup = []
      }
      processedItems.push(item)
    }
  }
  if (currentImageGroup.length > 0) {
    if (currentImageGroup.length === 1) {
      processedItems.push(currentImageGroup[0])
    } else {
      processedItems.push({ type: 'image-group', images: currentImageGroup })
    }
  }

  return processedItems.map((item, index) => {
    if (isFacultyPage && item.type !== 'document') {
      return null
    }

    // 1. Text checks
    if ((item as any).text && !isValidDepartmentText((item as any).text)) {
      return null
    }

    switch (item.type) {
      case 'image-group': {
        const group = item as { type: 'image-group'; images: ContentItem[] }
        return (
          <div key={index} className="detail-image-grid-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', margin: '2rem 0' }}>
            {group.images.map((imgItem, imgIdx) => {
              const filename = getFileName(imgItem.src || '')
              const isValid = isValidDepartmentImage(imgItem.src || '', deptCode, imgItem.alt, pageUrl)
              const localSrc = isValid ? resolveLocalScrapedImage(imgItem.src) : null
              if (!localSrc) return null;
              return (
                <div key={imgIdx} className="detail-image-wrapper" style={{ display: 'flex', justifyContent: 'center', margin: 0 }}>
                  <img 
                    src={localSrc} 
                    alt={imgItem.alt || 'Department Content Image'} 
                    style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                    loading="lazy"
                  />
                </div>
              )
            })}
          </div>
        )
      }
      case 'heading': {
        const validHeadingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
        const HeadingTag = (validHeadingLevels.includes(item.level || '') ? item.level : 'h3') as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
        
        // HOD headings and h6 do not require sub-content
        const isRDHeading = sectionName.toLowerCase().includes('research and development') &&
          ((item.text || '').toLowerCase().includes('academic year') ||
           /journal publications|conference publications|book chapter|book publication/i.test(item.text || ''))
        const isHODHeading = HeadingTag === 'h6' || (item.text || '').includes('Head') || (item.text || '').includes('HOD') || (item.text || '').includes('Professor') || isRDHeading
        
        // Lookahead to ensure there is valid content before the next heading or end of array
        let hasContent = isHODHeading
        if (!hasContent) {
          for (let i = index + 1; i < processedItems.length; i++) {
            const nextItem = processedItems[i]
            if (nextItem.type === 'heading') break // Found next heading, stop checking
            
            let isValid = true
            if ((nextItem as any).text && !isValidDepartmentText((nextItem as any).text)) isValid = false
            
            if (isValid) {
              if (nextItem.type === 'image') {
                if (isPdfIconImage(nextItem.src)) isValid = false
                else if (!nextItem.src) isValid = false
                else if (!isValidDepartmentImage(nextItem.src, deptCode, nextItem.alt, pageUrl)) isValid = false
              } else if (nextItem.type === 'image-group') {
                // Grouped images are valid content
              } else if (nextItem.type === 'list') {
                const validListItems = (nextItem as ContentItem).items?.filter(isValidDepartmentText) || []
                if (validListItems.length === 0) isValid = false
              } else if (nextItem.type === 'table') {
                const validRows = (nextItem as ContentItem).rows?.filter(row => row.every(cell => isValidDepartmentText(typeof cell === 'string' ? cell : cell.text))) || []
                if (validRows.length === 0) isValid = false
              } else if (nextItem.type === 'document') {
               // document is valid
            } else if (nextItem.type === 'paragraph') {
                 // Paragraph is valid if text is valid (which is already checked above)
              } else {
                 isValid = false // Unknown type
              }
            }
            
            if (isValid) {
              hasContent = true
              break
            }
          }
        }

        if (!hasContent) {
          return null // Skip heading without content
        }
        
        const prevItem = index > 0 ? processedItems[index - 1] : null
        const isPrevProfileImage = prevItem && prevItem.type === 'image' && prevItem.src && (() => {
          const fn = getFileName(prevItem.src)
          return fn.includes('photo') || fn.includes('head') || fn.includes('kaliappan') || (prevItem.alt || '').toLowerCase().includes('hod') || (prevItem.alt || '').toLowerCase().includes('head') || (prevItem.alt || '').toLowerCase().includes('principal')
        })()

        const isCentered = HeadingTag === 'h6' || (item.text || '').includes('Head') || (item.text || '').includes('HOD') || (item.text || '').includes('Professor')
        
        // Skip if this heading is an HOD label that follows a profile image, as it's already rendered inside the caption wrapper
        if (isCentered && isPrevProfileImage) {
          return null
        }

        const cleanText = (item.text || '').toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]/g, '').trim()
        const cleanDeptName = getDeptName(deptCode).toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]/g, '').trim()
        const cleanSection = sectionName.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]/g, '').trim()
        
        const isRedundant =
          cleanText === cleanDeptName ||
          cleanText === `departmentof${cleanDeptName}` ||
          cleanText === `btech${cleanDeptName}` ||
          cleanText === cleanSection ||
          cleanText === 'aboutthedepartment'
          
        if (isRedundant && HeadingTag !== 'h6') {
          return null
        }

        const isRDSection = sectionName.toLowerCase().includes('research and development')
        const isAcademicYear = (item.text || '').toLowerCase().includes('academic year')
        const isPublicationType = /publications|book chapter|book publication/i.test(item.text || '')

        if (isRDSection && (isAcademicYear || isPublicationType)) {
          const Tag = isAcademicYear ? 'h3' : 'h4'
          return (
            <React.Fragment key={index}>
              <div style={{ display: 'none' }} dangerouslySetInnerHTML={{ __html: `<!-- SOURCE: scraped | DEPT: ${deptCode.toUpperCase()} | SECTION: ${sectionName} -->` }} />
              <Tag
                style={{
                  textAlign: 'center',
                  width: '100%',
                  marginTop: isAcademicYear ? '36px' : '24px',
                  marginBottom: '16px',
                  color: '#061846',
                  fontWeight: 700,
                  fontSize: isAcademicYear ? '20px' : '16px',
                  textDecoration: isAcademicYear ? 'underline' : 'none',
                  textTransform: 'uppercase',
                  display: 'block'
                }}
              >
                {item.text}
              </Tag>
            </React.Fragment>
          )
        }

        return (
          <React.Fragment key={index}>
            {/* SOURCE: scraped | DEPT: ${deptCode.toUpperCase()} | SECTION: ${sectionName} */}
            <div style={{ display: 'none' }} dangerouslySetInnerHTML={{ __html: `<!-- SOURCE: scraped | DEPT: ${deptCode.toUpperCase()} | SECTION: ${sectionName} -->` }} />
            <HeadingTag 
              className="detail-content-heading"
              style={isCentered ? { textAlign: 'center', marginTop: '12px', color: '#061846', fontSize: '15px', fontWeight: 700 } : undefined}
            >
              {item.text}
            </HeadingTag>
          </React.Fragment>
        )
      }
      case 'paragraph': {
        // Press Release captions ("Source: ... Dated On: ...") are rendered as
        // part of the image+caption pair grid above, not as a standalone block.
        if (isPressReleaseSection && /^Source:/i.test(item.text || '') && items[index - 1]?.type === 'image') {
          return null
        }
        // Civil's Research and Development page uses plain paragraphs as table
        // titles (e.g. "Faculty R&D Details") - bold them like real headings.
        const isCivilRndTableLabel = deptCode === 'civil' && /research\s*(and|&)\s*development/i.test(sectionName || '') && items[index + 1]?.type === 'table'
        // Video Lecture pages use a plain paragraph as each course's title
        // (e.g. "CCS336 Cloud Service Management Video Lecture") followed by
        // icon images and then its table - bold it like a real heading too.
        const isVideoLectureCourseLabel = /video lecture/i.test(sectionName || '') && (() => {
          for (let i = index + 1; i < items.length; i++) {
            if (items[i].type === 'paragraph') return false
            if (items[i].type === 'table') return true
          }
          return false
        })()
        return (
          <p
            key={index}
            className={`detail-content-paragraph${index === 0 ? ' detail-content-paragraph--lead' : ''}${isCivilRndTableLabel || isVideoLectureCourseLabel ? ' civil-rnd-table-label' : ''}`}
          >
            {item.text}
          </p>
        )
      }
      case 'link': {
        if (!item.href || !item.text) return null
        return (
          <div key={index} style={{ textAlign: 'center', margin: '2rem auto' }}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(90deg, #f4623a 0%, #ff7a45 100%)',
                color: '#fff',
                fontWeight: 700,
                padding: '0.9rem 2.5rem',
                borderRadius: '9999px',
                textDecoration: 'none',
                fontSize: '1rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              }}
            >
              {item.text}
            </a>
          </div>
        )
      }
      case 'list': {
        const validListItems = item.items?.filter(isValidDepartmentText) || []
        if (validListItems.length === 0) return null

        const isRDSection = sectionName.toLowerCase().includes('research and development')

        if (isRDSection) {
          return (
            <React.Fragment key={index}>
              {/* SOURCE: scraped | DEPT: ${deptCode.toUpperCase()} | SECTION: ${sectionName} */}
              <div style={{ display: 'none' }} dangerouslySetInnerHTML={{ __html: `<!-- SOURCE: scraped | DEPT: ${deptCode.toUpperCase()} | SECTION: ${sectionName} -->` }} />
              <ul style={{ 
                listStyleType: 'disc', 
                paddingLeft: '24px', 
                margin: '16px 0 24px 0', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '12px' 
              }}>
                {validListItems.map((li, idx) => (
                  <li key={idx} style={{ 
                    fontSize: '15px', 
                    lineHeight: '1.6', 
                    color: '#334155',
                    textAlign: 'left'
                  }}>
                    {li}
                  </li>
                ))}
              </ul>
            </React.Fragment>
          )
        }

        return (
          <React.Fragment key={index}>
            {/* SOURCE: scraped | DEPT: ${deptCode.toUpperCase()} | SECTION: ${sectionName} */}
            <div style={{ display: 'none' }} dangerouslySetInnerHTML={{ __html: `<!-- SOURCE: scraped | DEPT: ${deptCode.toUpperCase()} | SECTION: ${sectionName} -->` }} />
            <ul className="detail-content-list">
              {validListItems.map((li, idx) => (
                <li key={idx}>{li}</li>
              ))}
            </ul>
          </React.Fragment>
        )
      }
      case 'table': {
        const validRows = item.rows || []
        if (validRows.length === 0) return null

        if (deptCode === 'ece' && sectionName.toLowerCase().includes('innovative')) {
          return <InnovativePracticesTable key={index} rows={validRows} deptCode={deptCode} />
        }

        if (deptCode === 'it' && sectionName.toLowerCase().includes('innovative')) {
          return <ITInnovativePracticesTable key={index} rows={validRows} />
        }

        // Detect if there's a single-cell title row (caption) at row 0
        const hasTitleRow = validRows.length > 1 && validRows[0].length === 1
        const headerRowIdx = hasTitleRow ? 1 : 0
        
        // Use custom renderer for ECE Online Courses (Faculty & Student lists that have a title row)
        if (deptCode === 'ece' && sectionName.toLowerCase().includes('online courses')) {
          if (hasTitleRow) {
            return <EceOnlineCoursesTable key={index} rows={validRows} />
          }
        }

        // Detect if the actual header row's first column is a serial-number column → apply compact class
        const firstHeader = validRows[headerRowIdx]?.[0]
        const firstHeaderText = typeof firstHeader === 'string' ? firstHeader.toLowerCase() : (firstHeader as any)?.text?.toLowerCase() || ''
        const isSnoCOl = /^(sl\.?\s*no\.?|s\.?\s*no\.?|si\.?\s*no\.?|sno\.?|sr\.?\s*no\.?|#|no\.)/.test(firstHeaderText.trim())

        return (
          <React.Fragment key={index}>
            {/* SOURCE: scraped | DEPT: ${deptCode.toUpperCase()} | SECTION: ${sectionName} */}
            <div style={{ display: 'none' }} dangerouslySetInnerHTML={{ __html: `<!-- SOURCE: scraped | DEPT: ${deptCode.toUpperCase()} | SECTION: ${sectionName} -->` }} />
            <div className="detail-table-wrapper">
              <table className={`detail-content-table${isSnoCOl ? ' sno-col-table' : ''}`}>
                <tbody>
                  {validRows.map((row, rIdx) => {
                    const isHeader = rIdx === 0 || (hasTitleRow && rIdx === 1)
                    return (
                      <tr key={rIdx} className={isHeader ? 'table-header' : undefined}>
                        {row.map((cell, cIdx) => {
                          const isTitleCell = hasTitleRow && rIdx === 0 && cIdx === 0
                          const maxCols = hasTitleRow ? validRows[1].length : validRows[0].length
                          const colSpanProps = isTitleCell && maxCols > 1 ? { colSpan: maxCols } : {}

                          const titleStyle: React.CSSProperties = isTitleCell ? { 
                            textAlign: 'center', 
                            fontSize: '14px', 
                            letterSpacing: '0.08em', 
                            backgroundColor: '#1e40af', // slightly darker blue for main title
                            padding: '16px'
                          } : {}

                          const isSnoCell = isSnoCOl && cIdx === 0 && !isTitleCell;
                          const cellClass = isSnoCell ? 'sno-cell' : undefined;

                          const renderGenericText = (val: string) => {
                            return val.split('\n').map((line, i, arr) => (
                              <React.Fragment key={i}>
                                {line}
                                {i !== arr.length - 1 && <br />}
                              </React.Fragment>
                            ));
                          }

                          if (typeof cell === 'object' && cell !== null && 'href' in cell) {
                            const isPdf = cell.href && cell.href.endsWith('.pdf');
                            return isHeader 
                              ? <th key={cIdx} {...colSpanProps} className={cellClass} style={titleStyle}><a href={cell.href} target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>{cell.text ? renderGenericText(cell.text) : null}</a></th> 
                              : <td key={cIdx} {...colSpanProps} className={cellClass}>
                                  <a href={cell.href} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#246bfe', fontWeight: '500' }}>
                                    {isPdf && (
                                      <svg style={{ width: '18px', height: '18px', color: '#ef4444', flexShrink: 0 }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                      </svg>
                                    )}
                                    <span>{cell.text ? renderGenericText(cell.text) : null}</span>
                                  </a>
                                </td>
                          }
                          return isHeader 
                            ? <th key={cIdx} {...colSpanProps} className={cellClass} style={titleStyle}>{typeof cell === 'string' ? renderGenericText(cell) : cell as unknown as React.ReactNode}</th> 
                            : <td key={cIdx} {...colSpanProps} className={cellClass}>{typeof cell === 'string' ? renderGenericText(cell) : cell as unknown as React.ReactNode}</td>
                        })}
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </React.Fragment>
        )
      }
      case 'document': {
        const removeDocumentSubpages = [
          'about', 'vision', 'facilities', 'mou', 'faculty awards', 'students awards',
          'value added', 'expert lecture', 'guest lecture', 'workshop', 'fdp', 'sttp', 'fttp',
          'online courses', 'certification', 'ipt', 'internship', 'program participation',
          'resource person', 'advisory committee', 'dac', 'innovative practices',
          'paqic', 'alumni interaction', 'sponsored project', 'consultancy', 'industry institute',
          'projects', 'structra', 'faculty data', 'honorary', 'placement data',
          'extramural', 'civil nba', 'supporting staff', 'faculty profile', 'funded programme', 'faculty participation', 'industrial visit', 'other state', 'industry project',
          'course material', 'alumni contribution', 'neotricaidataviz'
        ];
        const lowerSectionName = (sectionName || '').toLowerCase();
        if (removeDocumentSubpages.some(k => {
          if (k === 'iv') {
            return new RegExp('\\biv\\b').test(lowerSectionName)
          }
          return lowerSectionName.includes(k)
        })) return null;

        if (!item.href) return null
        return (
          <React.Fragment key={index}>
            <div style={{ display: 'none' }} dangerouslySetInnerHTML={{ __html: `<!-- SOURCE: scraped | DEPT: ${deptCode.toUpperCase()} | SECTION: ${sectionName} -->` }} />
            <div className="detail-document-link-wrapper" style={{ margin: '2rem 0', display: 'flex', justifyContent: 'center' }}>
              <a 
                href={item.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '12px 24px',
                  backgroundColor: '#0f172a',
                  color: '#fff',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: '20px', height: '20px', marginRight: '8px', flexShrink: 0 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {item.text || 'View Document'}
              </a>
            </div>
          </React.Fragment>
        )
      }
      case 'image': {
        if (isPdfIconImage(item.src)) return null
        if (!item.src) return null
        
        const filename = getFileName(item.src)
        // Civil's own media (e.g. 181_Dharmar.jpg HOD photo, 1_SOP.jpg webinar
        // screenshots, Event_Ms.B.Hema_Karthicka__2016-2020__1.jpg) can trip the
        // generic numeric-filename or random-student-name blocklists in
        // isValidDepartmentImage; the /media/civil/ path already proves ownership,
        // so only re-check for genuinely generic junk (logos, icons, defaults).
        const isValidImageItem = (it: ContentItem) => {
          if (!it.src) return false
          if (
            (deptCode === 'civil' && /^\/media\/civil\//i.test(it.src)) ||
            /^\/media\/generic\//i.test(it.src)
          ) {
            const fn = getFileName(it.src).toLowerCase()
            const isGenericJunk = /logo|banner|header|footer|facebook|twitter|linkedin|youtube|instagram|social|pdf-icon|pdf_icon|new-pdf-icon|default\.png/i.test(fn)
            return !isGenericJunk
          }
          return isValidDepartmentImage(it.src, deptCode, it.alt, pageUrl)
        }
        const isValid = isValidImageItem(item)
        const localSrc = isValid ? resolveLocalScrapedImage(item.src) : null

        // A real HOD/profile photo always stands alone; course/event photos with
        // "photo" or "head" in the filename (e.g. revit_photo1.jpg) come in pairs,
        // so only treat filename-based matches as a profile when not part of a group.
        // Every real HOD photo carries alt text starting with "HOD ..."; matching
        // loose filename substrings like "photo" or "head" false-positives on
        // ordinary event photos (e.g. 3D_Printing_Group_Photo.jpg, revit_photo1.jpg).
        const isProfilePhotoAt = (idx: number) => {
          const it = items[idx]
          if (!it || it.type !== 'image' || !it.src || isPdfIconImage(it.src)) return false
          const fn = getFileName(it.src)
          const alt = (it.alt || '').toLowerCase()
          return fn.includes('kaliappan') || /\bhod\b/.test(alt) || /\bhead\b/.test(alt) || /\bprincipal\b/.test(alt)
        }

        if (isValid && localSrc) {
          const isProfileImage = isProfilePhotoAt(index)

          // Group consecutive general (non-profile) images so 1 shows centered,
          // and 2 or 4 in a row show as a 2-column grid instead of stacking.
          const isGeneralImageAt = (idx: number) => {
            const it = items[idx]
            if (!it || it.type !== 'image' || !it.src || isPdfIconImage(it.src)) return false
            if (!isValidImageItem(it)) return false
            return !isProfilePhotoAt(idx)
          }

          if (isProfileImage) {
            const nextItem = processedItems[index + 1]
            const isNextHODHeading = nextItem && nextItem.type === 'heading' && ((nextItem.text || '').includes('Head') || (nextItem.text || '').includes('HOD') || (nextItem.text || '').includes('Professor'))
            const hodTitle = isNextHODHeading ? nextItem.text : null

            return (
              <React.Fragment key={index}>
                <div style={{ display: 'none' }} dangerouslySetInnerHTML={{ __html: `<!-- IMG SOURCE: ${filename} | TYPE: profile | DEPT: ${deptCode.toUpperCase()} | VERIFIED: yes -->` }} />
                <div className="dept-profile-image-wrapper">
                  <figure className="detail-content-image dept-profile-figure" style={{ overflow: 'visible', background: 'transparent', border: 0, margin: 0, padding: 0 }}>
                    <TiltedCard
                      imageSrc={(deptCode === 'aids' && isProfileImage) ? '/HOD AD.png' : (localSrc || '')}
                      altText={item.alt || `${getDeptName(deptCode)} HOD`}
                      containerHeight="420px"
                      containerWidth="440px"
                      imageHeight="420px"
                      imageWidth="440px"
                      rotateAmplitude={5}
                      scaleOnHover={1.03}
                      showTooltip={false}
                      imageObjectFit={deptCode === 'cse' ? 'contain' : 'cover'}
                    />
                  </figure>
                  <div className="dept-profile-caption">
                    {sectionName === 'About the Department' && (
                      <>
                        <span className="dept-profile-badge">Department Head</span>
                        <p className="dept-profile-label" style={{ fontSize: '15px', color: '#64748b', fontWeight: 500, margin: '2px 0 4px 0' }}>{getDeptName(deptCode)}</p>
                      </>
                    )}
                    {hodTitle && (
                      <h3 className="hod-name-heading" style={{ margin: '6px 0 0 0', fontSize: '24px', fontWeight: 800, color: '#061846', letterSpacing: '-0.02em', lineHeight: '1.2', textTransform: 'uppercase' }}>
                        {hodTitle}
                      </h3>
                    )}
                  </div>
                </div>
              </React.Fragment>
            )
          }

          // Press Release pages: each image is followed by a "Source: ... Dated
          // On: ..." caption paragraph. Pair image+caption and lay pairs out in a
          // 2-column grid instead of stacking each image/caption one per row.
          if (isPressReleaseSection) {
            const isCaptionAt = (idx: number) => items[idx]?.type === 'paragraph' && /^Source:/i.test(items[idx].text || '')
            const isPairStartAt = (idx: number) => isGeneralImageAt(idx) && isCaptionAt(idx + 1)

            if (index >= 2 && isPairStartAt(index - 2)) return null // consumed by the earlier pair's render

            if (isPairStartAt(index)) {
              const pairs: { src: string; alt?: string; caption: string }[] = []
              let k = index
              while (isPairStartAt(k)) {
                const src = resolveLocalScrapedImage(items[k].src)
                if (!src) break
                pairs.push({ src, alt: items[k].alt, caption: items[k + 1].text || '' })
                k += 2
              }
              if (pairs.length > 0) {
                return (
                  <div
                    key={index}
                    className="detail-image-wrapper press-release-grid"
                    style={{
                      margin: '2rem auto',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                      gap: '1.75rem',
                      maxWidth: '900px',
                    }}
                  >
                    {pairs.map((p, pi) => (
                      <figure key={pi} style={{ margin: 0 }}>
                        <img
                          src={p.src}
                          alt={p.alt || 'Press Release'}
                          style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                          loading="lazy"
                        />
                        <figcaption className="detail-content-paragraph" style={{ textAlign: 'center', marginTop: '0.5rem' }}>
                          {p.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                )
              }
            }
          }

          if (isGeneralImageAt(index - 1)) return null // already rendered as part of the earlier group

          const group: { src: string; alt?: string }[] = [{ src: localSrc, alt: item.alt }]
          let k = index + 1
          while (k < items.length && isGeneralImageAt(k)) {
            const nextLocalSrc = resolveLocalScrapedImage(items[k].src)
            if (!nextLocalSrc) break
            group.push({ src: nextLocalSrc, alt: items[k].alt })
            k++
          }

          // A group of exactly 3 images (e.g. 3 faculty certificates side by side)
          // gets its own row of 3 columns instead of wrapping into an awkward
          // 2-then-1 layout with empty space next to the odd one out.
          const columns = group.length === 3 ? 3 : group.length >= 2 ? 2 : 1
          // An Honorary/Adjunct Professor portrait is a single headshot like the HOD
          // photo - cap it to the same ~440px width instead of the generic 640px
          // block, otherwise a modest-resolution photo gets upscaled and blurs.
          const isSingleProfessorPortrait = columns === 1 && /(honorary|adjunct)\s*professor/i.test(sectionName || '')

          return (
            <div
              key={index}
              className="detail-image-wrapper"
              style={{
                margin: '2rem auto',
                display: 'grid',
                gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
                gap: '1.25rem',
                maxWidth: isSingleProfessorPortrait ? '320px' : columns === 1 ? '640px' : columns === 3 ? '1100px' : '900px',
              }}
            >
              {group.map((g, gi) => (
                <img
                  key={gi}
                  src={g.src}
                  alt={g.alt || 'Department Content Image'}
                  style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  loading="lazy"
                />
              ))}
            </div>
          )
        } else {
          return null
        }
      }
      default:
        return null
    }
  })
}

export const OverviewSection: React.FC<SectionProps> = ({ deptCode, sectionName, content, pageUrl }) => {
  return (
    <section className="dept-section-overview" aria-label={`${sectionName} overview`}>
      {renderContentBlocks(content, deptCode, sectionName, pageUrl)}
    </section>
  )
}

export const AboutSection: React.FC<SectionProps> = ({ deptCode, sectionName, content, pageUrl }) => {
  return (
    <section className="dept-section-about" aria-label={`${sectionName} details`}>
      {renderContentBlocks(content, deptCode, sectionName, pageUrl)}
    </section>
  )
}

export const VisionMissionSection: React.FC<SectionProps> = ({ deptCode, sectionName, content, pageUrl }) => {
  const visionItems: ContentItem[] = [];
  const missionItems: ContentItem[] = [];
  let currentGroup: 'vision' | 'mission' | null = null;

  content.forEach((item) => {
    if (item.type === 'heading') {
      const text = (item.text || '').toLowerCase();
      if (text.includes('vision')) {
        currentGroup = 'vision';
      } else if (text.includes('mission')) {
        currentGroup = 'mission';
      } else {
        if (currentGroup === 'vision') visionItems.push(item);
        else if (currentGroup === 'mission') missionItems.push(item);
      }
    } else {
      if (currentGroup === 'vision') visionItems.push(item);
      else if (currentGroup === 'mission') missionItems.push(item);
      else {
        visionItems.push(item);
      }
    }
  });

  const hasMission = missionItems.length > 0

  return (
    <section className="dept-section-vision-mission" aria-label={`${sectionName} vision and mission`}>
      <div className={`dept-vision-mission-grid${hasMission ? '' : ' dept-vision-only'}`}>
        {/* Vision Card */}
        <div className="dept-vision-card">
          <div className="dept-vision-icon-container">
            <svg viewBox="0 0 100 100" className="dept-vision-svg">
              <path d="M5,50 Q50,15 95,50 Q50,85 5,50 Z" fill="none" stroke="#061846" strokeWidth="4.5" />
              <circle cx="50" cy="50" r="18" fill="none" stroke="#061846" strokeWidth="4.5" />
              <path d="M38,36 C38,18 62,18 62,36 C62,45 57,48 57,56 L43,56 C43,45 38,48 38,36 Z" fill="none" stroke="#061846" strokeWidth="4.5" />
              <line x1="43" y1="61" x2="57" y2="61" stroke="#061846" strokeWidth="4.5" strokeLinecap="round" />
              <line x1="46" y1="66" x2="54" y2="66" stroke="#061846" strokeWidth="4.5" strokeLinecap="round" />
              <line x1="50" y1="8" x2="50" y2="14" stroke="#888888" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="28" y1="16" x2="34" y2="22" stroke="#888888" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="72" y1="16" x2="66" y2="22" stroke="#888888" strokeWidth="3.5" strokeLinecap="round" />
              <path d="M47,43 C47,40 53,40 53,43 C53,45 47,45 47,48 C47,51 53,51 53,48" fill="none" stroke="#061846" strokeWidth="3" />
              <line x1="50" y1="38" x2="50" y2="52" stroke="#061846" strokeWidth="3" />
            </svg>
          </div>
          <div className="dept-vision-text-block">
            <h3 className="dept-vision-title">Vision</h3>
            <div className="dept-vision-body">
              {renderContentBlocks(visionItems, deptCode, sectionName, pageUrl)}
            </div>
            <div className="dept-card-gold-line"></div>
          </div>
        </div>

        {hasMission && (
          <>
            {/* Vertical Divider */}
            <div className="dept-vision-mission-divider"></div>

            {/* Mission Card */}
            <div className="dept-mission-card">
              <div className="dept-mission-icon-container">
                <svg viewBox="0 0 100 100" className="dept-mission-svg">
                  <circle cx="45" cy="55" r="32" fill="none" stroke="#061846" strokeWidth="4.5" />
                  <circle cx="45" cy="55" r="22" fill="none" stroke="#061846" strokeWidth="4.5" />
                  <circle cx="45" cy="55" r="12" fill="none" stroke="#061846" strokeWidth="4.5" />
                  <line x1="82" y1="18" x2="50" y2="50" stroke="#888888" strokeWidth="4.5" strokeLinecap="round" />
                  <path d="M43,57 L58,47 L47,44 Z" fill="#888888" />
                  <line x1="77" y1="13" x2="87" y2="23" stroke="#888888" strokeWidth="4.5" strokeLinecap="round" />
                  <line x1="72" y1="18" x2="82" y2="28" stroke="#888888" strokeWidth="4.5" strokeLinecap="round" />
                </svg>
              </div>
              <div className="dept-mission-text-block">
                <h3 className="dept-mission-title">Mission</h3>
                <div className="dept-mission-body">
                  {renderContentBlocks(missionItems, deptCode, sectionName, pageUrl)}
                </div>
                <div className="dept-card-gold-line"></div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export const FacilitiesSection: React.FC<SectionProps> = ({ deptCode, sectionName, content, pageUrl }) => {
  return (
    <section className="dept-section-facilities" aria-label={`${sectionName} facilities`}>
      {renderContentBlocks(content, deptCode, sectionName, pageUrl)}
    </section>
  )
}

export const DefaultSection: React.FC<SectionProps> = ({ deptCode, sectionName, content, pageUrl }) => {
  return (
    <section className="dept-section-default" aria-label={sectionName}>
      {renderContentBlocks(content, deptCode, sectionName, pageUrl)}
    </section>
  )
}

interface FacultySectionProps {
  facultyMembers: { name: string; designation: string; qualification: string; email: string; image: string | null }[]
  deptName: string
  deptCode: string
  accentColor: string
  subpageUrl?: string
}

export const FacultySection: React.FC<FacultySectionProps> = ({ facultyMembers, deptName, deptCode: _deptCode, accentColor, subpageUrl }) => {
  return (
    <div className="faculty-section">
      <h2 className="faculty-section-title" style={{ borderColor: accentColor }}>
        Department of {deptName}
      </h2>
      <div className="faculty-grid-premium">
        {facultyMembers.map((fac, idx) => {
          const localSrc = resolveLocalScrapedImage(fac.image)

          // Extract qualification prefix (e.g. "Ph.D" or "M.E" or "M.Tech" etc.)
          const qual = fac.qualification || ''
          const match = qual.match(/^(ph\.d|m\.e\.|m\.s\.|m\.tech|m\.sc|m\.phil|b\.e\.|b\.tech|ms|phd)\s*(?:at|from|in)?\s*(.*)$/i)
          
          return (
            <article className="faculty-card-premium" key={idx}>
              {/* Left Side: Avatar Column with gradients & badges */}
              <div className="faculty-avatar-column-premium">
                <div className="avatar-gradient-bg">
                  {/* Dot Grid Top Left */}
                  <div className="avatar-dot-grid-tl"></div>
                  
                  {localSrc ? (
                    <img src={localSrc} alt={fac.name} className="avatar-img-premium" loading="lazy" />
                  ) : (
                    <div className="avatar-placeholder-premium"><User size={54} /></div>
                  )}
                  
                  {/* Golden curve border accent */}
                  <div className="avatar-gold-accent"></div>
                </div>
              </div>
              
              {/* Right Side: Info Column */}
              <div className="faculty-info-column-premium">
                {/* Dot Grid Top Right */}
                <div className="info-dot-grid-tr"></div>
                
                {/* Name */}
                <h3 className="faculty-name-premium">{fac.name.toUpperCase()}</h3>
                
                {/* Designation tag bar */}
                <div className="info-designation-bar-premium">
                  <div className="info-user-icon-box">
                    <User size={16} className="info-user-icon" />
                  </div>
                  <span className="faculty-role-premium">{fac.designation}</span>
                </div>
                
                <div className="info-divider-gold"></div>
                
                {/* Department row */}
                <div className="info-detail-row-premium">
                  <div className="detail-icon-box-premium">
                    <School size={16} />
                  </div>
                  <div className="detail-text-box-premium">
                    <span className="detail-label-premium">Department</span>
                    <span className="detail-value-premium">Department of {deptName}</span>
                  </div>
                </div>
                
                <div className="info-divider-gray"></div>
                
                {/* Qualification row */}
                <div className="info-detail-row-premium">
                  <div className="detail-icon-box-premium">
                    <GraduationCap size={16} />
                  </div>
                  <div className="detail-text-box-premium">
                    <span className="detail-label-premium">Qualification</span>
                    <span className="detail-value-premium">
                      {match ? (
                        <>
                          <strong>{match[1]}</strong> {match[2] ? match[2] : ''}
                        </>
                      ) : (
                        qual
                      )}
                    </span>
                  </div>
                </div>
                
                {/* View Profile/Report Button at bottom right */}
                {fac.email && fac.email.endsWith('.pdf') ? (
                  <a 
                    href={fac.email} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="faculty-view-profile-btn-premium"
                  >
                    <span className="btn-text">View Report</span>
                    <span className="btn-arrow-circle">→</span>
                  </a>
                ) : (
                  <a 
                    href={subpageUrl || '#'} 
                    onClick={(e) => {
                      e.preventDefault();
                      const event = new CustomEvent('view-faculty-profile', {
                        detail: { name: fac.name, departmentName: deptName, image: localSrc }
                      });
                      window.dispatchEvent(event);
                    }}
                    className="faculty-view-profile-btn-premium"
                  >
                    <span className="btn-text">View Profile</span>
                    <span className="btn-arrow-circle">→</span>
                  </a>
                )}
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export const EceOnlineCoursesTable: React.FC<{ rows: any[][] }> = ({ rows }) => {
  if (rows.length === 0) return null
  
  const hasTitleRow = rows.length > 1 && rows[0].length === 1
  const headerRowIdx = hasTitleRow ? 1 : 0
  
  if (rows.length <= headerRowIdx) return null
  
  const titleRow = hasTitleRow ? rows[0] : null
  const headerRow = rows[headerRowIdx]
  const dataRows = rows.slice(headerRowIdx + 1)
  
  const groupedData: { siNo: React.ReactNode, name: React.ReactNode, courses: { course: React.ReactNode, university: React.ReactNode }[], rowSpan: number }[] = []
  
  let currentGroup: any = null
  
  for (const row of dataRows) {
    if (row.length >= 3) {
      if (currentGroup) {
        groupedData.push(currentGroup)
      }
      currentGroup = {
        siNo: row[0],
        name: row[1],
        courses: [
          { course: row[2], university: row[3] || '' }
        ],
        rowSpan: 1
      }
    } else if (row.length <= 2 && currentGroup) {
      currentGroup.courses.push({
        course: row[0],
        university: row[1] || ''
      })
      currentGroup.rowSpan += 1
    }
  }
  if (currentGroup) {
    groupedData.push(currentGroup)
  }

  const titleStyle: React.CSSProperties = { 
    textAlign: 'center', 
    fontSize: '14px', 
    letterSpacing: '0.08em', 
    backgroundColor: '#1e40af', 
    padding: '16px',
    color: '#fff'
  }

  const renderCellText = (cell: any) => {
    if (typeof cell === 'object' && cell !== null && 'href' in cell) {
      return <a href={cell.href} target="_blank" rel="noopener noreferrer">{cell.text}</a>
    }
    if (typeof cell === 'string') {
      return cell.split('\n').map((line, i, arr) => (
        <React.Fragment key={i}>
          {line}
          {i !== arr.length - 1 && <br />}
        </React.Fragment>
      ))
    }
    return cell as React.ReactNode
  }

  return (
    <div className="detail-table-wrapper" style={{ margin: '32px 0' }}>
      <table className="detail-content-table">
        <tbody>
          {titleRow && (
            <tr className="table-header">
              <th colSpan={headerRow.length} style={titleStyle}>{renderCellText(titleRow[0])}</th>
            </tr>
          )}
          <tr className="table-header">
            {headerRow.map((cell, idx) => (
              <th key={idx} className={idx === 0 ? 'sno-cell' : undefined}>{renderCellText(cell)}</th>
            ))}
          </tr>
          
          {groupedData.map((group, gIdx) => (
            <React.Fragment key={gIdx}>
              {group.courses.map((courseItem, cIdx) => (
                <tr key={`${gIdx}-${cIdx}`}>
                  {cIdx === 0 && (
                    <>
                      <td rowSpan={group.rowSpan} className="sno-cell" style={{ verticalAlign: 'middle', borderRight: '1px solid #e9edf4' }}>{renderCellText(group.siNo)}</td>
                      <td rowSpan={group.rowSpan} style={{ verticalAlign: 'middle', borderRight: '1px solid #e9edf4' }}>{renderCellText(group.name)}</td>
                    </>
                  )}
                  <td style={{ borderRight: '1px solid #e9edf4' }}>{renderCellText(courseItem.course)}</td>
                  <td>{renderCellText(courseItem.university)}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export const InnovativePracticesTable: React.FC<{ rows: any[]; deptCode: string }> = ({ rows, deptCode }) => {
  const faculties: { facultyName: string; serialNo?: string; courses: { courseCodeTitle: string; methods: string[]; documentUrl?: string }[] }[] = []
  let currentFaculty: typeof faculties[0] | null = null
  let currentCourse: typeof faculties[0]['courses'][0] | null = null

  const dataRows = rows.slice(1)

  dataRows.forEach((row) => {
    if (row.length === 0) return

    if (row.length === 1) {
      const cellVal = typeof row[0] === 'string' ? row[0] : row[0]?.text || ''
      const text = cellVal.trim()
      if (!text) return

      if (text.match(/^(dr|mr|mrs|ms)\.?\s*[a-z]/i)) {
        currentFaculty = {
          facultyName: text,
          courses: []
        }
        faculties.push(currentFaculty)
        currentCourse = null
      } else if (currentCourse) {
        currentCourse.methods.push(text)
      }
    } else if (row.length === 4) {
      if (currentFaculty) {
        currentFaculty.serialNo = row[0]
        currentCourse = {
          courseCodeTitle: row[1],
          methods: [row[2]],
          documentUrl: typeof row[3] === 'object' && row[3] !== null ? row[3].href : undefined
        }
        currentFaculty.courses.push(currentCourse)
      }
    } else if (row.length === 3) {
      if (currentFaculty) {
        currentCourse = {
          courseCodeTitle: row[0],
          methods: [row[1]],
          documentUrl: typeof row[2] === 'object' && row[2] !== null ? row[2].href : undefined
        }
        currentFaculty.courses.push(currentCourse)
      }
    }
  })

  return (
    <div className="detail-table-wrapper select-none" style={{ margin: '20px 0', overflowX: 'auto' }}>
      <table className="detail-content-table innovative-practices-table" style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #cbd5e1' }}>
        <thead>
          <tr className="table-header">
            <th style={{ width: '80px', textAlign: 'center', backgroundColor: '#0f172a', color: '#fff', padding: '14px 18px', fontWeight: '800', border: '1px solid #475569' }}>Sl. No.</th>
            <th style={{ backgroundColor: '#0f172a', color: '#fff', padding: '14px 18px', fontWeight: '800', border: '1px solid #475569' }}>Semester/ Course Code / Title</th>
            <th style={{ backgroundColor: '#0f172a', color: '#fff', padding: '14px 18px', fontWeight: '800', border: '1px solid #475569' }}>Innovative practice in delivery Methods</th>
            <th style={{ width: '120px', textAlign: 'center', backgroundColor: '#0f172a', color: '#fff', padding: '14px 18px', fontWeight: '800', border: '1px solid #475569' }}>View</th>
          </tr>
        </thead>
        <tbody>
          {faculties.map((fac, facIdx) => {
            const rowsToRender: React.ReactNode[] = []

            rowsToRender.push(
              <tr key={`fac-${facIdx}`} className="faculty-divider-row" style={{ backgroundColor: '#ffffff', borderBottom: '2px solid #cbd5e1' }}>
                <td colSpan={4} style={{ padding: '12px 18px', fontWeight: '800', color: '#0f172a', fontSize: '14px', letterSpacing: '0.02em', textTransform: 'uppercase', textAlign: 'center', border: '1px solid #cbd5e1', backgroundColor: '#ffffff' }}>
                  {fac.facultyName}
                </td>
              </tr>
            )

            fac.courses.forEach((course, courseIdx) => {
              const rowCount = course.methods.length

              course.methods.forEach((method, methodIdx) => {
                if (methodIdx === 0) {
                  rowsToRender.push(
                    <tr key={`course-${facIdx}-${courseIdx}-${methodIdx}`} style={{ borderBottom: rowCount === 1 ? '1px solid #cbd5e1' : 'none', backgroundColor: '#ffffff' }}>
                      <td 
                        rowSpan={rowCount} 
                        style={{ 
                          textAlign: 'center', 
                          fontWeight: '700', 
                          color: '#64748b', 
                          border: '1px solid #cbd5e1',
                          verticalAlign: 'middle',
                          padding: '14px 18px',
                          backgroundColor: '#ffffff'
                        }}
                      >
                        {fac.serialNo || `${facIdx + 1}.`}
                      </td>
                      <td 
                        rowSpan={rowCount} 
                        style={{ 
                          fontWeight: '700', 
                          color: '#0f172a', 
                          border: '1px solid #cbd5e1',
                          verticalAlign: 'middle',
                          padding: '14px 18px',
                          backgroundColor: '#ffffff'
                        }}
                      >
                        {course.courseCodeTitle}
                      </td>
                      <td style={{ padding: '12px 18px', borderBottom: '1px solid #cbd5e1', borderRight: '1px solid #cbd5e1', verticalAlign: 'middle', backgroundColor: '#ffffff' }}>
                        {method}
                      </td>
                      <td 
                        rowSpan={rowCount} 
                        style={{ 
                          textAlign: 'center', 
                          verticalAlign: 'middle',
                          border: '1px solid #cbd5e1',
                          padding: '14px 18px',
                          backgroundColor: '#ffffff'
                        }}
                      >
                        {course.documentUrl ? (
                          <a 
                            href={course.documentUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="innovative-doc-link"
                            style={{ 
                              color: '#2563eb', 
                              fontWeight: '600',
                              textDecoration: 'none',
                              fontSize: '13.5px',
                              transition: 'color 0.2s'
                            }}
                          >
                            View Document
                          </a>
                        ) : (
                          <span style={{ color: '#94a3b8', fontSize: '13px' }}>-</span>
                        )}
                      </td>
                    </tr>
                  )
                } else {
                  rowsToRender.push(
                    <tr key={`course-${facIdx}-${courseIdx}-${methodIdx}`} style={{ borderBottom: methodIdx === rowCount - 1 ? '1px solid #cbd5e1' : 'none', backgroundColor: '#ffffff' }}>
                      <td style={{ padding: '12px 18px', borderBottom: '1px solid #cbd5e1', borderRight: '1px solid #cbd5e1', verticalAlign: 'middle', backgroundColor: '#ffffff' }}>
                        {method}
                      </td>
                    </tr>
                  )
                }
              })
            })

            return rowsToRender
          })}
        </tbody>
      </table>
    </div>
  )
}

// ─────────────────────────────────────────────────────────
// IT Innovative Practices Table
// Handles 6-col rows: Sl.No | Subject Code & Name | Faculty | Topic | Practice | View
// with single-cell semester-banner rows
// ─────────────────────────────────────────────────────────
type ITIPGroup = {
  semester: string
  subjects: ITIPSubject[]
}
type ITIPSubject = {
  slNo: string
  codeTitle: string
  faculty: string
  entries: { topic: string; practice: string; docUrl?: string }[]
}

export const ITInnovativePracticesTable: React.FC<{ rows: any[] }> = ({ rows }) => {
  // Parse rows into semester groups → subjects
  const groups: ITIPGroup[] = []
  let currentGroup: ITIPGroup | null = null
  let currentSubject: ITIPSubject | null = null

  // Skip header row
  const dataRows = rows.slice(1)

  dataRows.forEach((row) => {
    if (!row || row.length === 0) return

    // Single-cell row = semester section banner
    if (row.length === 1) {
      const text = (typeof row[0] === 'string' ? row[0] : row[0]?.text || '').trim()
      if (!text) return
      currentGroup = { semester: text, subjects: [] }
      groups.push(currentGroup)
      currentSubject = null
      return
    }

    // 6-col data row
    if (row.length >= 5 && currentGroup) {
      const slNo   = typeof row[0] === 'string' ? row[0] : String(row[0] || '')
      const code   = typeof row[1] === 'string' ? row[1] : String(row[1] || '')
      const faculty= typeof row[2] === 'string' ? row[2] : String(row[2] || '')
      const topic  = typeof row[3] === 'string' ? row[3] : String(row[3] || '')
      const practice = typeof row[4] === 'string' ? row[4] : String(row[4] || '')
      const docCell  = row[5]
      const docUrl   = docCell && typeof docCell === 'object' ? docCell.href : undefined

      // Group consecutive rows with same subject code + faculty under one subject
      if (
        currentSubject &&
        currentSubject.codeTitle === code &&
        currentSubject.faculty === faculty
      ) {
        currentSubject.entries.push({ topic, practice, docUrl })
      } else {
        currentSubject = { slNo, codeTitle: code, faculty, entries: [{ topic, practice, docUrl }] }
        currentGroup.subjects.push(currentSubject)
      }
    }
  })

  const cellBase: React.CSSProperties = {
    border: '1px solid #cbd5e1',
    padding: '11px 14px',
    verticalAlign: 'middle',
    fontSize: '14px',
    color: '#1e293b',
    backgroundColor: '#ffffff',
  }

  return (
    <div className="detail-table-wrapper select-none" style={{ margin: '20px 0', overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #cbd5e1' }}>
        <thead>
          <tr>
            {(['Sl. No.', 'Subject Code & Title', 'Faculty', 'Topic / Date', 'Innovative Practice', 'View']).map((h, i) => (
              <th key={i} style={{
                backgroundColor: '#0f172a',
                color: '#fff',
                padding: '13px 14px',
                fontWeight: 800,
                fontSize: '13px',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                border: '1px solid #475569',
                textAlign: i === 0 || i === 5 ? 'center' : 'left',
                whiteSpace: 'nowrap',
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {groups.map((grp, gi) => (
            <React.Fragment key={gi}>
              {/* Semester banner */}
              <tr>
                <td colSpan={6} style={{
                  ...cellBase,
                  backgroundColor: '#1e3a5f',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '13.5px',
                  textAlign: 'center',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  padding: '12px 18px',
                  border: '1px solid #1e3a5f',
                }}>
                  {grp.semester}
                </td>
              </tr>
              {grp.subjects.map((sub, si) => (
                sub.entries.map((entry, ei) => (
                  <tr key={`${gi}-${si}-${ei}`} style={{ backgroundColor: ei % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                    {ei === 0 && (
                      <td rowSpan={sub.entries.length} style={{
                        ...cellBase,
                        textAlign: 'center',
                        fontWeight: 700,
                        color: '#64748b',
                        width: '60px',
                      }}>
                        {sub.slNo}.
                      </td>
                    )}
                    {ei === 0 && (
                      <td rowSpan={sub.entries.length} style={{
                        ...cellBase,
                        fontWeight: 700,
                        color: '#0f172a',
                        minWidth: '180px',
                      }}>
                        {sub.codeTitle}
                      </td>
                    )}
                    {ei === 0 && (
                      <td rowSpan={sub.entries.length} style={{
                        ...cellBase,
                        fontWeight: 600,
                        color: '#334155',
                        minWidth: '150px',
                        fontStyle: 'italic',
                      }}>
                        {sub.faculty}
                      </td>
                    )}
                    <td style={{ ...cellBase, color: '#475569', minWidth: '160px' }}>{entry.topic}</td>
                    <td style={{ ...cellBase, fontWeight: 600, color: '#1d4ed8', minWidth: '160px' }}>{entry.practice}</td>
                    <td style={{ ...cellBase, textAlign: 'center', width: '100px' }}>
                      {entry.docUrl ? (
                        <a
                          href={entry.docUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: '#2563eb', fontWeight: 600, textDecoration: 'none', fontSize: '13px' }}
                        >
                          View Document
                        </a>
                      ) : <span style={{ color: '#94a3b8' }}>—</span>}
                    </td>
                  </tr>
                ))
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
}
