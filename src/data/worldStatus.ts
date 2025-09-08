export interface Question {
  question: string;
  key: string;
  points: number;
  answer: boolean;
}

export interface QuestionCategory {
  title: string;
  questions: Question[];
}

export interface WorldWealthStatus {
  [category: string]: QuestionCategory;
}

