import { useState } from 'react'
import { Edit } from 'lucide-react'
import { motion } from 'framer-motion'
import { useCMS } from './CMSContext'
import { EditVisionMissionModal } from './CMSModals'

export default function Research() {
  const { homepageConfig, isAuthenticated } = useCMS()
  const [isEditOpen, setIsEditOpen] = useState(false)

  return (
    <section className="immersive reveal-section" id="research" style={{ position: 'relative' }}>
      
      <div className="about-details">
        <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)' }}>Vision & Mission</h2>
        
        <div className="dept-vision-mission-grid">
          {/* Vision Card */}
          <div className="dept-vision-card">
            <div className="dept-vision-icon-container">
              <svg viewBox="0 0 100 100" className="dept-vision-svg">
                <path d="M5,50 Q50,15 95,50 Q50,85 5,50 Z" fill="none" stroke="#061846" strokeWidth="4.5" />
                <circle cx="50" cy="50" r="18" fill="none" stroke="#061846" strokeWidth="4.5" />
                <path d="M38,36 C38,18 62,18 62,36 C62,45 57,48 57,56 L43,56 C43,45 38,48 38,36 Z" fill="none" stroke="#061846" strokeWidth="4.5" />
                <line x1="43" y1="61" x2="57" y2="61" stroke="#061846" strokeWidth="4.5" strokeLinecap="round" />
                <line x1="46" y1="66" x2="54" y2="66" stroke="#061846" strokeWidth="4.5" strokeLinecap="round" />
                <line x1="50" y1="8" x2="50" y2="14" stroke="#888888" strokeWidth="3.5" strokeLinecap="round" />
                <line x1="28" y1="16" x2="34" y2="22" stroke="#888888" strokeWidth="3.5" strokeLinecap="round" />
                <line x1="72" y1="16" x2="66" y2="22" stroke="#888888" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M47,43 C47,40 53,40 53,43 C53,45 47,45 47,48 C47,51 53,51 53,48" fill="none" stroke="#061846" strokeWidth="3" />
                <line x1="50" y1="38" x2="50" y2="52" stroke="#061846" strokeWidth="3" />
              </svg>
            </div>
            <div className="dept-vision-text-block">
              <h3 className="dept-vision-title">Vision</h3>
              <div className="dept-vision-body">
                <p>{homepageConfig.vision_text}</p>
              </div>
              <div className="dept-card-gold-line"></div>
            </div>
          </div>
 
          {/* Vertical Divider */}
          <div className="dept-vision-mission-divider"></div>
 
          {/* Mission Card */}
          <div className="dept-mission-card">
            <div className="dept-mission-icon-container">
              <svg viewBox="0 0 100 100" className="dept-mission-svg">
                <circle cx="45" cy="55" r="32" fill="none" stroke="#061846" strokeWidth="4.5" />
                <circle cx="45" cy="55" r="22" fill="none" stroke="#061846" strokeWidth="4.5" />
                <circle cx="45" cy="55" r="12" fill="none" stroke="#061846" strokeWidth="4.5" />
                <line x1="82" y1="18" x2="50" y2="50" stroke="#888888" strokeWidth="4.5" strokeLinecap="round" />
                <path d="M43,57 L58,47 L47,44 Z" fill="#888888" />
                <line x1="77" y1="13" x2="87" y2="23" stroke="#888888" strokeWidth="4.5" strokeLinecap="round" />
                <line x1="72" y1="18" x2="82" y2="28" stroke="#888888" strokeWidth="4.5" strokeLinecap="round" />
              </svg>
            </div>
            <div className="dept-mission-text-block">
              <h3 className="dept-mission-title">Mission</h3>
              <div className="dept-mission-body">
                <p className="mission-intro" style={{ marginBottom: '12px' }}>{homepageConfig.mission_intro}</p>
                <ul className="mission-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {homepageConfig.mission_points.map((point, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                      <span className="bullet-point" style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: '#ec0a78', marginTop: '8px', flexShrink: 0 }}></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="dept-card-gold-line"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="vision-image-stage">
        <motion.div
          animate={{
            y: [0, -12, 0],
            rotate: [0, 1, -1, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="vision-sketch-container"
        >
          <img src="/RITedit.png" alt="RIT Campus Illustration" className="vision-sketch-img" />
        </motion.div>
      </div>
      {isEditOpen && <EditVisionMissionModal onClose={() => setIsEditOpen(false)} />}
    </section>
  )
}
