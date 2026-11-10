export interface ListenOptions {
  host: string;
  port: number;
}

export abstract class HttpServerPort {
  abstract listen(options: ListenOptions): Promise<void>;
  abstract close(): Promise<void>;
}
