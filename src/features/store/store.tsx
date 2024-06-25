import { configureStore } from '@reduxjs/toolkit';
import { questionsReducer } from './QuestionsSlice';
import { useDispatch } from 'react-redux';
import { resultReducer } from './ResultSlice';

export const store = configureStore({
  reducer: {
    questions: questionsReducer,
    answers: resultReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
