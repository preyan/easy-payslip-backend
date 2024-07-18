import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from './../prisma/prisma.service';
import { EmployerService } from './employer.service';

describe('EmployerService', () => {
  let service: EmployerService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployerService, PrismaService],
    }).compile();

    service = module.get<EmployerService>(EmployerService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('getEmployer', () => {
    it('should return the employer with the provided unique identifier', async () => {
      // Arrange
      const employerId = 123;
      const employer = {
        id: employerId,
        name: 'Test Employer',
        address: 'Test Address',
        uinCin: 'Test UIN/CIN',
        tan: 'Test TAN',
        pan: 'Test PAN',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      const findUniqueSpy = jest
        .spyOn(prismaService.employer, 'findUnique')
        .mockResolvedValue(employer);

      // Act
      const result = await service.getEmployer({ id: employerId });

      // Assert
      expect(findUniqueSpy).toHaveBeenCalledWith({ where: { id: employerId } });
      expect(result).toEqual(employer);
    });

    it('should return null if the employer is not found', async () => {
      // Arrange
      const employerId = 123;
      const findUniqueSpy = jest
        .spyOn(prismaService.employer, 'findUnique')
        .mockResolvedValue(null);

      // Act
      const result = await service.getEmployer({ id: employerId });

      // Assert
      expect(findUniqueSpy).toHaveBeenCalledWith({ where: { id: employerId } });
      expect(result).toBeNull();
    });
  });

  describe('getAllEmployers', () => {
    it('should return an array of employers', async () => {
      // Arrange
      const employers = [
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
      const findManySpy = jest
        .spyOn(prismaService.employer, 'findMany')
        .mockResolvedValue(employers);

      // Act
      const result = await service.getAllEmployers();

      // Assert
      expect(findManySpy).toHaveBeenCalled();
      expect(result).toEqual(employers);
    });
  });

  describe('createEmployer', () => {
    it('should create a new employer', async () => {
      // Arrange
      const employerData = {
        name: 'New Employer',
        address: 'New Address',
        uinCin: 'New UIN/CIN',
        tan: 'New TAN',
        pan: 'New PAN',
      };
      const createdEmployer = {
        id: 123,
        name: 'Test Employer',
        address: 'Test Address',
        uinCin: 'Test UIN/CIN',
        tan: 'Test TAN',
        pan: 'Test PAN',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      const createSpy = jest
        .spyOn(prismaService.employer, 'create')
        .mockResolvedValue(createdEmployer);

      // Act
      const result = await service.createEmployer(employerData);

      // Assert
      expect(createSpy).toHaveBeenCalledWith({ data: employerData });
      expect(result).toEqual(createdEmployer);
    });
  });

  describe('updateEmployer', () => {
    it('should update an existing employer', async () => {
      // Arrange
      const employerId = 123;
      const employerData = { name: 'Updated Employer' };
      const updatedEmployer = {
        id: employerId,
        name: 'Test Employer',
        address: 'Test Address',
        uinCin: 'Test UIN/CIN',
        tan: 'Test TAN',
        pan: 'Test PAN',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      const updateSpy = jest
        .spyOn(prismaService.employer, 'update')
        .mockResolvedValue(updatedEmployer);

      // Act
      const result = await service.updateEmployer({
        where: { id: employerId },
        data: employerData,
      });

      // Assert
      expect(updateSpy).toHaveBeenCalledWith({
        where: { id: employerId },
        data: employerData,
      });
      expect(result).toEqual(updatedEmployer);
    });
  });

  describe('deleteEmployer', () => {
    it('should delete an existing employer', async () => {
      // Arrange
      const employerId = 123;
      const deletedEmployer = {
        id: employerId,
        name: 'Test Employer',
        address: 'Test Address',
        uinCin: 'Test UIN/CIN',
        tan: 'Test TAN',
        pan: 'Test PAN',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      const deleteSpy = jest
        .spyOn(prismaService.employer, 'delete')
        .mockResolvedValue(deletedEmployer);

      // Act
      const result = await service.deleteEmployer({ id: employerId });

      // Assert
      expect(deleteSpy).toHaveBeenCalledWith({ where: { id: employerId } });
      expect(result).toEqual(deletedEmployer);
    });
  });
});
