import { Box, Container, Grid } from '@mui/material';

import Title from '../../common/Title/Title';
import { Item } from '../../utilies/styleForItemGrid';
import { useSelector } from 'react-redux';
import { statistic } from '../../store/selectors';
import Button from '../../common/Buttons/Button';
import { useNavigate } from 'react-router-dom';

export default function UserStatistic() {
  const userStatistic = useSelector(statistic);

  const navigate = useNavigate();

  const returnToConfigQuiz = () => {
    navigate('/');
  };

  return (
    <Container>
      <Title>Quiz Statistic</Title>
      <Box
        sx={{
          display: 'flex',
          flexGrow: 1,
          justifyContent: 'center',
        }}
      >
        <Grid container columnSpacing={1} rowSpacing={1}>
          <Grid item xs={6}>
            <Item>
              In total, you answered{' '}
              {userStatistic.TotalNumberCorrectAnswers.length} questions out of{' '}
              {userStatistic.TotalNumberOfQuestions.length} correctly.
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              Total questions on geography:{' '}
              {userStatistic.QuestionsFromGeography.length}. Total questions on
              science: {userStatistic.QuestionsFromScience.length}. Total
              questions on literature:{' '}
              {userStatistic.QuestionsFromLiterature.length}.
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              Total number of easy questions:{' '}
              {userStatistic.EasyQuestions.length}. Total number of middle
              questions: {userStatistic.MiddleQuestions.length}. Total number of
              hard questions: {userStatistic.HardQuestions.length}.
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              Total number of boolean type questions:{' '}
              {userStatistic.BooleanQuestions.length}. Total number of multiple
              type questions: {userStatistic.MultipleQuestions.length}.
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          margin: '20px 20px',
        }}
      >
        <Button handleClick={returnToConfigQuiz}>ConfigQuiz</Button>
      </Box>
    </Container>
  );
}
