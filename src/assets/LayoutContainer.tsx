import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { PropsChildren } from './types/types';

export default function SimpleContainer({ children }: PropsChildren) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box
          sx={{
            bgcolor: '#cfe8fc',
            height: '100vh',
            padding: '20px 10px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {children}
        </Box>
      </Container>
    </React.Fragment>
  );
}
