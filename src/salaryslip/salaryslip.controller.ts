import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { SalarySlipService } from './salaryslip.service';

@Controller('salaryslip')
export class SalaryslipController {
  constructor(private readonly salaryslipService: SalarySlipService) {}

  @Post()
  async createPayslip(
    @Body() createSalaryslipDto: Prisma.SalarySlipCreateInput,
  ) {
    return this.salaryslipService.createSalarySlip(createSalaryslipDto);
  }

  @Get(':id')
  async getAllPayslips(@Param('id') id: string) {
    return this.salaryslipService.getAllSalarySlips(id);
  }

  @Get(':id')
  async getPayslip(@Param('id') id: Prisma.SalarySlipWhereUniqueInput) {
    return this.salaryslipService.getSalarySlip(id);
  }

  @Patch(':id')
  updatePayslip(
    @Param('id') id: Prisma.SalarySlipWhereUniqueInput,
    @Body() updateSalaryslipDto: Prisma.SalarySlipUpdateInput,
  ) {
    return this.salaryslipService.updateSalarySlip({
      where: id,
      data: updateSalaryslipDto,
    });
  }

  @Delete(':id')
  deletePayslip(@Param('id') id: Prisma.SalarySlipWhereUniqueInput) {
    return this.salaryslipService.deleteSalarySlip(id);
  }
}
