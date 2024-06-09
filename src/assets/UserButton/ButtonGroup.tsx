import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { PropsChildren } from '../types/types';

export default function UserButtonGroup({ children }: PropsChildren) {
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
        {children}
      </ButtonGroup>
    </Box>
  );
}
