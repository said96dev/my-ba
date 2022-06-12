import React from 'react'
import Wrapper from '../assets/wrappers/PageHaeder'
import {IoMdAddCircleOutline} from "react-icons/io"
import { NavLink } from "react-router-dom";
function PageHeader({name  , setOpenPopup , btn , path , btnPath}) {
    return (
    <Wrapper>
        {<h3 className= 'page-center'> dashboard / {name}
        </h3>}
        {
            btn && <div  className='btn' onClick={() => setOpenPopup(true)}>
                <IoMdAddCircleOutline className='icon'/>
                {btn} </div> 
        } 
        {
            path && 
            
            <NavLink  className='btn' to={path}>
                <IoMdAddCircleOutline className='icon'/>
                {btnPath}
            </NavLink>
        }
    </Wrapper>
  )
}

export default PageHeader