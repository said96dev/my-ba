import { useState , useContext } from 'react'
import { FormRow, Alert } from '../../components'
import { AppContext, initialState } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/ProfilePage'
const Profile = () => {
  const { user, showAlert, displayAlert, isLoading , updateUser } =useContext(AppContext)

  const initialState = {
    name :user.name || "" , 
    email: user.email || "",
    lastName: user.lastName ||  "",
    position:user.position || "",
    role:user.role|| "",
    street:user.street || "" ,
    state : user.state || "",
    zipCode:user.zipCode || "",
    city:user.city || "",
  }
  const [values , setValues] = useState(initialState)
  

  const handleSubmit = (e) => {
    e.preventDefault()
    const {name , email} = values
    if (!name || !email) {
      displayAlert()
      return
    }
    updateUser(values) 
   }
   const handleChange = (e) => {
    setValues({...values , [e.target.name] : e.target.value})
  }
  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <h3>profile</h3>
        {showAlert && <Alert />}
        <h5 className='section-title'>Personal Details</h5>
        <div className='form-center'>     
          <FormRow
            type='text'
            name='name'
            labelText='Name'
            value={values.name}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            labelText='Last name'
            name='lastName'
            value={values.lastName}
            handleChange={handleChange}
          />
          <FormRow
            type='email'
            name='email'
            labelText='Email'
            value={values.email}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            name='position'
            value={values.position}
            handleChange={handleChange}
            labelText='Position'
          />
          <FormRow
            type='text'
            name='role'
            labelText='Role'
            value={values.role}
            handleChange={handleChange}
          />
        </div>
        <hr />
        <h5 className='section-title'>Address</h5>
        <div className='form-center'>     
          <FormRow
            type='text'
            name='street'
            value={values.street}
            handleChange={handleChange}
            labelText='Street'
          />
          <FormRow
            type='text'
            labelText='City'
            name='city'
            value={values.city}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            name='state'
            labelText='State'
            value={values.state}
            handleChange={handleChange}
          />
          <FormRow
            type='number'
            name='zipCode'
            labelText='Zip-Code'
            value={values.zipCode}
            handleChange={handleChange}
          />
          <button className='btn btn-block' type='submit' disabled={isLoading}>
            {isLoading ? 'Please Wait...' : 'save changes'}
          </button>
        </div>
      </form>
    </Wrapper>
  )
}

export default Profile