import { Box, Container } from '@mui/material';
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
      <Suspense
        fallback={
          <Container fixed>
            <Box
              sx={{
                bgcolor: 'white',
                height: '100vh',
                padding: '20px 10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              🌀 Loading...
            </Box>
          </Container>
        }
      >
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
