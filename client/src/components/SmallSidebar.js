import React , {useContext} from 'react'
import Wrapper from '../assets/wrappers/SmallSidebar'
import { FaTimes } from "react-icons/fa";
import NavLinks from "./NavLinks"
import Logo from "./Logo";
import { AppContext } from '../context/appContext';
export const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useContext(AppContext);
  return (
    <Wrapper>
      <div  className={
      showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"}>
        <div className="content">
          <button className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          {
            showSidebar && 
            <NavLinks toggleSidebar={toggleSidebar} />
          }
          
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar