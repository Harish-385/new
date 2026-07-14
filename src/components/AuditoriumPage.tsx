import React from 'react'
import './AuditoriumPage.css'

export default function AuditoriumPage({ flatPage }: { flatPage?: any }) {
  return (
    <div className="auditorium-page-container">
      <div className="auditorium-content">
        <h3 className="auditorium-heading">AUDITORIUM</h3>
        
        <p className="auditorium-paragraph">
          RIT has a mega indoor auditorium with convention facilities that can seat more than 2500 people. It is equipped with a large stage, green rooms, comfortable seating space, acoustic ceiling, wash-rooms and podium. Mega cultural events, freshers day function, college day celebrations and graduation day ceremony are conducted here. Our auditorium also serves as a venue to group students at one place and conduct effective interaction with the staff and domain specific experts from different industries.
        </p>

        <div className="auditorium-images-grid">
          <div className="auditorium-image-wrapper">
            <img src="/media/generic/infrastructure-auditorium/auditorium.jpg" alt="Auditorium View 1" className="auditorium-image" />
          </div>
          <div className="auditorium-image-wrapper">
            <img src="/media/generic/infrastructure-auditorium/auditorium1.jpg" alt="Auditorium View 2" className="auditorium-image" />
          </div>
          <div className="auditorium-image-wrapper">
            <img src="/media/generic/infrastructure-auditorium/auditorium3.jpg" alt="Auditorium View 3" className="auditorium-image" />
          </div>
        </div>
      </div>
    </div>
  )
}
