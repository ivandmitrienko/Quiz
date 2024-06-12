import Button from '@mui/material/Button';

import { IBotton } from '../types/types';

import { Link } from 'react-router-dom';

export default function UserButton({ children, handleClick, link }: IBotton) {
  return (
    <>
      {link ? (
        <Link to={link}>
          <Button
            onClick={handleClick}
            variant='contained'
            color='primary'
            sx={{ fontWeight: '900' }}
          >
            {children}
          </Button>
        </Link>
      ) : (
        <Button
          onClick={handleClick}
          variant='contained'
          color='primary'
          sx={{ fontWeight: '900' }}
        >
          {children}
        </Button>
      )}
    </>
  );
}
