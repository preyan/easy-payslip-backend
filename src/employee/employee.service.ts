import { Injectable, Logger } from '@nestjs/common';
import { Employee, Prisma } from '@prisma/client';
import { PrismaService } from './../prisma/prisma.service';

@Injectable()
export class EmployeeService {
  constructor(private readonly prisma: PrismaService) {}

  private logger = new Logger('Employee service');

  /**
   * Retrieves an employee based on the provided unique identifier.
   * @param employeeWhereUniqueInput - The unique identifier of the employee.
   * @returns A Promise that resolves to the retrieved employee, or null if not found.
   */
  async getEmployee(
    employeeWhereUniqueInput: Prisma.EmployeeWhereUniqueInput,
  ): Promise<Employee | null> {
    this.logger.log('getEmployee');
    const employee = await this.prisma.employee.findUnique({
      where: employeeWhereUniqueInput,
    });
    return employee;
  }

  /**
   * Retrieves all employees from the database.
   * @returns {Promise<Employee[]>} A promise that resolves to an array of employees.
   */
  async getAllEmployees(): Promise<Employee[]> {
    this.logger.log('getAllEmployees');
    const employees = await this.prisma.employee.findMany();
    return employees;
  }

  /**
   * Creates a new employee.
   *
   * @param data - The data for creating the employee.
   * @returns A Promise that resolves to the created employee.
   */
  async createEmployee(data: Prisma.EmployeeCreateInput): Promise<Employee> {
    this.logger.log('createEmployee');
    const createEmployee = await this.prisma.employee.create({
      data,
    });
    return createEmployee;
  }

  /**
   * Updates an employee record in the database.
   *
   * @param params - The parameters for updating the employee.
   * @param params.where - The unique identifier of the employee to update.
   * @param params.data - The updated data for the employee.
   * @returns A Promise that resolves to the updated employee record.
   */
  async updateEmployee(params: {
    where: Prisma.EmployeeWhereUniqueInput;
    data: Prisma.EmployeeUpdateInput;
  }): Promise<Employee> {
    this.logger.log('updateEmployee');
    const updateEmployee = await this.prisma.employee.update({
      where: params.where,
      data: params.data,
    });
    return updateEmployee;
  }

  /**
   * Deletes an employee based on the provided unique identifier.
   * @param where - The unique identifier of the employee to delete.
   * @returns A Promise that resolves to the deleted employee.
   */
  async deleteEmployee(
    where: Prisma.EmployeeWhereUniqueInput,
  ): Promise<Employee> {
    this.logger.log('deleteEmployee');
    const deleteEmployee = await this.prisma.employee.delete({
      where,
    });
    return deleteEmployee;
  }
}
