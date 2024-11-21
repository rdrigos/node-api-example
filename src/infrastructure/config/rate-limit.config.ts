import { FastifyRateLimitOptions } from '@fastify/rate-limit';

export const rateLimitConfig: FastifyRateLimitOptions = {
  global: true,
  max: 120,
  timeWindow: 1000 * 60 * 1, // 1 Minute
};
