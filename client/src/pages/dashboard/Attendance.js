import React, { useEffect, useState } from 'react'
import weekdays from '../../utils/weekdays';
import Wrapper from '../../assets/wrappers/Attendance';
import {Day  , PageHeader , CalendarHeader , AddAvailability , Popup , RecordPopup } from "../../components"
import { useDate } from '../../hooks/useDate';
import moment from "moment"


function Attendance() {
  const [nav , setNav] = useState(0) // which month we are --> back = nav -1 , next = nav = + 1
  const [openTimePopup , setopenTimePopup] = useState(false); // whichever day we clicked on
  const [recorded , setRecorded] = useState([]) // the times that recorded 
  const [date , setDate]  = useState([]) // date to pass in Popup
  const { days, dateDisplay } = useDate(recorded, nav);
  useEffect (() => {
  } , [days]) 

  const logTime = (d) => {
    setDate(new Date(d.date))
    setopenTimePopup(true)
  }


  return (
    <>
    <PageHeader name={"My Attendance"} btn={"Log Time"} openPopup={openTimePopup} setOpenPopup = {setopenTimePopup}/>
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
              onClick ={() =>logTime(d)}
            />
          ))}
        </div>
      </div>
    <Popup
      openPopup={openTimePopup}
      setOpenPopup={setopenTimePopup}
      title = "Log Time"
      top = {5}
      width="md"
    >
    <RecordPopup date = {date}/>
    </Popup>
    </Wrapper>
    </>
    );
  
}

export default Attendance