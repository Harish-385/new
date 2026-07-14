import { DeptSidebar } from './DeptSidebar'
import './DeptRedesign.css'
import React, { useState, useRef, useEffect } from 'react'
import TiltedCard from '../TiltedCard'
import {
  Home,
  User,
  Target,
  FlaskConical,
  FileText,
  Calendar,
  Award,
  Laptop,
  Users,
  BarChart,
  BookOpen,
  Contact,
  Atom,
  Edit,
  GraduationCap,
  Lightbulb,
  ExternalLink,
  ChevronRight
} from 'lucide-react'
import { useCMS } from '../CMSContext'
import { EditDeptSubpageModal } from '../CMSModals'
import { resolveLocalScrapedImage } from '../../utils/localScrapedImages'
import {
  getDeptName,
  getDeptAccentColor,
  isValidDepartmentImage,
  isValidDepartmentText,
  getFileName,
  getSortedSubpageKeys
} from '../../utils/deptHelpers'
import {
  OverviewSection,
  AboutSection,
  VisionMissionSection,
  FacilitiesSection,
  DefaultSection,
  FacultySection
} from './DeptSubSections'
import type { ContentItem } from './DeptSubSections'
import { PEOSection } from './PEOSection'
import { DeptWidgetsSidebar } from './DeptWidgetsSidebar'

interface DeptProps {
  onClose: () => void
}


const getIconForKey = (key: string) => {
  const k = key.toLowerCase();
  if (k.includes('about')) return <Home size={18} />;
  if (k.includes('faculty profile')) return <User size={18} />;
  if (k.includes('vision')) return <Target size={18} />;
  if (k.includes('facilit') || k.includes('lab')) return <FlaskConical size={18} />;
  if (k.includes('research')) return <FileText size={18} />;
  if (k.includes('events')) return <Calendar size={18} />;
  if (k.includes('award')) return <Award size={18} />;
  if (k.includes('online')) return <Laptop size={18} />;
  if (k.includes('program') || k.includes('participation')) return <Users size={18} />;
  if (k.includes('faculty data')) return <BarChart size={18} />;
  if (k.includes('supporting') || k.includes('staff')) return <Contact size={18} />;
  return <BookOpen size={18} />;
};

export const CsecDept: React.FC<DeptProps> = () => {
  const deptCode = 'csec'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { deptSubpages, isAuthenticated } = useCMS()
  const deptData = deptSubpages[deptCode]
  const [showEditModal, setShowEditModal] = useState(false)
  const subpageKeys = getSortedSubpageKeys(deptData)

  const [activeSubpage, setActiveSubpage] = useState<string>(() => {
    if (subpageKeys.length > 0) {
      return subpageKeys.find((k) => k.toLowerCase().includes('about')) || subpageKeys[0]
    }
    return ''
  })

  const subpageData = deptData && activeSubpage ? deptData[activeSubpage] : null
  const pageUrl = subpageData?.url || `https://www.ritrjpm.ac.in/departments/`
  const rawContentItems: ContentItem[] = subpageData?.content || []

  // Filter content items
  const filteredContentItems = rawContentItems.filter((item) => {
    if (item.type === 'image') {
      return item.src && isValidDepartmentImage(item.src, deptCode, item.alt, pageUrl)
    }
    if (item.text) {
      return isValidDepartmentText(item.text)
    }
    return true
  })

  const isFacultyProfilePage = activeSubpage.toLowerCase().includes('faculty profile') || activeSubpage.toLowerCase().includes('faculty data')

  const facultyMembers = isFacultyProfilePage ? (() => {
    const cleanStr = (val: any): string => {
      if (!val) return '';
      if (typeof val === 'string') return val.trim();
      return (val.text || '').trim();
    };
    let img: string | null = null
    const list: { name: string; designation: string; qualification: string; email: string; image: string | null }[] = []
    rawContentItems.forEach((item) => {
      if (item.type === 'image' && item.src) {
        img = item.src
      } else if (item.type === 'table') {
        const rows = item.rows || []
        if (rows.length >= 4) {
          list.push({
            name: cleanStr(rows[0]?.[1]),
            designation: cleanStr(rows[1]?.[1]),
            qualification: cleanStr(rows[2]?.[1]),
            email: cleanStr(rows[3]?.[1]),
            image: img,
          })
        }
        img = null
      }
    })
    return list
  })() : []

  const isPdfIconImage = (src?: string) => /pdf-icon|new-pdf-icon|pdf-icon4/i.test(src || '')
  
  const galleryImages = activeSubpage.toLowerCase().includes('about')
    ? []
    : filteredContentItems
    .filter((item): item is ContentItem & { type: 'image'; src: string } => item.type === 'image' && Boolean(item.src) && !isPdfIconImage(item.src))
    .map((item) => ({
      ...item,
      localSrc: resolveLocalScrapedImage(item.src),
    }))
    .filter((item) => Boolean(item.localSrc))
    .slice(0, 6)

  const isReadMoreOrGallery = activeSubpage.toLowerCase().includes('read more') || activeSubpage.toLowerCase().includes('gallery')
  const showGalleryEmptyState = isReadMoreOrGallery && galleryImages.length === 0

  const isPdfTab = /news letter|newsletter|magazine|admission/i.test(activeSubpage)

  const textItems = isFacultyProfilePage
    ? filteredContentItems.filter((item) => {
        if (item.type === 'document') return true
        if (item.type === 'table') return false

        if (item.type === 'heading') return false
        return true
      })
    : filteredContentItems.filter((item) => {

        if (isPdfTab && item.type === 'document') return false
        return true
      })

  const pdfAttachmentCards = (() => {
    const isPdfTab = /news letter|newsletter|magazine|admission/i.test(activeSubpage)
    if (!isPdfTab) return []

    // Look for document type items in rawContentItems
    const docItems = rawContentItems.filter((item) => item.type === 'document')
    if (docItems.length > 0) {
      return docItems.map((item) => {
        const isMagazine = /magazine/i.test(item.text || '')
        const yearMatch = item.text ? item.text.match(/\b(20\d{2}-20\d{2}|20\d{2}-\d{2}|20\d{2})\b/) : null
        return {
          year: yearMatch ? yearMatch[1] : 'PDF',
          title: item.text || 'Official Document',
          href: item.href || pageUrl,
          kind: activeSubpage.toLowerCase().includes('admission') ? 'Brochure' : isMagazine ? 'Magazine' : 'Newsletter',
        }
      })
    }

    const tableRows = rawContentItems.find((item) => item.type === 'table')?.rows || []
    const getStr = (val: any): string => {
      if (!val) return '';
      if (typeof val === 'string') return val;
      return val.text || '';
    };
    return tableRows
      .slice(1)
      .filter((row) => row.length >= 2)
      .map((row, index) => {
        const year = getStr(row[0]) || 'PDF'
        const title = row.slice(1).map(getStr).join(' ').trim() || 'Open PDF'
        return {
          year,
          title,
          href: pageUrl,
          kind: activeSubpage.toLowerCase().includes('admission') ? 'Brochure' : index % 2 === 0 ? 'Magazine' : 'Newsletter',
        }
      })
  })()

  const isPEOTab = /peo|pos|pso|program educational|program outcome|program specific/i.test(activeSubpage)

  const renderSubSection = () => {
    const props = {
      deptCode,
      sectionName: activeSubpage,
      content: textItems,
      pageUrl
    }

    if (activeSubpage.toLowerCase().includes('peo')) {
      return <PEOSection content={rawContentItems} />
    }
    if (activeSubpage.toLowerCase().includes('vision') || activeSubpage.toLowerCase().includes('mission')) {
      return <VisionMissionSection {...props} />
    }
    if (activeSubpage.toLowerCase().includes('about')) {
      return <AboutSection {...props} />
    }
    if (activeSubpage.toLowerCase().includes('facilit') || activeSubpage.toLowerCase().includes('lab')) {
      return <FacilitiesSection {...props} />
    }
    if (activeSubpage.toLowerCase().includes('overview') || activeSubpage.toLowerCase().includes('read more')) {
      return <OverviewSection {...props} />
    }
    return <DefaultSection {...props} />
  }

  const accentColor = getDeptAccentColor(deptCode)
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [activeSubpage])

  const mainRef = useRef<HTMLElement>(null)
  const deptName = getDeptName(deptCode)

  return (
    <div className="dept-view-container">
            {/* Left Sidebar */}
      <DeptSidebar
        activeSubpage={activeSubpage}
        setActiveSubpage={setActiveSubpage}
        subpageKeys={subpageKeys}
      />

      {/* Right Scrollable Content Viewport */}
      <main ref={mainRef} className="dept-main-content">
        {/* Background Watermark */}
        <Atom className="dept-watermark" />

        <header className="dept-content-header">
          <div className="dept-eyebrow">
            DEPARTMENT OF {deptName.toUpperCase().replace('&', 'AND')}
          </div>
          <h1 className="dept-title">{activeSubpage}</h1>
          {isAuthenticated && (
            <button
              onClick={() => setShowEditModal(true)}
              style={{
                background: 'rgba(140, 98, 57, 0.1)',
                border: '1px solid rgba(140, 98, 57, 0.25)',
                borderRadius: '20px',
                padding: '6px 14px',
                color: '#8c6239',
                fontWeight: 700,
                fontSize: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                margin: '10px auto'
              }}
            >
              <Edit size={14} /> Edit Subpage Content
            </button>
          )}
          <div className="dept-header-divider">
            <GraduationCap size={20} />
          </div>
        </header>

        <div className="dept-content-body">
          {pdfAttachmentCards.length > 0 && (
            <section className="detail-pdf-section" aria-label={`${activeSubpage} pdf attachments`} style={{ marginBottom: '25px' }}>
              <div className="detail-pdf-grid">
                {pdfAttachmentCards.map((attachment, index) => (
                  <a
                    key={`${attachment.year}-${attachment.title}-${index}`}
                    href={attachment.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="detail-pdf-card"
                    style={{ border: '1px solid #e6dec9', background: '#FFFDFB' }}
                  >
                    <FileText size={26} style={{ color: '#8c6239' }} />
                    <div>
                      <strong style={{ color: '#29160a' }}>{attachment.title}</strong>
                      <span style={{ color: '#8c6239' }}>{attachment.year} {attachment.kind}</span>
                    </div>
                    <ExternalLink size={14} style={{ color: '#8c6239' }} />
                  </a>
                ))}
              </div>
            </section>
          )}

          {showGalleryEmptyState && (
            <div 
              className="detail-image-placeholder-container" 
              style={{ 
                margin: '20px 0', 
                padding: '30px', 
                border: '2px dashed #e2e8f0', 
                borderRadius: '12px', 
                background: '#f8fafc', 
                color: '#64748b', 
                textAlign: 'center' 
              }}
            >
              <span style={{ fontWeight: '600', display: 'block', fontSize: '15px' }}>
                Department gallery images will be updated soon
              </span>
            </div>
          )}

          {false && !showGalleryEmptyState && galleryImages.length > 0 && !isFacultyProfilePage && (
            <section className="detail-image-gallery" aria-label={`${activeSubpage} gallery`}>
              <div className="detail-image-gallery__lead">
                <div className="detail-image-gallery__tag">Official Gallery</div>
                <h2>{activeSubpage}</h2>
                <p>Images are pulled from the local scraped image set and arranged to match the page content.</p>
              </div>
              <div className="detail-image-grid">
                {galleryImages.map((item, index) => {
                  const filename = getFileName(item.src)
                  const imgType = filename.includes('lab') ? 'lab' : filename.includes('award') ? 'award' : 'event'
                  return (
                    <React.Fragment key={`${item.src}-${index}`}>
                      {/* IMG SOURCE: ${filename} | TYPE: ${imgType} | DEPT: ${deptCode.toUpperCase()} | VERIFIED: yes */}
                      <div style={{ display: 'none' }} dangerouslySetInnerHTML={{ __html: `<!-- IMG SOURCE: ${filename} | TYPE: ${imgType} | DEPT: ${deptCode.toUpperCase()} | VERIFIED: yes -->` }} />
                      <figure className={`detail-image-card ${index === 0 ? 'featured' : ''}`} style={{ overflow: 'visible', background: 'transparent' }}>
                        <TiltedCard
                          imageSrc={item.localSrc || ''}
                          altText={item.alt || `${activeSubpage} image ${index + 1}`}
                          containerHeight="100%"
                          containerWidth="100%"
                          imageHeight="100%"
                          imageWidth="100%"
                          rotateAmplitude={12}
                          scaleOnHover={1.04}
                          showTooltip={false}
                        />
                      </figure>
                    </React.Fragment>
                  )
                })}
              </div>
            </section>
          )}

          {activeSubpage === 'About the Department' ? (
            <div className="dept-card-container">
              <div className="dept-timeline">
                <div className="dept-timeline-line" />
                {textItems.filter(item => item.type === 'paragraph').map((item, idx) => (
                  <React.Fragment key={idx}>
                    {idx > 0 && <div className="dept-divider-dashed" />}
                    <div className="dept-timeline-item">
                      <div className={`dept-timeline-badge ${idx === 0 ? 'dark' : 'light'}`}>
                        {idx === 0 ? <Atom size={20} /> : <Users size={18} />}
                      </div>
                      <div className="dept-timeline-content">
                        {idx === 0 && <h3 className="dept-section-title">{deptName.toUpperCase()} DEPARTMENT</h3>}
                        <p className="dept-paragraph">{item.text}</p>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div>

              {/* Bottom highlights grid */}
              <div className="dept-highlight-grid">
                <div className="dept-highlight-card">
                  <div className="dept-highlight-icon">
                    <GraduationCap size={16} />
                  </div>
                  <div className="dept-highlight-info">
                    <span className="dept-highlight-title">Quality Education</span>
                    <span className="dept-highlight-desc">Strong foundation in theoretical and practical concepts.</span>
                  </div>
                </div>

                <div className="dept-highlight-card">
                  <div className="dept-highlight-icon">
                    <FlaskConical size={16} />
                  </div>
                  <div className="dept-highlight-info">
                    <span className="dept-highlight-title">Modern Facilities</span>
                    <span className="dept-highlight-desc">Well-equipped labs with advanced instruments and resources.</span>
                  </div>
                </div>

                <div className="dept-highlight-card">
                  <div className="dept-highlight-icon">
                    <Users size={16} />
                  </div>
                  <div className="dept-highlight-info">
                    <span className="dept-highlight-title">Expert Faculty</span>
                    <span className="dept-highlight-desc">Experienced faculty committed to academic excellence.</span>
                  </div>
                </div>

                <div className="dept-highlight-card">
                  <div className="dept-highlight-icon">
                    <Lightbulb size={16} />
                  </div>
                  <div className="dept-highlight-info">
                    <span className="dept-highlight-title">Innovation & Research</span>
                    <span className="dept-highlight-desc">Encouraging research, innovation and critical thinking.</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="dept-card-container">
              {isFacultyProfilePage && facultyMembers.length > 0 && (
                <FacultySection
                  facultyMembers={facultyMembers}
                  deptName={deptName}
                  deptCode={deptCode}
                  accentColor="#8c6239"
                  subpageUrl={subpageData?.url}
                />
              )}
              {renderSubSection()}
            </div>
          )}

          {filteredContentItems.length === 0 && facultyMembers.length === 0 && (
            <div className="detail-empty">
              <p>No content block found. Click the button above to visit the live department site.</p>
            </div>
          )}
        </div>
      </main>
      
      {/* Right Sidebar for Widgets */}
      <DeptWidgetsSidebar />
      
    {showEditModal && (
        <EditDeptSubpageModal
          deptCode={deptCode}
          subpageKey={activeSubpage}
          onClose={() => setShowEditModal(false)}
        />
      )}
      </div>
  )
}

export default CsecDept
