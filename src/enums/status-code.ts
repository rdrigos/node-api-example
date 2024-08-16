export enum StatusCode {
  // Successful responses
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,

  // Client error responses
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  NOT_ACCEPTABLE = 406,

  // Server error responses
  INTERNAL_SERVER_ERROR = 500,
  NOT_IMPLEMENTED = 501,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504,
  HTTP_VERSION_NOT_SUPPORTED = 505,
}
