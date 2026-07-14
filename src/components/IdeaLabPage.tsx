import { useState, useEffect } from 'react'
import { BookOpen, Edit, User } from 'lucide-react'
import { useCMS } from './CMSContext'
import { VisionMissionSection, DefaultSection } from './departments/DeptSubSections'
import type { ContentItem } from './departments/DeptSubSections'
import { DeptWidgetsSidebar } from './departments/DeptWidgetsSidebar'

interface IdeaLabPageProps {
  initialKey?: string | null
  onClose: () => void
}

const IDEALAB_SUBPAGES: { key: string; label: string }[] = [
  { key: 'idealab-vision', label: 'Vision of AICTE IDEA LAB' },
  { key: 'idealab-members', label: 'Members' },
  { key: 'idealab-facilities', label: 'Facilities' },
  { key: 'idealab-activities', label: 'Activities/Events' },
  { key: 'idealab-tenders', label: 'Tender Details' },
]

const MEMBER_PHOTOS: Record<string, string> = {
  'Chief Mentor': '/media/generic/idealab-members/Principal_drganesan.jpg',
  'Faculty Coordinator': '/media/generic/idealab-members/Dr.SRK_28.02.jpg',
  'Faculty Co-coordinator': '/media/generic/idealab-members/Dr.C.ArunachalaPerumal.jpg',
}

function MembersSection({ content }: { content: ContentItem[] }) {
  const table = content.find((item) => item.type === 'table')
  const rows = table?.rows?.slice(1) || []

  return (
    <div className="faculty-section">
      <div className="faculty-grid-premium">
        {rows.map((row, idx) => {
          const designation = typeof row[0] === 'string' ? row[0] : ''
          const name = typeof row[2] === 'string' ? row[2] : ''
          const photo = MEMBER_PHOTOS[designation]

          return (
            <article className="faculty-card-premium" key={idx}>
              <div className="faculty-avatar-column-premium">
                <div className="avatar-gradient-bg">
                  <div className="avatar-dot-grid-tl"></div>
                  {photo ? (
                    <img src={photo} alt={name} className="avatar-img-premium" loading="lazy" />
                  ) : (
                    <div className="avatar-placeholder-premium"><User size={54} /></div>
                  )}
                  <div className="avatar-gold-accent"></div>
                </div>
              </div>
              <div className="faculty-info-column-premium">
                <div className="info-dot-grid-tr"></div>
                <h3 className="faculty-name-premium">{name}</h3>
                <div className="info-designation-bar-premium">
                  <div className="info-user-icon-box">
                    <User size={16} className="info-user-icon" />
                  </div>
                  <span className="faculty-role-premium">{designation}</span>
                </div>
                <div className="info-divider-gold"></div>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default function IdeaLabPage({ initialKey }: IdeaLabPageProps) {
  const { flatPages, isAuthenticated } = useCMS()
  const [activeKey, setActiveKey] = useState<string>(() => {
    if (initialKey && IDEALAB_SUBPAGES.some((p) => p.key === initialKey)) {
      return initialKey
    }
    return IDEALAB_SUBPAGES[0].key
  })

  useEffect(() => {
    if (initialKey && IDEALAB_SUBPAGES.some((p) => p.key === initialKey)) {
      setActiveKey(initialKey)
    }
  }, [initialKey])

  const pageData = flatPages[activeKey]
  const contentItems: ContentItem[] = pageData?.content || []
  const pageUrl = pageData?.url || 'https://www.ritrjpm.ac.in/idea-lab/'
  const activeLabel = IDEALAB_SUBPAGES.find((s) => s.key === activeKey)?.label || 'IDEA Lab'

  const isVisionPage = activeKey === 'idealab-vision'
  const isMembersPage = activeKey === 'idealab-members'

  return (
    <div className="dept-view-container">
      {/* Left Sidebar */}
      <aside className="dept-sidebar">
        <div className="dept-sidebar-header">
          <BookOpen size={18} />
          <span>IDEA Lab Info</span>
        </div>
        <nav className="dept-sidebar-nav">
          {IDEALAB_SUBPAGES.map(({ key, label }) => (
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
            RIT AICTE IDEA LAB
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
          {isMembersPage ? (
            <MembersSection content={contentItems} />
          ) : contentItems.length > 0 ? (
            isVisionPage ? (
              <VisionMissionSection deptCode="idealab" sectionName={activeLabel} content={contentItems} pageUrl={pageUrl} />
            ) : (
              <DefaultSection deptCode="idealab" sectionName={activeLabel} content={contentItems} pageUrl={pageUrl} />
            )
          ) : (
            <div className="detail-empty">
              <p>Content for this section will be updated soon. Please refer to the official live website.</p>
            </div>
          )}
        </div>
      </main>

      {/* Right Sidebar for Widgets */}
      <DeptWidgetsSidebar />
    </div>
  )
}
