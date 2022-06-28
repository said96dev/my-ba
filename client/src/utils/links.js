import { IoBarChartSharp } from "react-icons/io5";
import { MdOutlineMoreTime } from "react-icons/md";
import { FaTasks   , FaProjectDiagram} from "react-icons/fa";
import { ImProfile  } from "react-icons/im";
import {RiUserAddFill} from "react-icons/ri"
import {HiUserGroup , HiOutlineUserCircle} from "react-icons/hi"
import {VscGitPullRequestClosed} from "react-icons/vsc"
const links = [
    {
      id: 1,
      text: "stats",
      path: "/",
      icon: <IoBarChartSharp />,
      accessByUser: true
    },
    {
      id: 2,
      text: "all tasks",
      path: "all-tasks",
      icon: <FaTasks />,
      accessByUser: true

    },
    {
      id: 3,
      text: "Employee List",
      path: "all-users",
      icon: <HiOutlineUserCircle />,
      accessByUser: true

    },
    {
      id: 4,
      text: "add Employee ",
      path: "add-user",
      icon: <RiUserAddFill />,
      accessByUser: false

    },
    {
      id: 5,
      text: "My attendance",
      path: "my-attendance",
      icon: <MdOutlineMoreTime />,
      accessByUser: true
    },
    {
      id: 6,
      text: "client",
      path: "client",
      icon: <HiUserGroup />,
      accessByUser: true
    },
    {
      id: 7,
      text: "project",
      path: "project",
      icon: <FaProjectDiagram />,
      accessByUser: true
    },
    {
      id: 8,
      text: "Requests",
      path: "requests",
      icon: <VscGitPullRequestClosed />,
      accessByUser: false
    },
    {
      id: 9,
      text: "profile",
      path: "profile",
      icon: <ImProfile />,
      accessByUser: true
    },
]

export default links;
