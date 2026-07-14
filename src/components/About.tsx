import { useState } from 'react'
import { Users, Trophy, Award, Lightbulb, Beaker, CheckCircle, Edit, ArrowRight, Handshake, Shield, Rocket } from 'lucide-react'
import { useCMS } from './CMSContext'
import { EditAboutModal } from './CMSModals'
import TiltedCard from './TiltedCard'
import './AboutSection.css'

interface AboutProps {
  onSelectPage?: (key: string) => void
}

export default function About({ onSelectPage }: AboutProps) {
  const { homepageConfig, isAuthenticated } = useCMS()
  const [isEditOpen, setIsEditOpen] = useState(false)

  // Map values dynamically from CMS with default mock text fallbacks
  const badgeText = homepageConfig.about_badge || "RIT Profile"
  
  const leadText = homepageConfig.about_lead || 
    "Ramco Institute of Technology was founded with a vision to impart high-quality engineering education at an affordable cost. Under the guidance of our Chairman Shri P.R. Venketrama Raja, we revolutionize the learning environment."

  const descText = homepageConfig.about_description || 
    "Being part of the Ramco Group, widely recognized for its qualitative and innovative brands globally, we set high standards. We empower students with accessible, yet world-class engineering education and prepare them for lifelong learning."

  return (
    <section className="about-section-premium" id="about">
      {/* Edit button for Authenticated Admins */}
      {isAuthenticated && (
        <div className="about-premium-edit-btn-wrapper">
          <button 
            className="section-edit-btn about-edit-btn" 
            onClick={() => setIsEditOpen(true)}
            style={{
              background: 'rgba(6, 24, 70, 0.08)',
              border: '1px solid rgba(6, 24, 70, 0.15)',
              backdropFilter: 'blur(8px)',
              borderRadius: '20px',
              padding: '8px 16px',
              color: '#061846',
              fontWeight: 700,
              fontSize: '13px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
            }}
          >
            <Edit size={14} /> Edit About Section
          </button>
        </div>
      )}

      {/* Top Section: Heading + Lead Paragraphs & Founders Card */}
      <div className="about-top-grid">
        {/* Left Column: Text Content */}
        <div className="about-content-left">
          <div className="about-section-badge">
            <span className="about-badge-dot"></span>
            <span>{badgeText}</span>
          </div>

          <h2 className="about-section-heading">
            ABOUT RAMCO INSTITUTE<br />OF TECHNOLOGY
          </h2>

          <div className="about-heading-divider">
            <img src="/ritlogo.png" className="about-logo-icon" alt="RIT Emblem" />
          </div>

          <p className="about-lead-paragraph">{leadText}</p>
          <p className="about-desc-paragraph">{descText}</p>

          <div className="about-features-row">
            <div className="about-feature-item">
              <div className="about-feature-icon-circle">
                <GraduationCapIcon />
              </div>
              <span className="about-feature-text">
                Industry-Aligned<br />Curriculum
              </span>
            </div>

            <div className="about-feature-item">
              <div className="about-feature-icon-circle">
                <Beaker size={20} />
              </div>
              <span className="about-feature-text">
                State-of-the-Art<br />Research Labs
              </span>
            </div>
          </div>

          {/* Accreditation Badges Card */}
          <div className="about-accreditations-card" style={{
            marginTop: '32px',
            background: 'rgba(255, 255, 255, 0.45)',
            border: '1.5px solid rgba(174, 112, 30, 0.2)',
            borderRadius: '20px',
            padding: '16px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            maxWidth: '420px',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 8px 24px rgba(174, 112, 30, 0.04)'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ 
                fontFamily: 'Antonio, sans-serif', 
                fontSize: '0.7rem', 
                letterSpacing: '0.12em', 
                color: '#ae701e', 
                textTransform: 'uppercase', 
                fontWeight: 800 
              }}>
                Institutional Quality
              </span>
              <span style={{ 
                fontSize: '0.9rem', 
                fontWeight: 800, 
                color: '#2b1f17' 
              }}>
                Accreditations
              </span>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{
                background: '#ffffff',
                padding: '6px 12px',
                borderRadius: '12px',
                border: '1px solid rgba(174, 112, 30, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 10px rgba(0,0,0,0.03)',
                height: '52px',
                boxSizing: 'border-box'
              }}>
                <img src="/NAAC1.png" alt="NAAC A+" style={{ height: '40px', objectFit: 'contain' }} />
              </div>
              
              <div style={{
                background: '#ffffff',
                padding: '6px 12px',
                borderRadius: '12px',
                border: '1px solid rgba(174, 112, 30, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 10px rgba(0,0,0,0.03)',
                height: '52px',
                boxSizing: 'border-box'
              }}>
                <img src="/NBA.png" alt="NBA" style={{ height: '30px', objectFit: 'contain' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Founders Image Card Container */}
        <div className="founders-card-premium">
          <div className="founders-card-img-wrapper">
            <TiltedCard
              imageSrc="/founders.png"
              altText="Founders"
              containerHeight="310px"
              containerWidth="100%"
              imageHeight="310px"
              imageWidth="100%"
              rotateAmplitude={10}
              scaleOnHover={1.04}
              showTooltip={false}
              displayOverlayContent={true}
              overlayContent={
                <div className="founders-card-estd-badge" style={{ position: 'absolute', bottom: '12px', left: '12px', zIndex: 10 }}>
                  <div className="founders-card-estd-icon">
                    <Trophy size={16} />
                  </div>
                  <div className="founders-card-estd-text">
                    <span className="founders-card-estd-label">ESTD</span>
                    <span className="founders-card-estd-val">{homepageConfig.about_estd || "2013"}</span>
                  </div>
                </div>
              }
            />
          </div>

          {/* Founders Card Footer */}
          <div className="founders-card-footer">
            <Users className="founders-footer-icon" size={20} />
            <div className="founders-footer-text">
              <span className="founders-footer-quote">Guided by Vision. Driven by Values.</span>
              <span className="founders-footer-names">
                Founder chairman Shri P. R. Ramasubrahmaneya Rajha & Chairman Shri.P.R.Venketrama Raja
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Horizontal Action Cards */}
      <div className="about-cards-row-premium">
        {/* Card 1: MOUs */}
        <div className="feature-card-premium card-mou">
          <div className="card-icon-box">
            <Users size={22} />
          </div>
          <div className="card-text-wrapper">
            <h3>MOUS</h3>
            <p>Industry Partnerships</p>
          </div>
          <Handshake className="card-watermark" size={130} />
        </div>

        {/* Card 2: CLUBS & NSS */}
        <div className="feature-card-premium card-clubs">
          <div className="card-icon-box">
            <Trophy size={22} />
          </div>
          <div className="card-text-wrapper">
            <h3>CLUBS & NSS</h3>
            <p>Student Communities</p>
          </div>
          <Users className="card-watermark" size={130} />
        </div>

        {/* Card 3: CERTIFICATION */}
        <div className="feature-card-premium card-cert">
          <div className="card-icon-box">
            <Award size={22} />
          </div>
          <div className="card-text-wrapper">
            <h3>CERTIFICATION</h3>
            <p>ISO & Quality Standards</p>
          </div>
          <Shield className="card-watermark" size={130} />
        </div>

        {/* Card 4: EDC/NISP */}
        <div className="feature-card-premium card-edc">
          <div className="card-icon-box">
            <Lightbulb size={22} />
          </div>
          <div className="card-text-wrapper">
            <h3>EDC/NISP</h3>
            <p>Innovation & Incubation</p>
          </div>
          <Rocket className="card-watermark" size={130} />
        </div>
      </div>

      {isEditOpen && <EditAboutModal onClose={() => setIsEditOpen(false)} />}
    </section>
  )
}

// Simple local GraduationCap icon to avoid extra imports
function GraduationCapIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
    </svg>
  )
}
