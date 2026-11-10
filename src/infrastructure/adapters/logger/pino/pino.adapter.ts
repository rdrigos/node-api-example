import type { LogErrorFields, LogFields, LoggerPort } from '@/application/ports/logger/logger.port';
import { ConsoleStream } from '@/infrastructure/adapters/logger/pino/streams/console.stream';
import { pino, type Logger } from 'pino';

export class PinoLoggerAdapter implements LoggerPort {
  private readonly root: Logger;

  constructor() {
    this.root = pino(
      {
        level: 'trace',
        base: {
          environment: 'development',
        },
        redact: {
          censor: '[REDACTED]',
          paths: ['authorization', 'req.headers.authorization', 'req.headers.cookie'],
        },
      },
      pino.multistream([
        ConsoleStream.configure({
          level: 'debug',
        }),
      ])
    );
  }

  public trace(message: string, fields?: LogFields): void {
    this.root.trace(fields, message);
  }

  public debug(message: string, fields?: LogFields): void {
    this.root.debug(fields, message);
  }

  public info(message: string, fields?: LogFields): void {
    this.root.info(fields, message);
  }

  public warning(message: string, fields?: LogFields): void {
    this.root.warn(fields, message);
  }

  public error(message: string, fields?: LogErrorFields): void {
    this.root.error(fields, message);
  }

  public fatal(message: string, fields?: LogErrorFields): void {
    this.root.fatal(fields, message);
  }
}
