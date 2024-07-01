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

import ButtonGroup from '../../common/Buttons/ButtonGroup';
import Button from '../../common/Buttons/TypeOfButton';
import ModalWindow from './ModalWindow';
import Title from '../../common/Title/Title';
import { useAppDispatch } from '../../store/store';
import {
  addCorrectAnswer,
  addTimeSpentOnQuestions,
} from '../../store/ResultSlice';
import { configTest, loading, questionsTest } from '../../store/selectors';
import LoadingContent from '../../common/LoadingContent/LoadingContent';
import {
  addAnswerToStatistic,
  addCorrectAnswerToStatistic,
} from '../../store/StatisticSlice';
import { AppRoutes } from '../../enums/enums';

export default function UserTest() {
  const configForTest = useSelector(configTest);
  const questionsForTest = useSelector(questionsTest);
  const serverLoading = useSelector(loading);

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
      navigate(`${AppRoutes.RESULT}`);
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
      navigate(`${AppRoutes.RESULT}`);
      dispatch(addTimeSpentOnQuestions(timeSpentOnQuestions));
    }
    return () => clearInterval(timerInterval);
  }, [totalTime, isTimerActive]);

  const handleAnswer = (answer: string) => {
    dispatch(addAnswerToStatistic(currentQuestion));

    if (answer === currentQuestion.correct_answer) {
      dispatch(addCorrectAnswer(answer));
      dispatch(addCorrectAnswerToStatistic(answer));
    }

    handleNextQuestion();
  };

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {serverLoading === 'loading' && <LoadingContent />}
      {serverLoading === 'idle' && (
        <Container>
          <Title>Quiz test</Title>
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
                      <Button handleClick={() => handleAnswer(answer)}>
                        {answer}
                      </Button>
                    </Grid>
                  ))
              ) : (
                <>
                  <Grid item xs={6}>
                    <Button handleClick={() => handleAnswer('True')}>
                      True
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button handleClick={() => handleAnswer('False')}>
                      False
                    </Button>
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
            <ButtonGroup>
              <Button handleClick={handleModal}>End quiz</Button>
            </ButtonGroup>
          </Box>
          <ModalWindow modal={modal} handleClick={handleModal} />
        </Container>
      )}
    </>
  );
}
