import { FormControl, InputLabel, Select as MuiSelect, MenuItem } from '@material-ui/core';


const SelectUser = ({ labelText, name, value, handleChange, list  , className}) => {
  return (
    <>
      <FormControl variant="outlined" className={className}>
          <InputLabel>{labelText || name}</InputLabel>
          <MuiSelect
              label={labelText || name}
              name={name}
              value={value}
              onChange={handleChange}>
              {list.map((itemValue, index) => {
                return (
                  
                  (<MenuItem key={index} value={itemValue}>
                      {itemValue.name} {itemValue.lastName}
                  </MenuItem>)
                );
              })}
          </MuiSelect>
      </FormControl>
      </>
  );
};

export default SelectUser;