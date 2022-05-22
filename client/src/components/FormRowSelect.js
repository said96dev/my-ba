import { FormControl, InputLabel, Select as MuiSelect, MenuItem } from '@material-ui/core';


const FormRowSelect = ({ labelText, name, value, handleChange, list , className }) => {
  return (
    <>
      <FormControl variant="outlined" className= {`form-input ${className}`} >
          <InputLabel>{labelText || name}</InputLabel>
          <MuiSelect
              label={labelText || name}
              name={name}
              value={value || ""}
              onChange={handleChange}
              MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left"
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "left"
            },
            getContentAnchorEl: null
          }}
              >

              {list.map((itemValue, index) => {
                return (               
                  (<MenuItem key={index} value={itemValue}>
                      {itemValue}
                  </MenuItem>)
                );
              })}
          </MuiSelect>
      </FormControl>
      </>
  );
};

export default FormRowSelect;