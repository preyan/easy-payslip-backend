import { Test, TestingModule } from '@nestjs/testing';
import { Prisma } from '@prisma/client';
import { SalaryslipController } from './salaryslip.controller';
import { SalarySlipService } from './salaryslip.service';

describe('SalaryslipController', () => {
  let controller: SalaryslipController;
  let service: SalarySlipService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SalaryslipController],
      providers: [SalarySlipService],
    }).compile();

    controller = module.get<SalaryslipController>(SalaryslipController);
    service = module.get<SalarySlipService>(SalarySlipService);
  });

  describe('createPayslip', () => {
    it('should create a new payslip', async () => {
      const createSalaryslipDto: Prisma.SalarySlipCreateInput = {
        month: 9,
        year: 2022,
        totalWorkDays: 30,
        numberOfLeaves: 2,
        earnings: { basic: 5000, allowance: 2000 },
        deductions: { tax: 1000, insurance: 500 },
        netPay: 6500,
        netPayWords: 'Six thousand five hundred',
        leaveBalance: 10,
        employee: { connect: { id: 1 } },
        employer: { connect: { id: 1 } },
      };

      const createdPayslip = {}; // Replace with the expected created payslip object

      jest.spyOn(service, 'create' as any).mockResolvedValue(createdPayslip);

      const result = await controller.createPayslip(createSalaryslipDto);

      expect(result).toBe(createdPayslip);
    });
  });

  describe('getAllPayslips', () => {
    it('should return all payslips for a given employee', async () => {
      const employeeId = '1';

      const payslips: any[] = []; // Replace with the expected array of payslips

      jest.spyOn(service, 'getAll' as any).mockResolvedValue(payslips);

      const result = await controller.getAllPayslips(employeeId);

      expect(result).toBe(payslips);
    });
  });

  describe('getPayslip', () => {
    it('should return a payslip by id', async () => {
      const payslipId = '1';

      const payslip = {}; // Replace with the expected payslip object

      jest.spyOn(service, 'get' as any).mockResolvedValue(payslip);

      const result = await (controller as any).get(payslipId);

      expect(result).toBe(payslip);
    });
  });

  describe('update', () => {
    it('should update a payslip', async () => {
      const payslipId = '1';
      const updateSalaryslipDto: Prisma.SalarySlipUpdateInput = {
        totalWorkDays: 25,
        numberOfLeaves: 3,
        earnings: { basic: 6000, allowance: 2500 },
        deductions: { tax: 1200, insurance: 600 },
        netPay: 6700,
        netPayWords: 'Six thousand seven hundred',
        leaveBalance: 7,
      };

      const updatedPayslip = {}; // Replace with the expected updated payslip object

      jest
        .spyOn(service, 'updatePayslip' as any)
        .mockResolvedValue(updatedPayslip);

      const result = await (controller as any).update(
        payslipId,
        updateSalaryslipDto,
      );

      expect(result).toBe(updatedPayslip);
    });
  });

  describe('remove', () => {
    it('should remove a payslip', async () => {
      const payslipId = '1';

      const removedPayslip = {}; // Replace with the expected removed payslip object

      jest
        .spyOn(service, 'deletePayslip' as any)
        .mockResolvedValue(removedPayslip);

      const result = await controller.deletePayslip({ id: Number(payslipId) });

      expect(result).toBe(removedPayslip);
    });
  });
});
