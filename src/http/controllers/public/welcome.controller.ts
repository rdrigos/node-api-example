import { StatusCode } from '@/enums/status-code.enum';
import { ServiceStatus } from '@/enums/status-service.enum';
import type { ResponseDTO } from '@/http/dtos/response.dto';
import type { WelcomeResponseDTO } from '@/http/dtos/welcome-response.dto';
import { env } from '@/infrastructure/environment';
import type { FastifyReply, FastifyRequest } from 'fastify';

export function welcomeController(_request: FastifyRequest, reply: FastifyReply): FastifyReply {
  // Builds the endpoint response
  const response: ResponseDTO<WelcomeResponseDTO> = {
    status: ServiceStatus.SUCCESS,
    messages: ['Welcome to Api'],
    payload: {
      environment: env.NODE_ENV,
      name: env.NAME,
      description: env.DESC,
      version: env.VERSION,
    },
  };

  // Returns the request response
  return reply.status(StatusCode.OK).send(response);
}
