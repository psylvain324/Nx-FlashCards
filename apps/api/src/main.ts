import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('FlashCards API')
    .setDescription('NestJS backend API for Flashcard UI Project')
    .setVersion('1.0')
    .addTag('FlashCards')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  // const globalPrefix = 'api/';
  // app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port);
    Logger.log('Swagger at http://localhost:' + port + '/api');
  });
}

bootstrap();
