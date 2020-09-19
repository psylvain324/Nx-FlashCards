import { Module } from '@nestjs/common';
import { AppController } from './app.controller'
import { AppService } from './app.service';
import { FlashCardsModule } from './shared/flashcards.module'
import { MenubarModule } from 'primeng/menubar';

@Module({
  imports: [FlashCardsModule, MenubarModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
