import { ChangeEvent, useState } from 'react';

import { Grid, SelectChangeEvent, TextField } from '@mui/material';
import Box from '@mui/material/Box';

import UserButtonGroup from '../UserButtons/UserButtonGroup';
import numberQuestions from '../../assets/utilies/numberQuestions';
import UserButton from '../UserButtons/TypeOfButton';
import { IQuizConfigState } from '../../types/types';
import UserSelect from './UserFormSelect';
import TitleOfPage from '../TitleOfPage/TitleOfPage';
import { createSliceQuestions, saveStructureTest } from './QuestionsSlice';
import { useAppDispatch } from '../store';

export default function UserForm() {
  const [config, setConfig] = useState<IQuizConfigState>({
    quantityOfQuestions: 5,
    category: 'Literature',
    difficulty: 'easy',
    type: 'multiple',
    time: '1m',
  });

  const dispatch = useAppDispatch();

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

  const handleClickStart = () => {
    dispatch(saveStructureTest(config));
    dispatch(createSliceQuestions(config));
  };

  return (
    <Box sx={{ width: '100%' }}>
      <TitleOfPage>Quiz Configuration</TitleOfPage>
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
            value={Number(config.quantityOfQuestions)}
            name='quantityOfQuestions'
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
            values={['Literature', 'Science', 'Geography']}
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
        <UserButton link='/test' handleClick={handleClickStart}>
          Start quiz
        </UserButton>
        <UserButton link='/results'>See my stats</UserButton>
      </UserButtonGroup>
    </Box>
  );
}
