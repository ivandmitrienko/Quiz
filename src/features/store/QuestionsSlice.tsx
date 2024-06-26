import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  IQuizConfigState,
  IState,
  IStructureOfQuestions,
} from '../../types/types';

export const createSliceQuestions = createAsyncThunk(
  '@@questions/createQuestions',
  async (config: IQuizConfigState) => {
    const { difficulty, type, category, quantityOfQuestions } = config;
    const res = await fetch(
      `http://localhost:3000/questions/${type}/${category}`,
    );
    const data: IStructureOfQuestions[] = await res.json();

    /*here use filter  and slice methods because this version of json-server doesn't support multiple filter*/
    const questions = data
      .filter((e) => e.difficulty === difficulty)
      .slice(0, quantityOfQuestions);

    return questions;
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(createSliceQuestions.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(createSliceQuestions.fulfilled, (state, action) => {
        state.dataForTest = action.payload;
        state.loading = 'idle';
      });
  },
});

export const { saveStructureTest, removeStructureAndDataTest } =
  questionsSlice.actions;
export const questionsReducer = questionsSlice.reducer;
