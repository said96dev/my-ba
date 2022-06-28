import { NavLink } from "react-router-dom";
import links from "../utils/links";
import React , {useContext} from 'react'
import { AppContext } from "../context/appContext";
const NavLinks = ({ toggleSidebar }) => {
  const {user} = useContext(AppContext)
  return (
      user.role === "user" || user.role === "team leader" ? 
      <div className="nav-links">
      {links.map((link) => {
        const { text, path, id, icon , accessByUser } = link;
        return (
          
            accessByUser  ? 
            <NavLink
            to={path}
            key={id}
            onClick={toggleSidebar}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
          : <div key={id}></div>
          
        );
      })}
    </div>
      : <div className="nav-links">
      {links.map((link) => {
        const { text, path, icon , id } = link;
        
        return (
          
            <NavLink
            to={path}
            key={id}
            onClick={toggleSidebar}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
          
        );
      })}
    </div>
  );
};

export default NavLinks;