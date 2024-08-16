import app from '@/app';
import { env } from '@/env';
import logger from '@/services/logger';

try {
  app.listen(env.API_PORT, () => {
    logger.info(`API started at http://localhost:${env.API_PORT}/api`);
  });
} catch (error: any) {
  logger.error(`The API could not be started due to an error during initialization: ${error}`);
}
