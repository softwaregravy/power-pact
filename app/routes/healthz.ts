import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Queue } from "bullmq";
import prisma from "~/db.server";

export const loader: LoaderFunction = async () => {
  const health = {
    status: "healthy",
    checks: {
      database: true,
      redis: true
    },
    timestamp: new Date().toISOString()
  };

  try {
    // Test database connection
    await prisma.$connect();
  } catch (error) {
    health.status = "unhealthy";
    health.checks.database = false;
  }

  try {
    // Test Redis connection using BullMQ
    const healthQueue = new Queue("health-check", {
      connection: {
        pingInterval: 1000
      }
    });
    await healthQueue.disconnect();
  } catch (error) {
    health.status = "unhealthy";
    health.checks.redis = false;
  }

  return json(
    health,
    { 
      status: health.status === "healthy" ? 200 : 503 
    }
  );
};
