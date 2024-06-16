import { Button } from '@mui/material';
import { IBotton } from '../types/types';

type UserButton = Pick<IBotton, 'children' | 'handleClick'>;

export default function UserButton({ children, handleClick }: UserButton) {
  return (
    <Button
      onClick={handleClick}
      variant='contained'
      color='primary'
      sx={{ fontWeight: '900', minWidth: '150px' }}
    >
      {children}
    </Button>
  );
}
