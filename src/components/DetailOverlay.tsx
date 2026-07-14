import { X, Edit, GraduationCap, Users, Briefcase, Cpu, TrendingUp, Quote, Database, Terminal, LayoutGrid, CreditCard, LifeBuoy, ArrowRight, Calendar, Wind, Building2, Shirt, BookOpen, School, Award, ShieldCheck, Heart, MapPin, Warehouse, ClipboardList, Phone, Mail, Clock, ExternalLink, FileText, type LucideIcon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { resolveLocalScrapedImage } from '../utils/localScrapedImages'
import TiltedCard from './TiltedCard'
import { useCMS } from './CMSContext'
import { useState, useEffect, useRef } from 'react'
import { EditFlatPageModal } from './CMSModals'

// Import isolated department components
import CseDept from './departments/CseDept'
import EceDept from './departments/EceDept'
import EeeDept from './departments/EeeDept'
import MechDept from './departments/MechDept'
import CivilDept from './departments/CivilDept'
import AimlDept from './departments/AimlDept'
import AidsDept from './departments/AidsDept'
import CsbsDept from './departments/CsbsDept'
import ItDept from './departments/ItDept'
import CsecDept from './departments/CsecDept'
import PhysicsDept from './departments/PhysicsDept'
import ChemistryDept from './departments/ChemistryDept'
import MathsDept from './departments/MathsDept'
import EnglishDept from './departments/EnglishDept'
import IiicPage from './IiicPage'
import IdeaLabPage from './IdeaLabPage'

interface ContentItem {
  type: string
  text?: string
  level?: string
  items?: string[]
  rows?: (string | { text: string; href: string })[][]
  src?: string
  alt?: string
  href?: string
  documents?: { title: string; href: string }[]
}

interface PageData {
  key: string
  title: string
  url: string
  content: ContentItem[]
}

interface DetailOverlayProps {
  pageKey: string | null
  onClose: () => void
  onNavigate?: (key: string) => void
}

const sidebarSections: Record<string, { prefix: string; navLabel: string; icon: LucideIcon; links: { label: string; key: string; isHeader?: boolean }[] }> = {
  activities: {
    prefix: 'activities-',
    navLabel: 'Activities',
    icon: Award,
    links: [
      { label: 'Awards & Achievements', key: 'activities-awards' },
      { label: 'Professional Societies', key: 'activities-societies' },
      { label: 'Clubs & NSS', key: 'activities-clubs-nss' },
      { label: 'EDC/NISP', key: 'activities-edc' },
      { label: 'College Magazine', key: 'activities-magazine' },
      { label: 'Weekly News Letter', key: 'activities-newsletter' },
      { label: 'IITM PALS', key: 'activities-iitm-pals' },
      { label: 'NCC', key: 'activities-ncc' },
      { label: 'Extension Activities', key: 'activities-extension' },
      { label: 'RIT-RedHat Academy', key: 'activities-redhat' },
      { label: 'Higher Education Details', key: 'activities-higher-education' },
      { label: 'OER Resources', key: 'activities-oer' },
    ],
  },
  research: {
    prefix: 'research-',
    navLabel: 'Research',
    icon: Cpu,
    links: [
      { label: 'Overview', key: 'research-overview' },
      { label: 'RC Policy', key: 'research-policy' },
      { label: 'PhD Awarded', key: 'research-phd-awarded' },
      { label: 'Publications', key: 'research-publications' },
      { label: 'Sponsored Projects', key: 'research-sponsored-projects' },
      { label: 'IPR', key: 'research-ipr' },
      { label: 'AU Recognized Supervisors', key: 'research-supervisors' },
      { label: 'Consultancy', key: 'research-consultancy' },
      { label: 'Research Incentives', key: 'research-incentives' },
      { label: 'Research Activities', key: 'research-activities' },
    ],
  },
  placements: {
    prefix: 'placements-',
    navLabel: 'Placements',
    icon: Briefcase,
    links: [
      { label: 'Training & Placement Centre', key: 'placements-training-centre' },
      { label: 'Objective', key: 'placements-objective' },
      { label: 'Placement Policy', key: 'placements-policy' },
      { label: 'Placement Procedure', key: 'placements-procedure' },
      { label: 'Hiring Process', key: 'placements-hiring-process' },
      { label: 'Placement Training', key: 'placements-training' },
      { label: 'Placement List', key: 'placements-list-header', isHeader: true },
      { label: '2024-2025', key: 'placements-list' },
      { label: '2023-2024', key: 'placements-list-23-24' },
      { label: '2022-2023', key: 'placements-list-22-23' },
      { label: '2021-2022', key: 'placements-list-21-22' },
      { label: '2020-2021', key: 'placements-list-20-21' },
      { label: '2019-2020', key: 'placements-list-19-20' },
      { label: '2018-2019', key: 'placements-list-18-19' },
      { label: '2017-2018', key: 'placements-list-17-18' },
      { label: '2016-2017', key: 'placements-list-16-17' },
      { label: 'Ideathon', key: 'placements-ideathon-header', isHeader: true },
      { label: 'Cisco Ideathon 2022', key: 'placements-ideathon' },
      { label: 'Placement Prospectus', key: 'placements-prospectus' },
      { label: "Placement MoU's", key: 'placements-mous' },
    ],
  },
}

const groupContentBlocks = (items: ContentItem[]): ContentItem[] => {
  const result: ContentItem[] = []
  let i = 0

  while (i < items.length) {
    const current = items[i]

    if (current.type === 'document' && current.href) {
      const docsList: { title: string; href: string }[] = []
      
      while (i < items.length) {
        const item = items[i]
        if (item.type === 'document' && item.href) {
          const nextItem = items[i + 1]
          let title = item.text || 'View Document'
          if (nextItem && nextItem.type === 'paragraph' && nextItem.text) {
            title = nextItem.text
            i += 2
          } else {
            i += 1
          }
          docsList.push({
            title: title.replace(/^"|"$/g, ''),
            href: item.href
          })
        } else {
          break
        }
      }

      result.push({
        type: 'document-group',
        documents: docsList
      })
    } else {
      result.push(current)
      i++
    }
  }

  return result
}

const messagePageMetadata: Record<string, { name: string; role: string }> = {
  'about-founder-chairman-message': {
    name: 'Shri P.R. Ramasubrahmaneya Rajha',
    role: 'Founder Chairman'
  },
  'about-chairman-message': {
    name: 'Shri P.R. Venketrama Raja',
    role: 'Chairman'
  },
  'about-director-message': {
    name: 'Dr. L. Ganesan',
    role: 'Director'
  },
  'about-principal-message': {
    name: 'Dr. S. Rajakarunakaran',
    role: 'Principal'
  }
}

export default function DetailOverlay({ pageKey, onClose, onNavigate }: DetailOverlayProps) {
  const { flatPages, isAuthenticated } = useCMS()
  const [showEditModal, setShowEditModal] = useState(false)
  const [trustsFilter, setTrustsFilter] = useState<'all' | 'technical' | 'secondary' | 'primary'>('all')
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {}
    if (pageKey) {
      if (pageKey.startsWith('placements-list-') || pageKey === 'placements-list') {
        initial['placements-list-header'] = true
      }
      if (pageKey === 'placements-ideathon') {
        initial['placements-ideathon-header'] = true
      }
      if (pageKey.startsWith('research-academic-')) {
        initial['research-academic'] = true
      }
      if (pageKey === 'research-sponsored-projects') {
        initial['research-funded-research'] = true
      }
      if (pageKey === 'research-supervisors') {
        initial['research-au-recognized-research-centres'] = true
      }
    }
    return initial
  })

  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (pageKey) {
      document.body.style.overflow = 'hidden'
      if (overlayRef.current) {
        overlayRef.current.scrollTo({ top: 0, behavior: 'smooth' })
      }
      
      const isPlacementsList = pageKey.startsWith('placements-list-') || pageKey === 'placements-list'
      if (isPlacementsList) {
        setExpandedSections(prev => ({ ...prev, 'placements-list-header': true }))
      }
      if (pageKey === 'placements-ideathon') {
        setExpandedSections(prev => ({ ...prev, 'placements-ideathon-header': true }))
      }
      if (pageKey.startsWith('research-academic-')) {
        setExpandedSections(prev => ({ ...prev, 'research-academic': true }))
      }
      if (pageKey === 'research-sponsored-projects') {
        setExpandedSections(prev => ({ ...prev, 'research-funded-research': true }))
      }
      if (pageKey === 'research-supervisors') {
        setExpandedSections(prev => ({ ...prev, 'research-au-recognized-research-centres': true }))
      }
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [pageKey])

  const isDept = pageKey?.startsWith('departments-')
  const deptCode = pageKey?.replace('departments-', '') || ''
  const isIiic = !isDept && pageKey?.startsWith('iic-')
  const isIdeaLab = !isDept && pageKey?.startsWith('idealab-')
  const sidebarSection = !isDept && !isIiic && !isIdeaLab && pageKey
    ? Object.values(sidebarSections).find((section) => pageKey.startsWith(section.prefix))
    : undefined
  const isSidebarStyledPage = Boolean(sidebarSection)
  const isResearch = pageKey?.startsWith('research-') ?? false

  // Get flat page data if this is not a department
  const flatPage = pageKey && !isDept && !isIiic && !isIdeaLab ? (flatPages as Record<string, PageData>)[pageKey] : null

  const pageTitle = flatPage?.title || ''

  const contentItems = flatPage?.content || []

  const isPdfIconImage = (src?: string) => /pdf-icon|new-pdf-icon|pdf-icon4/i.test(src || '')

  const decodeEntities = (text: string) => text
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&copy;/g, '©')
    .trim()
  
  const textItems = groupContentBlocks(contentItems.filter((item) => item.type !== 'image'))
  const galleryImages = contentItems
    .filter((item): item is ContentItem & { type: 'image'; src: string } => item.type === 'image' && Boolean(item.src) && !isPdfIconImage(item.src))
    .map((item) => ({
      ...item,
      localSrc: resolveLocalScrapedImage(item.src),
    }))
    .filter((item) => Boolean(item.localSrc))

  const originalImageCount = contentItems.filter((item) => item.type === 'image' && !isPdfIconImage(item.src)).length
  const showNoImagePlaceholder = originalImageCount > 0 && galleryImages.length === 0

  const isMessagePage = pageKey ? [
    'about-founder-chairman-message',
    'about-chairman-message',
    'about-director-message',
    'about-principal-message'
  ].includes(pageKey) : false

  // Renders flat page content blocks (lists, paragraphs, headings, tables, etc.)
  const renderContentBlocks = (items: ContentItem[]) => {
    if (!items || items.length === 0) return null

    return items.map((item, index) => {
      switch (item.type) {
        case 'heading': {
          const validHeadingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
          const HeadingTag = (validHeadingLevels.includes(item.level || '') ? item.level : 'h3') as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
          const isNIRF = item.text?.includes('NIRF Publications Claim')
          return (
            <HeadingTag 
              key={index} 
              className="detail-content-heading"
              style={isNIRF ? { color: '#ef4444', textAlign: 'center', marginTop: '2.5rem', marginBottom: '1.5rem', fontSize: '1.4rem', fontWeight: 700 } : {}}
            >
              {item.text ? decodeEntities(item.text) : item.text}
            </HeadingTag>
          )
        }
        case 'paragraph':
          return (
            <p key={index} className="detail-content-paragraph">
              {item.text ? decodeEntities(item.text) : item.text}
            </p>
          )
        case 'list': {
          const isPlainList = isSidebarStyledPage || pageKey?.startsWith('placements-')
          return (
            <ul key={index} className={`detail-content-list ${isPlainList ? 'detail-content-list--plain' : ''}`}>
              {item.items?.map((li, idx) => (
                <li key={idx}>{decodeEntities(li)}</li>
              ))}
            </ul>
          )
        }
        case 'table': {
          const rows = item.rows || []
          const isResearchOrPlacements = isResearch || (pageKey?.startsWith('placements-') ?? false)
          const isBlankCell = (cell: string | { href: string; text: string } | undefined) =>
            typeof cell === 'string' && cell.replace(/&amp;nbsp;|&nbsp;/gi, '').trim() === ''
          const renderCell = (cell: string | { href: string; text: string }, cIdx: number, asHeader: boolean) => {
            if (typeof cell === 'object' && cell !== null && 'href' in cell) {
              const isPdf = cell.href.toLowerCase().endsWith('.pdf')
              const isXlsx = cell.href.toLowerCase().endsWith('.xlsx')
              
              const accentColor = isXlsx ? '#10b981' : '#ef4444'
              const bgColor = isXlsx ? 'rgba(16, 185, 129, 0.08)' : 'rgba(239, 68, 68, 0.08)'
              const bgHoverColor = isXlsx ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)'
              const borderColor = isXlsx ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)'

              const content = (isPdf || isXlsx) ? (
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: accentColor, fontWeight: 600 }}>
                  <FileText size={16} />
                  <span>{decodeEntities(cell.text)}</span>
                </span>
              ) : (
                decodeEntities(cell.text)
              )

              return asHeader ? (
                <th key={cIdx}>
                  <a href={cell.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                    {content}
                  </a>
                </th>
              ) : (
                <td key={cIdx} style={{ textAlign: 'center' }}>
                  <a 
                    href={cell.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      gap: '6px', 
                      padding: '6px 12px', 
                      backgroundColor: bgColor, 
                      border: `1px solid ${borderColor}`, 
                      borderRadius: '6px', 
                      color: accentColor, 
                      textDecoration: 'none', 
                      fontSize: '13px', 
                      fontWeight: 600,
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = bgHoverColor
                      e.currentTarget.style.transform = 'translateY(-1px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = bgColor
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    {content}
                  </a>
                </td>
              )
            }
            return asHeader ? <th key={cIdx}>{typeof cell === 'string' ? decodeEntities(cell) : cell as React.ReactNode}</th> : <td key={cIdx}>{typeof cell === 'string' ? decodeEntities(cell) : cell as React.ReactNode}</td>
          }

          // A table made of nothing but bare 4-digit year labels (e.g. a
          // "Consolidated Year Wise Publication Details" list) isn't really
          // tabular data - render it as a wrapping grid of pill badges instead.
          const isYearCell = (cell: any) => {
            if (typeof cell === 'string') return /^\d{4}$/.test(cell.trim())
            if (typeof cell === 'object' && cell !== null && 'text' in cell) {
              return /^\d{4}$/.test(String(cell.text).trim())
            }
            return false
          }
          const isYearBadgeList = rows.length > 0 && rows.every((row) =>
            row.every(isYearCell)
          )
          if (isYearBadgeList) {
            const cells = rows.flat()
            return (
              <div key={index} className="detail-year-badge-grid">
                {cells.map((cell, yIdx) => {
                  const isObj = typeof cell === 'object' && cell !== null && 'href' in cell
                  const text = isObj ? cell.text : cell as string
                  const className = `detail-year-badge${yIdx % 2 === 0 ? ' detail-year-badge--alt' : ''}`
                  
                  if (isObj) {
                    const isXlsx = cell.href.toLowerCase().endsWith('.xlsx')
                    const accentColor = isXlsx ? '#10b981' : '#ef4444'
                    const borderCol = isXlsx ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)'
                    const bgCol = isXlsx 
                      ? (yIdx % 2 === 0 ? 'rgba(16, 185, 129, 0.04)' : 'rgba(16, 185, 129, 0.08)')
                      : (yIdx % 2 === 0 ? 'rgba(239, 68, 68, 0.04)' : 'rgba(239, 68, 68, 0.08)')
                    const bgHoverCol = isXlsx ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)'
                    const shadowCol = isXlsx ? 'rgba(16, 185, 129, 0.12)' : 'rgba(239, 68, 68, 0.12)'

                    return (
                      <a 
                        key={yIdx} 
                        href={cell.href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={className}
                        style={{ 
                          display: 'inline-flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          gap: '6px',
                          textDecoration: 'none', 
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                          padding: '8px 16px',
                          border: `1px solid ${borderCol}`,
                          backgroundColor: bgCol
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-2px)'
                          e.currentTarget.style.boxShadow = `0 4px 12px ${shadowCol}`
                          e.currentTarget.style.backgroundColor = bgHoverCol
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)'
                          e.currentTarget.style.boxShadow = 'none'
                          e.currentTarget.style.backgroundColor = bgCol
                        }}
                      >
                        <FileText size={14} style={{ color: accentColor }} />
                        <span style={{ color: accentColor, fontWeight: 600 }}>{text}</span>
                      </a>
                    )
                  }
                  
                  return (
                    <span key={yIdx} className={className}>
                      {text}
                    </span>
                  )
                })}
              </div>
            )
          }

          // A table with a 3-cell header row (Label | blank spacer | Label)
          // and 5-cell data rows (metric | value | blank spacer | metric | value)
          // is really two independent tables placed side by side (e.g. Scopus
          // vs Google Scholar stats) - split and render them as such.
          const isSideBySide = rows.length >= 2 && rows[0].length === 3 && isBlankCell(rows[0][1])
            && rows.slice(1).every((row) => row.length === 5 && isBlankCell(row[2]))
          if (isSideBySide) {
            const leftRows = rows.slice(1).map((row) => [row[0], row[1]])
            const rightRows = rows.slice(1).map((row) => [row[3], row[4]])
            const renderSideTable = (label: string | { href: string; text: string }, dataRows: (string | { href: string; text: string })[][], key: string) => (
              <div key={key} className={`detail-table-wrapper${isResearchOrPlacements ? ' civil-rnd-table-wrapper' : ''}`}>
                <table className={`detail-content-table${isResearchOrPlacements ? ' civil-rnd-table' : ''}`}>
                  <tbody>
                    <tr className="table-header">
                      <th colSpan={2}>{typeof label === 'string' ? decodeEntities(label) : <a href={label.href} target="_blank" rel="noopener noreferrer">{decodeEntities(label.text)}</a>}</th>
                    </tr>
                    {dataRows.map((row, rIdx) => (
                      <tr key={rIdx}>
                        {row.map((cell, cIdx) => renderCell(cell, cIdx, false))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
            return (
              <div key={index} className="detail-side-by-side-tables">
                {renderSideTable(rows[0][0], leftRows, 'left')}
                {renderSideTable(rows[0][2], rightRows, 'right')}
              </div>
            )
          }

          // Some tables have a two-tier header: row 0 has grouping headers
          // (e.g. "Ph.D. Completed" spanning 3 sub-columns) and row 1 has the
          // sub-column labels (e.g. "Male", "Female", "Total"). Detect this by
          // checking the row lengths strictly increase into the first data row.
          const isGroupedHeader = rows.length >= 3 && rows[0].length < rows[1].length && rows[1].length < rows[2].length
          const dataStartIdx = isGroupedHeader ? 2 : 1

          let groupHeaderRow: React.ReactNode = null
          let subHeaderRow: React.ReactNode = null
          if (isGroupedHeader) {
            const leadCols = rows[2].length - rows[1].length
            const groupCount = rows[0].length - leadCols
            const spanEach = groupCount > 0 ? rows[1].length / groupCount : 0
            groupHeaderRow = (
              <tr className="table-header">
                {rows[0].map((cell, cIdx) => (
                  <th key={cIdx} rowSpan={cIdx < leadCols ? 2 : 1} colSpan={cIdx >= leadCols && spanEach > 1 ? spanEach : undefined}>
                    {typeof cell === 'string' ? decodeEntities(cell) : <a href={cell.href} target="_blank" rel="noopener noreferrer">{decodeEntities(cell.text)}</a>}
                  </th>
                ))}
              </tr>
            )
            subHeaderRow = (
              <tr className="table-header">
                {rows[1].map((cell, cIdx) => renderCell(cell, cIdx, true))}
              </tr>
            )
          }

          return (
            <div key={index} className={`detail-table-wrapper${isResearchOrPlacements ? ' civil-rnd-table-wrapper' : ''}`}>
              <table className={`detail-content-table${isResearchOrPlacements ? ' civil-rnd-table' : ''}`}>
                <tbody>
                  {isGroupedHeader ? (
                    <>
                      {groupHeaderRow}
                      {subHeaderRow}
                    </>
                  ) : (
                    <tr className="table-header">
                      {rows[0]?.map((cell, cIdx) => renderCell(cell, cIdx, true))}
                    </tr>
                  )}
                  {rows.slice(dataStartIdx).map((row, rIdx) => (
                    <tr key={rIdx}>
                      {row.map((cell, cIdx) => renderCell(cell, cIdx, false))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        }
        case 'document':
          if (!item.href) return null
          return (
            <div key={index} className="detail-document-link-wrapper" style={{ margin: '2rem 0', display: 'flex', justifyContent: 'center' }}>
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
          )
        case 'document-group': {
          const group = item as { type: 'document-group'; documents: { title: string; href: string }[] }
          return (
            <div key={index} className="detail-pdf-section" style={{ marginTop: '8px', marginBottom: '8px' }}>
              <div className="detail-pdf-grid">
                {group.documents.map((doc, docIdx) => (
                  <a
                    key={docIdx}
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="detail-pdf-card"
                  >
                    <svg className="w-6 h-6 text-pink-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: '24px', height: '24px', marginRight: '6px', color: '#ec0a78' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.95rem', fontWeight: '700', color: '#061846', marginBottom: '2px' }}>
                        {doc.title}
                      </strong>
                      <span style={{ fontSize: '0.8rem', color: '#64748b' }}>PDF Document</span>
                    </div>
                    <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: '14px', height: '14px', marginLeft: 'auto', color: '#94a3b8' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          )
        }
        case 'image':
          return null
        default:
          return null
      }
    })
  }

  // Renders content for Activities sidebar pages: paragraphs stay paired with the images
  // that follow them (as on the source site), while headings/lists/tables/documents keep
  // their normal rendering. Avoids the generic renderer's separate 6-image gallery cap,
  // which otherwise splits images away from the paragraph they belong to.
  const renderActivityContent = (items: ContentItem[]) => {
    type CardBlock = { kind: 'card'; paragraphs: string[]; images: { src: string; alt?: string }[] }
    type OtherBlock = { kind: 'other'; item: ContentItem }
    const blocks: (CardBlock | OtherBlock)[] = []
    let current: CardBlock | null = null
    let i = 0

    while (i < items.length) {
      const it = items[i]
      if (it.type === 'paragraph' && it.text) {
        current = { kind: 'card', paragraphs: [it.text], images: [] }
        blocks.push(current)
        i++
      } else if (it.type === 'image' && it.src && !isPdfIconImage(it.src)) {
        const localSrc = resolveLocalScrapedImage(it.src)
        i++
        if (!localSrc) continue
        if (!current) {
          current = { kind: 'card', paragraphs: [], images: [] }
          blocks.push(current)
        }
        current.images.push({ src: localSrc, alt: it.alt })
      } else if (it.type === 'document' && it.href) {
        const docsList: { title: string; href: string }[] = []
        while (i < items.length) {
          const item = items[i]
          if (item.type === 'document' && item.href) {
            const nextItem = items[i + 1]
            let title = item.text || 'View Document'
            if (nextItem && nextItem.type === 'paragraph' && nextItem.text) {
              title = nextItem.text
              i += 2
            } else {
              i += 1
            }
            docsList.push({ title: title.replace(/^"|"$/g, ''), href: item.href })
          } else {
            break
          }
        }
        blocks.push({ kind: 'other', item: { type: 'document-group', documents: docsList } as ContentItem })
        current = null
      } else {
        blocks.push({ kind: 'other', item: it })
        current = null
        i++
      }
    }

    return blocks.map((block, index) => {
      if (block.kind === 'other') {
        if (block.item.type === 'heading') {
          const validHeadingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
          const HeadingTag = (validHeadingLevels.includes(block.item.level || '') ? block.item.level : 'h3') as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
          const isPlacements = pageKey?.startsWith('placements-') ?? false
          const isPlain = isResearch || isPlacements
          return (
            <HeadingTag key={index} className={`detail-awards-heading${isPlain ? ' detail-awards-heading--plain' : ''}`}>
              {block.item.text ? decodeEntities(block.item.text) : block.item.text}
            </HeadingTag>
          )
        }
        return <div key={index}>{renderContentBlocks([block.item])}</div>
      }
      if (block.paragraphs.length === 0 && block.images.length === 0) return null
      return (
        <div key={index} className="detail-awards-entry">
          {block.paragraphs.map((p, pIdx) => (
            <p key={pIdx} className="detail-awards-text">{decodeEntities(p)}</p>
          ))}
          {block.images.length > 0 && (
            <div className={`detail-awards-card-images${block.images.length === 1 ? ' detail-awards-card-images--single' : isResearch ? ' detail-awards-card-images--two-col' : ''}`}>
              {block.images.map((img, imgIdx) => (
                <figure key={imgIdx}>
                  <img src={img.src} alt={img.alt || `${pageTitle} image ${imgIdx + 1}`} />
                </figure>
              ))}
            </div>
          )}
        </div>
      )
    })
  }

  return (
    <AnimatePresence>
      {pageKey && (
        <motion.div
          className="detail-overlay-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            ref={overlayRef}
            className={`detail-overlay-content ${isDept || isIiic || isIdeaLab || isSidebarStyledPage ? 'dept-layout' : ''}`}
            initial={{ y: 50, scale: 0.95 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 50, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button className="detail-close-btn" onClick={onClose} aria-label="Close page details">
              <X />
            </button>

            {/* Layout for Non-Department flat pages */}
            {!isDept && !isIiic && !isIdeaLab && (
              <div className={isSidebarStyledPage ? 'dept-view-container' : undefined}>
                {sidebarSection && (
                  <aside className="dept-sidebar">
                    <div className="dept-sidebar-header">
                      <sidebarSection.icon size={18} />
                      <span>{sidebarSection.navLabel}</span>
                    </div>
                    <nav className="dept-sidebar-nav">
                      {(() => {
                        const rendered: React.ReactNode[] = []
                        let i = 0
                        const links = sidebarSection.links

                        while (i < links.length) {
                          const item = links[i]
                          
                          if (item.isHeader) {
                            const headerItem = item
                            const subItems: typeof links = []
                            i++
                            while (i < links.length) {
                              const nextItem = links[i]
                              const isSub = nextItem.key.startsWith('placements-list-') || 
                                            nextItem.key === 'placements-list' || 
                                            nextItem.key === 'placements-ideathon' ||
                                            (headerItem.key === 'research-academic' && nextItem.key.startsWith('research-academic-')) ||
                                            (headerItem.key === 'research-funded-research' && nextItem.key === 'research-sponsored-projects') ||
                                            (headerItem.key === 'research-au-recognized-research-centres' && nextItem.key === 'research-supervisors')
                              if (isSub) {
                                subItems.push(nextItem)
                                i++
                              } else {
                                break
                              }
                            }
                            
                            const isExpanded = expandedSections[headerItem.key] || false
                            const hasActiveChild = subItems.some(subItem => pageKey === subItem.key)
                            
                            rendered.push(
                              <div
                                key={headerItem.key}
                                onMouseEnter={() => setExpandedSections(prev => ({ ...prev, [headerItem.key]: true }))}
                                onMouseLeave={() => setExpandedSections(prev => ({ ...prev, [headerItem.key]: false }))}
                                style={{ display: 'flex', flexDirection: 'column' }}
                              >
                                <button 
                                  type="button"
                                  className="dept-sidebar-link"
                                  style={{ 
                                    cursor: 'default', 
                                    pointerEvents: 'none',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '100%',
                                    color: hasActiveChild ? '#246bfe' : undefined,
                                    fontWeight: hasActiveChild ? 750 : undefined
                                  }}
                                >
                                  <span className="bullet">»</span>
                                  <span className="label-text" style={{ flexGrow: 1 }}>{headerItem.label}</span>
                                  <span className="caret" style={{ 
                                    fontSize: '10px', 
                                    marginLeft: '8px', 
                                    opacity: 0.7,
                                    color: 'inherit'
                                  }}>▼</span>
                                </button>
                                <div className={`dept-sidebar-sublinks ${isExpanded ? 'dept-sidebar-sublinks--expanded' : ''}`}>
                                  {subItems.map((subItem) => (
                                    <button
                                      key={subItem.key}
                                      className={`dept-sidebar-link ${pageKey === subItem.key ? 'active' : ''}`}
                                      onClick={() => onNavigate?.(subItem.key)}
                                      style={{ paddingLeft: '32px', fontSize: '13.5px' }}
                                    >
                                      <span className="bullet">»</span>
                                      <span className="label-text">{subItem.label}</span>
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )
                          } else {
                            rendered.push(
                              <button
                                key={item.key}
                                className={`dept-sidebar-link ${pageKey === item.key ? 'active' : ''}`}
                                onClick={() => {
                                  onNavigate?.(item.key)
                                  setExpandedSections({})
                                }}
                              >
                                <span className="bullet">»</span>
                                <span className="label-text">{item.label}</span>
                              </button>
                            )
                            i++
                          }
                        }

                        return rendered
                      })()}
                    </nav>
                  </aside>
                )}
              <div className={isSidebarStyledPage ? 'dept-main-content' : undefined}>
                <header className={isSidebarStyledPage ? 'dept-content-header' : 'detail-header'}>
                  <div className="detail-eyebrow">
                    {pageKey?.split('-')[0].toUpperCase()} / {pageKey?.split('-').slice(1).join(' ').toUpperCase()}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', width: '100%' }}>
                    <h1 style={{ margin: 0 }}>{pageTitle}</h1>
                    {isAuthenticated && (
                      <button
                        onClick={() => setShowEditModal(true)}
                        style={{
                          background: 'rgba(236, 10, 120, 0.1)',
                          border: '1px solid rgba(236, 10, 120, 0.25)',
                          borderRadius: '20px',
                          padding: '6px 14px',
                          color: '#ec0a78',
                          fontWeight: 700,
                          fontSize: '12px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <Edit size={14} /> Edit Page Content
                      </button>
                    )}
                  </div>

                </header>
                <div className={isSidebarStyledPage ? 'dept-content-body' : 'detail-body detail-body--flat'}>
                  {pageKey === 'about-ramco-group' ? (
                    <div className="detail-ramco-group-layout">
                      <div className="ramco-group-hero">
                        <div className="ramco-group-badge">Founded 1938</div>
                        <h2>The Ramco Group Story</h2>
                        <p className="ramco-group-lead">
                          From a single spinning mill setup in 1938 to a USD 1 Billion diversified industrial conglomerate, Ramco has been built on a foundation of technology and quality.
                        </p>
                      </div>

                      <div className="ramco-group-columns">
                        <div className="ramco-group-history-card">
                          <div className="history-badge"><Calendar size={18} /> Our Heritage</div>
                          <p>
                            It was 1938 when reverberations of the Industrial Revolution had not yet reached the interiors of South India. Despite scarce capital and resources, <strong>Shri P.A.C. Ramasamy Raja</strong> had setup the first Spinning Mill at Rajapalayam, which later became the focal point of the Ramco Group.
                          </p>
                          <p>
                            His sharp focus on technology and quality has inspired a generation of entrepreneurs and formed the basis for the collective vision of the Group.
                          </p>
                        </div>

                        <div className="ramco-group-stewardship-card">
                          <div className="history-badge"><TrendingUp size={18} /> Expansion & Scale</div>
                          <p>
                            Under the stewardship of our Founder Chairman <strong>Shri P.R. Ramasubrahmaneya Rajha</strong>, the Ramco Group has expanded into a <strong>USD 1 Billion</strong> industrial conglomerate with international recognition for its quality products and services.
                          </p>
                          <p>
                            It continues to grow under the visionary leadership of our present Chairman <strong>Shri P.R. Venketrama Raja</strong>, maintaining its reputation as one of the most respected business houses in India.
                          </p>
                        </div>
                      </div>

                      <div className="ramco-group-sectors-section">
                        <div className="sect-title">
                          <h3>Conglomerate Footprint</h3>
                          <p>Spanning multiple core sectors of the industrial economy</p>
                        </div>
                        <div className="sectors-grid">
                          <div className="sector-card">
                            <div className="sector-icon-yarn"><Shirt size={22} /></div>
                            <h4>Cotton & Yarn</h4>
                            <p>Premium spinning mills in Rajapalayam producing cotton and synthetic yarn.</p>
                          </div>
                          <div className="sector-card">
                            <div className="sector-icon-cement"><Building2 size={22} /></div>
                            <h4>Cement</h4>
                            <p>Ramco Cements is one of the leading cement manufacturers in India.</p>
                          </div>
                          <div className="sector-card">
                            <div className="sector-icon-building"><Warehouse size={22} /></div>
                            <h4>Building Products</h4>
                            <p>Eco-friendly roofing sheets, boards, and high-quality building materials.</p>
                          </div>
                          <div className="sector-card">
                            <div className="sector-icon-software"><Cpu size={22} /></div>
                            <h4>Software Solutions</h4>
                            <p>Ramco Systems offers global cloud enterprise software (ERP, HCM, M&E).</p>
                          </div>
                          <div className="sector-card">
                            <div className="sector-icon-wind"><Wind size={22} /></div>
                            <h4>Wind Energy</h4>
                            <p>Harnessing renewable wind resources for clean corporate energy.</p>
                          </div>
                          <div className="sector-card">
                            <div className="sector-icon-education"><GraduationCap size={22} /></div>
                            <h4>Education</h4>
                            <p>Running high-caliber institutions to cultivate future-ready talents.</p>
                          </div>
                        </div>
                      </div>

                      <div className="ramco-group-support-card">
                        <Heart className="heart-icon" size={32} />
                        <div>
                          <h4>Institutional Patronage</h4>
                          <p>Ramco Institute of Technology (RIT) is fully supported and patronized by the Ramco group to create highly skilled, quality Engineers for future needs.</p>
                        </div>
                      </div>
                    </div>
                  ) : pageKey === 'about-trusts' ? (
                    <div className="detail-trusts-layout">
                      <div className="trusts-hero">
                        <h2>Trusts & Educational Institutions</h2>
                        <p>Fostering academic excellence, technical training, and social progress across generations.</p>
                      </div>

                      <div className="trusts-history-section">
                        <div className="trust-card">
                          <div className="trust-card-icon"><Award size={24} /></div>
                          <h3>P.A.C. Ramasamy Raja Education Charity Trust</h3>
                          <span className="trust-est">Established 1950</span>
                          <p>Founded by Shri P.A.C. Ramasamy Raja to establish quality secondary and technical education in South India.</p>
                        </div>
                        <div className="trust-card">
                          <div className="trust-card-icon"><Heart size={24} /></div>
                          <h3>Raja Charity Trust</h3>
                          <span className="trust-est">Established 1951</span>
                          <p>Formed to promote higher learning, technical institutes, and community development. Over 10,000 students benefit today.</p>
                        </div>
                      </div>

                      <div className="trusts-advisory-card">
                        <div className="advisory-icon"><Users size={28} /></div>
                        <div className="advisory-info">
                          <h4>Advisory Committee Leadership</h4>
                          <p>
                            Headed by <strong>Prof. M.S. Ananth</strong> (Former Director, IIT Madras), along with leading professors of IIT Madras and prominent academicians, ensuring the recruitment of top faculty and promoting advanced engineering research.
                          </p>
                        </div>
                      </div>

                      <div className="trusts-institutions-section">
                        <div className="institutions-header-row">
                          <h3>Institutions Under the Aegis of Trusts</h3>
                          <div className="institutions-tabs">
                            <button className={`tab-btn ${trustsFilter === 'all' ? 'active' : ''}`} onClick={() => setTrustsFilter('all')}>All</button>
                            <button className={`tab-btn ${trustsFilter === 'technical' ? 'active' : ''}`} onClick={() => setTrustsFilter('technical')}>Technical / Professional</button>
                            <button className={`tab-btn ${trustsFilter === 'secondary' ? 'active' : ''}`} onClick={() => setTrustsFilter('secondary')}>Secondary</button>
                            <button className={`tab-btn ${trustsFilter === 'primary' ? 'active' : ''}`} onClick={() => setTrustsFilter('primary')}>Primary / Nursery</button>
                          </div>
                        </div>

                        <div className="institutions-grid">
                          {(() => {
                            const institutionsList = [
                              { name: "P.A.C. Ramasamy Raja Polytechnic College", category: "technical", details: "Premier Govt-aided technical college established in 1963. NBA accredited autonomous curriculum." },
                              { name: "Ramco Private Industrial Training Centre", category: "technical", details: "Offering specialized industrial vocational trades and certifications." },
                              { name: "P.A. Chinniah Raja Memorial Higher Secondary School", category: "secondary", details: "Cultivating high scholastic achievements and athletic excellence." },
                              { name: "P.A.C.R. Ammani Ammal Girls Higher Secondary School", category: "secondary", details: "Providing empowering, high-quality education for female students." },
                              { name: "Chinmaya Vidyalaya P.A.C. Ramasamy Raja Matriculation Higher Secondary School", category: "secondary", details: "Co-educational matriculation school focusing on holistic character development." },
                              { name: "Smt. Lingammal Ramaraju Rotary Vidyalaya Matriculation Higher Secondary School", category: "secondary", details: "Dynamic matriculation academy offering premium English-medium education." },
                              { name: "Arsha Vidya Mandir Matriculation Hr. Secondary School", category: "secondary", details: "Value-based academic training with high digital integration." },
                              { name: "RAMCO Bala Vidya Kendra School", category: "secondary", details: "Modern campus delivering contemporary learning methodologies." },
                              { name: "Chinmaya Vidyalaya Smt. PACR Sethuramammal Nursery & Primary School", category: "primary", details: "Early childhood care and child-centric foundational learning." },
                              { name: "Sri Ram Primary School", category: "primary", details: "Primary school offering strong values and fundamental education." },
                              { name: "P.A.C.R. Sethuramammal Primary School", category: "primary", details: "Affordable, high-standard primary instruction in Tamil Nadu." },
                              { name: "T.A.K.M Ramammal Primary School", category: "primary", details: "Nurturing fundamental skills and basic sciences from early years." }
                            ]

                            const filteredList = trustsFilter === 'all' 
                              ? institutionsList 
                              : institutionsList.filter(inst => inst.category === trustsFilter)

                            return filteredList.map((inst, index) => {
                              let catLabel = "Primary"
                              let catClass = "badge-primary"
                              if (inst.category === 'technical') {
                                catLabel = "Technical & Voc"
                                catClass = "badge-tech"
                              } else if (inst.category === 'secondary') {
                                catLabel = "Higher Secondary"
                                catClass = "badge-sec"
                              }

                              return (
                                <div key={index} className="inst-item-card">
                                  <div className="inst-card-top">
                                    <span className={`inst-cat-badge ${catClass}`}>{catLabel}</span>
                                    {inst.category === 'technical' ? <School size={16} /> : inst.category === 'secondary' ? <GraduationCap size={16} /> : <BookOpen size={16} />}
                                  </div>
                                  <h4>{inst.name}</h4>
                                  <p>{inst.details}</p>
                                </div>
                              )
                            })
                          })()}
                        </div>
                      </div>

                      <div className="trusts-footer-highlight">
                        <div className="highlight-icon"><ShieldCheck size={26} /></div>
                        <p>
                          The students from these institutions consistently secure <strong>District Ranks and State Ranks</strong>, with the vast majority successfully entering top-tier professional engineering and collegiate streams.
                        </p>
                      </div>
                    </div>
                  ) : pageKey === 'admission-policy' ? (
                    <div className="detail-admission-layout">
                      <div className="admission-hero">
                        <h2>Admission Policy & Eligibility</h2>
                        <p>Providing a transparent, merit-based entry path for aspiring engineering students from all socio-economic backgrounds.</p>
                      </div>

                      <div className="admission-philosophy-card">
                        <div className="philosophy-badge"><ShieldCheck size={18} /> Transparent Procedures</div>
                        <p>
                          With a firm belief that education can truly diffuse socio-economic borders, Ramco Institute of Technology ensures that our admission procedures are kept completely fair and transparent. We aim to impart quality technical education, advance knowledge, and foster engineering excellence.
                        </p>
                      </div>

                      <div className="admission-quota-section">
                        <h3>Seat Allocation & Quota System</h3>
                        <p className="section-desc">Admissions are processed strictly in accordance with the rules of the Government of Tamil Nadu and TNEA.</p>
                        <div className="quota-grid">
                          <div className="quota-card counselling-quota">
                            <div className="quota-percentage">65%</div>
                            <div className="quota-info">
                              <h4>Single Window Counselling (TNEA)</h4>
                              <p>Admissions processed under Tamil Nadu Engineering Admissions counseling system, based on academic merit in board examinations.</p>
                            </div>
                          </div>
                          <div className="quota-card management-quota">
                            <div className="quota-percentage">35%</div>
                            <div className="quota-info">
                              <h4>Management Quota</h4>
                              <p>Admissions processed under the institutional management category, matching essential eligibility and merit benchmarks.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="admission-eligibility-section">
                        <h3>Minimum Essential Qualifications</h3>
                        <div className="eligibility-grid">
                          <div className="eligibility-card">
                            <div className="eligibility-icon"><BookOpen size={24} /></div>
                            <div className="eligibility-content">
                              <span className="eligibility-badge badge-regular">First Year (10+2)</span>
                              <h4>Regular Admission</h4>
                              <p>Passed in 10+2 examinations with <strong>Physics and Mathematics</strong> as compulsory subjects along with one of the optional subjects, namely <strong>Chemistry, Biology, or Technical Vocational</strong> subjects.</p>
                            </div>
                          </div>
                          <div className="eligibility-card">
                            <div className="eligibility-icon"><Award size={24} /></div>
                            <div className="eligibility-content">
                              <span className="eligibility-badge badge-lateral">Second Year (Lateral Entry)</span>
                              <h4>Lateral Entry Scheme</h4>
                              <p>Passed <strong>Diploma Examinations</strong> from AICTE-approved technical institutions or possess a <strong>B.Sc. Degree</strong> from UGC-recognized colleges with Mathematics in 10+2.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="admission-courses-section">
                        <div className="courses-sect-header">
                          <h3>Courses Offered & Intake Capacity</h3>
                          <p>As on date, the following 4-year undergraduate B.E. & B.Tech programs are offered:</p>
                        </div>
                        <div className="admission-courses-grid">
                          <div className="admission-course-card">
                            <div className="course-card-top">
                              <span className="course-dept-type badge-be">B.E.</span>
                              <span className="course-seats-count font-blue">180 Seats</span>
                            </div>
                            <h4>Computer Science & Engineering</h4>
                          </div>

                          <div className="admission-course-card">
                            <div className="course-card-top">
                              <span className="course-dept-type badge-btech">B.Tech</span>
                              <span className="course-seats-count font-orange">120 Seats</span>
                            </div>
                            <h4>Artificial Intelligence & Data Science</h4>
                          </div>

                          <div className="admission-course-card">
                            <div className="course-card-top">
                              <span className="course-dept-type badge-be">B.E.</span>
                              <span className="course-seats-count font-orange">120 Seats</span>
                            </div>
                            <h4>Electronics & Communication Engg</h4>
                          </div>

                          <div className="admission-course-card">
                            <div className="course-card-top">
                              <span className="course-dept-type badge-be">B.E.</span>
                              <span className="course-seats-count font-rose">60 Seats</span>
                            </div>
                            <h4>Electrical & Electronics Engg</h4>
                          </div>

                          <div className="admission-course-card">
                            <div className="course-card-top">
                              <span className="course-dept-type badge-be">B.E.</span>
                              <span className="course-seats-count font-rose">60 Seats</span>
                            </div>
                            <h4>CSE (Artificial Intelligence & Machine Learning)</h4>
                          </div>

                          <div className="admission-course-card">
                            <div className="course-card-top">
                              <span className="course-dept-type badge-btech">B.Tech</span>
                              <span className="course-seats-count font-rose">60 Seats</span>
                            </div>
                            <h4>Computer Science & Business Systems</h4>
                          </div>

                          <div className="admission-course-card">
                            <div className="course-card-top">
                              <span className="course-dept-type badge-btech">B.Tech</span>
                              <span className="course-seats-count font-rose">60 Seats</span>
                            </div>
                            <h4>Information Technology</h4>
                          </div>

                          <div className="admission-course-card">
                            <div className="course-card-top">
                              <span className="course-dept-type badge-be">B.E.</span>
                              <span className="course-seats-count font-emerald">30 Seats</span>
                            </div>
                            <h4>Civil Engineering</h4>
                          </div>

                          <div className="admission-course-card">
                            <div className="course-card-top">
                              <span className="course-dept-type badge-be">B.E.</span>
                              <span className="course-seats-count font-emerald">30 Seats</span>
                            </div>
                            <h4>Mechanical Engineering</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : pageKey === 'admission-enquiry' ? (
                    <div className="detail-enquiry-layout">
                      <div className="enquiry-hero">
                        <h2>Admission Enquiry Portal</h2>
                        <p>Welcome to Ramco Institute of Technology. Take the first step towards a rewarding engineering career.</p>
                      </div>

                      <div className="enquiry-action-section">
                        <div className="enquiry-action-card">
                          <div className="enquiry-card-glow"></div>
                          <ClipboardList className="enquiry-main-icon" size={48} />
                          <h3>Online Enquiry & Application</h3>
                          <p>Fill out our digital enquiry form to submit your details directly to the RIT Admissions Committee. Our counsellors will guide you through the next steps.</p>
                          <a 
                            href="https://www.ritrjpm.ac.in/onlineapplication/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="enquiry-submit-btn"
                          >
                            <span>Open Online Enquiry Form</span>
                            <ExternalLink size={18} />
                          </a>
                          <span className="enquiry-btn-hint">Links to the official secure RIT Application Portal</span>
                        </div>
                      </div>

                      <div className="enquiry-contact-section">
                        <h3>Admissions Support Desk</h3>
                        <p className="sect-desc">Have questions about eligibility, courses, or fees? Speak directly with our admission counsellors.</p>
                        <div className="enquiry-contact-grid">
                          <div className="enquiry-contact-card">
                            <div className="contact-card-icon"><Phone size={22} /></div>
                            <div>
                              <h4>Helpline Numbers</h4>
                              <p>+91-99433 28956</p>
                              <p>+91-99433 28957</p>
                            </div>
                          </div>
                          <div className="enquiry-contact-card">
                            <div className="contact-card-icon"><Mail size={22} /></div>
                            <div>
                              <h4>Email Enquiry</h4>
                              <p>rit@ritrjpm.ac.in</p>
                              <p>admissions@ritrjpm.ac.in</p>
                            </div>
                          </div>
                          <div className="enquiry-contact-card">
                            <div className="contact-card-icon"><Clock size={22} /></div>
                            <div>
                              <h4>Helpline Timings</h4>
                              <p>Monday – Saturday</p>
                              <p>9:00 AM – 5:00 PM (IST)</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : pageKey === 'admission-scholarship-incentives' ? (
                    <div className="detail-scholarship-layout">
                      <div className="scholarship-hero">
                        <h2>Scholarships & Financial Incentives</h2>
                        <p>Rewarding academic excellence and supporting our students with structured scholarship programs and fee waivers.</p>
                      </div>

                      <div className="scholarship-active-section">
                        <h3>Current Academic Year (2026 - 2027)</h3>
                        <p className="sect-desc">Official scholarship schemes, eligibility tiers, and application guidelines for first-year and post-graduate admissions.</p>
                        
                        <div className="scholarship-docs-grid">
                          <div className="scholarship-doc-card">
                            <div className="doc-icon-container"><FileText size={28} /></div>
                            <div className="doc-details">
                              <h4>Admission Policy & Merit Scholarships (I Year)</h4>
                              <span className="doc-meta">Academic Year: 2026-2027 • PDF Document</span>
                              <p>Contains detailed information on cut-off based fee waivers, school-topper concessions, and special sports incentives.</p>
                              <a 
                                href="/media/admission/Admission_Policy_26-27_I_Year.pdf" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="doc-download-btn"
                              >
                                <span>Download Admission Policy PDF</span>
                                <ExternalLink size={16} />
                              </a>
                            </div>
                          </div>

                          <div className="scholarship-doc-card">
                            <div className="doc-icon-container"><FileText size={28} /></div>
                            <div className="doc-details">
                              <h4>Admission Policy & Incentives (M.E. CSE)</h4>
                              <span className="doc-meta">Academic Year: 2026-2027 • PDF Document</span>
                              <p>Concessions and financial support for post-graduate students pursuing Master of Engineering in Computer Science.</p>
                              <a 
                                href="/media/admission/Admission_Policy_26-27_ME.pdf" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="doc-download-btn"
                              >
                                <span>Download M.E. Concessions PDF</span>
                                <ExternalLink size={16} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="scholarship-archive-section">
                        <h3>Scholarship Archives & Historical Policies</h3>
                        <p className="sect-desc">Reference documents and policy guidelines from previous academic sessions.</p>
                        
                        <div className="archive-list">
                          <div className="archive-item">
                            <div className="archive-item-title-row">
                              <FileText size={18} className="archive-icon" />
                              <h4>Scholarship Details & Policy Guidelines (2025 - 2026)</h4>
                            </div>
                            <a 
                              href="/media/admission/Admission_Policy_25-26.pdf" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="archive-download-link"
                            >
                              <span>View PDF</span>
                              <ExternalLink size={14} />
                            </a>
                          </div>

                          <div className="archive-item">
                            <div className="archive-item-title-row">
                              <FileText size={18} className="archive-icon" />
                              <h4>Scholarship Details & Policy Guidelines (2024 - 2025)</h4>
                            </div>
                            <a 
                              href="/media/admission/Admission_Policy_24-25.pdf" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="archive-download-link"
                            >
                              <span>View PDF</span>
                              <ExternalLink size={14} />
                            </a>
                          </div>

                          <div className="archive-item">
                            <div className="archive-item-title-row">
                              <FileText size={18} className="archive-icon" />
                              <h4>Scholarship Details & Policy Guidelines (2023 - 2024)</h4>
                            </div>
                            <a 
                              href="/media/admission/Admission_Policy_23-24.pdf" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="archive-download-link"
                            >
                              <span>View PDF</span>
                              <ExternalLink size={14} />
                            </a>
                          </div>

                          <div className="archive-item">
                            <div className="archive-item-title-row">
                              <FileText size={18} className="archive-icon" />
                              <h4>Scholarship Details & Policy Guidelines (2022 - 2023)</h4>
                            </div>
                            <a 
                              href="/media/admission/Admission_Policy_22-23.pdf" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="archive-download-link"
                            >
                              <span>View PDF</span>
                              <ExternalLink size={14} />
                            </a>
                          </div>

                          <div className="archive-item">
                            <div className="archive-item-title-row">
                              <FileText size={18} className="archive-icon" />
                              <h4>Scholarship Details & Policy Guidelines (2021 - 2022)</h4>
                            </div>
                            <a 
                              href="/media/admission/Admission_Policy_21-22.pdf" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="archive-download-link"
                            >
                              <span>View PDF</span>
                              <ExternalLink size={14} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : pageKey === 'admission-scholarships-gov' ? (
                    <div className="detail-gov-scholarship-layout">
                      <div className="gov-scholarship-hero">
                        <h2>Government Scholarships & Concessions</h2>
                        <p>Detailed overview of financial aid programs, state welfare schemes, and central government scholarship grants.</p>
                      </div>

                      <div className="gov-scholarship-overview-grid">
                        <div className="gov-scheme-card">
                          <div className="scheme-badge badge-counselling">Govt. Quota</div>
                          <h4>First Graduate Concession</h4>
                          <p>Tuition fee waiver granted by the State Government for students who are the first graduates in their family, admitted through Single Window Counselling (TNEA).</p>
                        </div>

                        <div className="gov-scheme-card">
                          <div className="scheme-badge badge-school">7.5% Quota</div>
                          <h4>Govt. School Student Free Education</h4>
                          <p>Comprehensive fee waiver (including tuition, hostel, and transport) for students who studied in Tamil Nadu Government schools from Standard 6 to 12.</p>
                        </div>

                        <div className="gov-scheme-card">
                          <div className="scheme-badge badge-community">SC/SCA/ST Welfare</div>
                          <h4>Post Matric Scholarship Scheme</h4>
                          <p>Full tuition fee scholarships and maintenance allowances for SC, SCA, and ST candidates whose family annual income is within the government prescribed limits.</p>
                        </div>

                        <div className="gov-scheme-card">
                          <div className="scheme-badge badge-community">BC/MBC/DNC Welfare</div>
                          <h4>State Welfare Scholarship</h4>
                          <p>Tuition fee concession and special allowances for students belonging to Backward, Most Backward, and Denotified communities based on income thresholds.</p>
                        </div>
                      </div>

                      <div className="gov-scholarship-download-section">
                        <div className="gov-download-card">
                          <div className="gov-download-glow"></div>
                          <FileText className="gov-download-main-icon" size={44} />
                          <h3>Central & State Government Scholarships Guide</h3>
                          <p className="doc-meta">Academic Year: 2024-2025 • Official Publication</p>
                          <p>Download the official handbook containing the complete eligibility criteria, lists of required certificates (Community, Income, Nativity, and First Graduate), and step-by-step application instructions for the 2024-2025 academic year.</p>
                          <a 
                            href="/media/admission/Central_State_Govt_Scholarships_24-25.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="gov-download-btn"
                          >
                            <span>Download Scholarships PDF</span>
                            <ExternalLink size={18} />
                          </a>
                        </div>
                      </div>
                    </div>
                  ) : isSidebarStyledPage ? (
                    <div className="detail-awards-layout">
                      {renderActivityContent(contentItems)}
                    </div>
                  ) : pageKey === 'about-quality-policy' ? (
                    <div className="detail-quality-policy-layout">
                      <div className="quality-policy-hero-card">
                        <Quote className="quote-icon-top" size={40} />
                        <blockquote className="quality-policy-quote">
                          "{contentItems.find(item => item.type === 'paragraph')?.text || 
                            "RIT aims to impart Quality Education in Engineering and Technology through an effective teaching-learning process, up-gradation of facilities and human resources, collaborating with Industry for promoting training and placement, research and consultancy activities with a commitment to continual improvement of Quality Management System."}"
                        </blockquote>
                        <div className="quality-policy-author">— Ramco Institute of Technology</div>
                        <div className="quality-policy-glow-effect"></div>
                      </div>

                      <div className="quality-policy-section-header">
                        <h2>Key Pillars of Our Quality Policy</h2>
                        <p>How we translate our vision of quality education into everyday institutional excellence</p>
                      </div>

                      <div className="quality-policy-pillars-grid">
                        <div className="quality-policy-pillar-card pillar-education">
                          <div className="pillar-icon-wrapper">
                            <GraduationCap size={24} />
                          </div>
                          <h3>Academic Excellence</h3>
                          <p>Imparting quality education in Engineering & Technology through an effective, student-centric teaching-learning process.</p>
                        </div>

                        <div className="quality-policy-pillar-card pillar-facilities">
                          <div className="pillar-icon-wrapper">
                            <Users size={24} />
                          </div>
                          <h3>Infrastructure & Talents</h3>
                          <p>Continuous upgradation of campus facilities, state-of-the-art laboratories, and professional skills of our human resources.</p>
                        </div>

                        <div className="quality-policy-pillar-card pillar-industry">
                          <div className="pillar-icon-wrapper">
                            <Briefcase size={24} />
                          </div>
                          <h3>Industry Integration</h3>
                          <p>Collaborating closely with leading industries for promoting training, specialized internships, and premium placements.</p>
                        </div>

                        <div className="quality-policy-pillar-card pillar-research">
                          <div className="pillar-icon-wrapper">
                            <Cpu size={24} />
                          </div>
                          <h3>Research & Consultancy</h3>
                          <p>Fostering a rich research culture, academic publications, and high-impact consultancy activities across all departments.</p>
                        </div>

                        <div className="quality-policy-pillar-card pillar-improvement">
                          <div className="pillar-icon-wrapper">
                            <TrendingUp size={24} />
                          </div>
                          <h3>Continual Improvement</h3>
                          <p>Upholding an unwavering commitment to the continual assessment and enhancement of our Quality Management System.</p>
                        </div>
                      </div>
                    </div>
                  ) : pageKey === 'about-rit-e-projects' ? (
                    <div className="detail-e-projects-layout">
                      <div className="e-projects-header">
                        <h2>RIT Digital Ecosystem & E-Governance</h2>
                        <p>Access our campus portals, online learning environments, student services, and e-governance systems.</p>
                      </div>

                      <div className="e-projects-grid">
                        <a href="https://erp.ramcoad.com" target="_blank" rel="noopener noreferrer" className="e-project-card card-erp">
                          <div className="e-project-icon-wrapper">
                            <Database size={24} />
                          </div>
                          <div className="e-project-info">
                            <div className="e-project-title-row">
                              <h3>RIT ERP Portal</h3>
                              <span className="e-project-badge">Core System</span>
                            </div>
                            <span className="e-project-domain">erp.ramcoad.com</span>
                            <p>Unified enterprise resource planning system managing academic administration, student records, and campus operations.</p>
                          </div>
                          <div className="e-project-arrow">
                            <ArrowRight size={18} />
                          </div>
                        </a>

                        <a href="https://code2day.ramcoad.com" target="_blank" rel="noopener noreferrer" className="e-project-card card-code2day">
                          <div className="e-project-icon-wrapper">
                            <Terminal size={24} />
                          </div>
                          <div className="e-project-info">
                            <div className="e-project-title-row">
                              <h3>Code2Day Coding Platform</h3>
                              <span className="e-project-badge">Learning</span>
                            </div>
                            <span className="e-project-domain">code2day.ramcoad.com</span>
                            <p>Interactive programming and coding platform designed for RIT students to hone their algorithmic and software engineering skills.</p>
                          </div>
                          <div className="e-project-arrow">
                            <ArrowRight size={18} />
                          </div>
                        </a>

                        <a href="https://ritcanvas.in" target="_blank" rel="noopener noreferrer" className="e-project-card card-canvas">
                          <div className="e-project-icon-wrapper">
                            <LayoutGrid size={24} />
                          </div>
                          <div className="e-project-info">
                            <div className="e-project-title-row">
                              <h3>RIT Canvas (LMS)</h3>
                              <span className="e-project-badge">LMS</span>
                            </div>
                            <span className="e-project-domain">ritcanvas.in</span>
                            <p>Interactive Learning Management System hosting course resources, digital assignments, syllabus tracks, and academic discussions.</p>
                          </div>
                          <div className="e-project-arrow">
                            <ArrowRight size={18} />
                          </div>
                        </a>

                        <a href="https://epayments.in.worldline.com/ritrjpm?swith=rollnumber" target="_blank" rel="noopener noreferrer" className="e-project-card card-fees">
                          <div className="e-project-icon-wrapper">
                            <CreditCard size={24} />
                          </div>
                          <div className="e-project-info">
                            <div className="e-project-title-row">
                              <h3>Online Fee Payment Portal</h3>
                              <span className="e-project-badge font-emerald">Payments</span>
                            </div>
                            <span className="e-project-domain">epayments.in.worldline.com</span>
                            <p>Secure, hassle-free online payment gateway processed through Worldline for academic, hostel, and miscellaneous fees.</p>
                          </div>
                          <div className="e-project-arrow">
                            <ArrowRight size={18} />
                          </div>
                        </a>

                        <a href="https://ritrjpm.edugrievance.com/" target="_blank" rel="noopener noreferrer" className="e-project-card card-grievance">
                          <div className="e-project-icon-wrapper">
                            <LifeBuoy size={24} />
                          </div>
                          <div className="e-project-info">
                            <div className="e-project-title-row">
                              <h3>Grievance Redressal System</h3>
                              <span className="e-project-badge font-rose">Transparency</span>
                            </div>
                            <span className="e-project-domain">ritrjpm.edugrievance.com</span>
                            <p>Official transparency portal allowing students and staff to raise grievances, submit suggestions, and track resolution progress.</p>
                          </div>
                          <div className="e-project-arrow">
                            <ArrowRight size={18} />
                          </div>
                        </a>
                      </div>
                    </div>
                  ) : isMessagePage ? (
                    <div className="detail-message-layout">
                      <aside className="detail-message-sidebar">
                        <div className="detail-message-card">
                          <div className="detail-message-frame">
                            <img
                              src={galleryImages[0]?.localSrc || ''}
                              alt={messagePageMetadata[pageKey || '']?.name || pageTitle}
                              className="detail-message-photo"
                            />
                            <div className="detail-message-frame-accent"></div>
                          </div>
                          <div className="detail-message-meta">
                            <h2 className="detail-message-author-name">
                              {messagePageMetadata[pageKey || '']?.name}
                            </h2>
                            <p className="detail-message-author-role">
                              {messagePageMetadata[pageKey || '']?.role}
                            </p>
                            <p className="detail-message-org">Ramco Institute of Technology</p>
                          </div>
                        </div>
                      </aside>
                      <article className="detail-message-article">
                        {(() => {
                          const blocksWithoutImage = groupContentBlocks(contentItems.filter((item) => item.type !== 'image'))
                          return blocksWithoutImage.map((item, index) => {
                            if (item.type === 'heading' && item.text?.toLowerCase().includes('message')) {
                              return (
                                <h2 key={index} className="detail-message-heading">
                                  {item.text}
                                </h2>
                              )
                            }
                            if (item.type === 'paragraph') {
                              const isGreeting = item.text?.startsWith('Dear') || item.text?.includes('Greetings')
                              return (
                                <p 
                                  key={index} 
                                  className={`detail-content-paragraph ${isGreeting ? 'detail-message-greeting' : 'detail-message-body'}`}
                                >
                                  {item.text}
                                </p>
                              )
                            }
                            return renderContentBlocks([item])
                          })
                        })()}
                        <div className="detail-message-signature">
                          <div className="signature-line"></div>
                          <p className="signature-name">{messagePageMetadata[pageKey || '']?.name}</p>
                          <p className="signature-role">{messagePageMetadata[pageKey || '']?.role}</p>
                        </div>
                      </article>
                    </div>
                  ) : (
                    <>
                      {showNoImagePlaceholder && (
                        <div className="detail-image-placeholder-container" style={{ margin: '20px 0', padding: '30px', border: '2px dashed #f43f5e', borderRadius: '12px', background: '#fff1f2', color: '#be123c', textAlign: 'center' }}>
                          <span style={{ fontWeight: '750', display: 'block', fontSize: '15px' }}>⚠️ No Scraped Image Found: {pageTitle}</span>
                          <small style={{ display: 'block', marginTop: '4px', opacity: 0.85 }}>Flagged for manual review</small>
                        </div>
                      )}
                      {galleryImages.length > 0 && (
                        <section className="detail-image-gallery" aria-label={`${pageTitle} gallery`}>
                          <div className="detail-image-gallery__lead">
                            <div className="detail-image-gallery__tag">Official Gallery</div>
                            <h2>{pageTitle}</h2>
                            <p>These visuals are resolved from the local scraped image library so the page stays fast and offline-friendly.</p>
                          </div>
                          <div className="detail-image-grid">
                            {galleryImages.map((item, index) => (
                              <figure key={`${item.src}-${index}`} className={`detail-image-card${index === 0 ? ' featured' : ''}`}>
                                <img
                                  src={item.localSrc || ''}
                                  alt={item.alt || `${pageTitle} image ${index + 1}`}
                                  className="detail-gallery-image"
                                />
                              </figure>
                            ))}
                          </div>
                        </section>
                      )}
                      {textItems.length > 0 ? (
                        renderContentBlocks(textItems)
                      ) : (
                        <div className="detail-empty">
                          <p>No content found for this page. Please refer to the official live website.</p>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
              </div>
            )}

            {/* Layout for IIIC pages: styled like a department page with its own sidebar */}
            {isIiic && <IiicPage onClose={onClose} />}

            {/* Layout for IDEA Lab pages: styled like a department page with its own sidebar */}
            {isIdeaLab && <IdeaLabPage onClose={onClose} />}

            {/* Layout for Department Sidebar-based pages: Delegated to isolated sub-components */}
            {isDept && (
              <>
                {(() => {
                  switch (deptCode.toLowerCase()) {
                    case 'cse':
                      return <CseDept onClose={onClose} />
                    case 'ece':
                      return <EceDept onClose={onClose} />
                    case 'eee':
                      return <EeeDept onClose={onClose} />
                    case 'mech':
                      return <MechDept onClose={onClose} />
                    case 'civil':
                      return <CivilDept onClose={onClose} />
                    case 'aiml':
                      return <AimlDept onClose={onClose} />
                    case 'aids':
                      return <AidsDept onClose={onClose} />
                    case 'csbs':
                      return <CsbsDept onClose={onClose} />
                    case 'it':
                      return <ItDept onClose={onClose} />
                    case 'csec':
                      return <CsecDept onClose={onClose} />
                    case 'physics':
                      return <PhysicsDept onClose={onClose} />
                    case 'chemistry':
                      return <ChemistryDept onClose={onClose} />
                    case 'maths':
                      return <MathsDept onClose={onClose} />
                    case 'english':
                      return <EnglishDept onClose={onClose} />
                    default:
                      return (
                        <div className="detail-empty">
                          <p>Unknown department.</p>
                        </div>
                      )
                  }
                })()}
              </>
            )}
          </motion.div>
        </motion.div>
      )}
      {showEditModal && pageKey && (
        <EditFlatPageModal pageKey={pageKey} onClose={() => setShowEditModal(false)} />
      )}
    </AnimatePresence>
  )
}
