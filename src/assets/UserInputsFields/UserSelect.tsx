import { FormControl, InputLabel, Select } from '@mui/material';

type ISelect = {
  children: string;
};

export default function UserSelect({ children }: ISelect) {
  return (
    <FormControl fullWidth>
      <InputLabel id='demo-simple-select-label'>{children}</InputLabel>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        label='Category'
      ></Select>
    </FormControl>
  );
}
