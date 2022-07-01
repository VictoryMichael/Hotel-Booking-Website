import React, { useState } from 'react'
import "./List.css"
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import { useLocation } from 'react-router-dom'
import { format } from "date-fns";
import { DateRange } from 'react-date-range'
import SearchItems from '../../components/searchItems/SearchItems'











const List = () => {


const location= useLocation()

const [destination] = useState(location.state.destination);
const [date,setDate] = useState(location.state.date);
const [options] = useState(location.state.options);
const [openDate, setOpenDate] = useState(false);



  return (
    <div>
      <Navbar />
      <Header type="list"   />

       <div className='listcontainer'>
           <div className='list-wrapper'>
              <div className='list-search'>
                <h1 className='list-title'>Search</h1>
                    <div className='list-item'>
                       <label   >Destination</label>
                         <input placeholder={destination}   type="text" />
                    </div>
                         <div className='list-item'>
                             <label >Check-in-Date</label>

                             <span onClick={() => setOpenDate (!openDate)  }>
                         {`${format(date[0].startDate, "MM/dd/yyyy")} To  ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}
                         </span>
             {openDate && ( 
        <DateRange
         onChange={(item) => setDate ([item.selection])}
          minDate={new Date()}  
          ranges={date}
           />   
           )}
            </div>


                  <div  className='list-item'>
                     <label>Options</label>
                      <div className='listoption-item'>
                          <span className='list-optiontext'>
                             Min Price <small>per night</small>
                          </span>
                            <input type="number"  />
                      </div>
                  </div>

                   
                  <div className='listoption-item'>
                          <span className='list-optiontext'>
                             Max Price <small>per night</small>
                          </span>
                            <input type="number" />
                      </div>
                     

                 
                      <div className='listoption-item'>
                          <span className='list-optiontext'>
                             Adult
                          </span>
                            <input type="number"  className='listoption-input' min={1} placeholder={options.Adult}  />
                      </div>
                

                      <div className='listoption-item'>
                          <span className='list-optiontext'>
                             Children
                          </span>
                            <input type="number"  className='listoption-input' min={0}  placeholder={options.Children}   />
                      </div>
                

                      <div className='listoption-item'>
                          <span className='list-optiontext'>
                             Room
                          </span>
                            <input type="number"
                              className='listoption-input'
                               min={1} 
                                placeholder={options.Room} 
                                   />
                      </div>
                      <div>
                      <button className='search-tnt'>Search</button>
                      </div>

              </div>
                  
                  <div className='list-result'>
                    
                    <SearchItems  />
                    <SearchItems  />
                    <SearchItems  />
                    <SearchItems  />
                    <SearchItems  />
                    <SearchItems  />
                  
                    
                     </div>

            

           </div>

       </div>

    </div>
  )
}

export default List