import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  IQuizConfigState,
  IState,
  IStructureOfQuestions,
} from '../../types/types';

export const createSliceQuestions = createAsyncThunk(
  '@@questions/createQuestions',
  async (config: IQuizConfigState) => {
    const { type, difficulty, quantityOfQuestions, category, firstQuestion } =
      config;

    const res = await fetch(
      `http://localhost:3000/questions?type=${type}&category=${category}&difficulty=${difficulty}&_start=${firstQuestion}&_limit=${quantityOfQuestions}`,
    );
    const data: IStructureOfQuestions[] = await res.json();
    return data;
  },
);

const initialState: IState = {
  configTest: {} as IQuizConfigState,
  dataForTest: [],
  loading: '',
};

const questionsSlice = createSlice({
  name: '@@questions',
  initialState,
  reducers: {
    saveStructureTest: (state, action: PayloadAction<IQuizConfigState>) => {
      state.configTest = action.payload;
    },
    removeStructureAndDataTest: (state) => {
      return (state = initialState);
    },
    changeStartingQuestion: (state) => {
      state.configTest.firstQuestion += state.configTest.quantityOfQuestions;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createSliceQuestions.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(createSliceQuestions.fulfilled, (state, action) => {
        state.dataForTest = action.payload;
        state.loading = 'idle';
      })
      .addCase(createSliceQuestions.rejected, (state) => {
        state.loading = 'failed';
      });
  },
});

export const {
  saveStructureTest,
  removeStructureAndDataTest,
  changeStartingQuestion,
} = questionsSlice.actions;
export const questionsReducer = questionsSlice.reducer;
