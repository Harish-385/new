import React from 'react'
import './SportsPage.css'

export default function SportsPage({ flatPage }: { flatPage?: any }) {
  const allSports = [
    { name: 'Basketball', img: '/media/generic/infrastructure-sports/Basketball_Men_Team_V2.jpg' },
    { name: 'Football', img: '/media/generic/infrastructure-sports/Football_Men_Team.jpg' },
    { name: 'Volleyball', img: '/media/generic/infrastructure-sports/volleyball-1.jpg' },
    { name: 'Hockey', img: '/media/generic/Infrastructure_Sports/Hockey Men Team.jpg' },
    { name: 'Table Tennis', img: '/media/generic/infrastructure-sports/Table_Tennis_Men_Team.jpg' },
    { name: 'Badminton', img: '/media/generic/infrastructure-sports/Badminton_V2.jpg' },
    { name: 'Ball Badminton', img: '/media/generic/infrastructure-sports/sports4.jpg' },
    { name: 'Cricket', img: '/media/generic/infrastructure-sports/Cricket_V2.jpg' },
    { name: 'Taekwondo', img: '/media/generic/infrastructure-sports/Teakwondo.jpg' },
    { name: 'Khelo India', img: '/media/generic/infrastructure-sports/Taekwonda_V2.jpg' },
    { name: 'Chess', img: '/media/generic/infrastructure-sports/Chess_V2.jpg' },
    { name: 'Kabaddi', img: '/media/generic/infrastructure-sports/Kabaddi_V2.jpg' },
    { name: 'Judo', img: '/media/generic/infrastructure-sports/rit-judo-1.jpg' },
    { name: 'Basketball (Women)', img: '/media/generic/Infrastructure_Sports/Basketball womens team.jpg' },
    { name: 'Table Tennis (Women)', img: '/media/generic/infrastructure-sports/sports6.jpg' },
    { name: 'Carrom', img: '/media/generic/infrastructure-sports/sports7.jpg' },
  ]

  return (
    <div className="sports-page-container">
      {/* Department Header */}
      <div className="sports-dept-header">
        <h1>Department of Physical Education</h1>
        <p>Promoting Health, Fitness, and Sportsmanship</p>
      </div>

      {/* Faculty Section */}
      <div className="sports-section">
        <h2 className="sports-section-title">Faculty Details</h2>
        <div className="sports-faculty-grid">
          <div className="sports-faculty-card">
            <div className="sports-faculty-avatar">
              <img src="/media/generic/infrastructure-sports/aishwariya.jpg" alt="Mrs. Aishwarya Devi R" />
            </div>
            <div className="sports-faculty-info">
              <h3>Mrs. Aishwarya Devi R</h3>
              <h4>Physical Director</h4>
              <p>Department of Physical Education</p>
            </div>
          </div>
          <div className="sports-faculty-card">
            <div className="sports-faculty-avatar">
              <img src="/media/generic/infrastructure-sports/Iranaveeran.jpg" alt="Mr. Iranaveeran V" />
            </div>
            <div className="sports-faculty-info">
              <h3>Mr. Iranaveeran V</h3>
              <h4>Assistant Physical Director</h4>
              <p>Department of Physical Education</p>
            </div>
          </div>
          <div className="sports-faculty-card">
            <div className="sports-faculty-avatar">
              <img src="/media/generic/infrastructure-sports/Maharasi.jpg" alt="Ms. V. Maharasi" />
            </div>
            <div className="sports-faculty-info">
              <h3>Ms. V. Maharasi</h3>
              <h4>Physical Instructor</h4>
              <p>Department of Physical Education</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Sports */}
      <div className="sports-section">
        <h2 className="sports-section-title">Sports Facilities</h2>
        <div className="sports-about-text">
          <p>
            In RIT, equal emphasis is given to sports along with the curricular and co-curricular activities. We have all necessary sports facilities including extensive space for outdoor sports in our campus. In addition to this, in association with Sports Authority of India (SAI), it has been proposed to construct a mega sports complex comprising of indoor and outdoor facilities at an outlay of Rs. 10 crores in the upcoming academic year. The indoor games hall would house badminton, shuttle, basketball, volley ball and tennikoit courts. It has also been proposed to lay a synthetic athletic track for the benefit of the athletes of our college. A separate sports area has been allotted for conducting other field events like shot put, discus throw, javelin throw, handball, kho-kho etc.
          </p>
          <p>
            The college also rewards outstanding achievers in sports with scholarships. Students are encouraged to participate in various zonal, state, national and international level tournaments and the management is committed to providing them with all the necessary facilities.
          </p>
        </div>
      </div>

      {/* Unified Sports Gallery */}
      <div className="sports-section">
        <h2 className="sports-section-title">Sports Gallery</h2>
        <div className="sports-gallery-grid">
          {allSports.map((sport, idx) => (
            <div className="sports-gallery-card" key={idx}>
              <img src={sport.img} alt={sport.name} />
              <div className="sports-gallery-overlay">
                <span>{sport.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
