import 'dotenv/config';
import { z } from 'zod';

const schema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'staging']),
  HOST: z.string().min(6),
  PORT: z.coerce.number().int().min(80).max(65535),
  NAME: z.string().min(8),
  DESC: z.string().min(8),
  VERSION: z.string().min(5),
});

export const env = schema.parse(process.env);
