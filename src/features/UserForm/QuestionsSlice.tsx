import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IQuizConfigState, IStructureOfQuestions } from '../../types/types';

export const createSliceQuestions = createAsyncThunk(
  '@@questions/createQuestions',
  async (config: IQuizConfigState, { dispatch }) => {
    dispatch(saveStructureTest(config));
    const { difficulty, type, category, quantityOfQuestions } = config;
    const res = await fetch(
      `http://localhost:3000/questions/${type}/${category}`,
    );
    const data: IStructureOfQuestions[] = await res.json();

    /*here use filter  and slice methods because json-server doesn't support multiple filter*/
    const questions = data
      .filter((e) => e.difficulty === difficulty)
      .slice(0, quantityOfQuestions);

    return questions;
  },
);

const initialState = {
  confiqTest: [] as IQuizConfigState[],
  dataForTest: [] as IStructureOfQuestions[],
};

const questionsSlice = createSlice({
  name: '@@questions',
  initialState,
  reducers: {
    saveStructureTest: (state, action: PayloadAction<IQuizConfigState>) => {
      state.confiqTest.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createSliceQuestions.fulfilled, (state, action) => {
      state.dataForTest = action.payload;
    });
  },
});

export const { saveStructureTest } = questionsSlice.actions;
export const questionsReducer = questionsSlice.reducer;
