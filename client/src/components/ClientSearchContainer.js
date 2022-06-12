import React , {useState , useContext} from 'react'
import Wrapper from '../assets/wrappers/SearchContainer'
import {FormRow , FormRowSelect} from "./index"
import { AppContext } from '../context/appContext';

function ClientSearchContainer() {
    const [searched, setSearched] = useState("");
    const [cards , setCards] = useState()
    const {tasks} = useContext(AppContext)
    const initialState = {
        name :"dwad" , 
      }
      const [values , setValues] = useState(initialState)
    const requestSearch = (e) => {
        /* const filteredCards = tasks.filter((card) => {
          return card.title.toLowerCase().includes(searchedVal.toLowerCase());
        });
        setCards(filteredCarts); */
        console.log(e.target.name)
      };

      const handleChange = (e) => {
        setValues({...values , [e.target.name] : e.target.value})
      }
  return (
    <Wrapper>
        <form className='form'>
        <div className='from-center client-search'>
        <FormRow
            type="text"
            name="search"
            value={values.name}
            handleChange = { requestSearch}
        />
        <FormRow
          type="text"
          name="search"
          onChange = {requestSearch}
        />
        <FormRow
          type="text"
          name="search"
          onChange = {requestSearch}

        />
        </div>
        </form>
    </Wrapper>
  )
}

export default ClientSearchContainer