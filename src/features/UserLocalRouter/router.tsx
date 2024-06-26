import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Layout from '../Layout';
import UserForm from '../UserForm/UserForm';
import UserResult from '../UserResult/UserResult';
import UserStatistic from '../UserStatistic/UserStatistic';

const UserTest = lazy(() => import('../UserTest/UserTest'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <UserForm /> },
      {
        path: '/test',
        element: (
          <Suspense fallback={<>🌀 Loading...</>}>
            <UserTest />
          </Suspense>
        ),
      },
      { path: '/results', element: <UserResult /> },
      { path: '/statistic', element: <UserStatistic /> },
    ],
  },
]);
