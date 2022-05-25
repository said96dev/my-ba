import React from 'react'
import { TextField  } from '@material-ui/core';

function FormRow({type , name , value , handleChange ,labelText, fullWidth, rows , rowsMax , multiline , placeholder , readOnly  , className }) {



  return (
    <>
      <TextField
          variant="outlined"
          label={labelText || name}
          name={name}
          value={value || ""}
          type={type}
          onChange={handleChange}
          className= {`form-input ${className}`} 
          multiline={multiline}
          minRows={rows}
          maxRows={rowsMax}
          fullWidth = {fullWidth}
          inputProps={
            { readOnly: readOnly,}
            
          }
          placeholder ={placeholder}
    />
</>
  )
}

export default FormRow


