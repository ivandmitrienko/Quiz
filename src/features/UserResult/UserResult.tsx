import { useSelector } from 'react-redux';

import { Box, Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import UserButton from '../../features/UserButtons/TypeOfButton';
import { RootState } from '../store/store';

export default function UserResult() {
  const answers = useSelector(
    (state: RootState) => state.answers.answers.length,
  );
  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontWeight: '700',
    maxHeight: '80px',
    height: '100%',
    overflow: 'hidden',
  }));

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
            <Item>You answered {answers} out of 10 questions correctly</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>Конфигурация теста, тип, категория, время и сложность</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              Cколько времени потребовалось пользователю, чтобы ответить на все
              вопросы
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
        <UserButton link={'/test'}>Restart</UserButton>
        <UserButton link={'/'}>Choose another quiz</UserButton>
      </Box>
    </Container>
  );
}
