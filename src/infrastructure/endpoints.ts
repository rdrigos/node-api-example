import { publicEndpoints } from '@/http/endpoints/public.endpoints';
import { FastifyInstance } from 'fastify';

export async function endpoints(server: FastifyInstance): Promise<void> {
  server.register(publicEndpoints, { prefix: '/' });
}
