import { FastifyInstance } from 'fastify';
import { WelcomeController } from '../controllers/welcome.controller';

export async function publicEndpoints(server: FastifyInstance): Promise<void> {
  server.get('/', WelcomeController);
}
