import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Employer as EmployerModel, Prisma } from '@prisma/client';
import { EmployerService } from './employer.service';

@Controller('employer')
export class EmployerController {
  constructor(private readonly employerService: EmployerService) {}

  /**
   * Retrieves all employers.
   * @returns A promise that resolves to an array of employers.
   */
  @Get()
  async getAllEmployers() {
    return this.employerService.getAllEmployers();
  }

  /**
   * Retrieves an employer by ID.
   * @param id - The ID of the employer.
   * @returns A promise that resolves to the employer with the specified ID.
   */
  @Get(':id')
  async getEmployer(@Param('id') id: string) {
    return this.employerService.getEmployer({ id: Number(id) });
  }

  /**
   * Creates a new employer.
   * @param createEmployerDto - The data for creating the employer.
   * @returns A promise that resolves to the created employer.
   */
  @Post()
  async createEmployer(
    @Body() createEmployerDto: Prisma.EmployerCreateInput,
  ): Promise<EmployerModel> {
    return this.employerService.createEmployer(createEmployerDto);
  }

  /**
   * Updates an existing employer.
   * @param id - The ID of the employer to update.
   * @param updateEmployerDto - The updated data for the employer.
   * @returns A promise that resolves to the updated employer.
   */
  @Put(':id')
  async updateEmployer(
    @Param('id') id: string,
    @Body() updateEmployerDto: Prisma.EmployerUpdateInput,
  ): Promise<EmployerModel> {
    return this.employerService.updateEmployer({
      where: { id: Number(id) },
      data: updateEmployerDto,
    });
  }

  /**
   * Deletes an employer.
   * @param id - The ID of the employer to delete.
   * @returns A promise that resolves to the deleted employer.
   */
  @Delete(':id')
  async deleteEmployer(@Param('id') id: string): Promise<EmployerModel> {
    return this.employerService.deleteEmployer({ id: Number(id) });
  }
}
