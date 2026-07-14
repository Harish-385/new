import React from 'react'
import './SeminarPage.css'

export default function SeminarPage({ flatPage }: { flatPage?: any }) {
  return (
    <div className="seminar-page-container">
      <div className="seminar-content">
        <h3 className="seminar-heading-main">Seminar Halls/ Video Conference</h3>
        
        <p className="seminar-paragraph">
          RIT houses five 150-200 seater air-conditioned seminar halls with video conferencing and presentation facilities. It is also equipped with excellent sound system and good interiors. We have a separate 350 seater air-conditioned placement seminar hall with state-of-the-art interior, sound system and presentation facilities to conduct training and placement activities. Events such as small meetings, symposia, seminars, conferences, guest lectures, invited talks etc., are organized here. To widen the horizon of knowledge of the students and the staff, RIT regularly invites renowned academicians, motivational speakers, industry experts and intellectuals from different spheres for addressing the students and the teaching staff on various subjects and current industry trends. Competitions in different academic spheres and student seminars to enhance communication skills are also organized in these halls to give opportunities for students to exhibit their talents.
        </p>

        <img src="/media/generic/infrastructure-seminar-hall/seminar-hall.jpg" alt="Seminar Hall Overview" className="seminar-full-image" />

        <h3 className="seminar-heading">Computer Science Seminar Hall</h3>
        <img src="/media/generic/infrastructure-seminar-hall/seminar-hall1.jpg" alt="Computer Science Seminar Hall" className="seminar-full-image" />

        <h3 className="seminar-heading">Civil Seminar Hall</h3>
        <img src="/media/generic/infrastructure-seminar-hall/seminar-hall3.jpg" alt="Civil Seminar Hall" className="seminar-full-image" />

        <h3 className="seminar-heading">Mechanical Seminar Hall</h3>
        <img src="/media/generic/infrastructure-seminar-hall/seminar-hall2.jpg" alt="Mechanical Seminar Hall" className="seminar-full-image" />

        <h3 className="seminar-heading">Electrical Communication Seminar Hall</h3>
        <img src="/media/generic/infrastructure-seminar-hall/seminar-hall4.jpg" alt="Electrical Communication Seminar Hall" className="seminar-full-image" />

        <h3 className="seminar-heading">Electrical And Electronics Seminar Hall</h3>
        <img src="/media/generic/infrastructure-seminar-hall/seminar-hall5.jpg" alt="Electrical And Electronics Seminar Hall" className="seminar-full-image" />
      </div>
    </div>
  )
}
