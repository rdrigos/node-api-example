import type { HttpServerPort } from '@/application/ports/http/server.port';
import type { LoggerPort } from '@/application/ports/logger/logger.port';
import { env } from '@/config/environment';
import util from 'node:util';

export class Bootstrap {
  private readonly logger: LoggerPort;
  private readonly server: HttpServerPort;

  constructor(logger: LoggerPort, server: HttpServerPort) {
    this.logger = logger;
    this.server = server;
  }

  public async start(): Promise<void> {
    await this.server.listen({
      host: env.HOST,
      port: env.PORT,
    });

    this.logger.info(util.format('Server listening at http://127.0.0.1:%d', env.PORT));

    process.once('SIGINT', async () => await this.shutdown());
    process.once('SIGTERM', async () => await this.shutdown());
  }

  public async shutdown(): Promise<void> {
    try {
      await this.server.close();

      this.logger.info('Server closed successfully');
    } catch (error) {
      this.logger.error('Failed to close server', {
        err: error,
      });

      process.exitCode = 1;
    }
  }
}
