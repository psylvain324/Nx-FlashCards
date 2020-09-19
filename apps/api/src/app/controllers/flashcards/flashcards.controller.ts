import { Controller, Get, Post, Put, Delete, Body, Param, Header } from '@nestjs/common';
import { FlashCardsService } from '../../services/flashcards/flashcards.service';
import { FlashCardDto } from '../../models/flashcard.model';

@Controller('FlashCards')
export class FlashCardsController {

  constructor(private service: FlashCardsService) {}

  @Get()
  @Header('Content-Type', 'application/json')
  async findAll(): Promise<any> {
    return this.service.findAll();
  }

  @Get('FlashCardById/:id')
  async findOne(@Param('id') id: string): Promise<any> {
    return this.service.findOne(id);
  }

  @Post('Create/:createFlashCardDto')
  async create(@Body() flashCardDto: FlashCardDto) {
    return this.create(flashCardDto);
  }

  @Put('Update/:id/:flasCardDto')
  async update(@Param('id') id: string, @Body() flashCardDto: FlashCardDto) {
    return this.service.update(id, flashCardDto);
  }

  @Delete('Delete/:id')
  async remove(@Param('id') id: string) {
    return this.service.delete(id);
  }
}
