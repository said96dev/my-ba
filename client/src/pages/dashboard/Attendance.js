import React, { useEffect, useState } from 'react'
import weekdays from '../../utils/weekdays';
import Wrapper from '../../assets/wrappers/Attendance';
import {Day  , PageHeader , CalendarHeader , Loading , Popup , RecordPopup } from "../../components"
import { useDate } from '../../hooks/useDate';
import moment from "moment"


function Attendance() {
  const [nav , setNav] = useState(0) // which month we are --> back = nav -1 , next = nav = + 1
  const [clicked , setClicked] = useState(false); // whichever day we clicked on
  const [recorded , setRecorded] = useState([]) // the times that recorded 
  const [date , setDate]  = useState([]) // date to pass in Popup
  const { days, dateDisplay } = useDate(recorded, nav);

  const openPopup = (d) => {
        
    let dateTitle = moment(d.date)
    dateTitle = dateTitle.format("dddd, D MMM , YYYY")
    setDate(dateTitle)
    setClicked(true)
  }

  useEffect (() => {

  } , [days]) 
  return (
    <>
    <PageHeader name={"My Attendance"}/>
    <Wrapper>
    <CalendarHeader 
          dateDisplay={dateDisplay}
          onNext={() => setNav(nav + 1)}
          onBack={() => setNav(nav - 1)}
          onCurrentDay={() => setNav(0)}
        />
    <div id="container">
        <div id="weekdays">
          {
            weekdays.map((day , index) => {
              return(
                <div key={index}>{day}</div>
              )
            })
          }
        </div>

        <div id="calendar">
          {days.map((d, index) => (
            <Day
              key={index}
              day={d}
              onClick={() => {
                if (!d.padding && !d.isWeekend) {
                  openPopup(d)
                }
              }}
            />
          ))}
        </div>
      </div>
      <Popup
      openPopup={clicked}
      setOpenPopup={setClicked}
      date={date}
      top = {5}
      width="md"
      >
        <RecordPopup/>
    </Popup>
    </Wrapper>
    </>
    );
  
}

export default Attendance