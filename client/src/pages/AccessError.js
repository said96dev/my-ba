import React from 'react'
import {Link} from "react-router-dom"
import img from "../assets/images/AccessError.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

function AccessError() {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt="not found" />
        <h3>Ohh! Unauthorized to access this route</h3>
        <p>It looks like you don't have permissions to access this route</p>
        <Link to='/'>back home</Link>
      </div>
    </Wrapper>
  );
}

export default AccessError