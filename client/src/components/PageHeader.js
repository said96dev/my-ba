import React from 'react'
import Wrapper from '../assets/wrappers/PageHaeder'
import {IoMdAddCircleOutline} from "react-icons/io"
function PageHeader({name , openPopup , setOpenPopup , btn}) {
    return (
    <Wrapper>
        {<h3 className= 'page-center'> dashboard / {name}
        </h3>}
        {
            btn && <div className='btn' onClick={() => setOpenPopup(true)}>
                <IoMdAddCircleOutline className='icon'/>
                {btn} </div> 
        }
    </Wrapper>
  )
}

export default PageHeader