import { env } from '@/config/environment';

type CorsConfig = {
  origin: string[];
  methods: string[];
  allowedHeaders: string[];
  credentials: boolean;
};

export const corsConfig: CorsConfig = {
  origin: env.CORS_ORIGIN,
  methods: ['GET'],
  allowedHeaders: ['Authorization', 'Content-Type'],
  credentials: env.CORS_CREDENTIALS,
};
