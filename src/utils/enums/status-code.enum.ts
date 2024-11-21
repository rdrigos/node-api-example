export enum StatusCode {
  // Successful responses
  Ok = 200,
  Created = 201,
  Accepted = 202,

  // Client error responses
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  NotAcceptable = 406,
  TooManyRequests = 429,

  // Server error responses
  InternalServerError = 500,
  NotImplemented = 501,
  BadGateway = 502,
  ServiceUnavailable = 503,
  GatewayTimeout = 504,
  HttpVersionNotSupported = 505,
}
