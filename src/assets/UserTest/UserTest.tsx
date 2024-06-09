import { Box, Container } from '@mui/material';
import CircularProgressChildren from './CircularProgressChildren';
import UserButtonGroup from '../UserButton/ButtonGroup';
import UserButton from '../UserButton/Button';
import UserTimer from './UserTimer';

export default function UserTest() {
  return (
    <Container>
      <CircularProgressChildren />
      <Box component='section' sx={{ p: 2, border: '1px solid grey' }}>
        This question.
        <UserButtonGroup>
          <UserButton>True</UserButton>
          <UserButton>False</UserButton>
        </UserButtonGroup>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          margin: '20px 20px',
        }}
      >
        <UserTimer />
        <UserButtonGroup>
          <UserButton>End quiz</UserButton>
        </UserButtonGroup>
      </Box>
    </Container>
  );
}
