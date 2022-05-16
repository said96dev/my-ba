import React , {useContext} from 'react'
import { AppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/ProfilePage'
import { FormRow, Alert ,FormRowSelect } from '../../components'
function AddUser() {
  const {showAlert , isLoading , handleChange , addUser , name , role , position, email, lastName, positionOptions, roleOptions, password,type,typeOptions,gender,department,departmentOptions,clearValues} = useContext(AppContext)

  const handleSubmit =(e) => {
    e.preventDefault()
    addUser()
  }
  const handleAddUserInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    handleChange({ name, value })
  }
  return (
    <Wrapper>
      <form className='form'  onSubmit={handleSubmit}>
        <h3>Add Employee</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow
              type='text'
              name='name'
              labelText='Name'
              value={name}
              handleChange={handleAddUserInput}
            />
          <FormRow
            type='text'
            name='lastName'
            labelText='Last Name'
            value={lastName}
            handleChange={handleAddUserInput}
          />
          <FormRow
            type='email'
            name='email'
            labelText='Email'
            value={email}
            handleChange={handleAddUserInput}
          />
          <FormRow
            type='password'
            name='password'
            labelText='Password'
            value={password}
            handleChange={handleAddUserInput}
          />
          <FormRowSelect
            labelText='Position'
            name='position'
            value={position}
            handleChange={handleAddUserInput}
            list={[...positionOptions]}
          />
          <FormRowSelect
              labelText='Role'
              name='role'
              value={role}
              handleChange={handleAddUserInput}
              list={[...roleOptions]}
            />
          <FormRowSelect
            labelText='Type'
            name='type'
            value={type}
            handleChange={handleAddUserInput}
            list={[...typeOptions]}
          />
          <FormRowSelect
            labelText='Department'
            name='department'
            value={department}
            handleChange={handleAddUserInput}
            list={[...departmentOptions]}
          />
          <FormRowSelect
            labelText='Gender'
            name='gender'
            value={gender}
            handleChange={handleAddUserInput}
            list={["Male" , "Female"]}
          />
          <div className="btn-container">
              <button disabled={isLoading} className="btn btn-block submit-btn" type='submit' onClick={handleSubmit}>{isLoading ? 'Please Wait...' : 'submit'}
              </button>
              <button className="btn btn-block clear-btn" onClick={(e) => {
              e.preventDefault();
              clearValues();}}>clear</button>
          </div>
        </div>
      </form>  
    </Wrapper>
  )
}

export default AddUser