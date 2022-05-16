import React  , {useContext , useState} from 'react'
import Wrapper from '../assets/wrappers/Navbar'
import { FaAlignLeft, FaUserCircle} from "react-icons/fa";
import {FiSettings} from "react-icons/fi"
import { AppContext } from '../context/appContext';
import Logo from "./Logo";
import {IoIosNotifications} from "react-icons/io"
function Navbar() {
  const {user , toggleSidebar,logoutUser} = useContext(AppContext)
  const [showLogout, setShowLogout] = useState(false)
  return (
    <Wrapper>
      <div className="nav-center">
    <button className="toggle-btn" onClick={toggleSidebar}>
      <FaAlignLeft></FaAlignLeft>
    </button>
    <div>
      <Logo/>
      <h3 className="logo-text">dashboard</h3>
    </div>
    
    <div className="btn-container">
    <div onClick={() => {console.log("Notifications")}} className="notifications">
      <IoIosNotifications />
      </div>
      <button className="btn" onClick={() =>setShowLogout(!showLogout)}>
        <FaUserCircle />
        <FiSettings />
      </button>
      <div className={showLogout? "dropdown show-dropdown" : "dropdown"}>
        <button onClick={logoutUser} className="dropdown-btn">
          logout
        </button>
      </div>
    </div>
  </div>
  </Wrapper>
  )
}

export default Navbar