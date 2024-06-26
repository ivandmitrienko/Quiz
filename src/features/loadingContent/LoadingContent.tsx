import { Box, Container } from '@mui/material';

export default function LoadingContent() {
  return (
    <Container fixed>
      <Box
        sx={{
          bgcolor: '#cfe8fc',
          height: '100vh',
          padding: '20px 10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        🌀 Loading...
      </Box>
    </Container>
  );
}
