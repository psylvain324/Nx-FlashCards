import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from '../../environments/environment';
import { FlashCardsController } from './../controllers/flashcards/flashcards.controller';
import { FlashCardsService } from './../services/flashcards/flashcards.service';
import { FlashCard, FlashCardSchema } from './../models/flashcard.schema';

@Module({
  exports: [FlashCardsModule],
  imports: [
    MongooseModule.forRoot(environment.dbConnectionString, {
      connectionName: 'FlashCards',
    }),
    MongooseModule.forFeature([{ name: FlashCard.name, schema: FlashCardSchema }], 'FlashCards'),
],
  controllers: [FlashCardsController],
  providers: [FlashCardsService],
})
export class FlashCardsModule {}
