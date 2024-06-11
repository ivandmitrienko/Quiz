import React, { useState } from 'react';

import { Grid, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import UserSelect from './FormSelect';
import UserButtonGroup from '../UserButtons/ButtonGroup';
import numberQuestions from '../utilies/numberQuestions';
import UserButton from '../UserButtons/Button';

export default function UserForm() {
  const [number, setNumberQuestions] = useState<number>();
  const [nameError, setNameError] = useState(false);

  const { min, max } = numberQuestions();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberQuestions(parseInt(e.target.value));
    if (e.target.validity.valid) {
      setNameError(false);
    } else {
      setNameError(true);
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Grid
        container
        sx={{ display: 'flex', justifyContent: 'center' }}
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={6}>
          <TextField
            fullWidth
            required
            label='number questions'
            type='number'
            inputProps={{ min, max }}
            value={number}
            error={nameError}
            helperText={nameError ? 'Please enter number from 5 to 15' : ''}
            onChange={handleChange}
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
      <UserButtonGroup>
        <UserButton>Start quiz</UserButton>
        <UserButton>See my stats</UserButton>
      </UserButtonGroup>
    </Box>
  );
}
