import React, { useState } from 'react';

import { Grid, SelectChangeEvent, TextField } from '@mui/material';
import Box from '@mui/material/Box';

// import UserSelect from './FormSelect';
import UserButtonGroup from '../UserButtons/UserButtonGroup';
import numberQuestions from '../utilies/numberQuestions';
import UserButton from '../UserButtons/UserButton';
import { IQuizConfigState } from '../types/types';

export default function UserForm() {
  const [config, setConfig] = useState<IQuizConfigState>({
    numberOfQuestions: 5,
    category: '',
    difficulty: '',
    type: '',
    time: '1m',
  });

  // const [nameError, setNameError] = useState<boolean>(false);

  const { min, max } = numberQuestions();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent<string>,
  ) => {
    const { name, value } = e.target;
    setConfig((prevConfig) => ({
      ...prevConfig,
      [name]: value,
    }));
    // if (e.target.validity.valid) {
    //   setNameError(false);
    // } else {
    //   setNameError(true);
    // }
  };

  // const handleSelectChange = ({ e, selectHandle }: ISelectHandle) =>
  //   selectHandle(e.target.value as string);

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
            // required
            label='number questions'
            type='number'
            inputProps={{ min, max }}
            value={config.numberOfQuestions}
            // error={nameError}
            // helperText={nameError ? 'Please enter number from 5 to 15' : ''}
            onChange={handleChange}
          />
        </Grid>
        {/* <Grid item xs={6}>
          <UserSelect
            handleSelectChange={handleSelectChange}
            values={['general', 'sports', 'history']}
          >
            Category
          </UserSelect>
        </Grid>
        <Grid item xs={6}>
          <UserSelect
            handleSelectChange={handleSelectChange}
            values={['easy', 'medium', 'hard']}
          >
            Difficulty
          </UserSelect>
        </Grid>
        <Grid item xs={6}>
          <UserSelect values={['multiple', 'boolean']}>Type</UserSelect>
        </Grid>
        <Grid item xs={6}>
          <UserSelect
            handleSelectChange={handleSelectChange(e, setTime)}
            values={['1m', '2m', '5m']}
          >
            Time
          </UserSelect>
        </Grid> */}
      </Grid>
      <UserButtonGroup>
        <UserButton link='/test'>Start quiz</UserButton>
        <UserButton link='/results'>See my stats</UserButton>
      </UserButtonGroup>
    </Box>
  );
}
