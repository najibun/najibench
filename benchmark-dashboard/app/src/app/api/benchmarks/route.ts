import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const result = await prisma.benchmark.create({
      data: {
        organization: body.organization,

        cpuModel: body.cpuModel,
        cpuCores: body.cpuCores,
        cpuCache: body.cpuCache,

        ram: body.ram,
        disk: body.disk,
        os: body.os,
        kernel: body.kernel,

        region: body.region,
        location: body.location,

        ioAvg: body.ioAvg,
        load1: body.load1,
        load2: body.load2,
        load3: body.load3,

        networks: body.networks,

        rawText: body.rawText,
      },
    });

    return Response.json({
      success: true,
      data: result,
    });
  } catch (err: any) {
    return Response.json(
      {
        success: false,
        error: err.message,
      },
      { status: 500 }
    );
  }
}
