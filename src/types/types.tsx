import { SelectChangeEvent } from '@mui/material';
import { ChangeEvent } from 'react';

export type PropsChildren = {
  children: string | JSX.Element | JSX.Element[];
};

export interface IBotton {
  children: string;
  handleClick?: () => void;
  link?: string;
}

export interface IModal {
  modal: boolean;
  handleClick: () => void;
}

export interface IQuizConfigState {
  quantityOfQuestions: number;
  category: string;
  difficulty: string;
  type: string;
  time: string;
  firstQuestion: number;
}

export interface ISelect {
  children: string;
  values: string[];
  name: string;
  value: string;
  handleSelectChange: (
    e:
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>,
  ) => void;
}

export interface IStructureOfQuestion {
  id: number;
  question: string;
  type: string;
  correct_answer: string;
  incorrect_answers: string[];
  category: string;
  difficulty: string;
}

export interface IState {
  configTest: IQuizConfigState;
  dataForTest: IStructureOfQuestion[];
  loading: string;
}

export interface IStatistic {
  TotalNumberOfQuestions: string[];
  TotalNumberCorrectAnswers: string[];
  QuestionsFromScience: string[];
  QuestionsFromGeography: string[];
  QuestionsFromLiterature: string[];
  EasyQuestions: string[];
  MiddleQuestions: string[];
  HardQuestions: string[];
  MultipleQuestions: string[];
  BooleanQuestions: string[];
}
