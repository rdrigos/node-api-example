import { env } from '@/environment';
import { FastifyDynamicSwaggerOptions } from '@fastify/swagger';
import { FastifySwaggerUiOptions } from '@fastify/swagger-ui';

export const swaggerUIConfig: FastifySwaggerUiOptions = {
  routePrefix: '/documentation',
};

export const swaggerConfig: FastifyDynamicSwaggerOptions = {
  openapi: {
    openapi: '3.0.0',
    info: {
      title: env.API_NAME,
      description: env.API_DESC,
      version: env.API_VERSION,
    },
    tags: [{ name: 'Welcome' }],
  },
};
