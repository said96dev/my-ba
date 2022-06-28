import React ,{useContext} from 'react'
import { AppContext } from '../context/appContext'
import {Navigate} from "react-router-dom"

function AdminRoute({children}) {
    const  { user } = useContext(AppContext)
    if(user.role === "user" || user.role === "team leader"){
        return <Navigate to="/access-error"/>
    }
  return children
}

export default AdminRoute