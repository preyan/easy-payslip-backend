import { Injectable, Logger } from '@nestjs/common';
import { Employer, Prisma } from '@prisma/client';
import { PrismaService } from './../prisma/prisma.service';

@Injectable()
export class EmployerService {
  constructor(private readonly prisma: PrismaService) {}

  private logger = new Logger('Employer service');

  /**
   * Retrieves an employer based on the provided unique identifier.
   * @param employerWhereUniqueInput - The unique identifier of the employer.
   * @returns A Promise that resolves to the retrieved employer, or null if not found.
   */
  async getEmployer(
    employerWhereUniqueInput: Prisma.EmployerWhereUniqueInput,
  ): Promise<Employer | null> {
    this.logger.log('employerById');
    const employer = await this.prisma.employer.findUnique({
      where: employerWhereUniqueInput,
    });
    return employer;
  }

  /**
   * Retrieves all employers from the database.
   * @returns {Promise<Employer[]>} A promise that resolves to an array of employers.
   */
  async getAllEmployers() {
    this.logger.log('getAllEmployers');
    const employers = await this.prisma.employer.findMany();
    return employers;
  }

  /**
   * Creates a new employer.
   *
   * @param data - The data for creating the employer.
   * @returns A Promise that resolves to the created employer.
   */
  async createEmployer(data: Prisma.EmployerCreateInput): Promise<Employer> {
    this.logger.log('createEmployer');
    const createEmployer = await this.prisma.employer.create({
      data,
    });
    return createEmployer;
  }

  /**
   * Updates an employer record in the database.
   *
   * @param params - The parameters for updating the employer.
   * @param params.where - The unique identifier of the employer to update.
   * @param params.data - The updated data for the employer.
   * @returns A Promise that resolves to the updated employer record.
   */
  async updateEmployer(params: {
    where: Prisma.EmployerWhereUniqueInput;
    data: Prisma.EmployerUpdateInput;
  }): Promise<Employer> {
    this.logger.log('updateEmployer');
    const updateEmployer = await this.prisma.employer.update({
      where: params.where,
      data: params.data,
    });
    return updateEmployer;
  }

  /**
   * Deletes an employer based on the provided unique identifier.
   * @param where - The unique identifier of the employer to delete.
   * @returns A Promise that resolves to the deleted employer.
   */
  async deleteEmployer(
    where: Prisma.EmployerWhereUniqueInput,
  ): Promise<Employer> {
    this.logger.log('deleteEmployer');
    const deleteEmployer = await this.prisma.employer.delete({
      where,
    });
    return deleteEmployer;
  }
}
