import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import FormButton from './FormButton';

export default function FormButtonGroup() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant='outlined' aria-label='Basic button group'>
        <FormButton>Start quiz</FormButton>
        <FormButton>See my stats</FormButton>
      </ButtonGroup>
    </Box>
  );
}
