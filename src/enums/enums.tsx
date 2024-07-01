enum Routes {
  ROOT,
  INTERROGATION,
  RESULT,
  STATISTIC,
}

export const AppRoutes: { [key in keyof typeof Routes]: string } = {
  ROOT: '/',
  INTERROGATION: '/interrogation',
  RESULT: '/result',
  STATISTIC: '/statistic',
};
