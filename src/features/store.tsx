import { configureStore } from '@reduxjs/toolkit';
import { questionsReducer } from './UserForm/QuestionsSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: questionsReducer,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
