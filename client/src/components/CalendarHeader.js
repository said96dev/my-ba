import React from 'react';
import {FaChevronRight, FaChevronLeft} from "react-icons/fa"
import { Typography , Tooltip } from '@mui/material';

const CalendarHeader = ({ onNext, onBack, dateDisplay , onCurrentDay }) => {
  return(
    <div id="header">
      <div className='recordingsTypes'>
      <Tooltip title={<Typography component= "h3">presence</Typography>} placement="top-start">
        <div className='btn-active'></div>
        </Tooltip>
        <Tooltip title={<Typography component= "h3">vacation</Typography>}  placement="top-start">
          <div className='vacation btn-warning'></div>
        </Tooltip>
        
        <Tooltip title={<Typography component= "h3">absence</Typography>} placement="top-start">
        <div className=' btn-danger'></div>
        </Tooltip>
      </div>
        <div id='monthController'>
        <div className='day-btn' onClick={onCurrentDay}>TODAY</div>
        <button onClick={onBack} ><FaChevronLeft className='icon'/></button>
            <div id="monthDisplay">{dateDisplay}</div>
        <button onClick={onNext} ><FaChevronRight className='icon'/></button>
        </div>

    </div>
  );
};

export default CalendarHeader 