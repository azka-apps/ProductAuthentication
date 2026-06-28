import { ApiError } from '../utils/ApiError.js';

export function errorHandler(error, _req, res, _next) {
  const statusCode = error instanceof ApiError ? error.statusCode : 500;
  const message =
    error instanceof ApiError
      ? error.message
      : 'Internal server error';

  if (statusCode >= 500) {
    console.error('[error]', error);
  }

  res.status(statusCode).json({
    success: false,
    message,
  });
}
