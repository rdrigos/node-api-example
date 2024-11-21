import dotenv from 'dotenv';
import environment from 'env-var';
import path from 'node:path';

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});

export const env = {
  API_NAME: environment.get('API_NAME').required().asString(),
  API_HOST: environment.get('API_HOST').required().asString(),
  API_PORT: environment.get('API_PORT').required().asPortNumber(),
  API_DESC: environment.get('API_DESC').required().asString(),
  API_VERSION: environment.get('API_VERSION').required().asString(),
  API_TIMEZONE: environment.get('API_TIMEZONE').required().asString(),
};
