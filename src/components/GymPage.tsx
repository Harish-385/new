import React from 'react'
import './GymPage.css'

export default function GymPage({ flatPage }: { flatPage?: any }) {
  return (
    <div className="gym-page-container">
      <div className="gym-content">
        <h3 className="gym-heading">GYMNASIUM</h3>
        
        <p className="gym-paragraph">
          There are well equipped international standard gyms for men and women installed with the latest equipment in the hostel premises. The gyms are furnished with strength machines, treadmills, equipment for power lifting, weight training and cycling. A dedicated area for aerobics and cardio exercises is also available. They are open to students to encourage the weight lifters, body builders and fitness seekers.
        </p>

        <h3 className="gym-heading gym-sub">BOYS GYM</h3>
        <div className="gym-images-grid">
          <img src="/media/generic/infrastructure-gym/boys-gym1.jpg" alt="Boys Gym Training" className="gym-full-image" />
          <img src="/media/generic/infrastructure-gym/boys-gym2.jpg" alt="Boys Gym Equipment" className="gym-full-image" />
        </div>

        <h3 className="gym-heading gym-sub">GIRLS GYM</h3>
        <div className="gym-images-grid">
          <img src="/media/generic/infrastructure-gym/girls-gym.jpg" alt="Girls Gym Area" className="gym-full-image" />
          <img src="/media/generic/infrastructure-gym/girls-gym2.jpg" alt="Girls Gym Cardio" className="gym-full-image" />
        </div>

      </div>
    </div>
  )
}
