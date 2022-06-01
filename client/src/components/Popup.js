import React from 'react'
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ActionButton from "./ActionButton"

const useStyles = props => makeStyles(theme => ({
    dialogWrapper: {
        padding: theme.spacing(2),
        position: 'absolute',
        top:theme.spacing(props.top || 0) 
    },
    dialogTitle: {
        paddingRight: '0px'
    },
}))

export default function Popup(props) {

    const { title, children, openPopup, setOpenPopup ,width  } = props;


    const classes = useStyles(props)();

    return (
        <Dialog open={openPopup} maxWidth={width || "sm"}  fullWidth
        classes={{ paper: classes.dialogWrapper }}>
            <DialogTitle className={classes.dialogTitle}>
            <div style={{ display: 'flex' }}>
                    <Typography variant="h4" component="div" style={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                    <ActionButton color="secondary" className="btn-danger"
                        onClick={()=>{setOpenPopup(false)}}>
                        <CloseIcon  />
                    </ActionButton>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    )
}