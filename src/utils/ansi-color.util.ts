import util from 'node:util';

export class AnsiColor {
  public static red(plain: string): string {
    return AnsiColor.format('\x1b[31m', plain);
  }

  public static green(plain: string): string {
    return AnsiColor.format('\x1b[32m', plain);
  }

  public static yellow(plain: string): string {
    return AnsiColor.format('\x1b[33m', plain);
  }

  public static blue(plain: string): string {
    return AnsiColor.format('\x1b[34m', plain);
  }

  public static magenta(plain: string): string {
    return AnsiColor.format('\x1b[35m', plain);
  }

  public static cyan(plain: string): string {
    return AnsiColor.format('\x1b[36m', plain);
  }

  public static white(plain: string): string {
    return AnsiColor.format('\x1b[37m', plain);
  }

  public static gray(plain: string): string {
    return AnsiColor.format('\x1b[90m', plain);
  }

  private static format(color: string, plain: string): string {
    return util.format('%s%s\x1b[0m', color, plain);
  }
}
