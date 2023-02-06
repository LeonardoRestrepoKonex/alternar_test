import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AlternarModule } from './alternar.module';
async function bootstrap() {
  const ModuleName = 'core';
  const app = await NestFactory.create(AlternarModule);
  app.useGlobalPipes(new ValidationPipe());
  const swaggerConfig = new DocumentBuilder()
    .setTitle(process.env.SWAGGER_TITTLE)
    .setDescription(process.env.SWAGGER_DESCRIPTION)
    .setVersion(process.env.SWAGGER_VERSION)
    .addTag(`${ModuleName}`)
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup(`docs/${ModuleName}`, app, document);
  await app.listen(process.env.PORT);
}
bootstrap();
