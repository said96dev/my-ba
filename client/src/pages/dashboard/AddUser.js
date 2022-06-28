import React , {useContext , useState} from 'react'
import { AppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/SearchContainer'
import { FormRow, Alert ,FormRowSelect,PageHeader } from '../../components'
function AddUser() {
  const {showAlert , isLoading  , addUser } = useContext(AppContext)
  const initialState = {
    name : "" , 
    email:  "",
    lastName:   "",
    position: "",
    password : "" ,
    role : "" , 
    team : "" ,
    type : "",
    gender : "" , 
    department : ""

  }
  const [values , setValues] = useState(initialState)

  const handleChange = (e) => {
    setValues({...values , [e.target.name] : e.target.value})
  }
  const clearValues = () => {
    setValues(initialState)
  }

  const handleSubmit =(e) => {
    e.preventDefault()
    addUser(values)
  }
  /* if(user.role === "user"){
    return <Navigate to="/access-error"/>
} */
  return (
    <>
    <PageHeader name={"Add Employee"}/>
    <Wrapper>
      <form className='form'  onSubmit={handleSubmit}>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow
              type='text'
              name='name'
              labelText='Name'
              value={values.name}
              handleChange={handleChange}
            />
          <FormRow
            type='text'
            name='lastName'
            labelText='Last Name'
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
            type='password'
            name='password'
            labelText='Password'
            value={values.password}
            handleChange={handleChange}
          />
          <FormRowSelect
            labelText='Position'
            name='position'
            value={values.position}
            handleChange={handleChange}
            list={["Security Engineer" , "Product Owner","Backend Developer","Full Stack Developer", "Frontend Developer"]}
          />
          <FormRowSelect
            labelText='Team'
            name='team'
            value={values.team}
            handleChange={handleChange}
            list={['T1', 'T2' ,"T3" , "T4" , "T5" ]}
          />
          <FormRowSelect
              labelText='Role'
              name='role'
              value={values.role}
              handleChange={handleChange}
              list={['admin', 'user' , "team leader"]}
            />
          <FormRowSelect
            labelText='Type'
            name='type'
            value={values.type}
            handleChange={handleChange}
            list={["Internship" , "full-time" , "part-time" , "remote"]}
          />
          <FormRowSelect
            labelText='Department'
            name='department'
            value={values.department}
            handleChange={handleChange}
            list={["development" , "design" , "accounting", "secretariat" , "administration"]}
          />
          <FormRowSelect
            labelText='Gender'
            name='gender'
            value={values.gender}
            handleChange={handleChange}
            list={["Male" , "Female"]}
          />
          <div className="btn-container">
              <button disabled={isLoading} className="btn btn-block submit-btn" type='submit' onClick={handleSubmit}>{isLoading ? 'Please Wait...' : 'submit'}
              </button>
              <button className="btn btn-block btn-danger" onClick={(e) => {
              e.preventDefault();
              clearValues();}}>clear</button>
          </div>
        </div>
      </form>  
    </Wrapper>
    </>
  )
}

export default AddUser