import { env } from '@/environment';
import { corsConfig } from '@/infrastructure/config/cors.config';
import { fastifyConfig } from '@/infrastructure/config/fastify.config';
import { helmetConfig } from '@/infrastructure/config/helmet.config';
import { rateLimitConfig } from '@/infrastructure/config/rate-limit.config';
import { endpoints } from '@/infrastructure/endpoints';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import rateLimit from '@fastify/rate-limit';
import Fastify, { FastifyInstance } from 'fastify';

export class Server {
  private readonly server: FastifyInstance;

  constructor() {
    this.server = Fastify(fastifyConfig);

    // Sets up the HTTP server
    this.configureServer();
  }

  private configureServer(): void {
    // Registers the plugins
    this.server.register(helmet, helmetConfig);
    this.server.register(cors, corsConfig);
    this.server.register(rateLimit, rateLimitConfig);

    // Registers the endpoints
    this.server.register(endpoints);
  }

  public async start(): Promise<string> {
    return await this.server.listen({ host: env.API_HOST, port: env.API_PORT });
  }
}
