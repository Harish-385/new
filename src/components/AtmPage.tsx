import React from 'react'
import { Landmark, CreditCard, Clock, ShieldCheck } from 'lucide-react'
import './AtmPage.css'

export default function AtmPage({ flatPage }: { flatPage?: any }) {
  return (
    <div className="atm-page-container">
      <div className="atm-hero-card">
        
        <div className="atm-image-side">
          <div className="atm-image-wrapper">
            <img 
              src="/media/generic/infrastructure-atm/fed_bank_1.jpg" 
              alt="Federal Bank ATM at RIT" 
              className="atm-main-image"
            />
            <div className="atm-image-overlay"></div>
            
            <div className="atm-floating-card">
              <div className="atm-pulse-dot"></div>
              <span>Currently Operational</span>
            </div>
          </div>
        </div>

        <div className="atm-content-side">
          <div className="atm-badge">
            <Landmark size={16} />
            <span>Campus Facility</span>
          </div>
          
          <h2 className="atm-title">
            24/7 Federal Bank <span className="atm-highlight">ATM</span>
          </h2>
          
          <p className="atm-description">
            RIT provides a fully functional, 24-hour Federal Bank ATM facility exclusively located within the campus premises. It ensures convenient, safe, and round-the-clock banking access for all our students, faculty, and staff.
          </p>

          <div className="atm-features-grid">
            <div className="atm-feature-item">
              <div className="atm-feature-icon-box">
                <Clock size={22} className="atm-icon" />
              </div>
              <div className="atm-feature-text">
                <h4>24/7 Access</h4>
                <p>Available day and night</p>
              </div>
            </div>
            
            <div className="atm-feature-item">
              <div className="atm-feature-icon-box">
                <ShieldCheck size={22} className="atm-icon" />
              </div>
              <div className="atm-feature-text">
                <h4>Secure</h4>
                <p>Safe campus environment</p>
              </div>
            </div>
            
            <div className="atm-feature-item">
              <div className="atm-feature-icon-box">
                <CreditCard size={22} className="atm-icon" />
              </div>
              <div className="atm-feature-text">
                <h4>All Cards</h4>
                <p>Supports major networks</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
