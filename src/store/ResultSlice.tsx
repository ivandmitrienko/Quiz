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
    removeCurrentResult: () => {
      return initialState;
    },
  },
});

export const {
  addCorrectAnswer,
  addTimeSpentOnQuestions,
  removeCurrentResult,
} = resultSlice.actions;
export const resultReducer = resultSlice.reducer;
