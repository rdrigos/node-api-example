import 'dotenv/config';
import { z } from 'zod';

const schema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'staging']),
  HOST: z.union([z.ipv4(), z.ipv6(), z.hostname()]),
  PORT: z.coerce.number().int().min(80).max(65535),
  CORS_ORIGIN: z
    .string()
    .trim()
    .transform((value) => (value === '*' ? ['*'] : value.split(',').map((origin) => origin.trim())))
    .pipe(z.array(z.union([z.literal('*'), z.url()])).min(1)),
  CORS_CREDENTIALS: z.stringbool(),
  RATE_LIMIT_MAX: z.coerce.number().int().min(5),
  RATE_LIMIT_WINDOW: z.coerce.number().int().min(10000),
  NAME: z.string().min(8),
  DESC: z.string().min(8),
  VERSION: z.string().min(5),
});

export const env = schema.parse(process.env);
