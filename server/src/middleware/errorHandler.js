import { ApiError } from '../utils/ApiError.js';

function resolveError(error) {
  if (error instanceof ApiError) {
    return {
      statusCode: error.statusCode,
      message: error.message,
    };
  }

  if (error.code === 11000) {
    return {
      statusCode: 409,
      message: 'Email is already registered',
    };
  }

  if (error.name === 'ValidationError') {
    return {
      statusCode: 400,
      message: Object.values(error.errors)
        .map(entry => entry.message)
        .join(', '),
    };
  }

  return {
    statusCode: 500,
    message: 'Internal server error',
  };
}

export function errorHandler(error, _req, res, _next) {
  const { statusCode, message } = resolveError(error);

  if (statusCode >= 500) {
    console.error('[error]', error);
  }

  res.status(statusCode).json({
    success: false,
    message,
  });
}
