import { FastifyServerOptions } from 'fastify';

export const fastifyConfig: FastifyServerOptions = {
  logger: {
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'yyyy-MM-dd HH:mm:ss',
        ignore: 'pid,hostname',
      },
    },
  },
  ignoreTrailingSlash: true,
};
