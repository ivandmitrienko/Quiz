import { useCallback, useEffect, useState } from 'react';

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
import { useSelector } from 'react-redux';
import { IState } from '../../types/types';

export default function UserTest() {
  const questions = useSelector((state: IState) => state.dataForTest);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(60); // Default 60 seconds
  const [isTimerActive, setIsTimerActive] = useState(true);
  const [modal, setModal] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  console.log(currentQuestion);

  const handleNextQuestion = useCallback(() => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimer(60); // Reset timer for next question
    } else {
      // Handle end of quiz
      setIsTimerActive(false);
      alert('Quiz finished!');
    }
  }, [currentQuestionIndex]);

  useEffect(() => {
    let timerInterval: NodeJS.Timeout;
    if (isTimerActive && timer > 0) {
      timerInterval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      handleNextQuestion();
    }
    return () => clearInterval(timerInterval);
  }, [timer, isTimerActive, handleNextQuestion]);

  const handleAnswer = (answer: string) => {
    if (answer === currentQuestion.correct_answer) {
      console.log('Correct!');
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
        value={((currentQuestionIndex + 1) / questions.length) * 100}
        sx={{ my: 2 }}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Typography variant='body1' gutterBottom>
          Question {currentQuestionIndex + 1} of {questions.length}
        </Typography>
        <Typography variant='body1' gutterBottom>
          Time remaining: {timer}s
        </Typography>
      </Box>
      <Box component='section' sx={{ p: 2, border: '1px solid grey' }}>
        <Typography variant='h6' gutterBottom>
          {currentQuestion.question}
        </Typography>
        {/* <UserButtonGroup>
          <UserButton>True</UserButton>
          <UserButton>False</UserButton>
        </UserButtonGroup> */}
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
        {/* <UserTimer /> */}
        <UserButtonGroup>
          <UserButton handleClick={handleModal}>End quiz</UserButton>
        </UserButtonGroup>
      </Box>
      <UserTestModal modal={modal} handleClick={handleModal} />
    </Container>
  );
}
