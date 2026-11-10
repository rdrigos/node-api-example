import { HttpServerPort, type ListenOptions } from '@/application/ports/http/server.port';
import { corsConfig } from '@/config/http/cors.config';
import { rateLimitConfig } from '@/config/http/rate-limit.config';
import fastifyCors from '@fastify/cors';
import fastifyHelmet from '@fastify/helmet';
import fastifyRateLimit from '@fastify/rate-limit';
import { fastify, type FastifyInstance } from 'fastify';

export class FastifyAdapter implements HttpServerPort {
  private app: FastifyInstance;

  constructor() {
    this.app = fastify();

    this.registerPlugins();
  }

  private registerPlugins(): void {
    this.app.register(fastifyHelmet);
    this.app.register(fastifyCors, corsConfig);
    this.app.register(fastifyRateLimit, {
      global: true,
      max: rateLimitConfig.maxRequests,
      timeWindow: rateLimitConfig.windowMs,
    });
  }

  public async listen(options: ListenOptions): Promise<void> {
    await this.app.listen(options);
  }

  public async close(): Promise<void> {
    await this.app.close();
  }
}
