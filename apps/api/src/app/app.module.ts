import { Module } from '@nestjs/common';
import { AppController } from './app.controller'
import { AppService } from './app.service';
import { FlashCardsModule } from './shared/flashcards.module'

@Module({
  imports: [FlashCardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
