import React ,{useContext , useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {FormRow , FormRowSelect , Alert} from "./index"
import { AppContext } from '../context/appContext';

function ClientDetails() {
  const { client, showAlert, isLoading   , editClient } =useContext(AppContext)
  const navigate = useNavigate()
  const initialState = {
    name :client.name || "" , 
    email: client.email || "",
    lastName: client.lastName ||  "",
    position:client.position || "",
    street:client.street || "" ,
    state : client.state || "",
    zipCode:client.zipCode || "",
    city:client.city || "",
    houseN:client.houseN || "" ,
    description : client.description || "" , 
    phone : client.phone || "" ,
    company: client.company ||""  , 
    responsible: client.responsible ||"", 
    clientStatus: client.clientStatus ||""
  }
  const [values , setValues] = useState(initialState)
  

  const handleSubmit = () => {
    navigate(-1)
    editClient(client._id , values )
   }
   const handleChange = (e) => {
    setValues({...values , [e.target.name] : e.target.value})
  }
  return (
    <div className='client-details'>
      {showAlert && <Alert />}
      <h3 className= 'page-center'> Client / Edit-Details </h3> 
      <div className='edit-container'>
      <FormRow
      type='text'
      name='name'
      labelText='name'
      className="full-row"
      value={`${values.name} ${values.lastName}`}
      handleChange={handleChange} 
      readOnly={true}
      />
      <FormRow
      labelText='
      Responsible Employee'
      name='responsible'
      value={client.responsible} 
      handleChange={handleChange}
      className="full-row"
      readOnly={true}
      />
      <FormRow
      type='number'
      name='phone'
      labelText='Phone'
      value={values.phone}
      handleChange={handleChange}
      />
      <FormRow
      type='text'
      name='company'
      labelText='Company'
      value={values.company}
      handleChange={handleChange}
      />
      <FormRow
      type='text'
      name='position'
      labelText='Position'
      value={values.position}
      handleChange={handleChange}
      />
       <FormRowSelect
      labelText='Status'
      name='clientStatus'
      value={values.clientStatus}
      handleChange={handleChange} 
      list={["active" , "inactive"]}
      className="full-row"
      />
       <FormRow
      type='text'
      name='city'
      labelText='City'
      value={values.city}
      handleChange={handleChange}
      />
      <FormRow
      type='text'
      name='street'
      labelText='Street'
      value={values.street}
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
      type='text'
      name='houseN'
      labelText='House Number'
      value={values.houseN}
      handleChange={handleChange}
      />
      <FormRow
      type='text'
      name='zipCode'
      labelText='ZipCode'
      value={values.zipCode}
      handleChange={handleChange}
      />
<FormRow
      type='text'
      name='description'
      labelText='Description'
      className="full-row"
      value={values.description}
      handleChange={handleChange}
      rows={5}
      rowsMax={10}
      multiline={true}
      />
      <button
         variant="contained"
         type="submit"
         className='btn'
         disabled={isLoading}
         onClick = {handleSubmit}
         >
          {isLoading ? 'Please Wait...' : 'save changes'}
        </button>
      </div>  
      
    </div>
  )
}

export default ClientDetails