import { welcomeController } from '@/http/controllers/public/welcome.controller';
import type { FastifyInstance } from 'fastify';

export async function publicRouter(fastify: FastifyInstance): Promise<void> {
  fastify.get('/', welcomeController);
}
