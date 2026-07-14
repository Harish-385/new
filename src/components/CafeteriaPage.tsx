import React from 'react'
import './CafeteriaPage.css'

export default function CafeteriaPage({ flatPage }: { flatPage?: any }) {
  return (
    <div className="cafeteria-page-container">
      <div className="cafeteria-content">
        <h3 className="cafeteria-heading">CAFETERIA</h3>
        
        <p className="cafeteria-paragraph">
          Canteen is a place where students of all courses interact with each other and enjoy the good food. Our modern well-furnished cafeteria, built in an area of 150 sq.m is a perfect place for a snack break. Our cafeteria offers a wide range of hot and cold options for breakfast, lunch and everything in-between. It also offers delicious munchies, ice creams, soft drinks at an affordable price. RIT also has an open air, garden-view cafeteria where students are provided with enough place to relax. We at RIT understand the importance of good health and its role in building a healthy mind. Therefore, our well designed hygienic canteen supplies quality snacks and eatables.
        </p>

        <div className="cafeteria-images">
          <img src="/media/generic/infrastructure-cafeteria/canteen.jpg" alt="Cafeteria" className="cafeteria-full-image" />
          <img src="/media/generic/infrastructure-cafeteria/store1.jpg" alt="Cafeteria Store" className="cafeteria-full-image" />
        </div>
      </div>
    </div>
  )
}
