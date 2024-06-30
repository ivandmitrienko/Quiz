import { Paper, styled } from '@mui/material';

export const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  fontWeight: '700',
  maxHeight: '80px',
  height: '100%',
  overflow: 'hidden',
}));
