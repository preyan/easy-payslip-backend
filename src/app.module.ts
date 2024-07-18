import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { EmployerModule } from './employer/employer.module';
import { PrismaModule } from './prisma/prisma.module';
import { SalaryslipModule } from './salaryslip/salaryslip.module';

@Module({
  imports: [PrismaModule, EmployeeModule, EmployerModule, SalaryslipModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
