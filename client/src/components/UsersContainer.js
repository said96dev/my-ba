import React, {useContext , useEffect} from 'react'
import Wrapper from "../assets/wrappers/UsersContainer"
import { AppContext } from '../context/appContext'
import Loading from "./Loading";
import User from "./User"
import PageBtnContainer from "./PageBtnContainer"
function UsersContainer() {
  const {isLoading , users , search , sort, position, role, page, numOfPages , totalUsers, getUsers} = useContext(AppContext)
  useEffect(()=>{
    getUsers()
    // eslint-disable-next-line 
  } , [
    search , 
    sort , 
    position,
    role,
    page
  ] )
  useEffect(() => {
    localStorage.removeItem("employee")
  
  } , [])
  if (isLoading) {
    return <Loading center />;
  }

  if(users.length === 0 ) {
    return(
    <Wrapper>
      <h2>No users to display...</h2>
    </Wrapper>
    )
  }

  return (
    <Wrapper>
    <h5>
      {totalUsers} user{users.length > 1 && "s"} found
    </h5>
    <div className="users">
      {users.map((user) => {
        return <User key={user._id} {...user} />;
      })}
    </div>
    {numOfPages > 1 && <PageBtnContainer />}

  </Wrapper>
  );
}

export default UsersContainer