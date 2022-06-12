import React, { useState , useContext, useEffect } from 'react'
import {useNavigate} from "react-router-dom"
import Wrapper from '../assets/wrappers/LoginPage'
import { Logo , FormRow , Alert} from '../components'
import { AppContext } from '../context/appContext'
const initialState = {
  email : "" , 
  password : "" ,
  isMember : true,
}

function Login() {
  const  {user , isLoading , showAlert , displayAlert , loginUser } = useContext(AppContext)
  const [values , setValues] = useState(initialState)
  const navigate = useNavigate();
  // global state and useNavigate
  useEffect (() => {
    if(user){
      
      setTimeout(()=>{
        navigate("/")
      } , 3000)
    }
  }, [user , navigate])
  const handleChange = (e) => {
    setValues({...values , [e.target.name] : e.target.value})
  }

  const onSubmit = (e) =>
  {
    e.preventDefault()
    const {email , password , isMember} = values
    if(!email || !password ||!isMember) {
      displayAlert()
      return
    }
    else if (!isMember) {
      console.log("You have no access")
    }
    else {
      const currentUser = {email , password}
      loginUser(currentUser)
    }
  }

  return (
    <Wrapper className='full-page' onSubmit={onSubmit}>
      <form action="" className='form'>
        <Logo/>
        <h3>
          Login
        </h3>
        {showAlert && <Alert/>}
        <div className='form-row'>
        <FormRow type="email" name = "email"  value={values.email} handleChange={handleChange} />
        <FormRow type="password" name = "password"  value={values.password} handleChange={handleChange} />
        </div>
        <button type='submit' className='btn btn-block' disabled={isLoading}>submit</button>
      </form>
    </Wrapper>
  )
}

export default Login