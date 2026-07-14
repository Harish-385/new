import React from 'react'
import './HostelPage.css'

export default function HostelPage({ flatPage }: { flatPage?: any }) {
  return (
    <div className="hostel-page-container">
      <div className="hostel-content">
        <h3 className="hostel-heading">RIT Hostel</h3>
        <p className="hostel-paragraph">
          Ramco Institute of Technology has well-furnished separate spacious hostels with modern facilities for boys and girls to provide accommodation to students wishing to reside in the hostels. Well balanced, nutritious and healthy diet is provided to the students of RIT hostels.
        </p>
        <p className="hostel-paragraph">
          In the hostel, each room is provided with a cot with a mattress, a table, a chair, a cupboard with a bookshelf, pest repellent light, and a ceiling fan (with regulator). To ensure a healthy stay for the inmates, high-quality fiber mosquito/fly net mesh screens are fixed in the windows of our hostel rooms. Laundry space with an adequate number of washing machines is provided to the students to wash their clothes. Students are also provided with hi-speed internet connectivity through Wi-Fi on their laptops.
        </p>
        <p className="hostel-paragraph">
          The hostel also houses an Indoor Sports arena where students can play games like Table Tennis (TT), Chess, and Carrom, etc. The Common Rooms available in each block of the hostel are equipped with a T.V and a music system. In addition, all the rooms are provided with newspapers and magazines. Avid sports enthusiasts can take their sports equipment from the Sports Room which is maintained by the physical director.
        </p>

        <h3 className="hostel-heading-center">Hostel</h3>

        {/* Side by side images */}
        <div className="hostel-image-split">
          <div className="hostel-image-column">
            <img src="/media/generic/infrastructure-hostel/boys-hostel.jpg" alt="Boys Hostel" className="hostel-full-image" />
          </div>
          <div className="hostel-image-column">
            <img src="/media/generic/infrastructure-hostel/girls-hostel.jpg" alt="Girls Hostel" className="hostel-full-image" />
          </div>
        </div>

        {/* Stacked large images */}
        <img src="/media/generic/infrastructure-hostel/hostel-img1.jpg" alt="Hostel Room Single" className="hostel-full-image-large" />
        <img src="/media/generic/infrastructure-hostel/hostel-img2.jpg" alt="Hostel Room Double" className="hostel-full-image-large" />
        <img src="/media/generic/infrastructure-hostel/hostel-img3.jpg" alt="Hostel Common Room" className="hostel-full-image-large" />

      </div>
    </div>
  )
}
