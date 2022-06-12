import React, { useEffect, useState , useContext } from 'react'
import weekdays from '../../utils/weekdays';
import Wrapper from '../../assets/wrappers/Attendance';
import {Day  , PageHeader , CalendarHeader , Loading , Popup , Alert , RecordPopup , } from "../../components"
import { useDate } from '../../hooks/useDate';
import { AppContext } from '../../context/appContext';


function Attendance() {
  const {getRecords ,records , isLoading , showAlert} = useContext(AppContext)

  useEffect (() => {
    getRecords()
    // eslint-disable-next-line 
  } , [])  


  const [nav , setNav] = useState(0) // which month we are --> back = nav -1 , next = nav = + 1
  const [openTimePopup , setopenTimePopup] = useState(false); 
  const [date , setDate]  = useState([]) // date to pass in Popup
  const { days, dateDisplay } = useDate(records, nav);

  const logTime = (d) => {
    setDate(new Date(d.date))
    setopenTimePopup(true)
  }

  if (isLoading) {
    return <Loading center />;
  }

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
        {showAlert && <Alert />}
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
              records = {records}
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
    <RecordPopup date = {date} setOpenPopup={setopenTimePopup}/>
    </Popup>
    </Wrapper>
    </>
    );
  
}

export default Attendance