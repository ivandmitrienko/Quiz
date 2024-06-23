import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IQuizConfigState } from '../../types/types';

const initialState: IQuizConfigState[] = [];

export const createSliceQuestions = createAsyncThunk(
  '@@questions/createQuestions',
  async (config: IQuizConfigState, { dispatch }) => {
    console.log(config.category);
    const { difficulty, type, time, category, numberOfQuestions } = config;
    const res = await fetch(
      `http://localhost:3000/questions?category=${category}&type=${type}&_difficulty=${difficulty}`,
    );
    const data = await res.json();

    console.log(data);
  },
);

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
