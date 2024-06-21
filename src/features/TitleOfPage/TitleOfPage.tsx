import { Typography } from '@mui/material';
import { PropsChildren } from '../../assets/types/types';

export default function TitleOfPage({ children }: PropsChildren) {
  return (
    <>
      <Typography variant='h4' sx={{ textAlign: 'center' }} mb={5} gutterBottom>
        {children}
      </Typography>
    </>
  );
}
