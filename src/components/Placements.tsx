import { useMemo, useState, useEffect } from 'react'
import { useCMS } from './CMSContext'
import { ArrowRight, Handshake, Users } from 'lucide-react'

interface Company {
  name: string
  logo: string
  categories: string[]
}

export default function Placements() {
  const { isAuthenticated } = useCMS()
  const [activePage, setActivePage] = useState(0)

  // Automatic slide transition effect
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePage((prev) => (prev + 1) % 3)
    }, 7000) // Change slides every 7 seconds
    return () => clearInterval(timer)
  }, [])

  const recruiterPages = [
    // Page 0 (Prominent mockup list)
    [
      { name: 'Zoho', logo: '/companies/zoho.jpeg' },
      { name: 'Ramco', logo: '/companies/ramco.jpeg' },
      { name: 'TCS', logo: '/companies/tcs.jpeg' },
      { name: 'Cognizant', logo: '/companies/cognizant.jpeg' },
      { name: 'Wipro', logo: '/companies/wipro.jpeg' },
      { name: 'HCLTech', logo: '/companies/hcl.jpeg' },

      { 
        name: 'Infosys', 
        renderSvg: () => (
          <svg viewBox="0 0 120 30" style={{ height: '20px', width: 'auto', display: 'block' }}>
            <text x="0" y="21" fill="#007cc3" fontFamily="'Outfit', 'Helvetica Neue', Arial, sans-serif" fontSize="22" fontWeight="900" letterSpacing="-0.5px">Infosys</text>
          </svg>
        ) 
      },
      { 
        name: 'Accenture', 
        renderSvg: () => (
          <svg viewBox="0 0 120 30" style={{ height: '20px', width: 'auto', display: 'block' }}>
            <text x="0" y="21" fill="#000000" fontFamily="'Outfit', 'Helvetica Neue', Arial, sans-serif" fontSize="19" fontWeight="800" letterSpacing="-0.5px">accenture</text>
            <path d="M96 7 L102 14 L96 21" fill="none" stroke="#A12BFF" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) 
      },
      { 
        name: 'Tech Mahindra', 
        renderSvg: () => (
          <svg viewBox="0 0 140 30" style={{ height: '20px', width: 'auto', display: 'block' }}>
            <text x="0" y="15" fill="#000000" fontFamily="'Outfit', 'Helvetica Neue', Arial, sans-serif" fontSize="13" fontWeight="800">Tech</text>
            <text x="0" y="26" fill="#e51937" fontFamily="'Outfit', 'Helvetica Neue', Arial, sans-serif" fontSize="13" fontWeight="800">Mahindra</text>
          </svg>
        )
      },
      { name: 'Pinnacle', logo: '/companies/pinnacle.jpeg' },
      { 
        name: 'Virtusa', 
        renderSvg: () => (
          <svg viewBox="0 0 100 30" style={{ height: '20px', width: 'auto', display: 'block' }}>
            <text x="0" y="21" fill="#4B4B4D" fontFamily="'Outfit', 'Helvetica Neue', Arial, sans-serif" fontSize="22" fontWeight="800" letterSpacing="-0.5px">virtusa</text>
          </svg>
        )
      },
      { name: 'Hexaware', logo: '/companies/hexaware.jpeg' },

      { 
        name: 'L&T Technology Services', 
        renderSvg: () => (
          <svg viewBox="0 0 170 30" style={{ height: '18px', width: 'auto', display: 'block' }}>
            <circle cx="15" cy="15" r="9" fill="none" stroke="#003366" strokeWidth="1.8" />
            <path d="M12 12 L12 18 L16 18" fill="none" stroke="#003366" strokeWidth="1.8" />
            <path d="M15 12 L18 12 L18 17" fill="none" stroke="#003366" strokeWidth="1.8" />
            <text x="32" y="19" fill="#003366" fontFamily="'Outfit', 'Helvetica Neue', Arial, sans-serif" fontSize="11" fontWeight="700">L&T Technology Services</text>
          </svg>
        )
      },
      { 
        name: 'Mphasis', 
        renderSvg: () => (
          <svg viewBox="0 0 120 30" style={{ height: '22px', width: 'auto', display: 'block' }}>
            <path d="M4 8 L12 15 L4 22" fill="none" stroke="#D81B60" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M9 8 L17 15 L9 22" fill="none" stroke="#00A8B5" strokeWidth="2.5" strokeLinecap="round" />
            <text x="24" y="17" fill="#1A1A1A" fontFamily="'Outfit', 'Helvetica Neue', Arial, sans-serif" fontSize="13" fontWeight="800">Mphasis</text>
            <text x="24" y="24" fill="#666666" fontFamily="'Outfit', 'Helvetica Neue', Arial, sans-serif" fontSize="6.5" fontWeight="600">The Next Applied</text>
          </svg>
        )
      },
      { name: 'Data Patterns', logo: '/companies/datapatterns.jpeg' },
      { 
        name: 'KPIT', 
        renderSvg: () => (
          <svg viewBox="0 0 90 30" style={{ height: '20px', width: 'auto', display: 'block' }}>
            <text x="0" y="21" fill="#000000" fontFamily="'Outfit', 'Helvetica Neue', Arial, sans-serif" fontSize="21" fontWeight="900" letterSpacing="1px">KP!T</text>
          </svg>
        )
      },
      { name: 'Aspire', logo: '/companies/aspire.jpeg' },
      { name: 'Yaskawa', logo: '/companies/yaskawa.jpeg' }
    ],
    // Page 1
    [
      { name: 'Rane', logo: '/companies/rane.jpeg' },
      { name: 'Kaar Technologies', logo: '/companies/kaar.jpeg' },
      { name: 'ICANIO Technologies', logo: '/companies/icanio.jpeg' },
      { name: 'Ecoster', logo: '/companies/ecoster.jpeg' },
      { name: 'Brakes India', logo: '/companies/brakesindia.png' },
      { name: 'FLENDER', logo: '/companies/flender.jpeg' },

      { name: 'alcatel', logo: '/companies/alcatel.jpeg' },
      { name: 'Ramco Cements', logo: '/companies/ramco cements.jpeg' },
      { name: 'TESSOLVE', logo: '/companies/tessolve.jpeg' },
      { name: 'embedUR', logo: '/companies/embed.jpeg' },
      { name: 'Salcomp', logo: '/companies/salcomp.jpeg' },
      { name: 'ECONSTRUCT', logo: '/companies/econstruct.jpeg' },

      { name: 'RheinBrücke', logo: '/companies/rhein.jpeg' },
      { name: 'solartis', logo: '/companies/solartis.jpeg' },
      { name: 'WHEELS INDIA', logo: '/companies/wheelsindia.jpeg' },
      { name: 'Zoho', logo: '/companies/zoho.jpeg' },
      { name: 'Ramco', logo: '/companies/ramco.jpeg' },
      { name: 'TCS', logo: '/companies/tcs.jpeg' }
    ],
    // Page 2
    [
      { name: 'Cognizant', logo: '/companies/cognizant.jpeg' },
      { name: 'Wipro', logo: '/companies/wipro.jpeg' },
      { name: 'HCLTech', logo: '/companies/hcl.jpeg' },
      { name: 'Pinnacle', logo: '/companies/pinnacle.jpeg' },
      { name: 'Hexaware', logo: '/companies/hexaware.jpeg' },
      { name: 'Data Patterns', logo: '/companies/datapatterns.jpeg' },

      { name: 'Aspire', logo: '/companies/aspire.jpeg' },
      { name: 'Yaskawa', logo: '/companies/yaskawa.jpeg' },
      { name: 'Rane', logo: '/companies/rane.jpeg' },
      { name: 'Kaar Technologies', logo: '/companies/kaar.jpeg' },
      { name: 'FLENDER', logo: '/companies/flender.jpeg' },
      { name: 'Brakes India', logo: '/companies/brakesindia.png' },

      { name: 'Ramco Cements', logo: '/companies/ramco cements.jpeg' },
      { name: 'TESSOLVE', logo: '/companies/tessolve.jpeg' },
      { name: 'embedUR', logo: '/companies/embed.jpeg' },
      { name: 'Salcomp', logo: '/companies/salcomp.jpeg' },
      { name: 'Wipro', logo: '/companies/wipro.jpeg' },
      { name: 'HCLTech', logo: '/companies/hcl.jpeg' }
    ]
  ]

  return (
    <section className="placements reveal-section" id="placements" style={{
      padding: '80px 0 100px',
      background: '#FDF3DC',
      position: 'relative',
      overflow: 'hidden'
    }}>

      {/* Top Header Section */}
      <div style={{ textAlign: 'center', marginBottom: '40px', padding: '0 20px' }}>
        <span className="recruiter-tagline">
          BUILDING CAREERS, CONNECTING TALENTS
        </span>
        <h2 className="recruiter-heading-new">
          OUR PROMINENT RECRUITERS
        </h2>
        
        {/* Double Separator Line with Diamond */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          margin: '0 auto 24px',
          width: '280px'
        }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '3px' }}>
            <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #b88e2f)' }} />
            <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #b88e2f)', opacity: 0.6 }} />
          </div>
          <div style={{
            width: '8px',
            height: '8px',
            background: '#b88e2f',
            transform: 'rotate(45deg)',
            borderRadius: '1px'
          }} />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '3px' }}>
            <div style={{ height: '1px', background: 'linear-gradient(90deg, #b88e2f, transparent)' }} />
            <div style={{ height: '1px', background: 'linear-gradient(90deg, #b88e2f, transparent)', opacity: 0.6 }} />
          </div>
        </div>

        <p className="recruiter-desc-new">
          Our students have been placed in top organizations across the globe. <br />
          We are grateful to our recruiters for their continued trust in our talent.
        </p>
      </div>

      {/* Logo Grid & Callout Container */}
      <div className="recruiter-grid-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div className="recruiter-slider-container">
          <div 
            className="recruiter-slider-track"
            style={{ transform: `translateX(-${activePage * 33.3333}%)` }}
          >
            {recruiterPages.map((pageList, pageIdx) => (
              <div className="recruiter-slide-page" key={pageIdx}>
                <div className="recruiter-grid-new">
                  {pageList.map((company, index) => (
                    <div className="recruiter-cell-new" key={company.name + index}>
                      {company.renderSvg ? (
                        company.renderSvg()
                      ) : (
                        <img 
                          src={company.logo} 
                          alt={`${company.name} Logo`} 
                          className="recruiter-logo-img-new"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="recruiter-dots-new">
          {[0, 1, 2].map((idx) => (
            <button 
              key={idx}
              className={`recruiter-dot-new ${activePage === idx ? 'active' : ''}`}
              onClick={() => setActivePage(idx)}
              style={{ border: 'none', padding: 0, outline: 'none' }}
              aria-label={`Go to page ${idx + 1}`}
            />
          ))}
        </div>

        {/* Recruiter Callout Bar */}
        <div className="recruiter-callout-bar-new">
          <div className="callout-left-new">
            <div className="callout-icon-circle-new">
              <Users size={24} className="callout-icon-new" />
            </div>
            <div className="callout-text-new">
              <h4>WANT TO RECRUIT OUR TALENT?</h4>
              <p>Partner with us and build the future together.</p>
            </div>
          </div>
          <a href="mailto:placement@ritrjpm.ac.in" className="callout-btn-new">
            CONNECT WITH US <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Placement Journey Section */}
      <div style={{
        maxWidth: '1200px',
        margin: '60px auto 0',
        padding: '0 20px'
      }}>
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h3 style={{
            fontFamily: "'Playfair Display', 'Georgia', serif",
            fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
            fontWeight: 800,
            color: '#2d2217',
            margin: '0 0 10px',
            letterSpacing: '0.5px'
          }}>
            PLACEMENT JOURNEY
          </h3>
          <p style={{
            fontSize: '0.95rem',
            color: '#6b5e52',
            fontWeight: 500,
            margin: 0
          }}>
            From campus to career – our proven placement process.
          </p>
        </div>
        {/* Steps + Card Row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0',
          overflowX: 'auto',
          paddingBottom: '8px'
        }}>
          {[
            {
              icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#b88e2f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>),
              title: 'Training & Development', sub: 'Industry aligned training'
            },
            {
              icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#b88e2f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>),
              title: 'Aptitude & Assessment', sub: 'Rigorous screening process'
            },
            {
              icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#b88e2f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>),
              title: 'Technical Interview', sub: 'Domain specific interviews'
            },
            {
              icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#b88e2f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>),
              title: 'HR Interview', sub: 'Personal & behavioral round'
            },
            {
              icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#b88e2f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>),
              title: 'Offer & Onboarding', sub: 'Dream offer & onboarding'
            }
          ].map((step, idx, arr) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', flex: '1 1 0', minWidth: 0 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', flex: '1 1 0', minWidth: 0, padding: '0 8px' }}>
                <div style={{ width: '68px', height: '68px', borderRadius: '50%', border: '2px solid rgba(184,142,47,0.5)', background: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px', flexShrink: 0, boxShadow: '0 4px 16px rgba(184,142,47,0.08)' }}>
                  {step.icon}
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#2d2217', lineHeight: '1.3', marginBottom: '4px' }}>{step.title}</div>
                <div style={{ fontSize: '0.76rem', color: '#8c7e70', fontWeight: 500, lineHeight: '1.4' }}>{step.sub}</div>
              </div>
              {idx < arr.length - 1 && (
                <div style={{ width: '40px', flexShrink: 0, borderTop: '2px dashed rgba(184,142,47,0.45)', margin: '0 4px', marginBottom: '28px' }} />
              )}
            </div>
          ))}

          {/* Connector to card */}
          <div style={{ width: '32px', flexShrink: 0, borderTop: '2px dashed rgba(184,142,47,0.45)', marginBottom: '28px' }} />

          {/* Success Starts Here Card */}
          <div style={{ flexShrink: 0, width: '180px', background: 'rgba(255,255,255,0.8)', border: '1.5px solid rgba(184,142,47,0.3)', borderRadius: '16px', padding: '20px 16px', textAlign: 'center', boxShadow: '0 8px 24px rgba(184,142,47,0.08)', backdropFilter: 'blur(8px)' }}>
            <div style={{ marginBottom: '12px', display: 'flex', justifyContent: 'center' }}>
              <svg width="60" height="56" viewBox="0 0 60 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="30,4 58,18 30,32 2,18" fill="#c9a227"/>
                <polygon points="30,32 58,18 58,22 30,36" fill="#a07d1a" opacity="0.5"/>
                <polygon points="30,32 2,18 2,22 30,36" fill="#a07d1a" opacity="0.3"/>
                <path d="M10 22 L10 38 Q10 48 30 50 Q50 48 50 38 L50 22 L30 32 Z" fill="#1a1a1a"/>
                <path d="M10 22 L30 32 L50 22" stroke="#c9a227" strokeWidth="1.5" fill="none"/>
                <line x1="58" y1="18" x2="58" y2="34" stroke="#c9a227" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="58" cy="36" r="3" fill="#c9a227"/>
                <line x1="56" y1="39" x2="54" y2="46" stroke="#c9a227" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="58" y1="39" x2="58" y2="47" stroke="#c9a227" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="60" y1="39" x2="62" y2="46" stroke="#c9a227" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#b88e2f', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>SUCCESS STARTS HERE</div>
            <div style={{ fontSize: '0.78rem', color: '#5c4e43', fontWeight: 500, lineHeight: '1.5' }}>We ensure every student gets the right opportunity to build their future.</div>
          </div>
        </div>
      </div>

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 1100px) {
          .recruiter-grid { grid-template-columns: repeat(4, 1fr) !important; }
          .recruit-callout-card { grid-column: span 2 !important; }
        }
        @media (max-width: 768px) {
          .recruiter-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .recruit-callout-card { grid-column: span 2 !important; flex-direction: column; text-align: center; }
          .stat-ribbon-col { border-right: none !important; border-bottom: 1px solid rgba(184,142,47,0.15); padding-bottom: 16px; padding-right: 0 !important; }
          .stat-ribbon-col:last-child { border-bottom: none !important; padding-bottom: 0; }
        }
      `}</style>
    </section>
  )
}
