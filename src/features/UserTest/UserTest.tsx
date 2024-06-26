import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  Box,
  Container,
  Grid,
  LinearProgress,
  Typography,
} from '@mui/material';

import UserButtonGroup from '../UserButtons/UserButtonGroup';
import UserButton from '../UserButtons/TypeOfButton';
import UserTestModal from './UserTestModal';
import TitleOfPage from '../TitleOfPage/TitleOfPage';
import { useAppDispatch } from '../store/store';
import {
  addCorrectAnswer,
  addTimeSpentOnQuestions,
} from '../store/ResultSlice';
import { configTest, questionsTest } from '../store/selectors';

export default function UserTest() {
  const configForTest = useSelector(configTest);
  const questionsForTest = useSelector(questionsTest);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalTime, setTotalTime] = useState(parseInt(configForTest.time) * 60);
  const [isTimerActive, setIsTimerActive] = useState(true);
  const [modal, setModal] = useState(false);

  const currentQuestion = questionsForTest[currentQuestionIndex];

  const timeSpentOnQuestions = parseInt(configForTest.time) * 60 - totalTime;

  const handleNextQuestion = useCallback(() => {
    if (currentQuestionIndex < questionsForTest.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsTimerActive(false);
      dispatch(addTimeSpentOnQuestions(timeSpentOnQuestions));
      navigate('/results');
    }
  }, [currentQuestionIndex, questionsForTest.length]);

  useEffect(() => {
    let timerInterval: NodeJS.Timeout;
    if (isTimerActive && totalTime > 0) {
      timerInterval = setInterval(() => {
        setTotalTime((prevTotalTime) => prevTotalTime - 1);
      }, 1000);
    } else if (totalTime === 0) {
      setIsTimerActive(false);
      navigate('/results');
      dispatch(addTimeSpentOnQuestions(timeSpentOnQuestions));
    }
    return () => clearInterval(timerInterval);
  }, [totalTime, isTimerActive]);

  const handleAnswer = (answer: string) => {
    if (answer === currentQuestion.correct_answer) {
      dispatch(addCorrectAnswer(currentQuestion.correct_answer));
    } else {
      console.log('Incorrect!');
    }
    handleNextQuestion();
  };

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <Container>
      <TitleOfPage>Quiz test</TitleOfPage>
      <LinearProgress
        variant='determinate'
        value={((currentQuestionIndex + 1) / questionsForTest.length) * 100}
        sx={{ my: 2 }}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Typography variant='body1' gutterBottom>
          Question {currentQuestionIndex + 1} of {questionsForTest.length}
        </Typography>
        <Typography variant='body1' gutterBottom>
          Time remaining: {Math.floor(totalTime / 60)}m {totalTime % 60}s
        </Typography>
      </Box>
      <Box component='section' sx={{ p: 2, border: '1px solid grey' }}>
        <Typography variant='h6' gutterBottom>
          {currentQuestion.question}
        </Typography>
        <Grid container spacing={2} sx={{ my: 2 }}>
          {currentQuestion.type === 'multiple' ? (
            currentQuestion.incorrect_answers
              .concat(currentQuestion.correct_answer)
              .sort()
              .map((answer) => (
                <Grid item xs={12} sm={6} key={answer}>
                  <UserButton handleClick={() => handleAnswer(answer)}>
                    {answer}
                  </UserButton>
                </Grid>
              ))
          ) : (
            <>
              <Grid item xs={6}>
                <UserButton handleClick={() => handleAnswer('True')}>
                  True
                </UserButton>
              </Grid>
              <Grid item xs={6}>
                <UserButton handleClick={() => handleAnswer('False')}>
                  False
                </UserButton>
              </Grid>
            </>
          )}
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
        <UserButtonGroup>
          <UserButton handleClick={handleModal}>End quiz</UserButton>
        </UserButtonGroup>
      </Box>
      <UserTestModal modal={modal} handleClick={handleModal} />
    </Container>
  );
}
