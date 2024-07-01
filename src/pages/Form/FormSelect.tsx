import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import { ISelect } from '../../types/types';

export default function CustomSelect({
  children,
  value,
  values,
  handleSelectChange,
  name,
}: ISelect) {
  return (
    <FormControl fullWidth>
      <InputLabel id='demo-simple-select-label'>{children}</InputLabel>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        name={name}
        value={value}
        label={children}
        onChange={handleSelectChange}
      >
        {values &&
          values.map((e) => (
            <MenuItem key={e} value={e}>
              {e}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}
