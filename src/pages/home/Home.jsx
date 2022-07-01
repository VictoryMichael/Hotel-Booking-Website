import React from 'react'
import "./Home.css"
import Featured from '../../components/featured/Featured'
import Header from '../../components/header/Header'

import Navbar from '../../components/navbar/Navbar'
import PropertyList from '../../components/propertyList/PropertyList'
import HomeGuest from '../../components/homeGuest/HomeGuest'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'



const Home = () => {
  return (
    <div>
      <Navbar />
    <Header />
       <div className='home-container'>
           <Featured />
           <h1 className='home-title'>Browse by property type</h1>
           <PropertyList />
           <h1 className='home-title'>Home guest Love </h1>
           <HomeGuest />
           <MailList />
           <Footer />
       </div>
      
    </div>
  )  
}

export default Home