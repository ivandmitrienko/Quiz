import { createBrowserRouter } from 'react-router-dom';

import Layout from '../Layout';
import UserForm from '../../assets/UserForm/UserForm';
import UserTest from '../UserTest/UserTest';
import UserResult from '../../assets/UserResult/UserResult';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <UserForm /> },
      { path: '/test', element: <UserTest /> },
      { path: '/results', element: <UserResult /> },
    ],
  },
]);
