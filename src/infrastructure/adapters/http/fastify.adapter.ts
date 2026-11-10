import { HttpServerPort, type ListenOptions } from '@/application/ports/http/server.port';
import { fastify, type FastifyInstance } from 'fastify';

export class FastifyAdapter implements HttpServerPort {
  private app: FastifyInstance;

  constructor() {
    this.app = fastify();
  }

  public async listen(options: ListenOptions): Promise<void> {
    await this.app.listen(options);
  }

  public async close(): Promise<void> {
    await this.app.close();
  }
}
