import { useState } from 'react';

import { Box, Container } from '@mui/material';

import CircularProgressChildren from './UserProgress';
import UserButtonGroup from '../UserButtons/UserButtonGroup';
import UserButton from '../UserButtons/UserButton';
import UserTimer from './UserTimer';
import UserTestModal from './UserTestModal';

export default function UserTest() {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

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
          <UserButton handleClick={handleModal}>End quiz</UserButton>
        </UserButtonGroup>
      </Box>
      <UserTestModal modal={modal} handleClick={handleModal} />
    </Container>
  );
}
