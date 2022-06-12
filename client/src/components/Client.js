import React  from 'react'
import {Card , CardHeader  , CardContent , CardActions , Collapse , Avatar , Typography} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import Wrapper from '../assets/wrappers/Client';
import { Link } from "react-router-dom";
import {MdPhone, MdEmail} from "react-icons/md"
import moment from "moment";
import {BsBuilding} from "react-icons/bs"
import {GiPositionMarker} from "react-icons/gi"
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Client(props) {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Wrapper>
      <Card sx={{ maxWidth: 345 }}>
      <CardHeader
      className='header'
        avatar={
          <Avatar sx={{ bgcolor: props.clientStatus === "active" ? 'success.main' :   'error.main' }} aria-label="recipe">
            {props.name.charAt(0)}
          </Avatar>
        }
        
        title={props.name  +" "+  props.lastName}
        subheader = {moment(props.createdAt ).format("MMM Do YY")}
        titleTypographyProps={{variant:'h6' }}
      />
      <CardContent className='cardContent'>
        
        <h5 variant="h5" >
          <BsBuilding className='mr-2 icon'/>{props.company}
        </h5>
        <h5 variant="body2" color={"text.secondary"} className='pt-1 clintStatus' >
          Status : <span className={props.clientStatus}>{props.clientStatus} </span> 
        </h5>
        <h5 variant="h5" className='full-row' >
          <GiPositionMarker  className='mr-1 icon' />{props.position} 
        </h5>
        
      </CardContent>
      <CardActions disableSpacing className='cardAction'>
      <Link
              to="/add-job"
              onClick={() => console.log("edit")}
              className="view-btn"
            >
              View Profile

            </Link>
            
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            <MdPhone className='mr-3'/>
            {props.phone}
          </Typography>
          <Typography paragraph>
           <MdEmail className='mr-3'/>
           {props.email}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </Wrapper>
    
  );
}

export default Client