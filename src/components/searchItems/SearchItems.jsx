import React from 'react'
import "./SearchItems.css"
import { Link } from 'react-router-dom'










const SearchItems = () => {
  return (
    
    <div className="searchItem">
    <img
      src="https://i.pinimg.com/originals/2a/a4/69/2aa46944107d2d837fc8fc255d6f9c75.png"
      alt=""
      className="siImg"
    />
    <div className="siDesc">
      <h1 className="siTitle">Tower Street Apartments</h1>
      <span className="siDistance">500m from center</span>
      <span className="siTaxiOp">Free airport taxi</span>
      <span className="siSubtitle">
        Studio Apartment with Air conditioning
      </span>
      <span className="siFeatures">
        Entire studio • 1 bathroom • 21m² 1 full bed
      </span>
      <span className="siCancelOp">Free cancellation </span>
      <span className="siCancelOpSubtitle">
        You can cancel later, so lock in this great price today!
      </span>
    </div>
    <div className="siDetails">
      <div className="siRating">
        <span>Excellent</span>
        <button>8.9</button>
      </div>
      <div className="siDetailTexts">
        <span className="siPrice">$112</span>
        <span className="siTaxOp">Includes taxes and fees</span>
        < Link to="/Avalibility">  
        <button className="siCheckButton">See availability</button>
        </Link>
      </div>
    </div>
  </div>


  )
}

export default SearchItems