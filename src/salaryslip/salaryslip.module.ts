import { Module } from '@nestjs/common';
import { SalaryslipController } from './salaryslip.controller';
import { SalarySlipService } from './salaryslip.service';

@Module({
  controllers: [SalaryslipController],
  providers: [SalarySlipService],
})
export class SalaryslipModule {}
