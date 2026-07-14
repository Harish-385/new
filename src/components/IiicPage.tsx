import { useState } from 'react'
import { BookOpen, Edit } from 'lucide-react'
import { useCMS } from './CMSContext'
import { DefaultSection, VisionMissionSection } from './departments/DeptSubSections'
import type { ContentItem } from './departments/DeptSubSections'
import { DeptWidgetsSidebar } from './departments/DeptWidgetsSidebar'

interface IiicPageProps {
  onClose: () => void
}

const IIIC_SUBPAGES: { key: string; label: string }[] = [
  { key: 'iic-vision-mission', label: 'Vision, Mission & Quality' },
  { key: 'iic-coordinators', label: 'Department Coordinators' },
  { key: 'iic-industry-mou', label: 'Institute-Industry MoU' },
  { key: 'iic-institute-mou', label: 'Institute-Institute MoU' },
  { key: 'iic-mou-activities', label: 'MoU Activities' },
]

export default function IiicPage({}: IiicPageProps) {
  const { flatPages, isAuthenticated } = useCMS()
  const [activeKey, setActiveKey] = useState<string>(IIIC_SUBPAGES[0].key)

  const pageData = flatPages[activeKey]
  const contentItems: ContentItem[] = pageData?.content || []
  const pageUrl = pageData?.url || 'https://www.ritrjpm.ac.in/iiic/'
  const activeLabel = IIIC_SUBPAGES.find((s) => s.key === activeKey)?.label || 'IIIC'

  const isVisionMission = activeKey === 'iic-vision-mission'

  return (
    <div className="dept-view-container">
      {/* Left Sidebar */}
      <aside className="dept-sidebar">
        <div className="dept-sidebar-header">
          <BookOpen size={18} />
          <span>IIIC Info</span>
        </div>
        <nav className="dept-sidebar-nav">
          {IIIC_SUBPAGES.map(({ key, label }) => (
            <button
              key={key}
              className={`dept-sidebar-link ${activeKey === key ? 'active' : ''}`}
              onClick={() => setActiveKey(key)}
            >
              <span className="bullet">»</span>
              <span className="label-text">{label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Right Scrollable Content Viewport */}
      <main className="dept-main-content">
        <header className="dept-content-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div className="detail-eyebrow" style={{ marginBottom: '8px' }}>
            INSTITUTE INDUSTRY/INSTITUTE INTERACTION CELL
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', width: '100%' }}>
            <h1 style={{ margin: 0 }}>{activeLabel}</h1>
            {isAuthenticated && (
              <button
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

        <div className="dept-content-body">
          {contentItems.length > 0 ? (
            isVisionMission ? (
              <VisionMissionSection deptCode="iic" sectionName={activeLabel} content={contentItems} pageUrl={pageUrl} />
            ) : (
              <DefaultSection deptCode="iic" sectionName={activeLabel} content={contentItems} pageUrl={pageUrl} />
            )
          ) : (
            <div className="detail-empty">
              <p>No content found for this page. Please refer to the official live website.</p>
            </div>
          )}
        </div>
      </main>

      {/* Right Sidebar for Widgets */}
      <DeptWidgetsSidebar />
    </div>
  )
}
