import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IQuizConfigState } from '../../types/types';

const initialState: IQuizConfigState[] = [];

const questionsSlice = createSlice({
  name: '@@questions',
  initialState,
  reducers: {
    getQuestions: (state, action: PayloadAction<IQuizConfigState>) => {
      state.push(action.payload);
    },
  },
});

export const { getQuestions } = questionsSlice.actions;
export const questionsReducer = questionsSlice.reducer;
