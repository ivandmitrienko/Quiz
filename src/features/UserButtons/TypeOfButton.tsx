import { IBotton } from '../../types/types';

import { Link } from 'react-router-dom';

import UserButton from './UserButton';

export default function TypeOfButton({ children, handleClick, link }: IBotton) {
  return (
    <>
      {link ? (
        <Link to={link}>
          <UserButton children={children} handleClick={handleClick} />
        </Link>
      ) : (
        <UserButton children={children} handleClick={handleClick} />
      )}
    </>
  );
}
