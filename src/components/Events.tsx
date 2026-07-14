import { useState, useRef, useEffect } from 'react'
import { Calendar, ArrowUpRight, ArrowRight, BookOpen, GraduationCap, Award, Code, Cpu, Scale, Leaf, Edit, Grid, Volume2, Shield, Users, ChevronRight, ChevronLeft, Handshake, Lightbulb, Flame, Mic, Sparkles } from 'lucide-react'
import { resolveLocalScrapedImage } from '../utils/localScrapedImages'
import { useCMS } from './CMSContext'
import { EditEventsModal } from './CMSModals'

const iconMap: Record<string, any> = {
  BookOpen, GraduationCap, Award, Code, Cpu, Scale, Leaf, Calendar, Volume2, Shield, Users
}

export default function Events() {
  const { eventsList, isAuthenticated } = useCMS()
  const [isEditOpen, setIsEditOpen] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  const slide = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector('.premium-event-card')
      if (card) {
        const cardWidth = card.clientWidth + 20
        sliderRef.current.scrollBy({
          left: direction === 'left' ? -cardWidth : cardWidth,
          behavior: 'smooth'
        })
      }
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth
        if (sliderRef.current.scrollLeft >= maxScrollLeft - 10) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          const card = sliderRef.current.querySelector('.premium-event-card')
          if (card) {
            const cardWidth = card.clientWidth + 20
            sliderRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' })
          }
        }
      }
    }, 4500)

    return () => clearInterval(interval)
  }, [eventsList])

  return (
    <section className="events-section-premium" id="events">
      {isAuthenticated && (
        <button 
          className="admin-edit-btn" 
          style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 100 }}
          onClick={() => setIsEditOpen(true)}
        >
          <Edit size={16} /> Edit Events
        </button>
      )}

      <div className="events-main-row">
        {/* Left Column: Sidebar Card */}
        <div className="events-sidebar-card">
          <div className="sidebar-header">
            <img src="/ritlogo.png" className="sidebar-logo" alt="RIT Logo" />
            <span className="sidebar-college-name">RAMCO INSTITUTE OF TECHNOLOGY</span>
          </div>
          
          <div className="sidebar-gold-line" />
          
          <div className="sidebar-body">
            <h2>
              Latest <span className="highlight-gold">Events</span> &amp; <br />
              Activities
            </h2>
            <p>
              Explore our recent events and activities that reflect our commitment to learning, innovation, and societal impact.
            </p>
          </div>
          
          <a href="#events" className="sidebar-btn-view-all">
            <span>View All Events</span>
            <div className="sidebar-btn-arrow">
              <ArrowRight size={14} />
            </div>
          </a>
        </div>

        {/* Right Column: Events Slider */}
        <div className="events-slider-premium-wrapper">

          <div className="events-slider-premium-track" ref={sliderRef}>
            {eventsList.map((event, index) => {
              const IconComponent = iconMap[event.icon] || Calendar
              const resolvedImg = resolveLocalScrapedImage(event.image) || event.image;
              
              return (
                <a 
                  href={event.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="premium-event-card" 
                  key={`${event.title}-${index}`}
                >
                  <div className="premium-event-img-box">
                    <div className="premium-event-icon-badge">
                      <IconComponent size={15} />
                    </div>
                    <img src={resolvedImg} alt={event.title} loading="lazy" />
                  </div>
                  
                  <div className="premium-event-info">
                    <div className="premium-event-meta">
                      <span className="premium-event-tag">
                        {event.category}
                      </span>
                      <span className="premium-event-year">
                        {event.date}
                      </span>
                    </div>
                    
                    <h4 className="premium-event-title">{event.title}</h4>
                    <p className="premium-event-desc">{event.description}</p>
                    
                    <div className="premium-event-footer">
                      <div className="premium-event-arrow-btn">
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>

      {/* Bottom Ribbon */}
      <div className="events-bottom-ribbon-premium">
        <div className="ribbon-tab-btn">
          <Flame size={15} />
          <span>Campus Buzz</span>
        </div>
        <div className="ribbon-tab-btn">
          <Calendar size={15} />
          <span>Live Events</span>
        </div>
        <div className="ribbon-tab-btn">
          <Mic size={15} />
          <span>Tech Talks</span>
        </div>
        <div className="ribbon-tab-btn">
          <Sparkles size={15} />
          <span>Student Spotlight</span>
        </div>
      </div>

      {isEditOpen && <EditEventsModal onClose={() => setIsEditOpen(false)} />}
    </section>
  )
}
