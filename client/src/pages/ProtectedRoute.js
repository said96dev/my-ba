import React ,{useContext} from 'react'
import { AppContext } from '../context/appContext'
import {Navigate} from "react-router-dom"
function ProtectedRoute({children}) {
    const  { user } = useContext(AppContext)
    if(!user){
        return <Navigate to="/landing"/>
    }
  return children
}

export default ProtectedRoute