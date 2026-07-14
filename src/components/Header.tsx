import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X, ArrowRight, BookOpen, GraduationCap, Briefcase, Trophy, Cpu, Phone, Mail, MapPin, User, ExternalLink, type LucideIcon } from 'lucide-react'
import { Button } from './ui/button'
import { navItems } from '../data/constants'
import { useNavigate } from 'react-router-dom'

// Complete sub-menu items mapping categories to their scraped page keys
const subMenus: Record<string, { label: string; key?: string; href?: string; subItems?: { label: string; key: string }[] }[]> = {
  'About': [
    { label: 'Ramco Group', key: 'about-ramco-group' },
    { label: 'Trusts', key: 'about-trusts' },
    { label: 'Governing Council', key: 'about-governing-council' },
    { label: 'Quality Policy', key: 'about-quality-policy' },
    { label: 'Information Brochure', key: 'about-information-brochure' },
    { label: "Founder Chairman's Message", key: 'about-founder-chairman-message' },
    { label: "Chairman's Message", key: 'about-chairman-message' },
    { label: "Director's Message", key: 'about-director-message' },
    { label: "Principal's Message", key: 'about-principal-message' },
    { 
      label: 'e-Governance', 
      subItems: [
        { label: 'RIT e-Projects', key: 'about-rit-e-projects' }
      ] 
    },
  ],
  'Admission': [
    { label: 'Admission Policy / Eligibility', key: 'admission-policy' },
    { label: 'Online Enquiry Form', key: 'admission-enquiry' },
    { label: 'Scholarship / Incentives', key: 'admission-scholarship-incentives' },
    { label: 'Central Govt. & State Govt. Scholarships', key: 'admission-scholarships-gov' },
    { label: 'Admission Brochure', key: 'admission-brochure' },
    { label: 'Academic Schedule', key: 'academics-schedule' },
    { label: 'Academic Curriculum and Syllabus', key: 'academics-curriculum' },
    { label: 'AU Regulation', key: 'academics-regulation' },
  ],
  'Departments': [
    { label: 'Civil Engineering', key: 'departments-civil' },
    { label: 'Computer Science & Engg.', key: 'departments-cse' },
    { label: 'Electrical & Electronics Engg.', key: 'departments-eee' },
    { label: 'Electronics & Communication Engg.', key: 'departments-ece' },
    { label: 'Mechanical Engineering', key: 'departments-mech' },
    { label: 'CSE (AI & ML)', key: 'departments-aiml' },
    { label: 'B.Tech AI and Data Science', key: 'departments-aids' },
    { label: 'B.Tech Computer Science and Business Systems', key: 'departments-csbs' },
    { label: 'B.Tech Information Technology', key: 'departments-it' },
    {
      label: 'Science & Humanities',
      subItems: [
        { label: 'Physics', key: 'departments-physics' },
        { label: 'Chemistry', key: 'departments-chemistry' },
        { label: 'Mathematics', key: 'departments-maths' },
        { label: 'English', key: 'departments-english' },
      ]
    }
  ],
  'Placements': [
    { label: 'Training & Placement Centre', key: 'placements-training-centre' },
    { label: 'Objective', key: 'placements-objective' },
    { label: 'Placement Policy', key: 'placements-policy' },
    { label: 'Placement Procedure', key: 'placements-procedure' },
    { label: 'Hiring Process', key: 'placements-hiring-process' },
    { label: 'Placement Training', key: 'placements-training' },
    { label: 'Placement Statistics (with year filter on-page: 2016–2025)', key: 'placements-list' },
    { label: 'Ideathon', key: 'placements-ideathon' },
    { label: 'Placement Prospectus', key: 'placements-prospectus' },
    { label: "Placement MoU's", key: 'placements-mous' },
  ],
  'Infrastructure': [
    { label: 'Library', key: 'infrastructure-library' },
    { label: 'Hostel', key: 'infrastructure-hostel' },
    { label: 'Transport', key: 'infrastructure-transport' },
    { label: 'Seminar Hall / Video Conference', key: 'infrastructure-seminar-hall' },
    { label: 'Cafeteria', key: 'infrastructure-cafeteria' },
    { label: 'Sports', key: 'infrastructure-sports' },
    { label: 'Gym', key: 'infrastructure-gym' },
    { label: 'Health Centre / Counselling', key: 'infrastructure-health-centre' },
    { label: 'Stationery Store', key: 'infrastructure-stationery' },
    { label: 'Outstanding Facilities', key: 'infrastructure-outstanding' },
    { label: 'Auditorium', key: 'infrastructure-auditorium' },
    { label: 'ATM Facility', key: 'infrastructure-atm' },
  ],
  'Campus Life & Gallery': [
    { label: 'Awards and Achievements', key: 'activities-awards' },
    { label: 'Professional Societies', key: 'activities-societies' },
    { label: 'Clubs & NSS', key: 'activities-clubs-nss' },
    { label: 'Student Clubs & Societies', key: 'infrastructure-clubs' },
    { label: 'EDC/NISP', key: 'activities-edc' },
    { label: 'College Magazine', key: 'activities-magazine' },
    { label: 'Weekly News Letter', key: 'activities-newsletter' },
    { label: 'IITM PALS', key: 'activities-iitm-pals' },
    { label: 'NCC', key: 'activities-ncc' },
    { label: 'Extension Activities', key: 'activities-extension' },
    { label: 'RIT-RedHat Academy', key: 'activities-redhat' },
    { label: 'Higher Education Details', key: 'activities-higher-education' },
    { label: 'Open Educational Resources (OER)', key: 'activities-oer' },
    { label: 'Event Gallery', href: 'https://www.ritrjpm.ac.in/gallery/event-gallery.php' },
    { label: 'Campus Gallery', href: 'https://www.ritrjpm.ac.in/gallery/campus-gallery.php' },
  ],
  'Research & Innovation': [
    { label: 'Overview', key: 'research-overview' },
    { label: 'RC Policy', key: 'research-policy' },
    {
      label: 'Academic Research',
      subItems: [
        { label: 'PhD Awarded', key: 'research-academic-phd-awarded' },
        { label: 'Publications', key: 'research-academic-publications' },
      ]
    },
    { label: 'Funded Research (Sponsored Projects)', key: 'research-sponsored-projects' },
    { label: 'IPR', key: 'research-ipr' },
    {
      label: 'AU Recognized Research Centres',
      subItems: [
        { label: 'AU Recognized Supervisors', key: 'research-supervisors' },
      ]
    },
    { label: 'Consultancy', key: 'research-consultancy' },
    { label: 'Research Incentives', key: 'research-incentives' },
    { label: 'Vision, Mission & Quality Objectives (IIIC)', key: 'iic-vision-mission' },
    { label: 'Department Level Co-ordinators (IIIC)', key: 'iic-coordinators' },
    { label: 'Institute-Industry MoU (IIIC)', key: 'iic-industry-mou' },
    { label: 'Institute-Institute MoU (IIIC)', key: 'iic-institute-mou' },
    { label: 'MoU Activities (IIIC)', key: 'iic-mou-activities' },
    { label: 'IDEA Lab Vision', key: 'idealab-vision' },
    { label: 'IDEA Lab Members', key: 'idealab-members' },
    { label: 'IDEA Lab Facilities', key: 'idealab-facilities' },
    { label: 'IDEA Lab Activities/Events', key: 'idealab-activities' },
    { label: 'IDEA Lab Tender Details', key: 'idealab-tenders' },
  ]
}

// Sidecards details for each Mega Menu Category
const menuHighlights: Record<string, { title: string; desc: string; stat?: string; icon: LucideIcon }> = {
  'About': { title: 'Excellence Since 2013', desc: 'RIT was founded by the prestigious Ramco Group to build engineering leaders.', icon: GraduationCap },
  'Admission': { title: 'Admissions Open 2026-27', desc: 'Apply today for B.E/B.Tech and M.E degrees. Various scholarships available.', stat: 'Counselling Code 4678', icon: BookOpen },
  'Departments': { title: '9 Specializations', desc: 'Modern academic laboratories and highly qualified faculty members.', stat: '27 Research Labs', icon: Cpu },
  'Academics': { title: 'Industry-Aligned', desc: 'Innovative curriculum focused on building practical, job-ready capabilities.', icon: Trophy },
  'Placements': { title: 'Outstanding Outcomes', desc: 'Join top MNC recruits with industry-leading CTC options.', stat: '92% Placement Rate', icon: Briefcase },
  'Infrastructure': { title: 'Smart Green Campus', desc: 'World-class academic buildings, advanced laboratories, and hostels.', stat: '100% Eco-Friendly', icon: GraduationCap },
  'Campus Life & Gallery': { title: 'Vibrant Campus Life', desc: 'Participate in professional societies, technical clubs, NCC and sports.', icon: Trophy },
  'Research & Innovation': { title: 'Innovation Focus', desc: 'Funded projects, consultancy services and active research centers.', stat: '120+ Awards', icon: Cpu },
  'IIIC': { title: 'Active Industry Connect', desc: 'MoUs and joint initiatives with prominent industrial companies.', icon: Briefcase },
  'IDEA Lab': { title: 'AICTE Sponsored', desc: 'First-of-its-kind digital prototyping lab supporting student innovators.', stat: '₹1.1 Crore Lab', icon: Cpu }
}

interface HeaderProps {
  onSelectPage: (key: string | null) => void
}

export default function Header({ onSelectPage }: HeaderProps) {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({})

  const toggleMobileExpand = (label: string) => {
    setMobileExpanded(prev => ({ ...prev, [label]: !prev[label] }))
  }

  return (
    <>
      <header className="site-header">
        {/* Top Info Bar */}
        <div className="header-top-bar">
          <div className="top-bar-container">
            <div className="nav-contact-group">
              <a href="tel:+914563233400"><Phone size={13} /> 04563 233400 / 04563 233401</a>
              <a href="mailto:rit@ritrjpm.ac.in"><Mail size={13} /> rit@ritrjpm.ac.in</a>
              <span className="nav-location"><MapPin size={13} /> Rajapalayam, Tamil Nadu</span>
            </div>
            <div className="nav-counselling-code">
              <User size={13} />
              <span>Counselling Code : 4678</span>
            </div>
          </div>
        </div>

        <nav className="navbar unified-nav" aria-label="Primary navigation">
          {/* Left: Brand Logo & Text */}
          <div className="nav-brand" onClick={() => {
            onSelectPage(null)
            navigate('/')
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}>
            <img src="/ritlogo.png" className="nav-logo" alt="RIT Logo" />
            <div className="brand-divider" />
            <div className="brand-text-wrapper">
              <span className="brand-title">Ramco Institute</span>
              <span className="brand-subtitle">Of Technology</span>
            </div>
          </div>

          {/* Center: Navigation Links */}
          <div className="nav-links">
            {navItems.map((item) => {
              const items = subMenus[item.label]

              return (
                <div className="nav-item-container" key={item.label}>
                  <a
                    href={item.href}
                    className={activeSubmenu === item.label ? 'hover-active' : ''}
                    onClick={(e) => {
                      if (item.label === 'Home') {
                        e.preventDefault()
                        onSelectPage(null)
                        navigate('/')
                        setActiveSubmenu(null)
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                        return
                      }
                      if (item.label === 'Contact Us') {
                        e.preventDefault()
                        onSelectPage(null)
                        navigate('/')
                        setActiveSubmenu(null)
                        setTimeout(() => {
                          const contactEl = document.getElementById('contact')
                          if (contactEl) {
                            contactEl.scrollIntoView({ behavior: 'smooth' })
                          }
                        }, 100)
                        return
                      }
                      if (item.label === 'Departments') {
                        e.preventDefault()
                        navigate('/departments')
                        setActiveSubmenu(null)
                        return
                      }
                      if (items) {
                        e.preventDefault()
                        setActiveSubmenu(prev => prev === item.label ? null : item.label)
                      }
                    }}
                  >
                    {item.label}
                    {items && (
                      <ChevronDown
                        size={12}
                        className="chevron"
                        style={{
                          transform: activeSubmenu === item.label ? 'rotate(180deg)' : 'none',
                          transition: 'transform 0.2s ease',
                          marginLeft: '4px'
                        }}
                      />
                    )}
                  </a>
                </div>
              )
            })}
          </div>

          {/* Right: Actions */}
          <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Button variant="secondary" size="icon" onClick={() => setMenuOpen(true)} aria-label="Open menu">
              <Menu />
            </Button>
          </div>
        </nav>
      </header>

      {/* Glassmorphic Side Navigation Drawer */}
      <AnimatePresence>
        {activeSubmenu && subMenus[activeSubmenu] && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              className="drawer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveSubmenu(null)}
            />

            {/* Drawer panel */}
            <motion.div
              className="nav-drawer-panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35, ease: 'easeInOut' }}
            >
              {/* Premium Background Glow Effect circles */}
              <div className="drawer-glow-1" />
              <div className="drawer-glow-2" />

              <div className="drawer-header">
                <div>
                  <span className="drawer-category-meta">EXPLORE SECTION</span>
                  <h2>{activeSubmenu}</h2>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setActiveSubmenu(null)}
                  className="drawer-close-btn"
                  aria-label="Close drawer"
                >
                  <X size={20} />
                </Button>
              </div>

              <div className="drawer-content">
                {/* Showcase Highlight Card */}
                {menuHighlights[activeSubmenu] && (
                  <div className="drawer-highlight">
                    <div className="highlight-card">
                      <div className="highlight-icon">
                        {(() => {
                          const Icon = menuHighlights[activeSubmenu].icon
                          return <Icon size={24} />
                        })()}
                      </div>
                      <h3>{menuHighlights[activeSubmenu].title}</h3>
                      <p>{menuHighlights[activeSubmenu].desc}</p>
                      {menuHighlights[activeSubmenu].stat && (
                        <div className="highlight-badge">
                          {menuHighlights[activeSubmenu].stat}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Submenu Links list */}
                <div className="drawer-links-section">
                  <h3>Available Sections</h3>
                  <div className="drawer-links-list">
                    {subMenus[activeSubmenu].map((subItem, index) => {
                      const itemNumber = String(index + 1).padStart(2, '0')
                      
                      if (subItem.subItems) {
                        return (
                          <div key={subItem.label} className="drawer-subgroup">
                            <div className="drawer-subgroup-title">
                              {subItem.label}
                            </div>
                            <div className="drawer-subgroup-items">
                              {subItem.subItems.map((lvl2Item) => (
                                <button
                                  key={lvl2Item.key}
                                  onClick={() => {
                                    onSelectPage(lvl2Item.key)
                                    setActiveSubmenu(null)
                                  }}
                                  className="drawer-dropdown-link level-2-link"
                                >
                                  <span className="text">{lvl2Item.label}</span>
                                  <ArrowRight size={14} className="link-arrow" />
                                </button>
                              ))}
                            </div>
                          </div>
                        )
                      }

                      if (subItem.href) {
                        return (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="drawer-dropdown-link"
                            onClick={() => setActiveSubmenu(null)}
                          >
                            <span className="link-number">{itemNumber}</span>
                            <span className="text">{subItem.label}</span>
                            <ExternalLink size={16} className="link-external-icon" style={{ marginLeft: 'auto', opacity: 0.6 }} />
                          </a>
                        )
                      }

                      return (
                        <button
                          key={subItem.key}
                          onClick={() => {
                            if (subItem.key) onSelectPage(subItem.key)
                            setActiveSubmenu(null)
                          }}
                          className="drawer-dropdown-link"
                        >
                          <span className="link-number">{itemNumber}</span>
                          <span className="text">{subItem.label}</span>
                          <ArrowRight size={16} className="link-arrow" />
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.aside
            className="overlay-menu"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className="overlay-header">
              <strong>Navigation Menu</strong>
              <Button variant="ghost" size="icon" onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <X />
              </Button>
            </div>

            <div className="overlay-links-container">
              {navItems.map((item) => {
                const items = subMenus[item.label]
                const isExpanded = mobileExpanded[item.label]

                return (
                  <div key={item.label} className="mobile-nav-group">
                    {items ? (
                      <>
                        <button
                          className="mobile-group-title"
                          onClick={() => toggleMobileExpand(item.label)}
                        >
                          <span>{item.label}</span>
                          <ChevronDown size={18} style={{ transform: isExpanded ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
                        </button>
                        {isExpanded && (
                          <div className="mobile-sub-links">
                            {items.map((subItem) => {
                              if (subItem.subItems) {
                                return (
                                  <div key={subItem.label} className="mobile-subgroup" style={{ width: '100%' }}>
                                    <div className="mobile-subgroup-title" style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: '#64748b', padding: '6px 12px 2px' }}>
                                      {subItem.label}
                                    </div>
                                    <div className="mobile-subgroup-items" style={{ paddingLeft: '12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                      {subItem.subItems.map((lvl2) => (
                                        <button
                                          key={lvl2.key}
                                          onClick={() => {
                                            onSelectPage(lvl2.key)
                                            setMenuOpen(false)
                                          }}
                                          className="mobile-sub-link"
                                          style={{ fontSize: '13px', opacity: 0.85 }}
                                        >
                                          • {lvl2.label}
                                        </button>
                                      ))}
                                    </div>
                                  </div>
                                )
                              }
                              if (subItem.href) {
                                return (
                                  <a
                                    key={subItem.label}
                                    href={subItem.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mobile-sub-link"
                                    onClick={() => setMenuOpen(false)}
                                    style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                                  >
                                    {subItem.label} <ExternalLink size={12} />
                                  </a>
                                )
                              }
                              return (
                                <button
                                  key={subItem.key}
                                  onClick={() => {
                                    if (subItem.key) onSelectPage(subItem.key)
                                    setMenuOpen(false)
                                  }}
                                  className="mobile-sub-link"
                                >
                                  {subItem.label}
                                </button>
                              )
                            })}
                          </div>
                        )}
                      </>
                    ) : (
                      <a
                        href={item.href}
                        onClick={(e) => {
                          setMenuOpen(false)
                          if (item.label === 'Home') {
                            e.preventDefault()
                            onSelectPage(null)
                            navigate('/')
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          } else if (item.label === 'Contact Us') {
                            e.preventDefault()
                            onSelectPage(null)
                            navigate('/')
                            setTimeout(() => {
                              const contactEl = document.getElementById('contact')
                              if (contactEl) {
                                contactEl.scrollIntoView({ behavior: 'smooth' })
                              }
                            }, 100)
                          }
                        }}
                        className="mobile-group-title-link"
                      >
                        {item.label}
                      </a>
                    )}
                  </div>
                )
              })}
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}
