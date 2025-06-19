import { publicRouter } from '@/http/routers/public.router';
import { corsConfig } from '@/infrastructure/config/cors.config';
import { helmetConfig } from '@/infrastructure/config/helmet.config';
import { rateLimitConfig } from '@/infrastructure/config/rate-limit.config';
import { env } from '@/infrastructure/environment';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import rateLimit from '@fastify/rate-limit';
import Fastify from 'fastify';

// Creates the server instance
const app = Fastify({
  logger: {
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
      },
    },
  },
  ignoreTrailingSlash: true,
});

// Sets up the application's middlewares
app.register(rateLimit, rateLimitConfig);
app.register(helmet, helmetConfig);
app.register(cors, corsConfig);

// Sets up the application routers
app.register(publicRouter, { prefix: '/' });

// Starts the HTTP server
app.listen({ host: env.HOST, port: env.PORT });
