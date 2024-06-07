import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useState } from 'react';

interface ISelect {
  children: string;
  values?: string[];
}

export default function UserSelect({ children, values }: ISelect) {
  const [value, setValue] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id='demo-simple-select-label'>{children}</InputLabel>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={value}
        label='Category'
        onChange={handleChange}
      >
        {values && values.map((e) => <MenuItem value={e}>{e}</MenuItem>)}
      </Select>
    </FormControl>
  );
}
