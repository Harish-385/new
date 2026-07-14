import { useMemo } from 'react'
import { useCMS } from './CMSContext'
import { ArrowRight, Handshake } from 'lucide-react'

interface Company {
  name: string
  logo: string
  categories: string[]
}

export default function Placements() {
  const { isAuthenticated } = useCMS()

  const companies: Company[] = useMemo(() => [
    { name: 'Zoho', logo: '/companies/zoho.jpeg', categories: ['IT & Software'] },
    { name: 'Rane', logo: '/companies/rane.jpeg', categories: ['Core', 'Manufacturing'] },
    { name: 'Ramco', logo: '/companies/ramco.jpeg', categories: ['IT & Software', 'Core'] },
    { name: 'Kaar Technologies', logo: '/companies/kaar.jpeg', categories: ['IT & Software', 'Consulting'] },
    { name: 'ICANIO Technologies', logo: '/companies/icanio.jpeg', categories: ['IT & Software'] },
    { name: 'Ecoster', logo: '/companies/ecoster.jpeg', categories: ['Core', 'Manufacturing', 'Research'] },
    { name: 'Brakes India', logo: '/companies/brakesindia.png', categories: ['Core', 'Manufacturing'] },
    { name: 'FLENDER', logo: '/companies/flender.jpeg', categories: ['Core', 'Manufacturing'] },
    { name: 'pinnacle', logo: '/companies/pinnacle.jpeg', categories: ['Consulting', 'IT & Software'] },
    { name: 'alcatel', logo: '/companies/alcatel.jpeg', categories: ['IT & Software'] },
    { name: 'DATA PATTERNS', logo: '/companies/datapatterns.jpeg', categories: ['Core', 'Research'] },
    { name: 'Cognizant', logo: '/companies/cognizant.jpeg', categories: ['IT & Software'] },
    { name: 'Ramco Cements', logo: '/companies/ramco cements.jpeg', categories: ['Core', 'Manufacturing'] },
    { name: 'TESSOLVE', logo: '/companies/tessolve.jpeg', categories: ['Core', 'Research'] },
    { name: 'embedUR', logo: '/companies/embed.jpeg', categories: ['IT & Software', 'Research'] },
    { name: 'Salcomp', logo: '/companies/salcomp.jpeg', categories: ['Core', 'Manufacturing'] },
    { name: 'ECONSTRUCT', logo: '/companies/econstruct.jpeg', categories: ['Core', 'Consulting'] },
    { name: 'HCL', logo: '/companies/hcl.jpeg', categories: ['IT & Software'] },
    { name: 'aspire systems', logo: '/companies/aspire.jpeg', categories: ['IT & Software'] },
    { name: 'RheinBrücke', logo: '/companies/rhein.jpeg', categories: ['Consulting', 'IT & Software'] },
    { name: 'solartis', logo: '/companies/solartis.jpeg', categories: ['IT & Software', 'Finance'] },
    { name: 'tcs', logo: '/companies/tcs.jpeg', categories: ['IT & Software'] },
    { name: 'WHEELS INDIA', logo: '/companies/wheelsindia.jpeg', categories: ['Core', 'Manufacturing'] },
    { name: 'wipro', logo: '/companies/wipro.jpeg', categories: ['IT & Software'] },
    { name: 'Hexaware', logo: '/companies/hexaware.jpeg', categories: ['IT & Software'] },
    { name: 'Yaskawa', logo: '/companies/yaskawa.jpeg', categories: ['Core', 'Manufacturing'] }
  ], [])

  const filteredCompanies = companies

  return (
    <section className="placements reveal-section" id="placements" style={{
      padding: '80px 0 120px',
      background: '#fdf3dc',
      position: 'relative',
      overflow: 'hidden'
    }}>



      {/* Top Header Section */}
      <div style={{ textAlign: 'center', marginBottom: '40px', padding: '0 20px' }}>
        <span style={{
          fontSize: '0.85rem',
          color: '#b88e2f',
          fontWeight: 800,
          textTransform: 'uppercase',
          letterSpacing: '2.5px',
          display: 'block',
          marginBottom: '8px'
        }}>
          BUILDING CAREERS, CONNECTING TALENTS
        </span>
        <h2 style={{
          fontFamily: "'Playfair Display', 'Georgia', serif",
          fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
          color: '#2d2217',
          fontWeight: 800,
          margin: '0 auto 16px',
          letterSpacing: '0.5px'
        }}>
          OUR PROMINENT RECRUITERS
        </h2>
        
        {/* Diamond Separator Line */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          margin: '0 auto 24px',
          width: '240px'
        }}>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, #b88e2f)' }} />
          <div style={{
            width: '8px',
            height: '8px',
            background: '#b88e2f',
            transform: 'rotate(45deg)',
            borderRadius: '1px'
          }} />
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, #b88e2f, transparent)' }} />
        </div>

        <p style={{
          maxWidth: '680px',
          margin: '0 auto',
          color: '#6b5e52',
          fontSize: '1rem',
          lineHeight: '1.6',
          fontWeight: 500
        }}>
          Our students have been placed in top organizations across the globe. <br />
          We are grateful to our recruiters for their continued trust in our talent.
        </p>
      </div>

      {/* Logo Grid & Callout Container */}
      <div className="recruiter-grid-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div className="recruiter-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '20px',
          alignItems: 'stretch'
        }}>
          {filteredCompanies.map((company, index) => {
            // Render "Want to Recruit Our Talent" card dynamically as part of the grid flow.
            // In a 6-column grid, we want to place it at a strategic position (like index 24, just before the last few items).
            const showCallout = index === 24
            
            return (
              <g key={company.name + index} style={{ display: 'contents' }}>
                {showCallout && (
                  <div 
                    style={{
                      gridColumn: 'span 3',
                      background: '#fdf6e9',
                      border: '1.5px solid rgba(184, 142, 47, 0.25)',
                      borderRadius: '20px',
                      padding: '20px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '20px',
                      boxShadow: '0 8px 24px rgba(184, 142, 47, 0.05)'
                    }}
                    className="recruit-callout-card"
                  >
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: '#4a3424',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      flexShrink: 0
                    }}>
                      <Handshake size={22} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ margin: '0 0 4px 0', fontSize: '0.92rem', fontWeight: 800, color: '#2d2217' }}>
                        Want to Recruit Our Talent?
                      </h4>
                      <p style={{ margin: '0 0 10px 0', fontSize: '0.78rem', color: '#6b5e52', fontWeight: 500 }}>
                        Partner with us and build the future together.
                      </p>
                      <a 
                        href="mailto:placement@ritrjpm.ac.in" 
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          background: '#4a3424',
                          color: '#ffffff',
                          padding: '6px 16px',
                          borderRadius: '30px',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          textDecoration: 'none',
                          boxShadow: '0 4px 10px rgba(74, 52, 36, 0.25)',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-1px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
                      >
                        Connect With Us <ArrowRight size={12} />
                      </a>
                    </div>
                  </div>
                )}
                
                <div 
                  className="recruiter-logo-card" 
                  style={{
                    background: '#ffffff',
                    border: '1.2px solid rgba(184, 142, 47, 0.12)',
                    borderRadius: '16px',
                    padding: '12px 16px',
                    height: '76px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 6px 16px rgba(139, 94, 60, 0.02)',
                    transition: 'all 0.25s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = '0 10px 24px rgba(184, 142, 47, 0.12)'
                    e.currentTarget.style.borderColor = 'rgba(184, 142, 47, 0.35)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none'
                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(139, 94, 60, 0.02)'
                    e.currentTarget.style.borderColor = 'rgba(184, 142, 47, 0.12)'
                  }}
                >
                  <img 
                    src={company.logo} 
                    alt={`${company.name} Logo`} 
                    style={{ 
                      maxWidth: '100%', 
                      maxHeight: '100%', 
                      objectFit: 'contain'
                    }} 
                  />
                </div>
              </g>
            )
          })}
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
