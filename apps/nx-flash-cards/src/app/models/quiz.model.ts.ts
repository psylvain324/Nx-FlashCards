export interface Quiz {
  id: number;
  category: string;
  questions: Question[];
  totalQuestions: number;
  totalValue: number;
  totalScore: number;
}

export interface Question {
  id: number;
  name: string;
  category: string;
  answer: Answer;
  value: number;
}

export interface Answer {
  id: number;
  options: Map<number, string>[];
  correctAnswer: number;
  score: number;
}
