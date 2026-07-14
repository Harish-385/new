import { useRef } from 'react'
import { GraduationCap, Users, Award, BookOpen, ArrowRight, ChevronLeft, ChevronRight, Flag, TrendingUp, School, Rocket } from 'lucide-react'
import './GraduationBook.css'

const stats = [
  { value: '10+', label: 'Graduation Ceremonies', icon: GraduationCap },
  { value: '5000+', label: 'Graduates Empowered', icon: Users },
  { value: '25+', label: 'Years of Excellence', icon: Award },
  { value: '1000+', label: 'Success Stories', icon: BookOpen },
]

const timelineItems = [
  {
    year: '2014',
    title: 'First Graduation Day',
    desc: 'The beginning of a legacy of excellence and achievement.',
    image: '/gra1.jpg',
    icon: Flag
  },
  {
    year: '2016',
    title: 'Growing Stronger',
    desc: 'More dreams, more achievements, more reasons to be proud.',
    image: '/gra2.jpg',
    icon: Users
  },
  {
    year: '2018',
    title: 'Milestones of Success',
    desc: 'Celebrating talent, dedication and hard work.',
    image: '/gra3.jpeg',
    icon: Award
  },
  {
    year: '2020',
    title: 'Continuing the Legacy',
    desc: 'Striving for excellence and shaping future leaders.',
    image: '/gra4.jpeg',
    icon: TrendingUp
  },
  {
    year: '2022',
    title: 'Reaching New Heights',
    desc: 'Bigger goals, greater impact, brighter tomorrows.',
    image: '/gra5.jpg',
    icon: School
  },
  {
    year: '2024',
    title: 'A Future Unfolding',
    desc: 'Empowering graduates to create a better tomorrow.',
    image: '/gra6.jpeg',
    icon: Rocket
  }
]

export default function GraduationPhotos() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="graduation-section-premium" id="graduation">
      <div className="grad-container-grid">
        {/* Left Column: Copy & Stats */}
        <div className="grad-info-column">
          <div className="grad-legacy-preheader">
            <span className="grad-preheader-line"></span>
            <span className="grad-preheader-text">OUR LEGACY. THEIR FUTURE.</span>
            <span className="grad-preheader-line"></span>
          </div>

          <h2 className="grad-main-title">
            <span className="grad-cursive">Graduation</span>
            <span className="grad-bold-title">CHRONICLES</span>
          </h2>

          <div className="grad-divider-logo">
            <span className="grad-divider-line"></span>
            <div className="grad-shield-icon-wrapper">
              <img src="/ritlogo.png" className="grad-shield-icon" alt="RIT Logo" />
            </div>
            <span className="grad-divider-line"></span>
          </div>

          <p className="grad-subtext">
            Step through our history as we celebrate the milestones, academic triumphs, and proud moments of success of our graduates.
          </p>

          <div className="grad-stats-container">
            {stats.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <div className="grad-stat-card" key={idx}>
                  <div className="grad-stat-icon-circle">
                    <Icon size={18} />
                  </div>
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Right Column: 3D Book */}
        <div className="grad-book-column">
          <div className="book-wrapper-frame">
            {/* Preload images to keep them decoded in memory and prevent flickering during animations */}
            <div style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: 0, pointerEvents: 'none' }}>
              <img src="/gra1.jpg" alt="preload" />
              <img src="/gra2.jpg" alt="preload" />
              <img src="/gra3.jpeg" alt="preload" />
              <img src="/gra4.jpeg" alt="preload" />
              <img src="/gra5.jpg" alt="preload" />
              <img src="/gra6.jpeg" alt="preload" />
            </div>

            <div className="book-container">
              <div className="book">
                <div className="pages">
                  <div className="page"></div>
                  <div className="page"></div>
                  <div className="page"></div>
                  <div className="page"></div>
                  <div className="page"></div>
                  <div className="page"></div>
                </div>
                <div className="flips">
                  <div className="flip flip1">
                    <div className="flip flip2">
                      <div className="flip flip3">
                        <div className="flip flip4">
                          <div className="flip flip5">
                            <div className="flip flip6">
                              <div className="flip flip7"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Bottom overlap badge */}
            <div className="book-bottom-badge">
              <div className="book-bottom-badge-inner">
                <GraduationCap size={26} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Row */}
      <div className="grad-timeline-wrapper">
        <div className="timeline-section-title">
          <span className="title-diamond-line"></span>
          <span className="title-text">OUR JOURNEY OF EXCELLENCE</span>
          <span className="title-diamond-line"></span>
        </div>

        <div className="timeline-carousel-outer">
          <button className="timeline-arrow-btn left-arrow" onClick={() => scroll('left')} aria-label="Scroll left">
            <ChevronLeft size={20} />
          </button>
          
          <div className="timeline-carousel-track" ref={scrollContainerRef}>
            {timelineItems.map((item, idx) => {
              const Icon = item.icon
              return (
                <div className="timeline-item-card" key={idx}>
                  <div className="timeline-icon-badge">
                    <Icon size={16} />
                  </div>
                  <span className="timeline-year">{item.year}</span>
                  <h4 className="timeline-card-title">{item.title}</h4>
                  <p className="timeline-card-desc">{item.desc}</p>
                  <div className="timeline-card-img-wrapper">
                    <img src={item.image} alt={item.title} className="timeline-card-img" />
                  </div>
                </div>
              )
            })}
          </div>

          <button className="timeline-arrow-btn right-arrow" onClick={() => scroll('right')} aria-label="Scroll right">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Footer bar */}
      <div className="grad-section-footer">
        <div className="grad-footer-left">
          <div className="grad-footer-icon-circle">
            <BookOpen size={20} />
          </div>
          <p>
            Every milestone tells a story of passion, perseverance and pride.{' '}
            <span className="gold-text-highlight">Be a part of our legacy!</span>
          </p>
        </div>
        <a 
          href="https://www.ritrjpm.ac.in/alumni/alumni-corner.php" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="grad-footer-btn"
        >
          <span>EXPLORE OUR JOURNEY</span>
          <ArrowRight size={14} />
        </a>
      </div>
    </section>
  )
}
