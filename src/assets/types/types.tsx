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
  numberOfQuestions: number;
  category: string;
  difficulty: string;
  type: string;
  time: string;
}
