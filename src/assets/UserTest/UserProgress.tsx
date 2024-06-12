import { Box, CircularProgress, Typography } from '@mui/material';

export default function CircularProgressChildren() {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      sx={{ marginBottom: '20px' }}
    >
      <CircularProgress variant='determinate' value={66.66} size='70px' />
      <Typography position='absolute'>2/3</Typography>
    </Box>
  );
}
