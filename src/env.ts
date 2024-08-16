import { z } from 'zod';

const envSchema = z.object({
  // API Settings
  API_NAME: z.string().min(2).max(32),
  API_PORT: z.preprocess((port) => Number(port), z.number().min(80).max(65535)),
  API_DESC: z.string().min(16).max(256),
  API_VERSION: z
    .string()
    .min(5)
    .max(11)
    .regex(/^(\d+)\.(\d+)\.(\d+)$/),
  API_TIMEZONE: z.string().min(2).max(32),
});

// Creates a type for environment variables
export type Env = z.infer<typeof envSchema>;

// Validate '.env' environment variables
export const env: Env = envSchema.parse(process.env);
