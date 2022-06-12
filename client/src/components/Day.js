import React , { useState , useEffect , useContext} from 'react';
import { FiArrowRight} from "react-icons/fi"
import {VscDebugBreakpointDataUnverified} from "react-icons/vsc"
import {AiOutlineLine} from "react-icons/ai"
import {RiDeleteBin5Fill} from "react-icons/ri"
import moment from 'moment';
import { AppContext } from '../context/appContext';
const Day = ({ day, onClick, records }) => {
  const {deleteRecord} = useContext(AppContext)
  const className = `day ${day.padding === true ? 'padding disable':''} ${day.isCurrentDay && !day.isWeekend  ? 'currentDay' : ''} ${day.isWeekend ? 'padding disable' : ''}`;
  const [state , setState] = useState()
  useEffect(() => { 
    const record = records.find((r) => {
      const nowDate = new Date(r.startRecord) ;
            return nowDate.getMonth()+1+'/'+nowDate.getDate()+'/'+nowDate.getFullYear()=== day.date
    })
    setState(record)
  }, [records , day])
  const getTimeHandler = (date) => {
    return moment(date).utc().format("HH:mm")
  }
  return (
    <div onClick={ state ?() => deleteRecord(state._id) : onClick}  className={`${className}${state? "disable":""}`}>
      <div className='dayValue '>
      {day.value}
      
      {state?
      <div className='divIcon divIcon-Delete' onClick={() => console.log("hi")}>
      <RiDeleteBin5Fill className='Deleteicon  '/>
      </div> :<></>
      }

      </div>
      { state && <div className='record'>
        <header className='recordHeader'>
        <span className={ `recordTitel  ${state.recordType}`} >
          <VscDebugBreakpointDataUnverified className={`statusIcon ${state.recordType}`}/>    
        {state.recordType}
        </span>
        </header>
        {
          state.recordType === "presence" ? <div className='recordDetails'>
          <span className='start'>{getTimeHandler(state.startRecord)}
          <FiArrowRight/> {getTimeHandler(state.endRecord)} </span>
          <span className='break'>
            <AiOutlineLine/>{state.workingTimeDuration}<AiOutlineLine/>
          </span>
          {
          state.breakTimeDuration &&
          <>
          <span className='start'>{getTimeHandler(state.startBreak)} <FiArrowRight/> {getTimeHandler(state.endBreak)} </span>
          <span className='break'>
            <AiOutlineLine/>{state.breakTimeDuration}<AiOutlineLine/>
          </span>
          </>
        }
        </div>:
        <div className='substitute'>
          <span>substituted by:</span>
        <span>{state.substitute.name} {state.substitute.lastName}</span>
        </div>
        }
        <div className='border'>
          <div className={`${state.recordType}`}></div>
        </div>
        </div>  } 
    </div>
  );
};

export default Day