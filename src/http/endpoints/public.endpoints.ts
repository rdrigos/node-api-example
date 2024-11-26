import { FastifyInstance } from 'fastify';
import { welcomeController, welcomeControllerSchema } from '../controllers/welcome.controller';

export async function publicEndpoints(server: FastifyInstance): Promise<void> {
  server.get('/', welcomeControllerSchema, welcomeController);
}
