import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import LoadingContent from '../common/LoadingContent/LoadingContent';

const Layout = lazy(() => import('../Layout'));
const Form = lazy(() => import('../pages/Form/Form'));
const Result = lazy(() => import('../pages/Result/Result'));
const Statistic = lazy(() => import('../pages/Statistic/Statistic'));
const Interrogation = lazy(
  () => import('../pages/Interrogation/Interrogation'),
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<LoadingContent />}>
        <Layout />
      </Suspense>
    ),
    children: [
      { index: true, element: <Form /> },
      {
        path: '/test',
        element: <Interrogation />,
      },
      { path: '/results', element: <Result /> },
      { path: '/statistic', element: <Statistic /> },
    ],
  },
]);
