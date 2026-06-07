import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

export function getPrisma() {
  if (!process.env.DATABASE_URL) {
    return null;
  }

  let prisma: PrismaClient;

  try {
    prisma = globalForPrisma.prisma ?? new PrismaClient();
  } catch {
    return null;
  }

  if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = prisma;
  }

  return prisma;
}
