import type { HttpServerPort } from '@/application/ports/http/server.port';
import { env } from '@/config/environment';
import util from 'node:util';

export class Bootstrap {
  private readonly server: HttpServerPort;

  constructor(server: HttpServerPort) {
    this.server = server;
  }

  public async start(): Promise<void> {
    await this.server.listen({
      host: env.HOST,
      port: env.PORT,
    });

    console.log(util.format('Server listening at http://127.0.0.1:%d', env.PORT));

    process.once('SIGINT', async () => await this.shutdown());
    process.once('SIGTERM', async () => await this.shutdown());
  }

  public async shutdown(): Promise<void> {
    try {
      await this.server.close();

      console.log('Server closed successfully');
    } catch (error) {
      console.error('Failed to close server', error);

      process.exitCode = 1;
    }
  }
}
