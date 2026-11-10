import { Bootstrap } from '@/bootstrap';
import { FastifyAdapter } from '@/infrastructure/adapters/http/fastify.adapter';

const server = new FastifyAdapter();
const bootstrap = new Bootstrap(server);

bootstrap.start();
