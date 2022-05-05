import React from 'react'
import {Logo} from "../components"
import main from "../assets/images/main.svg"
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/LandingPage"


function Landing() {
  return (
    <Wrapper>
        <nav>
            <Logo/>
        </nav>
        <div className='container page'>
      {/* info */}
      <div className='info'>
        <h1>
          task <span>tracking</span> app
        </h1>
        <p>
          I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue
          bottle single-origin coffee chia. Aesthetic post-ironic venmo,
          quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
          narwhal.
        </p>
        <Link to='/login' className='btn btn-hero-l'>
          Login
        </Link>
      </div>
      <img src={main} alt='task assign ' className='img main-img' />
    </div>
    </Wrapper>
    )
}

export default Landing