import { Injectable } from '@nestjs/common';
import { Message } from '@flash-cards-game/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
