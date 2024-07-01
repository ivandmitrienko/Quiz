import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import LoadingContent from '../common/LoadingContent/LoadingContent';
import { AppRoutes } from '../enums/enums';

const Layout = lazy(() => import('../Layout'));
const Form = lazy(() => import('../pages/Form/Form'));
const Result = lazy(() => import('../pages/Result/Result'));
const Statistic = lazy(() => import('../pages/Statistic/Statistic'));
const Interrogation = lazy(
  () => import('../pages/Interrogation/Interrogation'),
);

export const router = createBrowserRouter([
  {
    path: `${AppRoutes.ROOT}`,
    element: (
      <Suspense fallback={<LoadingContent />}>
        <Layout />
      </Suspense>
    ),
    children: [
      { index: true, element: <Form /> },
      {
        path: `${AppRoutes.INTERROGATION}`,
        element: <Interrogation />,
      },
      { path: `${AppRoutes.RESULT}`, element: <Result /> },
      { path: `${AppRoutes.STATISTIC}`, element: <Statistic /> },
    ],
  },
]);
