import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

const globalWithPrisma = global;

const prisma = globalWithPrisma.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production")
  globalWithPrisma.prismaGlobal = prisma;
