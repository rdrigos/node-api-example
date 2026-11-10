import { env } from '@/config/environment';

type RateLimitConfig = {
  maxRequests: number;
  windowMs: number;
};

export const rateLimitConfig: RateLimitConfig = {
  maxRequests: env.RATE_LIMIT_MAX,
  windowMs: env.RATE_LIMIT_WINDOW,
};
