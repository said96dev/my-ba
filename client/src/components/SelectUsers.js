import { FormControl, InputLabel, Select} from '@material-ui/core';
import MenuItem from "@material-ui/core/MenuItem";



const SelectUser = ({ labelText, name, value,  multiple, handleChange, list  , className}) => {
const ITEM_HEIGHT = 50;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  },
  // Show dropdow at bottom of select
  getContentAnchorEl: null,
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "left"
  },
  MenuListProps: {
    tabIndex: "1",
  }
};
  return (
    <>
      <FormControl variant="outlined" className={className}>
          <InputLabel>{labelText || name}</InputLabel>
          <Select
          className='select-input'
              multiple = {multiple}
              label={labelText || name}
              name={name}
              value={value}
              renderValue={multiple ? (selected) => selected.map((item) => {
                return item.name + " " + item.lastName
              }
              ).join(", "): (selected) => { return(selected.name)} }
              MenuProps={{ ...MenuProps, autoFocus: true }}
              onChange={handleChange}>
              {list.map((itemValue, index) => {
                return (
                  
                  (<MenuItem key={index} value={itemValue}>
                      {itemValue.name} {itemValue.lastName}
                  </MenuItem>)
                );
              })}
          </Select>
      </FormControl>
      </>
  );
};

export default SelectUser;