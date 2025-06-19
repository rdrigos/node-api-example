import { z } from 'zod';

const environmentSchema = z.object({
  // General
  NODE_ENV: z.enum(['development', 'production', 'staging']),

  // Application
  HOST: z.string(),
  PORT: z.coerce.number().min(80).max(65535),
  NAME: z.string().min(8),
  DESC: z.string().min(8),
  VERSION: z.string().min(5),
});

export const env = environmentSchema.parse(process.env);
