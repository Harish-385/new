import React, { useState } from 'react'
import {
  GraduationCap, FileText, Award, BookOpen, Calendar,
  FileSignature, Scale, Search, Phone, Mail, ArrowRight,
  ChevronRight, Home, Menu, CheckCircle2, UserCheck, Eye,
  ClipboardList, MailCheck, ShieldCheck, Landmark
} from 'lucide-react'
import './InfoCentre.css' // Reusing Info Centre soft cream styles
import Footer from './Footer'

interface AdmissionPageProps {
  onSelectPage: (key: string) => void
  onGoHome?: () => void
}

export default function AdmissionPage({ onSelectPage, onGoHome }: AdmissionPageProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const sections = [
    {
      num: '01',
      title: 'Admission Policy / Eligibility',
      key: 'admission-policy',
      desc: 'Know the admission policies and eligibility criteria for various programs.',
      icon: GraduationCap,
      color: '#c2410c'
    },
    {
      num: '02',
      title: 'Online Enquiry Form',
      key: 'admission-enquiry',
      desc: 'Submit your details through our online enquiry form. Our team will reach you.',
      icon: ClipboardList,
      color: '#4f46e5'
    },
    {
      num: '03',
      title: 'Scholarship / Incentives',
      key: 'admission-scholarship-incentives',
      desc: 'Explore merit-based scholarships and incentives for deserving students.',
      icon: Award,
      color: '#15803d'
    },
    {
      num: '04',
      title: 'Central Govt. & State Govt. Scholarships',
      key: 'admission-scholarships-gov',
      desc: 'Information about various central and state government scholarship schemes.',
      icon: Landmark,
      color: '#b45309'
    },
    {
      num: '05',
      title: 'Admission Brochure',
      key: 'admission-brochure',
      desc: 'Download the admission brochure to know more about courses and facilities.',
      icon: BookOpen,
      color: '#be123c'
    },
    {
      num: '06',
      title: 'Academic Schedule',
      key: 'academics-schedule',
      desc: 'View the academic calendar, important dates and examination schedules.',
      icon: Calendar,
      color: '#0369a1'
    },
    {
      num: '07',
      title: 'Academic Curriculum and Syllabus',
      key: 'academics-curriculum',
      desc: 'Detailed curriculum and syllabus structure for all programs offered.',
      icon: FileSignature,
      color: '#6d28d9'
    },
    {
      num: '08',
      title: 'AU Regulation',
      key: 'academics-regulation',
      desc: 'Anna University regulations and guidelines for students and programs.',
      icon: Scale,
      color: '#475569'
    }
  ]

  const filteredSections = sections.filter(sec =>
    sec.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sec.desc.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="admission-premium-layout" style={{ background: '#FFF8E7', minHeight: '100vh', width: '100%', padding: 0 }}>
      
      {/* ================= HERO HEADER SECTION ================= */}
      <div className="adm-hero-container" style={{
        position: 'relative',
        padding: '30px 5% 50px',
        background: '#FFF8E7',
        borderBottom: '1px solid rgba(184, 134, 11, 0.15)',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '40px',
        alignItems: 'center',
        justifyContent: 'space-between',
        overflow: 'hidden'
      }}>
        
        {/* Left Side: Content & Intro */}
        <div className="adm-hero-left" style={{ flex: '1 1 500px', zIndex: 5 }}>
          {/* Breadcrumbs */}
          <nav className="ic-breadcrumb" style={{ marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
            <span 
              onClick={onGoHome} 
              style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#8b5a2b', textDecoration: 'underline' }}
            >
              <Home size={12} /> Home
            </span>
            <ChevronRight size={14} style={{ color: '#8b5a2b' }} />
            <span style={{ color: '#c5a880', fontWeight: 'bold' }}>Admissions</span>
          </nav>

          <span className="adm-meta-label" style={{
            fontSize: '11px',
            fontWeight: 800,
            letterSpacing: '2px',
            color: '#b45309',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '15px'
          }}>
            ADMISSIONS INFORMATION <span style={{ fontSize: '14px' }}>→</span>
          </span>

          <h1 className="adm-hero-title" style={{
            fontSize: '56px',
            fontWeight: 900,
            lineHeight: 1.1,
            color: '#1a1005',
            margin: '0 0 20px',
            fontFamily: '"Outfit", sans-serif'
          }}>
            Begin Your <br />
            Future at <span style={{ color: '#ae701e', borderBottom: '3px solid #ffb834', paddingBottom: '2px' }}>RIT</span>
          </h1>

          <p className="adm-hero-desc" style={{
            fontSize: '16px',
            lineHeight: '1.6',
            color: '#5c5446',
            margin: '0 0 35px',
            maxWidth: '520px'
          }}>
            Explore admission policies, eligibility, scholarships and everything you need to take the first step towards your career with us.
          </p>

          {/* Quick Pillars Row */}
          <div className="adm-pillars-strip" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '15px',
            background: '#ffffff',
            padding: '16px 20px',
            borderRadius: '16px',
            boxShadow: '0 10px 25px rgba(139, 90, 43, 0.05)',
            border: '1px solid rgba(139, 90, 43, 0.08)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ padding: '8px', background: '#fef3c7', borderRadius: '8px', color: '#b45309' }}><GraduationCap size={16} /></div>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#1a1005', lineHeight: '1.2' }}>Merit Based<br />Selection</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ padding: '8px', background: '#fef3c7', borderRadius: '8px', color: '#b45309' }}><UserCheck size={16} /></div>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#1a1005', lineHeight: '1.2' }}>Transparent<br />Process</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ padding: '8px', background: '#fef3c7', borderRadius: '8px', color: '#b45309' }}><Award size={16} /></div>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#1a1005', lineHeight: '1.2' }}>Scholarships &<br />Incentives</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ padding: '8px', background: '#fef3c7', borderRadius: '8px', color: '#b45309' }}><CheckCircle2 size={16} /></div>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#1a1005', lineHeight: '1.2' }}>Student<br />Focused</span>
            </div>
          </div>
        </div>

        {/* Right Side: Campus Image & Floating Badges */}
        <div className="adm-hero-right" style={{
          position: 'relative',
          flex: '1 1 450px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {/* Curved Outer Frame */}
          <div className="adm-curved-img-frame" style={{
            position: 'relative',
            width: '100%',
            maxWidth: '500px',
            height: '350px',
            borderRadius: '40px 180px 40px 40px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
            border: '8px solid #ffffff'
          }}>
            <img src="/founders.png" alt="RIT Campus" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>


        </div>

      </div>

      {/* ================= MAIN NAVIGATION & GRID LAYOUT ================= */}
      <div className="adm-main-body" style={{
        maxWidth: '1200px',
        margin: '40px auto 0',
        padding: '0 20px',
        display: 'grid',
        gridTemplateColumns: '300px 1fr',
        gap: '40px'
      }}>
        
        {/* Sidebar Container */}
        <aside className="adm-sidebar" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          


          {/* Need Assistance Widget */}
          <div style={{
            background: '#ffffff',
            padding: '24px',
            borderRadius: '20px',
            boxShadow: '0 8px 30px rgba(139,90,43,0.04)',
            border: '1px solid rgba(139,90,43,0.08)',
            textAlign: 'center'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              background: '#fef3c7',
              borderRadius: '50%',
              display: 'grid',
              placeItems: 'center',
              margin: '0 auto 15px',
              color: '#b45309'
            }}>
              <Phone size={20} />
            </div>
            <h4 style={{ fontSize: '16px', fontWeight: 800, margin: '0 0 6px', color: '#1a1005' }}>Need Assistance?</h4>
            <p style={{ fontSize: '12px', color: '#7c7263', margin: '0 0 20px', lineHeight: '1.5' }}>
              Our admission team is here to help you with any queries.
            </p>

            <a href="mailto:rit@ritrajapalayam.ac.in" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#b45309',
              color: '#ffffff',
              padding: '10px 20px',
              borderRadius: '10px',
              fontSize: '13px',
              fontWeight: 700,
              textDecoration: 'none',
              width: '100%',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(180,83,9,0.2)',
              marginBottom: '20px'
            }}>
              Contact Admission Cell <ArrowRight size={14} />
            </a>

            <div style={{ textAlign: 'left', borderTop: '1px solid #f2edd5', paddingTop: '15px' }}>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                <Phone size={14} style={{ color: '#b45309', marginTop: '2px' }} />
                <div>
                  <span style={{ fontSize: '10px', color: '#a19789', display: 'block' }}>Call Us</span>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#1a1005' }}>04563 233400</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Mail size={14} style={{ color: '#b45309', marginTop: '2px' }} />
                <div>
                  <span style={{ fontSize: '10px', color: '#a19789', display: 'block' }}>Email Us</span>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#1a1005', wordBreak: 'break-all' }}>rit@ritrajapalayam.ac.in</span>
                </div>
              </div>
            </div>
          </div>

        </aside>

        {/* Right Content Area */}
        <div>
          {/* Header Row: Title & Search */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '30px'
          }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: 800,
              color: '#1a1005',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span style={{ color: '#ffb834' }}>🌿</span> Explore Admission Information
            </h2>


          </div>

          {/* Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '24px'
          }}>
            {filteredSections.map((sec) => {
              const Icon = sec.icon
              return (
                <div
                  key={sec.key}
                  style={{
                    background: '#ffffff',
                    borderRadius: '24px',
                    padding: '30px 24px',
                    boxShadow: '0 8px 30px rgba(139,90,43,0.04)',
                    border: '1px solid rgba(139,90,43,0.07)',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '260px',
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                  }}
                  className="adm-card-interactive"
                >
                  <span style={{
                    position: 'absolute',
                    top: '20px',
                    right: '24px',
                    fontSize: '12px',
                    fontWeight: 800,
                    color: '#ae701e',
                    background: '#fdf7eb',
                    padding: '4px 10px',
                    borderRadius: '8px'
                  }}>
                    {sec.num}
                  </span>

                  <div>
                    {/* Circle Icon Container */}
                    <div style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      background: `${sec.color}12`,
                      display: 'grid',
                      placeItems: 'center',
                      color: sec.color,
                      marginBottom: '20px'
                    }}>
                      <Icon size={24} />
                    </div>

                    <h3 style={{
                      fontSize: '17px',
                      fontWeight: 800,
                      color: '#1a1005',
                      margin: '0 0 10px',
                      lineHeight: '1.3'
                    }}>
                      {sec.title}
                    </h3>

                    <p style={{
                      fontSize: '12px',
                      lineHeight: '1.5',
                      color: '#7c7263',
                      margin: '0'
                    }}>
                      {sec.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => onSelectPage(sec.key)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      padding: '0',
                      fontSize: '12px',
                      fontWeight: 800,
                      color: '#b45309',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      marginTop: '25px',
                      textAlign: 'left'
                    }}
                  >
                    View Details <ArrowRight size={14} />
                  </button>
                </div>
              )
            })}
          </div>

        </div>

      </div>

      {/* ================= BOTTOM PROCESS SECTION ================= */}
      <div style={{
        maxWidth: '1200px',
        margin: '50px auto 0',
        padding: '0 20px'
      }}>
        
        <div style={{
          background: '#ffffff',
          borderRadius: '30px',
          border: '1px solid rgba(139,90,43,0.08)',
          boxShadow: '0 10px 40px rgba(139,90,43,0.04)',
          padding: '40px 5%',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '40px',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          
          {/* Left Title Box */}
          <div style={{ flex: '1 1 250px' }}>
            <span style={{ fontSize: '10px', fontWeight: 800, color: '#b45309', letterSpacing: '1px', textTransform: 'uppercase' }}>THE ADMISSION PROCESS</span>
            <h3 style={{ fontSize: '24px', fontWeight: 900, color: '#1a1005', margin: '6px 0 0' }}>A simple and transparent step-by-step admission journey.</h3>
          </div>

          {/* Steps Timeline nodes */}
          <div style={{
            flex: '1 1 700px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '20px',
            position: 'relative'
          }} className="adm-steps-container">
            
            {/* Step 1 */}
            <div style={{ textAlign: 'center', flex: 1 }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                background: '#fdf7eb',
                border: '2px dashed #ffb834',
                display: 'grid',
                placeItems: 'center',
                margin: '0 auto 12px',
                color: '#b45309'
              }}>
                <FileText size={18} />
              </div>
              <strong style={{ fontSize: '12px', display: 'block', color: '#1a1005' }}>01 Apply Online</strong>
              <span style={{ fontSize: '10px', color: '#a19789' }}>Fill the enquiry form or application.</span>
            </div>

            {/* Step 2 */}
            <div style={{ textAlign: 'center', flex: 1 }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                background: '#fdf7eb',
                border: '2px dashed #ffb834',
                display: 'grid',
                placeItems: 'center',
                margin: '0 auto 12px',
                color: '#b45309'
              }}>
                <UserCheck size={18} />
              </div>
              <strong style={{ fontSize: '12px', display: 'block', color: '#1a1005' }}>02 Verification</strong>
              <span style={{ fontSize: '10px', color: '#a19789' }}>We verify your documents.</span>
            </div>

            {/* Step 3 */}
            <div style={{ textAlign: 'center', flex: 1 }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                background: '#fdf7eb',
                border: '2px dashed #ffb834',
                display: 'grid',
                placeItems: 'center',
                margin: '0 auto 12px',
                color: '#b45309'
              }}>
                <Eye size={18} />
              </div>
              <strong style={{ fontSize: '12px', display: 'block', color: '#1a1005' }}>03 Review</strong>
              <span style={{ fontSize: '10px', color: '#a19789' }}>Application is reviewed by our team.</span>
            </div>

            {/* Step 4 */}
            <div style={{ textAlign: 'center', flex: 1 }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                background: '#fdf7eb',
                border: '2px dashed #ffb834',
                display: 'grid',
                placeItems: 'center',
                margin: '0 auto 12px',
                color: '#b45309'
              }}>
                <MailCheck size={18} />
              </div>
              <strong style={{ fontSize: '12px', display: 'block', color: '#1a1005' }}>04 Confirmation</strong>
              <span style={{ fontSize: '10px', color: '#a19789' }}>Receive confirmation and guidance.</span>
            </div>

            {/* Step 5 */}
            <div style={{ textAlign: 'center', flex: 1 }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                background: '#ffb83420',
                border: '2px solid #ffb834',
                display: 'grid',
                placeItems: 'center',
                margin: '0 auto 12px',
                color: '#b45309'
              }}>
                <GraduationCap size={18} />
              </div>
              <strong style={{ fontSize: '12px', display: 'block', color: '#1a1005' }}>05 Welcome to RIT</strong>
              <span style={{ fontSize: '10px', color: '#a19789' }}>Begin your journey towards success!</span>
            </div>

          </div>

        </div>

      </div>

      <Footer onOpenAdmin={() => {}} showOnlyCopyright={true} />
    </div>
  )
}
