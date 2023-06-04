import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const db =
  globalForPrisma.prisma ||
  new PrismaClient({
    // log: ['query'],
  });

export default db;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
