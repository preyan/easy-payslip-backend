import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // API versioning
  const API_VERSION = 'v1';
  const API_PREFIX = `api/${API_VERSION}`;

  // Set global prefix for all routes
  app.setGlobalPrefix(API_PREFIX);

  // Enable CORS
  app.enableCors();

  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('Easy Payslip API')
    .setDescription(
      'The Easy Payslip API lets you manage your payslips and employees',
    )
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(`${API_PREFIX}/swagger`, app, document, {
    jsonDocumentUrl: `${API_PREFIX}/swagger/json`,
  });

  await app.listen(3000);
}
bootstrap();
