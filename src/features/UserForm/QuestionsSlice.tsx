import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IQuizConfigState } from '../../types/types';

const initialState: IQuizConfigState[] = [];

export const createSliceQuestions = createAsyncThunk(
  '@@questions/createQuestions',
  async (config: IQuizConfigState, { dispatch }) => {
    const { difficulty, type, category, quantityOfQuestions } = config;
    const res = await fetch(
      `http://localhost:3000/questions/${type}/${category}`,
    );
    const data = await res.json();

    /*here use filter method because json-server doesn't support multiple filter*/
    console.log(data);
    const questions = data.filter(
      (e: IQuizConfigState) => e.difficulty === difficulty,
    );

    console.log(questions);
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
