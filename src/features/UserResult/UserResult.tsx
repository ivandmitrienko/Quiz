import { useSelector } from 'react-redux';

import { Box, Container, Grid } from '@mui/material';

import UserButton from '../../features/UserButtons/TypeOfButton';
import { RootState, useAppDispatch } from '../store/store';
import { configTest } from '../store/selectors';
import {
  removeStructureAndDataTest,
  restartQuiz,
} from '../store/QuestionsSlice';
import { removeCorrentResult } from '../store/ResultSlice';
import { Item } from '../../assets/utilies/styleForItemGrid';

export default function UserResult() {
  const configForTest = useSelector(configTest);
  const { time, type, category, difficulty, quantityOfQuestions } =
    configForTest;

  const answers = useSelector(
    (state: RootState) => state.answers.answers.length,
  );

  const timeSpentOnQuestions = useSelector(
    (state: RootState) => state.answers.time,
  );

  const dispatch = useAppDispatch();

  const handleRemoveDataAndStructure = () => {
    dispatch(removeStructureAndDataTest());
    dispatch(removeCorrentResult());
  };

  const handleRestartData = () => {
    dispatch(restartQuiz());
    dispatch(removeCorrentResult());
  };

  return (
    <Container>
      <Box
        component='section'
        sx={{
          p: 2,
          textAlign: 'center',
          fontWeight: '900',
        }}
      >
        Thank you for completing this quiz. Here are your results.
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexGrow: 1,
          justifyContent: 'center',
        }}
      >
        <Grid container columnSpacing={1}>
          <Grid item xs={4}>
            <Item>
              You answered {answers} out of {quantityOfQuestions} questions
              correctly
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              Configuration of test: {type}, {category}, {time} и {difficulty}
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              time spent on running test:{' '}
              {Math.floor(timeSpentOnQuestions / 60)}m{' '}
              {timeSpentOnQuestions % 60}s
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          margin: '20px 20px',
        }}
      >
        <UserButton link={'/test'} handleClick={handleRestartData}>
          Restart
        </UserButton>
        <UserButton link={'/'} handleClick={handleRemoveDataAndStructure}>
          Choose another quiz
        </UserButton>
      </Box>
    </Container>
  );
}
