import { ServiceStatus } from '@/enums/status-service.enum';

export interface ResponseDTO<T> {
  status: ServiceStatus;
  messages: string[];
  payload: T;
}
