import React ,{useContext } from 'react'
import {Avatar ,Typography  , CardContent , CardActions} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from '../context/appContext';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    title: {
      fontSize: 15
    },
    pos: {
      marginBottom: -10
    },
    bigAvatar: {
    backgroundColor: "#ede7f6",
    color: "#5e35b1" ,
    width: 100,
    fontSize: 50,
    height: 100,
    }
  }))

function ClientCard() {
  const navigate = useNavigate()
  const classes = useStyles();
  const handleSubmit = () => {
    navigate(-1)
    deleteClient(client._id)
   }
  const {client , deleteClient} = useContext(AppContext)

  return (
    <div className='card'>
      <CardContent >
        <Avatar alt={client.name} src='.'  className={classes.bigAvatar}/>
        <Typography variant="h4" component="h5" className='pt-2'>{client.name} {client.lastName}
        </Typography>
        <Typography className={`pb-3 ${classes.pos}`} color="textSecondary">
        {client.company ? client.company : "Client Company"}, {client.position ? client.position : "Client Position"}
        </Typography>
        <Typography variant="h5" component="h5" className='pt-3'>
        Address
        </Typography>
        <Typography className={`pb-3 ${classes.pos}`}  color="textSecondary">
        {client.street ? client.street : "Client Street"} {client.houseN}, {client.city ? client.city : "Client City"} {client.zipCode}
        </Typography>
        {
          client.project.length > 0 &&         
          <Typography  variant="h5" component="h5" className='pt-2'>Projects</Typography>
        }

          {
            client.project.map ((p) => {
              return  (
              <Typography key={p._id}>{p.name}</Typography>
              )
            })
          }
      </CardContent>
      <CardActions>
        <button
          className=" btn btn-danger"
          onClick={handleSubmit}
        >
          Delete Account
        </button>
      </CardActions>
    </div>
  )
}

export default ClientCard