import React , {useContext , useEffect , useState} from 'react'
import Wrapper from '../assets/wrappers/TasksTable';
import { AppContext } from '../context/appContext'
import Loading from "./Loading";
import { makeStyles } from '@material-ui/core/styles';
import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Grid,
    Typography,
    TablePagination,
    IconButton
    
 } from '@material-ui/core';
 import {RiDeleteBin5Fill , RiEyeLine } from "react-icons/ri"
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const ExpandableTableRow = ({ children, expandComponent}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <>
      <TableRow>
        <TableCell padding="checkbox">
          <IconButton onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {children}
      </TableRow>
      {isExpanded && (
        <TableRow>
          <TableCell padding="checkbox" />
          {expandComponent}
        </TableRow>
      )}
    </>
  );
};


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    overflowX: 'auto'
  },

    table: {
      minWidth: 650,
    },
    
    tableHeaderCell: {
        fontWeight: 'bold',
    },
    avatar: {
        backgroundColor: "#ede7f6",
        color: "#5e35b1"
    },
    name: {
        fontWeight: '500',
        textTransform:"capitalize",
        marginLeft:"1rem"
    },
    status: {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        borderRadius: 8,
        padding: '3px 10px',
        display: 'inline-block'
    },
  }));
function ClientContainer() {
    const {isLoading , getClients, clients,  totalClients , deleteClient , editClient} = useContext(AppContext)
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    useEffect(()=>{
      getClients()
      // eslint-disable-next-line 
    } , [] )
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  
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

        <Paper className={classes.paper}>
        <TableContainer className={`taskTable`}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox" />
            <TableCell className={classes.tableHeaderCell}>Client Info</TableCell>
            <TableCell className={classes.tableHeaderCell}>Company</TableCell>
            <TableCell className={classes.tableHeaderCell}>Position</TableCell>
            <TableCell className={classes.tableHeaderCell}>responsible</TableCell>
            <TableCell className={classes.tableHeaderCell}>Status</TableCell>
            <TableCell className={classes.tableHeaderCell}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clients.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <ExpandableTableRow
            key={row.name}
            expandComponent={<TableCell colSpan="6">
              <div className='pb-1'>
                Email: {row.email} 
              </div>
              <div>
                Phone: {row.phone}
              </div>
              </TableCell>}>
              <TableCell>
                  <Grid container>
                      <Grid item lg={2}>
                          <Avatar alt={row.name} src='.' className={classes.avatar}/>
                      </Grid>
                      <Grid item lg={10}>
                          <Typography className={classes.name}>{row.name} {row.lastName}</Typography>
                      </Grid>
                  </Grid>
                </TableCell>
              <TableCell>
                {row.company}
                </TableCell>
              <TableCell>{row.position}</TableCell>
              <TableCell>{row.responsible.name} {row.responsible.lastName}</TableCell>
              <TableCell>
                  <Typography 
                    className={classes.status}
                    style={{
                        backgroundColor: 
                        ((row.clientStatus === 'active' && '#b9f6ca60') ||
                        (row.clientStatus === 'inactive' && '#fbe9e780')) , 
                        color : ((row.clientStatus === 'active' && '#00c853') ||
                        (row.clientStatus === 'inactive' && '#c62828'))
                    }}
                  >{row.clientStatus}</Typography>
                </TableCell>
                <TableCell align="center" >
              <div  className='action'>
                <div   className = "divIcon divIcon-view" >
                <RiEyeLine onClick={() => console.log("edit")}/>
                </div>
                <div 
                color="secondary"
                className = "divIcon divIcon-Delete" 
                >
                <RiDeleteBin5Fill onClick={() => deleteClient(row._id)}/>
                </div>
              </div>
            </TableCell>
          </ExpandableTableRow>
          ))}
        </TableBody>        
      </Table>
    </TableContainer>
    <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={clients.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
    </Paper>
  </Wrapper>
  )
}

export default ClientContainer