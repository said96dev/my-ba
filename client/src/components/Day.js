import React from 'react';
import {FiMoreVertical , FiArrowRight} from "react-icons/fi"
import {VscDebugBreakpointDataUnverified} from "react-icons/vsc"
import {AiOutlineLine} from "react-icons/ai"
const Day = ({ day, onClick }) => {
  const className = `day ${day.padding === true ? 'padding' : ''} ${day.isCurrentDay ? 'currentDay' : ''} ${day.isWeekend ? 'padding' : ''}`;
  return (
    <div onClick={onClick} className={className}>
      <div className='dayValue'>
      {day.value}
      {
        day.isWeekend || day.padding ?  "" :  <FiMoreVertical className='icon'/>
      }
      </div>

      {day.isCurrentDay && <div className='record'>
        <header className='recordHeader'>
        <span className='recordTitly'>
        <VscDebugBreakpointDataUnverified className='statusIcon'/>
        Presence
        </span>
        </header>
        <div className='recordDetails'>
          <p>7h30 + 0h30 Break</p>
          <span className='start'>08:00 <FiArrowRight/> 12:00 </span>
          <span className='break'>
            <AiOutlineLine/>0h30<AiOutlineLine/>
          </span>
          <span className='start'>08:00 <FiArrowRight/> 12:00 </span>
          <span className='break'>
            <AiOutlineLine/>0h30<AiOutlineLine/>
          </span>
          
        </div>
        </div>}
    </div>
  );
};

export default Day