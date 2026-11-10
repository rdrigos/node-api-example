import { AnsiColor } from '@/utils/ansi-color.util';
import dayjs from 'dayjs';
import { Writable } from 'node:stream';
import util from 'node:util';
import type { Level, StreamEntry } from 'pino';

interface StreamOptions {
  level: Level;
}

interface PinoRecord {
  level: number;
  time: number;
  environment: string;
  msg: string;
  err?: object;
  [key: string]: unknown;
}

export class ConsoleStream extends Writable {
  public _write(chunk: Buffer, _encoding: BufferEncoding, callback: (error?: Error | null) => void): void {
    this.serialize(chunk)
      .then((log) => {
        process.stdout.write(log);
        callback();
      })
      .catch((error) => callback(error));
  }

  private parse(chunk: Buffer): PinoRecord {
    const raw = chunk.toString('utf-8');
    console.log(raw);
    return JSON.parse(raw);
  }

  private formatTimestamp(time: number): string {
    return dayjs(time).format('YYYY/MM/DD HH:mm:ss.SSS');
  }

  private formatLevel(level: number): string {
    switch (level) {
      case 10:
        return AnsiColor.gray('TRACE');
      case 20:
        return AnsiColor.blue('DEBUG');
      case 30:
        return AnsiColor.green('INFO');
      case 40:
        return AnsiColor.yellow('WARN');
      case 50:
        return AnsiColor.red('ERROR');
      case 60:
        return AnsiColor.magenta('FATAL');
      default:
        return AnsiColor.white('UNKNOWN');
    }
  }

  private async serialize(chunk: Buffer): Promise<string> {
    const record = this.parse(chunk);

    const timestamp = this.formatTimestamp(record.time);
    const level = this.formatLevel(record.level);

    return util.format('%s %s %s \n', timestamp, level, record.msg);
  }

  public static configure({ level }: StreamOptions): StreamEntry {
    return {
      level,
      stream: new ConsoleStream(),
    };
  }
}
