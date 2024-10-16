import { NestFactory } from '@nestjs/core';
import { AppModule } from './infra/app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap().catch((err) => {
  console.log('#App is crushed', err);
});
