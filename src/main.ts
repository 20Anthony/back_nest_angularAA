import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //class validator
  app.useGlobalPipes(new ValidationPipe());
  // enable CORS to allow requests from the Angular dev server
  app.enableCors();

  //swagger
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Backend Product API')
    .setDescription('Backend API for Product Management')
    .setVersion('1.0')
    .addTag('Api Rest')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
