import { Bootstrap } from '@/bootstrap';
import { FastifyAdapter } from '@/infrastructure/adapters/http/fastify.adapter';
import { PinoLoggerAdapter } from '@/infrastructure/adapters/logger/pino/pino.adapter';

const logger = new PinoLoggerAdapter();
const server = new FastifyAdapter();

const bootstrap = new Bootstrap(logger, server);

bootstrap.start();
