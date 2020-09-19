import { Test, TestingModule } from '@nestjs/testing';

import { FlashCardsController } from './flashcards.controller';
import { FlashCardsService } from '../../services/flashcards/flashcards.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [FlashCardsController],
      providers: [FlashCardsService],
    }).compile();
  });

});
