import React from 'react'
import { TextField } from '@material-ui/core';

function FormRow({type , name , value , handleChange ,labelText, fullWidth, rows , rowsMax , multiline }) {
  return (
    <>
         <TextField
         variant="outlined"
         label={labelText || name}
         name={name}
         value={value || ""}
         type={type}
         onChange={handleChange}
          className="form-input"
          multiline={multiline}
          minRows={rows}
          maxRows={rowsMax}
          fullWidth = {fullWidth}
     />
</>
  )
}

export default FormRow


