import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()

/**
 * PrismaService class extends the PrismaClient class and implements the OnModuleInit interface.
 * It provides a connection to the Prisma ORM and initializes the connection when the module is initialized.
 */
export class PrismaService extends PrismaClient implements OnModuleInit {
  /**
   * Initializes the Prisma client connection when the module is initialized.
   */
  async onModuleInit() {
    await this.$connect();
  }
  async onModuleDestroy() {
    await this.$disconnect();
  }
}
