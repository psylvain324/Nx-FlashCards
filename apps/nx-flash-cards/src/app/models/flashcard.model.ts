export class FlashCard {
  id: string;
  question: string;
  answer: string;
  category: string;
  author: string;
}

export interface CardCategory {
  name: string;
  category: string;
  totalQuestions: number;
}
