export type LogFields = Readonly<Record<string, unknown>>;

export type LogErrorFields = LogFields & {
  err: unknown;
};

export abstract class LoggerPort {
  abstract trace(message: string, fields?: LogFields): void;
  abstract debug(message: string, fields?: LogFields): void;
  abstract info(message: string, fields?: LogFields): void;
  abstract warning(message: string, fields?: LogFields): void;
  abstract error(message: string, fields?: LogErrorFields): void;
  abstract fatal(message: string, fields?: LogErrorFields): void;
}
