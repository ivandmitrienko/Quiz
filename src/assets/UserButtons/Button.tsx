import Button from '@mui/material/Button';
import { PropsChildren } from '../types/types';

export default function UserButton({ children }: PropsChildren) {
  return (
    <Button variant='contained' color='primary' sx={{ fontWeight: '900' }}>
      {children}
    </Button>
  );
}
