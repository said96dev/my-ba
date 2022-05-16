import React from 'react'
import { useLocation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/PageHaeder'
import {IoMdAddCircleOutline} from "react-icons/io"
function PageHeader({name , openPopup , setOpenPopup}) {
    const location = useLocation();  return (
    <Wrapper>
        {<h3 className= 'page-center'> dashboard / {name}
        </h3>}
        {
            location.pathname==="/all-tasks" ? <div className='btn' onClick={() => setOpenPopup(true)}>
                <IoMdAddCircleOutline className='icon'/>
                Add Task </div> : ""
        }
    </Wrapper>
  )
}

export default PageHeader