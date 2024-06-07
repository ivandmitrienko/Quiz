import Button from '@mui/material/Button';

interface IButton {
  children: string;
  values?: string[];
}

export default function FormButton({ children }: IButton) {
  return <Button sx={{ fontWeight: '900' }}>{children}</Button>;
}
