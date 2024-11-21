import { env } from '@/environment';
import { ApiStatus } from '@/utils/enums/api-status.enum';
import { StatusCode } from '@/utils/enums/status-code.enum';
import { FastifyReply, FastifyRequest } from 'fastify';
import util from 'node:util';
import { ResponseDTO } from '../dtos/response.dto';
import { WelcomeDTO } from '../dtos/welcome.dto';

export function WelcomeController(_request: FastifyRequest, reply: FastifyReply): void {
  const response: ResponseDTO<WelcomeDTO> = {
    code: StatusCode.Ok,
    status: ApiStatus.Success,
    messages: [util.format('Welcome to the %s', env.API_NAME)],
    payload: {
      name: env.API_NAME,
      description: env.API_DESC,
      version: env.API_VERSION,
      timezone: env.API_TIMEZONE,
    },
  };

  reply.status(StatusCode.Ok).send(response);
}
