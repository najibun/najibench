-- CreateTable
CREATE TABLE "Benchmark" (
    "id" TEXT NOT NULL,
    "organization" TEXT NOT NULL,
    "cpuModel" TEXT NOT NULL,
    "cpuCores" TEXT NOT NULL,
    "cpuCache" TEXT,
    "ram" TEXT NOT NULL,
    "disk" TEXT NOT NULL,
    "os" TEXT NOT NULL,
    "kernel" TEXT NOT NULL,
    "region" TEXT,
    "location" TEXT,
    "ioAvg" DOUBLE PRECISION,
    "load1" DOUBLE PRECISION,
    "load2" DOUBLE PRECISION,
    "load3" DOUBLE PRECISION,
    "networks" JSONB,
    "rawText" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Benchmark_pkey" PRIMARY KEY ("id")
);
