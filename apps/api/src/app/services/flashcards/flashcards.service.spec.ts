import { Test } from '@nestjs/testing';
import { FlashCardsService } from '../../services/flashcards/flashcards.service';

describe('AppService', () => {
  let service: FlashCardsService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [FlashCardsService],
    }).compile();

    service = app.get<FlashCardsService>(FlashCardsService);
  });

});
