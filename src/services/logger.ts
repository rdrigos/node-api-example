import { createLogger, format, transports } from 'winston';
import { tz } from 'moment-timezone';
import { env } from '@/env';

export default createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({
      format: () => tz(env.API_TIMEZONE).format('YYYY-MM-DD HH:mm:ss'),
    }),
    format.colorize(),
    format.printf(({ level, message, timestamp }) => {
      return `${timestamp} [${level}] ${message}`;
    }),
  ),
  transports: [new transports.Console()],
});
