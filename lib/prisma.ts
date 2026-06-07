type ModelDelegate = {
  create: (args: { data: unknown }) => Promise<unknown>;
  upsert: (args: { where: unknown; create: unknown; update: unknown }) => Promise<unknown>;
};

type PrismaClientLike = {
  bookingSubmission: ModelDelegate;
  contactSubmission: ModelDelegate;
  newsletterSubscription: ModelDelegate;
};

type PrismaClientConstructor = new () => PrismaClientLike;

type PrismaModule = {
  PrismaClient?: PrismaClientConstructor;
  default?: {
    PrismaClient?: PrismaClientConstructor;
  };
};

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClientLike;
};

export async function getPrisma() {
  if (!process.env.DATABASE_URL) {
    return null;
  }

  try {
    const prismaModule = (await import('@prisma/client')) as unknown as PrismaModule;
    const PrismaClient = prismaModule.PrismaClient ?? prismaModule.default?.PrismaClient;

    if (!PrismaClient) {
      return null;
    }

    const prisma = globalForPrisma.prisma ?? new PrismaClient();

    if (process.env.NODE_ENV !== 'production') {
      globalForPrisma.prisma = prisma;
    }

    return prisma;
  } catch {
    return null;
  }
}
