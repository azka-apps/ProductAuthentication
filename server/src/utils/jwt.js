import jwt from 'jsonwebtoken';

import { config } from '../config/index.js';
import { ApiError } from './ApiError.js';

function assertJwtSecret() {
  if (!config.jwt.secret) {
    throw new ApiError(500, 'JWT secret is not configured');
  }

  return config.jwt.secret;
}

export function signAccessToken(user) {
  return jwt.sign(
    {
      userId: user._id.toString(),
      email: user.email,
      role: user.role,
    },
    assertJwtSecret(),
    {
      expiresIn: config.jwt.expiresIn,
    },
  );
}

export function verifyAccessToken(token) {
  return jwt.verify(token, assertJwtSecret());
}
