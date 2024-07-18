import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Employee as EmployeeModel, Prisma } from '@prisma/client';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  /**
   * Retrieves all employees.
   * @returns A promise that resolves to an array of employees.
   */
  @Get()
  async getAllEmployees() {
    return this.employeeService.getAllEmployees();
  }

  /**
   * Retrieves an employee by ID.
   * @param id - The ID of the employee.
   * @returns A promise that resolves to the employee with the specified ID.
   */
  @Get(':id')
  async getEmployee(@Param('id') id: string) {
    return this.employeeService.getEmployee({ id: Number(id) });
  }

  /**
   * Creates a new employee.
   * @param createEmployeeDto - The data for creating the employee.
   * @returns A promise that resolves to the created employee.
   */
  @Post()
  async createEmployee(
    @Body() createEmployeeDto: Prisma.EmployeeCreateInput,
  ): Promise<EmployeeModel> {
    return this.employeeService.createEmployee(createEmployeeDto);
  }

  /**
   * Updates an existing employee.
   * @param id - The ID of the employee to update.
   * @param updateEmployeeDto - The updated data for the employee.
   * @returns A promise that resolves to the updated employee.
   */
  @Put(':id')
  async updateEmployee(
    @Param('id') id: string,
    @Body() updateEmployeeDto: Prisma.EmployeeUpdateInput,
  ): Promise<EmployeeModel> {
    return this.employeeService.updateEmployee({
      where: { id: Number(id) },
      data: updateEmployeeDto,
    });
  }

  /**
   * Deletes an employee.
   * @param id - The ID of the employee to delete.
   * @returns A promise that resolves to the deleted employee.
   */
  @Delete(':id')
  async deleteEmployee(@Param('id') id: string): Promise<EmployeeModel> {
    return this.employeeService.deleteEmployee({ id: Number(id) });
  }
}
