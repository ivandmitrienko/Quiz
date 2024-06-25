import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IStateResults {
  answers: string[];
}

const initialState: IStateResults = {
  answers: [],
};

const resultSlice = createSlice({
  name: '@@result',
  initialState,
  reducers: {
    addCorrectAnswer: (state, action: PayloadAction<string>) => {
      state.answers.push(action.payload);
    },
  },
});

export const { addCorrectAnswer } = resultSlice.actions;
export const resultReducer = resultSlice.reducer;
