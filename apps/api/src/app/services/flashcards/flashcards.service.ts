import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FlashCard } from '../../models/flashcard.schema';
import { FlashCardDto } from '../../models/flashcard.model';

@Injectable()
export class FlashCardsService {
  constructor(@InjectModel(FlashCard.name) private flashCardModel: Model<FlashCard>) {}

  async findAll(): Promise<FlashCard[]> {
    return this.flashCardModel.find().exec();
  }

  async findOne(id: string): Promise<FlashCard> {
    return this.flashCardModel.findById(id).exec();
  }

  async create(createFlashCardDto: FlashCardDto): Promise<FlashCard> {
    const createdFlashCard = new this.flashCardModel(createFlashCardDto);
    return createdFlashCard.save();
  }

  async update(id: string, updateFlashCardDto: FlashCardDto): Promise<FlashCard> {
    const newFlashCard = this.flashCardModel.findById(id);
    (await newFlashCard).question = updateFlashCardDto.question;
    (await newFlashCard).answer = updateFlashCardDto.answer;
    (await newFlashCard).category = updateFlashCardDto.category;

    const createdFlashCard = new this.flashCardModel(newFlashCard);
    return createdFlashCard.save();
  }

  async delete(id: string) {
    return 'this.flashCardModel.remove(id)';
  }

  // async findAll() {
  //   const flashCards = await this.flashCardModel.find().exec();
  //   return flashCards.map(card => ({
  //     question: card.question,
  //     answer: card.answer,
  //     category: card.category,
  //     author: card.author,
  //   }));
  // }

}
