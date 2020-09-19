import { Document } from 'mongoose';

export interface FlashCardDto extends Document {
  _id: string;
  question: string;
  answer: string;
  category: string;
  author: string;
}

export class FlashCardDEntity extends Document {
  _id: string;
  question: string;
  answer: string;
  category: string;
  author: string;
}
