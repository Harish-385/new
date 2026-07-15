import { useState, useRef, useEffect } from 'react'
import { ArrowRight, Play, Edit, Plus, Trash } from 'lucide-react'
import * as LucideIcons from 'lucide-react'
import { events } from '../data/constants'
import TiltedCard from './TiltedCard'
import OrbitImages from './OrbitImages'
import { useCMS } from './CMSContext'
import { EditStatsModal, EditCampusGalleryModal, AddEditNewsModal } from './CMSModals'

// Scroll-triggered animated counter for statistics values (e.g. "3000+")
function AnimatedCounter({ value }: { value: string }) {
  const [count, setCount] = useState(0)
  const elementRef = useRef<HTMLSpanElement>(null)
  const targetNumber = parseInt(value.replace(/[^0-9]/g, ''), 10) || 0
  const suffix = value.replace(/[0-9]/g, '')
  useEffect(() => {
    let startTimestamp: number | null = null
    const duration = 1600
    let animationFrameId: number
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      const easeProgress = progress * (2 - progress)
      setCount(Math.floor(easeProgress * targetNumber))
      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step)
      } else {
        setCount(targetNumber)
      }
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animationFrameId = window.requestAnimationFrame(step)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (elementRef.current) {
      observer.observe(elementRef.current)
    }
    return () => {
      observer.disconnect()
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId)
      }
    }
  }, [targetNumber])
  return <span ref={elementRef}>{count}{suffix}</span>
}

export default function Dashboard() {
  const { homepageConfig, newsList, galleryVideos, isAuthenticated, deleteNewsItem } = useCMS()
  const [playingIds, setPlayingIds] = useState<Record<string, boolean>>({})
  const [activeModal, setActiveModal] = useState<'stats' | 'gallery' | 'news_add' | 'news_edit' | null>(null)
  const [editingNewsItem, setEditingNewsItem] = useState<any | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const cardRefCallback = (el: HTMLElement | null) => {
    if (!el) return

    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.getAttribute('data-video-id')
              if (id) {
                setPlayingIds((prev) => ({ ...prev, [id]: true }))
                observerRef.current?.unobserve(entry.target)
              }
            }
          })
        },
        { threshold: 0.25 }
      )
    }

    observerRef.current.observe(el)
  }

  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  return (
    <section className="home-dashboard" aria-label="RIT overview" style={{ position: 'relative' }}>
      
      <div className="stats-ribbon">
        <div className="stats-ribbon-left-arrow" />
        <div className="stats-ribbon-right-arrow" />
        {homepageConfig.stats.map((stat) => {
          const IconComponent = (LucideIcons as any)[stat.icon] || LucideIcons.BookOpen
          return (
            <article className="stat-item" data-tone={stat.tone} key={stat.label || stat.value}>
              <span className="stat-item-icon-wrapper">
                <IconComponent />
              </span>
              <strong className="stat-item-value">
                <AnimatedCounter value={stat.value} />
              </strong>
              <div className="stat-item-line" />
              {stat.label && <span className="stat-item-label">{stat.label}</span>}
            </article>
          )
        })}
      </div>

      <div className="campus-gallery-section" style={{ position: 'relative' }}>
        
        <div className="gallery-heading">

          <h2>Experience RIT in Motion</h2>
          <span className="heading-divider" aria-hidden="true"><i /><i /><i /></span>
        </div>

        <div className="gallery-grid">
          {galleryVideos.map((video) => {
            const isPlaying = playingIds[video.id]
            return (
              <article
                className="gallery-card"
                key={video.id}
                data-video-id={video.id}
                ref={(el) => cardRefCallback(el)}
              >
                <div className="video-container">
                  {isPlaying ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&loop=1&playlist=${video.id}&controls=0&disablekb=1&fs=0&modestbranding=1&iv_load_policy=3&playsinline=1&rel=0`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="video-iframe"
                    ></iframe>
                  ) : (
                    <div
                      className="video-thumbnail-wrapper"
                      onClick={() => setPlayingIds(prev => ({ ...prev, [video.id]: true }))}
                      style={{ overflow: 'visible', background: 'transparent', height: '100%', width: '100%' }}
                    >
                      <TiltedCard
                        imageSrc={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                        altText={`${video.title} Thumbnail`}
                        containerHeight="100%"
                        containerWidth="100%"
                        imageHeight="100%"
                        imageWidth="100%"
                        rotateAmplitude={10}
                        scaleOnHover={1.05}
                        showTooltip={false}
                        displayOverlayContent
                        overlayContent={
                          <div className="play-button-overlay" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(6, 24, 70, 0.25)', borderRadius: '12px' }}>
                            <span className="play-icon-glow" style={{ transform: 'translateZ(25px)' }}>
                              <Play className="play-icon" size={20} fill="currentColor" />
                            </span>
                          </div>
                        }
                      />
                    </div>
                  )}
                </div>
                <div className="video-info">
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      <div className="campus-orbit-section" style={{ marginTop: '25px', marginBottom: '25px', marginLeft: 'calc(-1 * clamp(24px, 4vw, 80px))', marginRight: 'calc(-1 * clamp(24px, 4vw, 80px))', position: 'relative', textAlign: 'center', background: '#fdf3dc', padding: '48px clamp(24px, 4vw, 80px)', borderRadius: '0' }}>
        <div className="gallery-heading" style={{ marginBottom: '16px', gap: '4px' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)', marginBottom: 0 }}>Student Spotlight</h2>
          <span className="heading-divider" aria-hidden="true" style={{ marginTop: '2px' }}><i /><i /><i /></span>
        </div>
        <OrbitImages
          images={[
            "/boy.jpg",
            "/girls.jpg",
            "/girls1.jpg",
            "/libgirl.jpg",
            "/sir.jpg",
            "/sportboy.jpg",
            "/ROBO.png"
          ]}
          shape="ellipse"
          radiusX={580}
          radiusY={200}
          rotation={-8}
          duration={30}
          itemSize={280}
          responsive={true}
          radius={320}
          direction="normal"
          fill
          showPath
          paused={false}
        />
      </div>

      <div className="updates-grid">
        <section className="events-panel-new">
          <div className="panel-header-new events-header-bg">
            <div className="header-left">
              <LucideIcons.Calendar className="header-icon" size={18} />
              <h3>UPCOMING EVENTS</h3>
            </div>
            <a href="#home" className="header-link">
              View All Events <LucideIcons.ArrowRight size={14} />
            </a>
          </div>

          <div className="event-list-new">
            {/* Top row with two cards separated by vertical line */}
            <div className="event-row-top">
              {events[0] && (
                <article className="event-card-new">
                  <div className="event-time-badge">
                    <span className="event-month">{events[0][0]}</span>
                    <strong className="event-day">{events[0][1]}</strong>
                  </div>
                  <div className="event-info">
                    <h4>{events[0][2]}</h4>
                    <p>{events[0][3]}</p>
                    <small>{events[0][4]}</small>
                  </div>
                </article>
              )}
              
              <div className="event-vertical-divider" />

              {events[1] && (
                <article className="event-card-new">
                  <div className="event-time-badge">
                    <span className="event-month">{events[1][0]}</span>
                    <strong className="event-day">{events[1][1]}</strong>
                  </div>
                  <div className="event-info">
                    <h4>{events[1][2]}</h4>
                    <p>{events[1][3]}</p>
                    <small>{events[1][4]}</small>
                  </div>
                </article>
              )}
            </div>

            {/* Horizontal Divider */}
            <div className="event-horizontal-divider" />

            {/* Bottom row containing the third card */}
            {events[2] && (
              <div className="event-card-bottom">
                <article className="event-card-new">
                  <div className="event-time-badge">
                    <span className="event-month">{events[2][0]}</span>
                    <strong className="event-day">{events[2][1]}</strong>
                  </div>
                  <div className="event-info">
                    <h4>{events[2][2]}</h4>
                    <p>{events[2][3]}</p>
                    <small>{events[2][4]}</small>
                  </div>
                </article>
              </div>
            )}

            {/* Giant Calendar Watermark in Background */}
            <LucideIcons.Calendar className="event-watermark-icon" size={140} />
          </div>
        </section>

        <section className="announcements-panel-new">
          <div className="panel-header-new announcements-header-bg">
            <div className="header-left">
              <LucideIcons.Megaphone className="header-icon" size={18} />
              <h3>ANNOUNCEMENTS</h3>
              {isAuthenticated && (
                <button
                  onClick={() => setActiveModal('news_add')}
                  style={{
                    background: 'rgba(217, 164, 65, 0.1)',
                    border: '1px solid rgba(217, 164, 65, 0.25)',
                    borderRadius: '12px',
                    padding: '4px 10px',
                    color: '#D9A441',
                    fontWeight: 700,
                    fontSize: '11px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    marginLeft: '12px'
                  }}
                >
                  <Plus size={12} /> Add
                </button>
              )}
            </div>
            <a href="#home" className="header-link gold-link">
              View All <LucideIcons.ArrowRight size={14} />
            </a>
          </div>

          <div className="announcement-list-new">
            {newsList.map((item) => {
              const dateObj = new Date(item.published_at)
              const day = String(dateObj.getDate()).padStart(2, '0')
              const month = dateObj.toLocaleString('default', { month: 'short' }).toUpperCase()
              return (
                <article className="announcement-card-new" key={item.id}>
                  <div className="announcement-time-badge">
                    <strong className="announcement-day">{day}</strong>
                    <span className="announcement-month">{month}</span>
                  </div>

                  {item.thumbnail_url && (
                    <img
                      src={item.thumbnail_url}
                      alt="News thumbnail"
                      className="announcement-thumbnail"
                    />
                  )}

                  <div className="announcement-content">
                    <div className="announcement-header-row">
                      <h4>{item.title}</h4>
                      {isAuthenticated && (
                        <div style={{ display: 'flex', gap: '6px', marginLeft: 'auto', flexShrink: 0 }}>
                          <button
                            onClick={() => {
                              setEditingNewsItem(item)
                              setActiveModal('news_edit')
                            }}
                            style={{
                              background: 'transparent',
                              border: 'none',
                              color: 'rgba(255,255,255,0.6)',
                              cursor: 'pointer',
                              padding: '2px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                            title="Edit Announcement"
                          >
                            <Edit size={14} />
                          </button>
                          <button
                            onClick={() => {
                              if (confirm('Are you sure you want to delete this announcement?')) {
                                deleteNewsItem(item.id)
                              }
                            }}
                            style={{
                              background: 'transparent',
                              border: 'none',
                              color: 'rgba(244,63,94,0.6)',
                              cursor: 'pointer',
                              padding: '2px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                            title="Delete Announcement"
                          >
                            <Trash size={14} />
                          </button>
                        </div>
                      )}
                    </div>
                    <p>{item.summary}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </section>
      </div>

      {activeModal === 'stats' && <EditStatsModal onClose={() => setActiveModal(null)} />}
      {activeModal === 'gallery' && <EditCampusGalleryModal onClose={() => setActiveModal(null)} />}
      {activeModal === 'news_add' && <AddEditNewsModal newsItem={null} onClose={() => setActiveModal(null)} />}
      {activeModal === 'news_edit' && <AddEditNewsModal newsItem={editingNewsItem} onClose={() => { setActiveModal(null); setEditingNewsItem(null); }} />}
    </section>
  )
}

