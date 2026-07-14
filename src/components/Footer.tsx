import { Phone, Mail, Globe, MapPin, LayoutGrid, Link2, Send, ChevronRight, Headphones, ArrowRight, Award, Lightbulb, Handshake, Heart, ArrowUp, GraduationCap, Users, BookOpen, Trophy, Landmark } from 'lucide-react'
import * as LucideIcons from 'lucide-react'
import { useCMS } from './CMSContext'

interface FooterProps {
  onOpenAdmin: () => void
}

export default function Footer({ onOpenAdmin }: FooterProps) {
  const { homepageConfig } = useCMS()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="unified-footer-root" id="contact">
      {/* ================= LIGHT CREAM TOP FOOTER ================= */}
      <div className="footer-cream-top">
        {/* Background college logo watermark */}
        <div className="footer-watermark-logo-wrapper">
          <img src="/ritlogo.png" alt="RIT Watermark Logo" className="footer-watermark-logo" />
        </div>
        <div className="footer-top-container-new">
          {/* Column 1: Brand & Contact Info */}
          <div className="footer-col-new brand-col-new">
            <div className="footer-brand-new">
              <img src="/ritlogo.png" alt="RIT Logo" className="footer-logo-new" />
              <div className="footer-brand-text-new">
                <h3>RAMCO INSTITUTE</h3>
                <p>OF TECHNOLOGY</p>
              </div>
            </div>
            <div className="footer-brand-divider" />

            <div className="footer-contact-items-new">
              <div className="contact-item-new">
                <MapPin size={18} className="contact-icon-new" />
                <span>
                  Ramco Institute of Technology<br />
                  North Venganallur Village,<br />
                  Rajapalayam – 626 117,<br />
                  Virudhunagar District, Tamil Nadu.
                </span>
              </div>
              <div className="contact-item-new">
                <Phone size={18} className="contact-icon-new" />
                <a href="tel:04563233400">04563 233400</a>
              </div>
              <div className="contact-item-new">
                <Mail size={18} className="contact-icon-new" />
                <a href="mailto:rit@ritrjpm.ac.in">rit@ritrjpm.ac.in</a>
              </div>
              <div className="contact-item-new">
                <Globe size={18} className="contact-icon-new" />
                <a href="https://www.ritrjpm.ac.in" target="_blank" rel="noreferrer">www.ritrjpm.ac.in</a>
              </div>
            </div>

            <a href="https://forms.gle/4SvzeMv46ysQDHDY8" target="_blank" rel="noreferrer" className="footer-helpdesk-btn">
              <div className="helpdesk-icon-box">
                <Headphones size={18} />
              </div>
              <div className="helpdesk-btn-text">
                <strong>Help Desk / Support</strong>
                <span>We're here to help you!</span>
              </div>
              <ArrowRight size={16} className="helpdesk-arrow" />
            </a>
          </div>

          {/* Column 2: Menu */}
          <div className="footer-col-new">
            <div className="footer-col-header-new">
              <div className="header-icon-wrapper-new">
                <LayoutGrid size={16} />
              </div>
              <h4>MENU</h4>
            </div>
            <div className="footer-header-underline-new" />

            <ul className="footer-links-new">
              <li>
                <ChevronRight size={14} className="link-arrow-new" />
                <a href="https://www.ritrjpm.ac.in/images/EC%20-%20RIT%2005.07.2013.pdf" target="_blank" rel="noreferrer">
                  Environmental Clearance
                </a>
              </li>
              <li>
                <ChevronRight size={14} className="link-arrow-new" />
                <a href="https://www.ritrjpm.ac.in/images/RIT_EC-Compliance%20Report.pdf" target="_blank" rel="noreferrer">
                  EC Compliance Reports
                </a>
              </li>
              <li>
                <ChevronRight size={14} className="link-arrow-new" />
                <a href="https://www.ritrjpm.ac.in/images/pdf/2024-2025/Anti_Raggging_Committee_2024-25.pdf" target="_blank" rel="noreferrer">
                  Anti Ragging Committee
                </a>
              </li>
              <li>
                <ChevronRight size={14} className="link-arrow-new" />
                <a href="https://www.ritrjpm.ac.in/images/pdf/2024-2025/2024-2025-Complaints-Grievance-Redressal-Committee.pdf" target="_blank" rel="noreferrer">
                  Complaints Cum Redressal Committee
                </a>
              </li>
              <li>
                <ChevronRight size={14} className="link-arrow-new" />
                <a href="https://alumni.ritrjpm.ac.in/" target="_blank" rel="noreferrer">
                  Alumni
                </a>
              </li>
              <li>
                <ChevronRight size={14} className="link-arrow-new" />
                <a href="https://www.ritrjpm.ac.in/gallery/event-gallery.php" target="_blank" rel="noreferrer">
                  Event Gallery
                </a>
              </li>
              <li>
                <ChevronRight size={14} className="link-arrow-new" />
                <a href="https://forms.gle/4SvzeMv46ysQDHDY8" target="_blank" rel="noreferrer">
                  Help Desk
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Link */}
          <div className="footer-col-new">
            <div className="footer-col-header-new">
              <div className="header-icon-wrapper-new">
                <Link2 size={16} />
              </div>
              <h4>QUICK LINK</h4>
            </div>
            <div className="footer-header-underline-new" />

            <ul className="footer-links-new">
              <li>
                <ChevronRight size={14} className="link-arrow-new" />
                <a href="https://www.ritrjpm.ac.in/press/details.php" target="_blank" rel="noreferrer">
                  Press
                </a>
              </li>
              <li>
                <ChevronRight size={14} className="link-arrow-new" />
                <a href="https://www.ritrjpm.ac.in/article/college-magazine.php" target="_blank" rel="noreferrer">
                  College Magazine
                </a>
              </li>
              <li>
                <ChevronRight size={14} className="link-arrow-new" />
                <a href="https://www.ritrjpm.ac.in/activities/weekly-news-letter.php" target="_blank" rel="noreferrer">
                  News Letter
                </a>
              </li>
              <li>
                <ChevronRight size={14} className="link-arrow-new" />
                <a href="https://www.ritrjpm.ac.in/article/feedback.php" target="_blank" rel="noreferrer">
                  Feedback
                </a>
              </li>
              <li>
                <ChevronRight size={14} className="link-arrow-new" />
                <a href="https://www.ritrjpm.ac.in/gallery/campus-gallery.php" target="_blank" rel="noreferrer">
                  Campus Gallery
                </a>
              </li>
              <li>
                <ChevronRight size={14} className="link-arrow-new" />
                <a href="https://ieee-inherited-prototype-rand.trycloudflare.com/login.aspx" target="_blank" rel="noreferrer">
                  STP RPMS
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Follows */}
          <div className="footer-col-new follow-col-new">
            <div className="footer-col-header-new">
              <div className="header-icon-wrapper-new">
                <Send size={16} />
              </div>
              <h4>FOLLOWS</h4>
            </div>
            <div className="footer-header-underline-new" />

            <div className="footer-social-links-new">
              <a href="https://www.facebook.com/RITRajapalayam/?modal=admin_todo_tour" target="_blank" rel="noreferrer" aria-label="Facebook" className="social-facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/ramco_rajapalayam" target="_blank" rel="noreferrer" aria-label="Instagram" className="social-instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="https://twitter.com/RITRajapalayam" target="_blank" rel="noreferrer" aria-label="Twitter" className="social-x">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/school/ramco-institute-of-technology/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-linkedin">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://www.youtube.com/@ramcoinstituteoftechnology" target="_blank" rel="noreferrer" aria-label="YouTube" className="social-youtube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11C4.482 20.455 12 20.455 12 20.455s7.518 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>

            <div className="footer-quote-box-new">
              <span className="quote-mark-new">“</span>
              <p>Empowering Minds. Transforming Lives. Building a Better Tomorrow.</p>
              <div className="quote-line-new" />
            </div>
          </div>
        </div>
      </div>

      {/* ================= DARK UNIFIED BOTTOM FOOTER WITH WAVE ================= */}
      <div className="footer-dark-bottom-section">
        {/* SVG Wave Transition at the top */}
        <div className="footer-wave-container">
          <svg viewBox="0 0 1440 70" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="footer-wave-svg">
            <path d="M0,35 C240,75 480,75 720,35 C960,-5 1200,-5 1440,35 L1440,70 L0,70 Z" fill="#0b0806" />
          </svg>
        </div>

        <div className="footer-dark-content">
          {/* Main Card Content: Pillars & Map (Flat, no floating rounded margins) */}
          <div className="footer-panel-card-flat">
            {/* Middle Columns: The Four Pillars */}
            <div className="footer-panel-section pillars-grid-box">
              {/* Pillar 1 */}
              <div className="pillar-item-new">
                <div className="pillar-header-new">
                  <div className="pillar-icon-circle-new">
                    <Award size={20} />
                  </div>
                  <div className="pillar-titles-new">
                    <h4>Academic</h4>
                    <h4>Excellence</h4>
                  </div>
                </div>
                <p className="pillar-desc-new">Quality education that shapes future leaders.</p>
              </div>

              {/* Pillar 2 */}
              <div className="pillar-item-new">
                <div className="pillar-header-new">
                  <div className="pillar-icon-circle-new">
                    <Lightbulb size={20} />
                  </div>
                  <div className="pillar-titles-new">
                    <h4>Innovation &</h4>
                    <h4>Research</h4>
                  </div>
                </div>
                <p className="pillar-desc-new">Driving innovation through research and technology.</p>
              </div>

              {/* Pillar 3 */}
              <div className="pillar-item-new">
                <div className="pillar-header-new">
                  <div className="pillar-icon-circle-new">
                    <Handshake size={20} />
                  </div>
                  <div className="pillar-titles-new">
                    <h4>Industry</h4>
                    <h4>Connections</h4>
                  </div>
                </div>
                <p className="pillar-desc-new">Strong industry tie-ups for better opportunities.</p>
              </div>

              {/* Pillar 4 */}
              <div className="pillar-item-new">
                <div className="pillar-header-new">
                  <div className="pillar-icon-circle-new">
                    <Heart size={20} />
                  </div>
                  <div className="pillar-titles-new">
                    <h4>Holistic</h4>
                    <h4>Development</h4>
                  </div>
                </div>
                <p className="pillar-desc-new">Nurturing talents beyond academics for a better tomorrow.</p>
              </div>
            </div>

            <div className="footer-panel-divider" />

            {/* Right Box: Map View */}
            <div className="footer-panel-section map-view-box">
              <div className="cyber-radar-container">
                {/* Tech grid backgrounds */}
                <div className="radar-grid" />
                <div className="radar-crosshairs" />
                <div className="radar-sweep-line" />
                
                {/* Rotating tech rings */}
                <div className="radar-ring ring-outer" />
                <div className="radar-ring ring-middle" />
                <div className="radar-ring ring-inner" />

                {/* Cyberpunk coordinates & status */}
                <div className="radar-overlay-data">
                  <span className="radar-data-line terminal-text">LOCATING TARGET...</span>
                  <span className="radar-data-line coords-text">SYS: 9.5862° N / 77.5684° E</span>
                </div>

                <div className="map-radar-pulse" />
                <div className="map-pin-indicator">
                  <MapPin size={24} className="neon-pin" />
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Ramco+Institute+of+Technology+Rajapalayam"
                target="_blank"
                rel="noreferrer"
                className="view-map-btn-new"
              >
                <span>View on Map</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Unified Copyright, Meet the Makers & Credit Row */}
          <div className="wavy-copyright-row unified-makers-row">
            {/* Left Decorative Dot Matrix */}
            <div className="footer-dot-matrix left-matrix">
              {Array.from({ length: 18 }).map((_, idx) => (
                <span key={idx} className="matrix-dot" />
              ))}
            </div>

            <div className="wavy-copyright-left">
              <span>© 2026 Ramco Institute of Technology. All Rights Reserved.</span>
            </div>

            {/* Center Capsule Button & Airplane */}
            <div className="footer-makers-center-wrap">
              <a href="https://ritrjpm.ac.in/department/artificial-intelligence-and-data-science/makers" target="_blank" rel="noreferrer" className="makers-capsule-button">
                <div className="makers-icon-circle">
                  <span>&lt;/&gt;</span>
                </div>
                <div className="makers-text-block">
                  <span className="makers-label">The Minds Behind RIT</span>
                  <span className="makers-title">Meet the Developers</span>
                </div>
                <div className="makers-arrow-wrap">
                  <span className="makers-arrow">→</span>
                </div>
              </a>

              {/* Paper Airplane Vector Graphic */}
              <div className="airplane-vector-wrap">
                <svg viewBox="0 0 120 40" fill="none" className="airplane-vector-svg">
                  <path d="M 0,32 C 30,32 50,38 60,25 C 70,12 85,15 95,20" stroke="#ae701e" strokeWidth="1.5" strokeDasharray="4,4" fill="none" />
                  <g transform="translate(93, 10) rotate(35) scale(0.65)">
                    <path d="M 0,10 L 22,0 L 16,22 L 12,14 L 0,10 Z" fill="none" stroke="#ffb834" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M 12,14 L 22,0 L 9,9 Z" fill="none" stroke="#ffb834" strokeWidth="1.5" />
                  </g>
                </svg>
              </div>
            </div>

            <div className="wavy-copyright-right">
              <span className="designed-by">Cooked By <strong className="highlight-dept">Department of Artificial Intelligence and Data Science</strong></span>
            </div>

            {/* Right Decorative Dot Matrix */}
            <div className="footer-dot-matrix right-matrix">
              {Array.from({ length: 18 }).map((_, idx) => (
                <span key={idx} className="matrix-dot" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
