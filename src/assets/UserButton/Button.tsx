import Button from '@mui/material/Button';
import { PropsChildren } from '../types/types';

export default function UserButton({ children }: PropsChildren) {
  return <Button sx={{ fontWeight: '900' }}>{children}</Button>;
}
