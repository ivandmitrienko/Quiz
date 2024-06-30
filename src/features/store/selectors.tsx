import { RootState } from './store';

export const questionsTest = (state: RootState) => state.questions.dataForTest;

export const configTest = (state: RootState) => state.questions.configTest;

export const loading = (state: RootState) => state.questions.loading;

export const statistic = (state: RootState) => state.statistic;
