import React from 'react'
import {
  Users, Shield, BookOpen, Award, FileText, MessageSquare,
  Laptop, Monitor, ArrowRight, ChevronRight, Home
} from 'lucide-react'
import './InfoCentre.css'
import Footer from './Footer'

interface InfoCentreProps {
  onSelectPage: (key: string) => void
  onGoHome?: () => void
}

const INFO_CARDS = [
  {
    num: '01',
    key: 'about-ramco-group',
    icon: Users,
    title: 'Ramco Group',
    desc: 'Learn more about the Ramco Group, its vision, mission, and the legacy of excellence.',
  },
  {
    num: '02',
    key: 'about-trusts',
    icon: Shield,
    title: 'Trusts',
    desc: "Explore the trusts under Ramco Group that drive our commitment to education and society.",
  },
  {
    num: '03',
    key: 'about-governing-council',
    icon: Award,
    title: 'Governing Council',
    desc: 'Meet the governing council members who guide and govern the institution.',
  },
  {
    num: '04',
    key: 'about-quality-policy',
    icon: Shield,
    title: 'Quality Policy',
    desc: 'Our commitment to quality education, continuous improvement and excellence.',
  },
  {
    num: '05',
    key: 'about-information-brochure',
    icon: BookOpen,
    title: 'Information Brochure',
    desc: 'View and download the institutional information brochure.',
  },
  {
    num: '06',
    key: 'about-founder-chairman-message',
    icon: MessageSquare,
    title: "Founder Chairman's Message",
    desc: 'Read the inspiring message from our Founder Chairman.',
  },
  {
    num: '07',
    key: 'about-chairman-message',
    icon: FileText,
    title: "Chairman's Message",
    desc: 'A message of vision and encouragement from our Chairman.',
  },
  {
    num: '08',
    key: 'about-director-message',
    icon: MessageSquare,
    title: "Director's Message",
    desc: 'Insights and guidance from the Director of our institution.',
  },
  {
    num: '09',
    key: 'about-principal-message',
    icon: Award,
    title: "Principal's Message",
    desc: 'A note from our Principal on education, values and student development.',
  },
  {
    num: '10',
    key: 'about-egovernance-header',
    icon: Monitor,
    title: 'e-Governance',
    desc: 'Digital governance initiatives for transparent, efficient and inclusive management.',
  },
  {
    num: '11',
    key: 'about-rit-e-projects',
    icon: Laptop,
    title: 'RIT e-Projects',
    desc: 'Explore innovative digital projects and initiatives undertaken by RIT.',
  },
]

export default function InfoCentre({ onSelectPage, onGoHome }: InfoCentreProps) {
  return (
    <div className="ic-page">
      {/* Hero */}
      <div className="ic-hero">
        <div className="ic-hero-left">
          <nav className="ic-breadcrumb">
            <span 
              onClick={onGoHome} 
              style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '4px', textDecoration: 'underline' }}
            >
              <Home size={12} /> Home
            </span>
            <ChevronRight size={14} />
            <span className="ic-breadcrumb-active">About</span>
          </nav>

          <h1 className="ic-hero-title">
            Information<br />
            <span className="ic-hero-title-gold">Centre</span>
          </h1>

          <div className="ic-hero-divider">
            <span className="ic-divider-line" />
            <span className="ic-divider-dot" />
          </div>

          <p className="ic-hero-subtitle">
            Explore essential information about our institutions,
            governance, policies and leadership.
          </p>
        </div>

        <div className="ic-hero-right">
          <div className="ic-hero-img-frame">
            <img src="/about.png" alt="RIT Campus" className="ic-hero-img" />
          </div>
        </div>
      </div>

      {/* Card Grid */}
      <div className="ic-grid-section">
        <div className="ic-section-label">
          <span className="ic-label-line" />
          <span>INFORMATION PAGES</span>
        </div>

        <div className="ic-card-grid">
          {INFO_CARDS.map((card) => {
            const Icon = card.icon
            return (
              <button
                key={card.key}
                className="ic-card"
                onClick={() => onSelectPage(card.key)}
              >
                <div className="ic-card-icon">
                  <Icon size={22} />
                </div>

                <div className="ic-card-body">
                  <h3 className="ic-card-title">{card.title}</h3>
                  <p className="ic-card-desc">{card.desc}</p>
                </div>

                <span className="ic-card-num">{card.num}</span>

                <div className="ic-card-arrow">
                  <ArrowRight size={16} />
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="ic-cta-bar">
        <div className="ic-cta-icon">
          <FileText size={28} />
        </div>
        <div className="ic-cta-text">
          <strong>Looking for Something Specific?</strong>
          <span>Can't find the information you need? Our team is here to help you.</span>
        </div>
        <a href="mailto:info@ramcorit.ac.in" className="ic-cta-btn">
          Contact Us <ArrowRight size={16} />
        </a>
      </div>

      <Footer onOpenAdmin={() => {}} showOnlyCopyright={true} />
    </div>
  )
}
