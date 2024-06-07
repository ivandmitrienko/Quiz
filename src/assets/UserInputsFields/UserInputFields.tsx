import { Grid, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import UserSelect from './UserSelect';

export default function UserInputFields() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <TextField
            type='number'
            sx={{ width: '100%' }}
            InputProps={{
              inputProps: {
                max: 15,
                min: 5,
              },
            }}
            label='Enter number of questions'
          />
        </Grid>
        <Grid item xs={6}>
          <UserSelect>Category</UserSelect>
        </Grid>
        <Grid item xs={6}>
          <UserSelect>Difficulty</UserSelect>
        </Grid>
        <Grid item xs={6}>
          <UserSelect>Type</UserSelect>
        </Grid>
        <Grid item xs={6}>
          <UserSelect values={['1m', '2m', '5m']}>Time</UserSelect>
        </Grid>
      </Grid>
    </Box>
  );
}
