import React, { useState } from 'react'
import { BookOpen } from 'lucide-react'

// Define the 10 categories from the user's requirements
export const sidebarCategories = [
  'About & Governance',
  'Curriculum & Academics',
  'Admissions',
  'Faculty',
  'Facilities & Infrastructure',
  'Research, Consultancy & Industry',
  'Student Performance & Placement',
  'Events, Outreach & Extension',
  'Achievements & Publications',
  'Downloads / Resources'
]

// Function to map a subpage key to one of the 10 standard categories
export function getCategoryForKey(key: string): string {
  const k = key.toLowerCase()

  // 1. Achievements & Publications: awards, achievements, newsletter, magazine, press release
  if (
    k.includes('award') || 
    k.includes('achievement') || 
    k.includes('achivement') || 
    k.includes('newsletter') || 
    k.includes('news letter') || 
    k.includes('magazine') || 
    k.includes('press')
  ) {
    return 'Achievements & Publications'
  }

  // 2. Student Performance & Placement: placement, alumni, training and placement
  if (k.includes('placement') || k.includes('alumni') || k.includes('training and placement')) {
    return 'Student Performance & Placement'
  }

  // 3. Faculty: faculty, staff, adjunct, honorary (but not awards/placement)
  if (k.includes('faculty') || k.includes('staff') || k.includes('adjunct') || k.includes('honorary')) {
    return 'Faculty'
  }

  // 4. Facilities & Infrastructure: labs, equipment, safety, compliance
  if (k.includes('facilit') || k.includes('lab') || k.includes('infrastructure') || k.includes('safety') || k.includes('compliance')) {
    return 'Facilities & Infrastructure'
  }

  // 5. Research, Consultancy & Industry: research, r&d, mou, project, consultancy, ipr, industry institute interaction
  if (
    k.includes('research') || 
    k.includes('r&d') || 
    k.includes('mou') || 
    k.includes('project') || 
    k.includes('consultancy') || 
    k.includes('funded programme') || 
    k.includes('ipr') || 
    k.includes('industry institute') || 
    k.includes('industry/institute') || 
    k.includes('neotric') || 
    k.includes('analytics society')
  ) {
    return 'Research, Consultancy & Industry'
  }

  // 6. Events, Outreach & Extension: lecture, workshop, seminar, fdp, tftp, sttp, participation, hackathon, extension, association
  if (
    k.includes('lecture') || 
    k.includes('workshop') || 
    k.includes('seminar') || 
    k.includes('fdp') || 
    k.includes('tftp') || 
    k.includes('sttp') || 
    k.includes('fttp') || 
    k.includes('participation') || 
    k.includes('hackathon') || 
    k.includes('extension') || 
    k.includes('icaicgd') || 
    k.includes('association') || 
    k.includes('society') || 
    k.includes('iv/ipt/internship') || 
    k.includes('internship') || 
    k.includes('visit') || 
    k.includes('resource person')
  ) {
    return 'Events, Outreach & Extension'
  }

  // 7. Curriculum & Academics: syllabus, curriculum, course outcome, innovative, video lecture, value added, online course, certification
  if (
    k.includes('syllabus') || 
    k.includes('curriculum') || 
    k.includes('course outcome') || 
    k.includes('course outcomes') || 
    k.includes('innovative') || 
    k.includes('video') || 
    k.includes('value added') || 
    k.includes('online course') || 
    k.includes('certification') || 
    k.includes('learning practice')
  ) {
    return 'Curriculum & Academics'
  }

  // 8. Admissions: admission, eligibility, enquiry, scholarship
  if (k.includes('admission') || k.includes('eligibility') || k.includes('enquiry') || k.includes('scholarship')) {
    return 'Admissions'
  }

  // 9. Downloads / Resources: download, resource, pdf, form, report, oer
  if (k.includes('download') || k.includes('resource') || k.includes('pdf') || k.includes('form') || k.includes('report') || k.includes('oer')) {
    return 'Downloads / Resources'
  }

  // 10. About & Governance (fallback default)
  return 'About & Governance'
}

interface DeptSidebarProps {
  activeSubpage: string
  setActiveSubpage: (key: string) => void
  subpageKeys: string[]
}

export const DeptSidebar: React.FC<DeptSidebarProps> = ({
  activeSubpage,
  setActiveSubpage,
  subpageKeys
}) => {
  // Track expanded state for categories
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({})

  // Group the subpage keys into categories
  const groupedKeys: Record<string, string[]> = {}
  sidebarCategories.forEach(cat => {
    groupedKeys[cat] = []
  })

  subpageKeys.forEach(key => {
    const cat = getCategoryForKey(key)
    if (groupedKeys[cat]) {
      groupedKeys[cat].push(key)
    } else {
      groupedKeys['About & Governance'].push(key)
    }
  })

  // Filter out categories that are empty for this department
  const activeCategories = sidebarCategories.filter(cat => groupedKeys[cat].length > 0)




  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }))
  }

  return (
    <aside className="dept-sidebar">
      <div className="dept-sidebar-header">
        <BookOpen size={18} />
        <span>Department Info</span>
      </div>
      <nav className="dept-sidebar-nav">
        {activeCategories.map(cat => {
          const keys = groupedKeys[cat]
          const isExpanded = expandedCategories[cat] || false
          const hasActiveChild = keys.includes(activeSubpage)

          return (
            <div 
              key={cat} 
              className="dept-sidebar-category-group"
            >
              <button
                type="button"
                className={`dept-sidebar-link dept-sidebar-header-link ${hasActiveChild ? 'has-active-child' : ''} ${isExpanded ? 'expanded' : ''}`}
                onClick={() => toggleCategory(cat)}
              >
                <span className="bullet">»</span>
                <span className="label-text" style={{ flexGrow: 1 }}>{cat}</span>
                <span
                  className="caret"
                  style={{
                    transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease',
                    opacity: 0.6
                  }}
                >
                  ▼
                </span>
              </button>

              <div className={`dept-sidebar-sublinks ${isExpanded ? 'dept-sidebar-sublinks--expanded' : ''}`}>
                {keys.map(key => (
                  <button
                    key={key}
                    type="button"
                    className={`dept-sidebar-link ${activeSubpage === key ? 'active' : ''}`}
                    onClick={() => setActiveSubpage(key)}
                  >
                    <span className="bullet">»</span>
                    <span className="label-text">{key}</span>
                  </button>
                ))}
              </div>
            </div>
          )
        })}
      </nav>
    </aside>
  )
}

export default DeptSidebar
