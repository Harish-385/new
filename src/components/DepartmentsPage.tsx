import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { 
  BookOpen, Users, GraduationCap, FlaskConical, Handshake, 
  Code, Cpu, Zap, Settings, Building2, Compass, Network, 
  ShieldCheck, ArrowRight, Play, Home, ChevronRight
} from 'lucide-react'
import Header from './Header'
import Footer from './Footer'
import DetailOverlay from './DetailOverlay'
import FacultyProfilePage from './FacultyProfilePage'
import { LoginModal, AnalyticsModal } from './CMSModals'
import AdminPanel from './AdminPanel'
import { useCMS } from './CMSContext'
import './DepartmentsPage.css'

interface SubpageItem {
  label: string
  key: string
}

interface Department {
  code: string
  key?: string
  name: string
  desc: string
  icon: React.ComponentType<any>
  category: 'Engineering' | 'Science & Humanities'
  subpages?: SubpageItem[]
  image: string
}

const deptList: Department[] = [
  {
    code: 'civil',
    key: 'departments-civil',
    name: 'Civil Engineering',
    desc: 'Building strong foundations for a better tomorrow.',
    icon: Building2,
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop'
  },
  {
    code: 'cse',
    key: 'departments-cse',
    name: 'Computer Science & Engineering',
    desc: 'Innovating with software, systems, and emerging technologies.',
    icon: Code,
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop'
  },
  {
    code: 'eee',
    key: 'departments-eee',
    name: 'Electrical & Electronics Engg',
    desc: 'Driving the future with power and automation.',
    icon: Zap,
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=600&auto=format&fit=crop'
  },
  {
    code: 'ece',
    key: 'departments-ece',
    name: 'Electronics & Communication Engg',
    desc: 'Empowering communication through electronics innovation.',
    icon: Cpu,
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop'
  },
  {
    code: 'mech',
    key: 'departments-mech',
    name: 'Mechanical Engineering',
    desc: 'Designing tomorrow with precision and creativity.',
    icon: Settings,
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop'
  },
  {
    code: 'aids',
    key: 'departments-aids',
    name: 'B.Tech AI & Data Science',
    desc: 'Intelligent systems for a smarter future.',
    icon: Cpu,
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop'
  },
  {
    code: 'csbs',
    key: 'departments-csbs',
    name: 'B.Tech CS & Business Systems',
    desc: 'Combining technical excellence with business strategies.',
    icon: Network,
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop'
  },
  {
    code: 'it',
    key: 'departments-it',
    name: 'B.Tech Information Technology',
    desc: 'Empowering digital transformation through modern IT solutions.',
    icon: Compass,
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop'
  },
  {
    code: 'aiml',
    key: 'departments-aiml',
    name: 'CSE (AI & ML)',
    desc: 'Focusing on advanced machine learning algorithms and AI architectures.',
    icon: Cpu,
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&auto=format&fit=crop'
  },
  {
    code: 'csec',
    key: 'departments-csec',
    name: 'CSE (Cyber Security)',
    desc: 'Securing modern networks, software, and systems.',
    icon: ShieldCheck,
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop'
  },
  {
    code: 'physics',
    key: 'departments-physics',
    name: 'Physics (S&H)',
    desc: 'Exploring the fundamental laws of energy and matter.',
    icon: FlaskConical,
    category: 'Science & Humanities',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop'
  },
  {
    code: 'chemistry',
    key: 'departments-chemistry',
    name: 'Chemistry (S&H)',
    desc: 'Investigating molecular structures, reactions, and synthesis.',
    icon: FlaskConical,
    category: 'Science & Humanities',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop'
  },
  {
    code: 'maths',
    key: 'departments-maths',
    name: 'Mathematics (S&H)',
    desc: 'Developing logic, abstract patterns, and numerical models.',
    icon: BookOpen,
    category: 'Science & Humanities',
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=600&auto=format&fit=crop'
  },
  {
    code: 'english',
    key: 'departments-english',
    name: 'English (S&H)',
    desc: 'Fostering global communication, literacy, and literature appreciation.',
    icon: BookOpen,
    category: 'Science & Humanities',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600&auto=format&fit=crop'
  }
]

export default function DepartmentsPage() {
  const navigate = useNavigate()
  const { isAuthenticated, logout } = useCMS()
  
  const [activePageKey, setActivePageKey] = useState<string | null>(null)
  const [activeFacultyProfile, setActiveFacultyProfile] = useState<{ name: string; departmentName: string; image?: string | null } | null>(null)
  
  // Modals states
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isAnalyticsOpen, setIsAnalyticsOpen] = useState(false)
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false)
  
  // Subpage selection states for S&H and Basic Science
  const [showSubpageSelector, setShowSubpageSelector] = useState<string | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    
    const handleViewProfile = (e: Event) => {
      const customEvent = e as CustomEvent<{ name: string; departmentName: string; image?: string | null }>
      setActiveFacultyProfile(customEvent.detail)
    }
    window.addEventListener('view-faculty-profile', handleViewProfile)
    return () => {
      window.removeEventListener('view-faculty-profile', handleViewProfile)
    }
  }, [])

  const handleCardClick = (dept: Department) => {
    if (dept.subpages) {
      // Toggle showing options
      setShowSubpageSelector(prev => prev === dept.code ? null : dept.code)
    } else if (dept.key) {
      setActivePageKey(dept.key)
      setShowSubpageSelector(null)
    }
  }

  return (
    <div className="departments-page-root">
      {/* Admin Banner */}
      {isAuthenticated && (
        <div className="admin-banner-bar">
          <div className="admin-banner-left">
            <span className="admin-icon">🛠️</span>
            <span>Admin Edit Mode Active</span>
          </div>
          <div className="admin-banner-right">
            <button onClick={() => setIsAnalyticsOpen(true)} className="admin-btn">View Analytics</button>
            <button onClick={() => setIsAdminPanelOpen(true)} className="admin-btn cms">CMS Dashboard</button>
            <button onClick={logout} className="admin-btn logout">Logout</button>
          </div>
        </div>
      )}

      {/* Navigation Header */}
      <Header onSelectPage={setActivePageKey} />

      {/* Breadcrumbs & Hero Main */}
      <section className="depts-hero-section">
        {/* Flipped Background image container */}
        <div className="depts-hero-bg-image" />
        
        {/* Layered S-Curve Backdrop */}
        <div className="depts-hero-backdrop">
          {/* Trim Layer (Gold-Beige) */}
          <svg className="backdrop-curve trim-layer" viewBox="0 0 1000 500" preserveAspectRatio="none">
            <path d="M 0,0 L 370,0 C 380,50 400,100 390,180 C 380,250 440,380 520,440 C 560,470 600,490 620,500 L 0,500 Z" fill="#e5ccb3" />
          </svg>
          {/* Main Card Layer (Cream-White) */}
          <svg className="backdrop-curve main-layer" viewBox="0 0 1000 500" preserveAspectRatio="none">
            <path d="M 0,0 L 350,0 C 360,50 380,100 370,180 C 360,250 420,380 500,440 C 540,470 580,490 600,500 L 0,500 Z" fill="#fdf3dc" />
          </svg>
        </div>

        <div className="depts-hero-container">
          <div className="depts-hero-text">
            {/* Breadcrumbs */}
            <div className="depts-breadcrumbs">
              <span onClick={() => navigate('/')} className="breadcrumb-link"><Home size={13} /> Home</span>
              <ChevronRight size={11} className="breadcrumb-arrow" />
              <span className="breadcrumb-current">Departments</span>
            </div>
            
            <h1 className="depts-main-title">Our<br />Departments</h1>
            
            {/* Custom Divider Line with Dot */}
            <div className="depts-custom-divider">
              <span className="custom-divider-line" />
              <span className="custom-divider-dot" />
            </div>

            <p className="depts-main-subtitle">
              Explore our diverse departments that drive innovation, excellence and holistic education.
            </p>

            {/* Stacked key points with vertical dividers */}
            <div className="depts-key-points">
              <div className="key-point-item">
                <div className="key-point-icon-box">
                  <BookOpen size={18} />
                </div>
                <div className="key-point-text">
                  <span className="line1">Industry</span>
                  <span className="line2">Aligned Curriculum</span>
                </div>
              </div>
              <div className="key-point-divider" />
              <div className="key-point-item">
                <div className="key-point-icon-box">
                  <Users size={18} />
                </div>
                <div className="key-point-text">
                  <span className="line1">Experienced</span>
                  <span className="line2">Faculty</span>
                </div>
              </div>
              <div className="key-point-divider" />
              <div className="key-point-item">
                <div className="key-point-icon-box">
                  <GraduationCap size={18} />
                </div>
                <div className="key-point-text">
                  <span className="line1">Holistic</span>
                  <span className="line2">Development</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Banner Image */}
          <div className="depts-hero-banner">
            <img src="/clg1.png" alt="Ramco Institute of Technology Campus" className="hero-banner-img-mock" />
          </div>
        </div>
      </section>



      {/* Section 4: Departments Grid */}
      <section className="depts-grid-section">
        <div className="depts-grid-container">
          <h2 className="depts-grid-title">
            YOUR JOURNEY.<br />YOUR DEPARTMENT.
          </h2>

          {/* Grid Layout */}
          <div className="depts-cards-grid">
            {deptList.map((dept) => {
              const Icon = dept.icon
              const isSelected = showSubpageSelector === dept.code

              return (
                <div 
                  key={dept.code} 
                  className={`dept-grid-card ${dept.subpages ? 'has-subpages' : ''} ${isSelected ? 'selector-active' : ''}`}
                  onClick={() => handleCardClick(dept)}
                >
                  {/* Top section: cinematic photograph with rounded top corners */}
                  <div className="dept-card-header-visual">
                    <img src={dept.image} className="dept-card-img" alt={dept.name} />
                    <div className="dept-card-img-overlay" />
                    
                    {/* Organic wave separator SVG */}
                    <svg className="dept-card-wave-separator" viewBox="0 0 340 60" preserveAspectRatio="none">
                      <path d="M0,20 Q170,50 340,20 L340,60 L0,60 Z" fill="#5B3518" />
                      <path d="M0,20 Q170,50 340,20" fill="none" stroke="#C8923A" strokeWidth="2" opacity="0.8" />
                    </svg>
                  </div>

                  {/* Circular Floating Icon Badge */}
                  <div className="dept-card-icon-badge">
                    <Icon size={28} className="dept-card-badge-icon" />
                  </div>

                  {/* Bottom section: Content */}
                  <div className="dept-card-body-content">
                    <h3 className="dept-card-title">{dept.name}</h3>
                    
                    {/* Golden underline with dot */}
                    <div className="dept-title-line-container">
                      <div className="dept-title-line" />
                      <div className="dept-title-dot" />
                    </div>

                    <p className="dept-card-desc">{dept.desc}</p>

                    {/* Actions Links */}
                    <div className="dept-card-actions-wrapper" onClick={(e) => e.stopPropagation()}>
                      {dept.subpages ? (
                        <div className="subpage-options-container">
                          <button 
                            className="view-details-trigger"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCardClick(dept);
                            }}
                          >
                            <span>{isSelected ? 'Close' : 'Explore'}</span>
                            <ArrowRight size={15} className={`arrow-icon ${isSelected ? 'rotated' : ''}`} />
                          </button>
                          
                          <AnimatePresence>
                            {isSelected && (
                              <motion.div 
                                className="subpage-selector-bubble"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.2 }}
                              >
                                <p className="selector-title">Select specialization:</p>
                                <div className="selector-btn-grid">
                                  {dept.subpages.map((sub) => (
                                    <button 
                                      key={sub.key} 
                                      className="subpage-choice-btn"
                                      onClick={() => {
                                        setActivePageKey(sub.key)
                                        setShowSubpageSelector(null)
                                      }}
                                    >
                                      {sub.label}
                                    </button>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <button 
                          className="view-details-trigger" 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCardClick(dept);
                          }}
                        >
                          <span>Explore</span>
                          <ArrowRight size={15} className="arrow-icon" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer onOpenAdmin={() => navigate('/admin')} />

      {/* Full-screen Detailed Overlay */}
      <DetailOverlay pageKey={activePageKey} onClose={() => setActivePageKey(null)} />

      {/* Faculty Profile Overlay */}
      {activeFacultyProfile && (
        <FacultyProfilePage 
          facultyName={activeFacultyProfile.name}
          departmentName={activeFacultyProfile.departmentName}
          facultyImage={activeFacultyProfile.image}
          onClose={() => setActiveFacultyProfile(null)}
        />
      )}

      {/* CMS Modals */}
      <AnimatePresence>
        {isLoginOpen && (
          <LoginModal onClose={() => setIsLoginOpen(false)} />
        )}
        {isAnalyticsOpen && (
          <AnalyticsModal onClose={() => setIsAnalyticsOpen(false)} />
        )}
        {isAdminPanelOpen && (
          <AdminPanel onClose={() => setIsAdminPanelOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  )
}
