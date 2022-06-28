import moment from "moment";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt  } from "react-icons/fa";
import {BsFillPinAngleFill} from "react-icons/bs"
import {MdExpandMore} from "react-icons/md"
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/User";
import UserInfo from "./UserInfon";
import React , {useContext} from 'react'
import { AppContext } from "../context/appContext";
const User = ({
  _id,
  name,
  position,
  role ,
  department,
  type,
  createdAt,

}) => {
  let date = moment(createdAt);
  date = date.format("MMM Do, YYYY");
  const {user , singleUser} = useContext(AppContext)

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{name.charAt(0)}</div>
        <div className="info">
          <h5>{name}</h5>
          <p>{position}</p>
        </div>
      </header>
      <div className="content">
      <div className="content-center">
        <UserInfo icon={<FaBriefcase />} text={role} />
        <UserInfo icon={<FaCalendarAlt />} text={date} />
        <UserInfo icon={<FaLocationArrow />} text={type} />
        <UserInfo icon={<BsFillPinAngleFill  />} text={department} />

{/*         <div className={`status ${status}`}>{status}</div> */}
    </div>
    {
      user.role ==="admin" &&
      <footer>
          
          <div className="actions">
            <Link
              to="/employee-profile"
              onClick={ () => singleUser(_id)}
              className="btn details-btn"
            >
              details
                <MdExpandMore className="icon"/>

            </Link>
            
          </div>
        </footer>
    }
        
      </div>
    </Wrapper>
  );
};

export default User;