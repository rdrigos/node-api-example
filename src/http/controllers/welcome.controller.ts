import { env } from '@/environment';
import { ApiStatus } from '@/utils/enums/api-status.enum';
import { StatusCode } from '@/utils/enums/status-code.enum';
import { FastifyReply, FastifyRequest } from 'fastify';
import util from 'node:util';
import { ResponseDTO } from '../dtos/response.dto';
import { WelcomeDTO } from '../dtos/welcome.dto';

export function welcomeController(_request: FastifyRequest, reply: FastifyReply): FastifyReply {
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

  // Returns the request response
  return reply.status(StatusCode.Ok).send(response);
}

export const welcomeControllerSchema = {
  schema: {
    tags: ['Welcome'],
    description: 'The welcome route for the user',
    response: {
      [StatusCode.Ok]: {
        description: 'Returns the basic information of the API',
        type: 'object',
        properties: {
          code: {
            type: 'integer',
            example: StatusCode.Ok,
          },
          status: {
            type: 'string',
            example: ApiStatus.Success,
          },
          messages: {
            type: 'array',
            items: {
              type: 'string',
              example: util.format('Welcome to the %s', env.API_NAME),
            },
          },
          payload: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
                example: env.API_NAME,
              },
              description: {
                type: 'string',
                example: env.API_DESC,
              },
              version: {
                type: 'string',
                example: env.API_VERSION,
              },
              timezone: {
                type: 'string',
                example: env.API_TIMEZONE,
              },
            },
          },
        },
      },
    },
  },
};
