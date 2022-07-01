import React from 'react'
import "./MailList.css"



const MailList = () => {
  return (
    <div className='Mail'>

       <h1 className='mail-title' >Save time, save money!</h1>
         <span mail-desc>Sign up and we'll send the best deal to you</span>
           <div  className='mail-inputcon'>
              <input type="text" placeholder='your Email'  />
               <button >Subscribe</button>
           </div>
    </div>
  )
}

export default MailList