import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box
          sx={{
            height: '100vh',
            padding: '20px 10px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Outlet />
        </Box>
      </Container>
    </React.Fragment>
  );
}
