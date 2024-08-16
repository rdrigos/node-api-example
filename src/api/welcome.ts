import { StatusCode } from '@/enums/status-code';
import { env } from '@/env';
import { Request, Response } from 'express';

export default function welcome(_req: Request, res: Response) {
  res.status(StatusCode.OK).json({
    name: env.API_NAME,
    version: env.API_VERSION,
    description: env.API_DESC,
  });
}
