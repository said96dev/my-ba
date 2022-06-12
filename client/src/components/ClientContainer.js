import React , {useContext , useEffect} from 'react'
import Wrapper from "../assets/wrappers/UsersContainer"
import { AppContext } from '../context/appContext'
import Loading from "./Loading";
import Client from "./Client"

function ClientContainer() {
    const {isLoading , getClients, clients,  totalClients} = useContext(AppContext)
    useEffect(()=>{
      getClients()
      // eslint-disable-next-line 
    } , [] )
    if (isLoading) {
        return <Loading center />;
      }
      if(clients.length === 0 ) {
        return(
        <Wrapper>
          <h2>No Client to display...</h2>
        </Wrapper>
        )
      }
  return (
    <Wrapper>
      
        <h5>{totalClients} client{clients.length > 1 && "s"} found</h5>

        <div className="clients">
      {clients.map((client) => {
        return(
        <div className='card' key={client._id} >
          <Client key={client._id} {...client} />
        </div>
        )
      })}
    </div>
        
  </Wrapper>
  )
}

export default ClientContainer