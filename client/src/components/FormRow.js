import React from 'react'
import { TextField  } from '@material-ui/core';
import {FiSend} from "react-icons/fi"

function FormRow({type , name , value , handleChange ,labelText, fullWidth, rows , rowsMax , multiline , placeholder , readOnly  , className  , onClick}) {
  let icon = null; 
  if (name === "comment") {
    icon = <FiSend size={25}  className='sendIcon ' onClick={onClick}/>;
  }

  return (
    <>
      <TextField

          variant="outlined"
          label={labelText || name}
          name={name}
          value={typeof value === "object" ? value.map((r) => {
            if(r.lastName === undefined){
              return r.name
            }
            else
            return r.name + " " + r.lastName + " "
          }) : value || ""}
          type={type}
          onChange={handleChange}
          className= {`form-input ${className}`} 
          multiline={multiline}
          minRows={rows}
          maxRows={rowsMax}
          fullWidth = {fullWidth}
          InputProps={{
            endAdornment: icon , 
            readOnly : readOnly
          }}
          placeholder ={placeholder}
    />
</>
  )
}

export default FormRow


