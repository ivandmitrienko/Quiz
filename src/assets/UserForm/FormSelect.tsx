import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

interface ISelect {
  children: string;
  values?: string[];
}

export default function UserSelect({
  children,
  values,
  handleSelectChange,
}: ISelect) {
  return (
    <FormControl fullWidth>
      <InputLabel id='demo-simple-select-label'>{children}</InputLabel>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={value}
        label={children}
        onChange={handleSelectChange(e, setValue)}
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
