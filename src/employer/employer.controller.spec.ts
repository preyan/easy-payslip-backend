import { Test, TestingModule } from '@nestjs/testing';
import { Employer as EmployerModel, Prisma } from '@prisma/client';
import { PrismaService } from './../prisma/prisma.service';
import { EmployerController } from './employer.controller';
import { EmployerService } from './employer.service';

describe('EmployerController', () => {
  let controller: EmployerController;
  let service: EmployerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployerController],
      providers: [EmployerService, PrismaService],
    }).compile();

    controller = module.get<EmployerController>(EmployerController);
    service = module.get<EmployerService>(EmployerService);
  });

  describe('getAllEmployers', () => {
    it('should return an array of employers', async () => {
      const employers: EmployerModel[] = [
        {
          id: 1,
          name: 'Employer 1',
          address: 'Address 1',
          uinCin: 'UIN/CIN 1',
          tan: 'TAN 1',
          pan: 'PAN 1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: 'Employer 2',
          address: 'Address 2',
          uinCin: 'UIN/CIN 2',
          tan: 'TAN 2',
          pan: 'PAN 2',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];
      jest.spyOn(service, 'getAllEmployers').mockResolvedValue(employers);

      const result = await controller.getAllEmployers();

      expect(result).toEqual(employers);
    });
  });

  describe('getEmployer', () => {
    it('should return the employer with the specified ID', async () => {
      const employer: EmployerModel = {
        id: 1,
        name: 'Employer 2',
        address: 'Address 2',
        uinCin: 'UIN/CIN 2',
        tan: 'TAN 2',
        pan: 'PAN 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      const id = '1';
      jest.spyOn(service, 'getEmployer').mockResolvedValue(employer);

      const result = await controller.getEmployer(id);

      expect(result).toEqual(employer);
    });
  });

  describe('createEmployer', () => {
    it('should create a new employer', async () => {
      const createEmployerDto: Prisma.EmployerCreateInput = {
        name: 'Employer 3',
        address: 'Address 3',
        uinCin: 'UIN/CIN 3',
        tan: 'TAN 3',
        pan: 'PAN 3',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      const createdEmployer: EmployerModel = {
        id: 3,
        name: 'Employer 3',
        address: 'Address 3',
        uinCin: 'UIN/CIN 3',
        tan: 'TAN 3',
        pan: 'PAN 3',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      jest.spyOn(service, 'createEmployer').mockResolvedValue(createdEmployer);

      const result = await controller.createEmployer(createEmployerDto);

      expect(result).toEqual(createdEmployer);
    });
  });

  describe('updateEmployer', () => {
    it('should update an existing employer', async () => {
      const id = '1';
      const updateEmployerDto: Prisma.EmployerUpdateInput = {
        name: 'Updated Employer',
        address: 'Updated Address',
        uinCin: 'Updated UIN/CIN',
        tan: 'Updated TAN',
        pan: 'Updated PAN',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      const updatedEmployer: EmployerModel = {
        id: 1,
        name: 'Updated Employer',
        address: 'Updated Address',
        uinCin: 'Updated UIN/CIN',
        tan: 'Updated TAN',
        pan: 'Updated PAN',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      jest.spyOn(service, 'updateEmployer').mockResolvedValue(updatedEmployer);

      const result = await controller.updateEmployer(id, updateEmployerDto);

      expect(result).toEqual(updatedEmployer);
    });
  });

  describe('deleteEmployer', () => {
    it('should delete an employer', async () => {
      const id = '1';
      const deletedEmployer: EmployerModel = {
        id: 1,
        name: 'Deleted Employer',
        address: 'Deleted Address',
        uinCin: 'Deleted UIN/CIN',
        tan: 'Deleted TAN',
        pan: 'Deleted PAN',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      jest.spyOn(service, 'deleteEmployer').mockResolvedValue(deletedEmployer);

      const result = await controller.deleteEmployer(id);

      expect(result).toEqual(deletedEmployer);
    });
  });
});
