import React from 'react'
import "./Featured.css"
const Featured = () => {
  return (
    <div className='featured'>
       <div className='feature-item'>
            <img className='featuredImg'   src="https://thepointsguy.global.ssl.fastly.net/us/originals/2022/05/Best-family-travel-destinations-2022_Atlantis-Kids.jpg" alt="" width={500} />
               <div className='featured-titles'>
                  <h1 > Dubia </h1>
                   <h2>134 properties </h2>
               </div>
       </div>
      
      
      


       <div className='feature-item'>
            <img className='featuredImg'   src="https://i0.wp.com/juliogoessolo.com/wp-content/uploads/2018/10/43253542_339728823262332_6762695873232109568_n.jpg?fit=816%2C612&ssl=1" alt="" width={500} />
               <div className='featured-titles'>
                  <h1 > Turkey </h1>
                   <h2>74 properties </h2>
               </div>
       </div>


       <div className='feature-item'>
            <img className='featuredImg'   src="https://fustany.com/images/en/content/header_image_Fustany-lifetsyle-living-six-beautiful-places-to-spend-your-easter-vacation-in-egypt-mainimagee" alt="" width={500} />
               <div className='featured-titles'>
                  <h1 > Egypt </h1>
                   <h2>13 properties </h2>
               </div>
       </div>


   
      
      </div>
  )
}

export default Featured