import moment from "moment";
import { useContext } from "react";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt  } from "react-icons/fa";
import {BsFillPinAngleFill} from "react-icons/bs"
import {MdExpandMore} from "react-icons/md"
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/User";
import { AppContext } from "../context/appContext";
import UserInfo from "./UserInfon";
const Job = ({
  _id,
  name,
  position,
  role ,
  department,
  type,
  createdAt,

}) => {
    const {} = useContext(AppContext)

  let date = moment(createdAt);
  date = date.format("MMM Do, YYYY");

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
        <footer>
          <div className="actions">
            <Link
              to="/add-job"
              onClick={() => console.log("edit")}
              className="btn details-btn"
            >
              details
                <MdExpandMore className="icon"/>

            </Link>
            
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Job;