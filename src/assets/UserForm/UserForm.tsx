import { ChangeEvent, useState } from 'react';

import { Grid, SelectChangeEvent, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';

import UserButtonGroup from '../UserButtons/UserButtonGroup';
import numberQuestions from '../utilies/numberQuestions';
import UserButton from '../UserButtons/UserButton';
import { IQuizConfigState } from '../types/types';
import UserSelect from './FormSelect';

export default function UserForm() {
  const [config, setConfig] = useState<IQuizConfigState>({
    numberOfQuestions: 5,
    category: '',
    difficulty: '',
    type: '',
    time: '1m',
  });

  const [nameError, setNameError] = useState<boolean>(false);

  const { min, max } = numberQuestions();

  const handleChange = (
    e:
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>,
  ) => {
    const { name, value } = e.target;

    setConfig((prevConfig) => ({
      ...prevConfig,
      [name]: name === 'numberOfQuestions' ? parseInt(value, 10) : value,
    }));

    if (e.target instanceof HTMLInputElement && e.target.validity.valid) {
      setNameError(false);
    } else if (e.target instanceof HTMLInputElement) {
      setNameError(true);
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant='h4' sx={{ textAlign: 'center' }} mb={5} gutterBottom>
        Quiz Configuration
      </Typography>
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
            value={Number(config.numberOfQuestions)}
            name='numberOfQuestions'
            error={nameError}
            helperText={nameError ? 'Please enter number from 5 to 15' : ''}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <UserSelect
            value={config.category}
            name='category'
            handleSelectChange={handleChange}
            values={['general', 'sports', 'history']}
          >
            Category
          </UserSelect>
        </Grid>
        <Grid item xs={6}>
          <UserSelect
            value={config.difficulty}
            name='difficulty'
            handleSelectChange={handleChange}
            values={['easy', 'medium', 'hard']}
          >
            Difficulty
          </UserSelect>
        </Grid>
        <Grid item xs={6}>
          <UserSelect
            value={config.type}
            name='type'
            values={['multiple', 'boolean']}
            handleSelectChange={handleChange}
          >
            Type
          </UserSelect>
        </Grid>
        <Grid item xs={6}>
          <UserSelect
            value={config.time}
            name='time'
            handleSelectChange={handleChange}
            values={['1m', '2m', '5m']}
          >
            Time
          </UserSelect>
        </Grid>
      </Grid>
      <UserButtonGroup>
        <UserButton link='/test'>Start quiz</UserButton>
        <UserButton link='/results'>See my stats</UserButton>
      </UserButtonGroup>
    </Box>
  );
}
