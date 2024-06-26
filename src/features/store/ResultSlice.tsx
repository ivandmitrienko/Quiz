import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IStateResults {
  answers: string[];
  time: number;
}

const initialState: IStateResults = {
  answers: [],
  time: 0,
};

const resultSlice = createSlice({
  name: '@@result',
  initialState,
  reducers: {
    addCorrectAnswer: (state, action: PayloadAction<string>) => {
      state.answers.push(action.payload);
    },
    addTimeSpentOnQuestions: (state, action: PayloadAction<number>) => {
      state.time = action.payload;
    },
  },
});

export const { addCorrectAnswer, addTimeSpentOnQuestions } =
  resultSlice.actions;
export const resultReducer = resultSlice.reducer;
