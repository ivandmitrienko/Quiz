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

export interface IStructureOfQuestions {
  id: number;
  question: string;
  type: string;
  correct_answer: string;
  incorrect_answers: string[];
  category: string;
  difficulty: string;
}

export interface IState {
  confiqTest: IQuizConfigState;
  dataForTest: IStructureOfQuestions[];
}
