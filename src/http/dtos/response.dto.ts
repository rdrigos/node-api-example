import { ApiStatus } from '@/utils/enums/api-status.enum';
import { StatusCode } from '@/utils/enums/status-code.enum';

export interface ResponseDTO<T> {
  code: StatusCode;
  status: ApiStatus;
  messages: string[];
  payload: T;
}
