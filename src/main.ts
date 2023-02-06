import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AlternarModule } from './alternar.module';
async function bootstrap() {
  const ModuleName = 'core';
  const app = await NestFactory.create(AlternarModule);
  app.useGlobalPipes(new ValidationPipe());
  const config = app.get(ConfigService);
  const swaggerConfig = new DocumentBuilder()
    .setTitle(config.get(`${ModuleName}.swagger.title`))
    .setDescription(config.get(`${ModuleName}.swagger.description`))
    .setVersion(config.get(`${ModuleName}.swagger.version`))
    .addTag(`${ModuleName}`)
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup(`docs/${ModuleName}`, app, document);
  await app.listen(config.get(`${ModuleName}.port`));
}
bootstrap();
