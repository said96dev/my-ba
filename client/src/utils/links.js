import { IoBarChartSharp } from "react-icons/io5";
import { MdAddTask,MdOutlineMoreTime } from "react-icons/md";
import { FaTasks , FaUsers } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import {RiUserAddFill} from "react-icons/ri"

const links = [
    {
      id: 1,
      text: "stats",
      path: "/",
      icon: <IoBarChartSharp />,
    },
    {
      id: 2,
      text: "all tasks",
      path: "all-tasks",
      icon: <FaTasks />,
    },
    {
      id: 3,
      text: "Employee List  ",
      path: "all-users",
      icon: <FaUsers />,
    },
    {
      id: 4,
      text: "add Employee ",
      path: "add-user",
      icon: <RiUserAddFill />,
    },
    {
      id: 5,
      text: "My attendance",
      path: "my-attendance",
      icon: <MdOutlineMoreTime />,
    },
    {
      id: 6,
      text: "profile",
      path: "profile",
      icon: <ImProfile />,
    },
    
]

export default links;
