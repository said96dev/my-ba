import React  , {useContext} from 'react'
import {PageHeader,  ClientDetails , ClientCard,Loading} from "../../components"
import Wrapper from '../../assets/wrappers/ProfilePage'
import { AppContext } from '../../context/appContext';

function SingleClientPage() {
  const {isLoading} = useContext(AppContext)
  if (isLoading) {
    return <Loading center />;
}
  return (
    
      <div>
      <PageHeader name = "Client Profile"/>
      <Wrapper>
      <div className='client-profile'>
        <div className='client-card form'>
          <ClientCard/>
        </div>
        <div className='client-details form'>
          <ClientDetails/>
        </div>
      </div>
      </Wrapper>
      </div> 
    
    
  )
}

export default SingleClientPage