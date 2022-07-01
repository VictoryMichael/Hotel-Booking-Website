import React from 'react'
import "./HomeGuest.css"
import {FaStar, FaStarHalfAlt} from "react-icons/fa"







const HomeGuest = () => {
  return (
    <div className='HomeGuest'>


        < div className='hg-item'>  

         <img className='hg-img'  src="https://thumbs.dreamstime.com/b/hotel-sign-building-paris-france-66168412.jpg" alt="" /> 
           <span className='hg-name'>5 Star hotel</span>
             <span className='fg-city'>Lagos</span>
               <span className='fg-price'>Starting from $250</span>
               <div className='fg-rating'>
               <FaStar className='icons'  />   <FaStar className='icons' />   <FaStar className='icons' />   <FaStar className='icons' />    <FaStar className='icons' />
                     
                 
                  </div>
                  </div>



                  <div className='hg-item'>  
                  <img className='hg-img'  src="https://www.e-architect.com/wp-content/uploads/2016/08/fairmont-pacific-rim-hotel-j190816-f2.jpg" alt="" /> 
           <span className='hg-name'>Nightlife garden</span>
             <span className='fg-city'>Uk</span>
               <span className='fg-price'>Starting from $250</span>
                  <div className='fg-rating'>
                  <FaStar className='icons'  />   <FaStar className='icons' />   <FaStar className='icons' />   <FaStarHalfAlt className='icons'  />  <FaStarHalfAlt className='icons'  /> 
                    
                  </div>
                  </ div>

                  <div className='hg-item'>  
                  <img className='hg-img' src="https://images.unsplash.com/photo-1599722585837-c1cb8eea32ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjBidWlsZGluZ3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="" /> 
           <span className='hg-name'>Hotel Epsan del</span>
             <span className='fg-city'>France</span>
               <span className='fg-price'>Starting from $550</span>
                  <div className='fg-rating'>
                    <FaStar className='icons'  />   <FaStar className='icons' />   <FaStar className='icons' />   <FaStar className='icons' /> <FaStarHalfAlt className='icons'  /> 
                  
                  </div>
              </div>

                
    </div>
  )
}

export default HomeGuest