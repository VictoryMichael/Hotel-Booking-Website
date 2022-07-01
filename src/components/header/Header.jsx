import React  from 'react'

import "./Header.css"
import {FaTaxi} from"react-icons/fa"
import {GrAttraction} from"react-icons/gr"
import {MdCarRental, MdLocalHotel,MdPersonalInjury} from"react-icons/md"
import {GiCommercialAirplane } from"react-icons/gi"
import {FcCalendar} from"react-icons/fc"
import { useState } from "react"



import { DateRange} from 'react-date-range';
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

import {   useNavigate } from "react-router-dom";






const Header = ({type}) => {
const [destination, setDestination] = useState("");
const [openDate, setOpenDate] = useState(false)
const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

const [openOptions, setOpenOptions] = useState(false)

const [options, setOptions] = useState({
Adult:1,
Children:0,
Room:1, 
})

const navigate = useNavigate()


const handleOption = (name, operation) => {
  setOptions((prev) => {
    return {
      ...prev,
      [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
    };
  });
};



const handleSearch = () =>{
navigate("/Hotels", {state: {destination,date,options}})

};

  return (
<div className='header'>
    <div className={type === "list" ? "headercontainer listmode" : "header-container"   }>  
        <div className="headerList">

          <div className="headerListItem active">
         <MdLocalHotel className='icons'> </MdLocalHotel>
            <span>Stays</span>
          </div>

          <div className="headerListItem">
            <GiCommercialAirplane className='icons'> </GiCommercialAirplane>
            <span>Flights</span>
          </div>

          <div className="headerListItem">
         <MdCarRental className='icons'> </MdCarRental>
            <span>Car rentals</span>
          </div>

          <div className="headerListItem">
        <GrAttraction className='icons'> </GrAttraction>
            <span>Attractions</span>
          </div>

          <div className="headerListItem">
               <FaTaxi className='icons'> </FaTaxi>
            <span>Airport Taxis</span>
        </div>
          
    </div>



{ type !== "list" &&
<>
    <h1 className='header-title'>  Sail away from the safe harbor. Explore. Dream. Discover</h1>
          <p className='header-dec'>Get rewarded for your travels-unlock instant savings of 30% or more with V.booking.com account</p>
            <button className='header-btn'>Sign In</button>

                < div className='header-search'> 
                    <div className='header-searchitem'>
                         <MdLocalHotel className='header-icon'></MdLocalHotel>
                       <input type="text" placeholder='Where you Traveling?' className='header-searchinput' onChange={(e)=> setDestination (e.target.value)} />

                    </div>

                



<div className='header-searchitem'>
                         <FcCalendar className='header-icon'></FcCalendar>
                           <span onClick={() =>setOpenDate (!openDate)} className='headersearch-text'>{`${format(date[0].startDate, "MM/dd/yyyy")} To  ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                    
{openDate && (

<DateRange
  editableDateInputs={true}
  onChange={(item) => setDate([item.selection])}
  moveRangeOnFirstSelection={false}
  className="date-range"
  ranges={date}
  minDate={new Date()}
/>


)}



</div>






                    <div className='header-searchitem'>
                         <MdPersonalInjury className='header-icon'></MdPersonalInjury>
                           <span onClick={() =>setOpenOptions (!openOptions)} className='headersearch-text'>{`${options.Adult} Adult . ${options.Children} Children . ${options.Room} Room `}</span>
{openOptions && (




                 <div   className='options'>
                   <div className='option-item'>
                      <span className='option-text'>Adult</span>
                        <div className='option-counter'>
                        <button disabled={options.Adult <=1} className='option-counterbtn' onClick={() =>handleOption("Adult", "d")} >-</button>
                          <span className='optioncounter-number'>{options.Adult}</span>
                        <button className='option-counterbtn'  onClick={() =>handleOption("Adult", "i")} >+</button>
                        </div>
                   </div>

                   <div className='option-item'>
                      <span className='option-text'>Children</span>
                      <div className='option-counter'>
                        <button disabled={options.Children <=0} className='option-counterbtn'  onClick={() =>handleOption("Children", "d")} >-</button>
                          <span className='optioncounter-number'>{options.Children}</span>
                        <button className='option-counterbtn' onClick={() =>handleOption("Children", "i")}  >+</button>
                        </div>
                   </div>


                   <div className='option-item'>
                      <span className='option-text'>Room</span>
                      <div className='option-counter'>
                        <button disabled={options.Room <=1} className='option-counterbtn' onClick={() =>handleOption("Room", "d")}  >-</button>
                          <span className='optioncounter-number'>{options.Room}</span>
                        <button className='option-counterbtn' onClick={() =>handleOption("Room", "i")}  >+</button>
                        </div>
                   </div>


                 </div>
)}


                    </div>

                    <div className='header-searchitem'>
                     
                        <button className='header-btn2' onClick={handleSearch}>Search</button>
                    
                    </div>

                </div>  </>    }

</div>



    </div>
  )
}

export default Header