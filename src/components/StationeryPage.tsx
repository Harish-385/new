import React from 'react'
import './StationeryPage.css'

export default function StationeryPage({ flatPage }: { flatPage?: any }) {
  return (
    <div className="stationery-page-container">
      <div className="stationery-content">
        <h3 className="stationery-heading">STATIONERY STORE</h3>
        
        <p className="stationery-paragraph">
          To cater to the students reprography needs, the college has an in house stationery store that offers photocopying and printing facilities for students. The student friendly store also provides a wide range of value-for-money general stationery items, toiletries, batteries, cosmetics and men and womens accessories. It also provides geometrical supplies like mini-drafter and precise measuring equipment at reasonable rates. Binding and lamination facilities are made available to the students in order to complete their project works with ease.
        </p>

        <div className="stationery-images">
          <img src="/media/generic/infrastructure-stationery/store-photo.jpg" alt="Stationery Store" className="stationery-full-image" />
        </div>
      </div>
    </div>
  )
}
