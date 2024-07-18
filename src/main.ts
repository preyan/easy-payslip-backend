import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors();

  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('Easy Payslip API')
    .setDescription('The Easy Payslip API lets you manage your payslips and employees')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/swagger', app, document);
  
  await app.listen(3000);
}
bootstrap();
