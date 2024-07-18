import { Injectable, Logger } from '@nestjs/common';
import { Prisma, SalarySlip } from '@prisma/client';
import { PrismaService } from './../prisma/prisma.service';

@Injectable()
export class SalarySlipService {
  constructor(private readonly prisma: PrismaService) {}

  private logger = new Logger('SalarySlip service');

  /**
   * Retrieves a salary slip based on the provided unique identifier.
   * @param salarySlipWhereUniqueInput - The unique identifier of the salary slip.
   * @returns A Promise that resolves to the retrieved salary slip, or null if not found.
   */
  async getSalarySlip(
    salarySlipWhereUniqueInput: Prisma.SalarySlipWhereUniqueInput,
  ): Promise<SalarySlip | null> {
    this.logger.log('getSalarySlip');
    const salarySlip = await this.prisma.salarySlip.findUnique({
      where: salarySlipWhereUniqueInput,
    });
    return salarySlip;
  }

  /**
   * Retrieves all salary slips from the database.
   * @returns {Promise<SalarySlip[]>} A promise that resolves to an array of salary slips.
   */
  /**
   * Retrieves all salary slips for a given employee.
   * @param id - The ID of the employee.
   * @returns A promise that resolves to an array of SalarySlip objects.
   */
  async getAllSalarySlips(id: string): Promise<SalarySlip[]> {
    this.logger.log('getAllSalarySlips');
    const salarySlips = await this.prisma.salarySlip.findMany({
      where: { employeeId: Number(id) },
    });
    return salarySlips;
  }

  /**
   * Creates a new salary slip.
   *
   * @param data - The data for creating the salary slip.
   * @returns A Promise that resolves to the created salary slip.
   */
  async createSalarySlip(
    data: Prisma.SalarySlipCreateInput,
  ): Promise<SalarySlip> {
    this.logger.log('createSalarySlip');
    const createSalarySlip = await this.prisma.salarySlip.create({
      data,
    });
    return createSalarySlip;
  }

  /**
   * Updates a salary slip record in the database.
   *
   * @param params - The parameters for updating the salary slip.
   * @param params.where - The unique identifier of the salary slip to update.
   * @param params.data - The updated data for the salary slip.
   * @returns A Promise that resolves to the updated salary slip record.
   */
  async updateSalarySlip(params: {
    where: Prisma.SalarySlipWhereUniqueInput;
    data: Prisma.SalarySlipUpdateInput;
  }): Promise<SalarySlip> {
    this.logger.log('updateSalarySlip');
    const updateSalarySlip = await this.prisma.salarySlip.update({
      where: params.where,
      data: params.data,
    });
    return updateSalarySlip;
  }

  /**
   * Deletes a salary slip based on the provided unique identifier.
   * @param where - The unique identifier of the salary slip to delete.
   * @returns A Promise that resolves to the deleted salary slip.
   */
  async deleteSalarySlip(
    where: Prisma.SalarySlipWhereUniqueInput,
  ): Promise<SalarySlip> {
    this.logger.log('deleteSalarySlip');
    const deleteSalarySlip = await this.prisma.salarySlip.delete({
      where,
    });
    return deleteSalarySlip;
  }
}
