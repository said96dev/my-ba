import { FormControl, InputLabel, Select as MuiSelect, MenuItem } from '@material-ui/core';


const SelectUser = ({ labelText, name, value, handleChange, list }) => {
  return (
    <>
      <FormControl variant="outlined">
          <InputLabel>{labelText || name}</InputLabel>
          <MuiSelect
              label={labelText || name}
              name={name}
              value={value}
              onChange={handleChange}>
              <MenuItem value="">None</MenuItem>
              {list.map((itemValue, index) => {
                return (
                  
                  (<MenuItem key={index} value={itemValue}>
                      {itemValue.name}
                  </MenuItem>)
                );
              })}
          </MuiSelect>
      </FormControl>
      </>
  );
};

export default SelectUser;