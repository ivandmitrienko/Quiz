import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { ChangeEvent } from 'react';

interface ISelect {
  children: string;
  values: string[];
  name: string;
  value: string;
  handleSelectChange: (
    e:
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>,
  ) => void;
}

export default function UserSelect({
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
        displayEmpty
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
