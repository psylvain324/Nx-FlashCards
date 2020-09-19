import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class FlashCard extends Document {
  @Prop()
  question: string;

  @Prop()
  answer: string;

  @Prop()
  category: string;

  @Prop()
  author: string;
}
export const FlashCardSchema = SchemaFactory.createForClass(FlashCard);
