import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Layout = lazy(() => import('../Layout'));
const UserForm = lazy(() => import('../UserForm/UserForm'));
const UserResult = lazy(() => import('../UserResult/UserResult'));
const UserStatistic = lazy(() => import('../UserStatistic/UserStatistic'));
const UserTest = lazy(() => import('../UserTest/UserTest'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<>🌀 Loading...</>}>
        <Layout />
      </Suspense>
    ),
    children: [
      { index: true, element: <UserForm /> },
      {
        path: '/test',
        element: <UserTest />,
      },
      { path: '/results', element: <UserResult /> },
      { path: '/statistic', element: <UserStatistic /> },
    ],
  },
]);
