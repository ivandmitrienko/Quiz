import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IStatistic, IStructureOfQuestion } from '../../types/types';

const initialState: IStatistic = {
  TotalNumberOfQuestions: [],
  TotalNumberCorrectAnswers: [],
  QuestionsFromScience: [],
  QuestionsFromGeography: [],
  QuestionsFromLiterature: [],
  EasyQuestions: [],
  MiddleQuestions: [],
  HardQuestions: [],
  MultipleQuestions: [],
  BooleanQuestions: [],
};

const statisticSlice = createSlice({
  name: '@@statistic',
  initialState,
  reducers: {
    addAnswerToStatistic: (
      state,
      action: PayloadAction<IStructureOfQuestion>,
    ) => {
      const { question, category, type, difficulty } = action.payload;
      state.TotalNumberOfQuestions.push(question);

      switch (category) {
        case 'Science':
          state.QuestionsFromScience.push(category);
          break;
        case 'Geography':
          state.QuestionsFromGeography.push(category);
          break;
        case 'Literature':
          state.QuestionsFromLiterature.push(category);
          break;
        default:
          break;
      }

      switch (difficulty) {
        case 'easy':
          state.EasyQuestions.push(difficulty);
          break;
        case 'middle':
          state.MiddleQuestions.push(difficulty);
          break;
        case 'hard':
          state.HardQuestions.push(difficulty);
          break;
        default:
          break;
      }

      switch (type) {
        case 'multiple':
          state.MultipleQuestions.push(type);
          break;
        case 'boolean':
          state.BooleanQuestions.push(type);
          break;
        default:
          break;
      }
    },
    addCorrectAnswerToStatistic: (state, action: PayloadAction<string>) => {
      state.TotalNumberCorrectAnswers.push(action.payload);
    },
  },
});

export const { addAnswerToStatistic, addCorrectAnswerToStatistic } =
  statisticSlice.actions;

export const staticReducer = statisticSlice.reducer;
