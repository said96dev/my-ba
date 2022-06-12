import React from 'react'
import { Button, makeStyles } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        minWidth: 0,
        margin: theme.spacing(0.5)
    },
    secondary: {
        backgroundColor: "#f8d7da",
        '& .MuiButton-label': {
            color: "#842029",
        }
    },
    primary: {
        backgroundColor: "#e6e7d1",
        '& .MuiButton-label': {
            color: "#6a710c",
        }
    },
}))

function ActionButton(props) {

    const { color, children, onClick  } = props;
    const classes = useStyles();

    return (
        <Button
            className={`${classes.root} ${classes[color]}`}
            onClick={onClick}
            >
            {children}
        </Button>
    )
}
export default ActionButton