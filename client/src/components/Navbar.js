import React  , {useContext , useState} from 'react'
import Wrapper from '../assets/wrappers/Navbar'
import { FaAlignLeft, FaUserCircle, FaCaretDown  } from "react-icons/fa";
import { AppContext } from '../context/appContext';
import Logo from "./Logo";

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
      <button className="btn" onClick={() =>setShowLogout(!showLogout)}>
        <FaUserCircle/>
          {user && user.name}
        <FaCaretDown/>
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