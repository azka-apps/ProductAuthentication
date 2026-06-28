import jwt from 'jsonwebtoken';

import { config } from '../config/index.js';
import { ApiError } from './ApiError.js';

export function signAccessToken(user) {
  if (!config.jwt.secret) {
    throw new ApiError(500, 'JWT secret is not configured');
  }

  return jwt.sign(
    {
      userId: user._id.toString(),
      email: user.email,
      role: user.role,
    },
    config.jwt.secret,
    {
      expiresIn: config.jwt.expiresIn,
    },
  );
}

export function verifyAccessToken(token) {
  if (!config.jwt.secret) {
    throw new ApiError(500, 'JWT secret is not configured');
  }

  return jwt.verify(token, config.jwt.secret);
}
