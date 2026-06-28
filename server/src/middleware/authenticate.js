import { ApiError } from '../utils/ApiError.js';
import { verifyAccessToken } from '../utils/jwt.js';
import { User } from '../modules/user/user.model.js';

export async function authenticate(req, _res, next) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith('Bearer ')) {
      throw new ApiError(401, 'Authentication required');
    }

    const token = authHeader.slice('Bearer '.length);
    const payload = verifyAccessToken(token);
    const user = await User.findById(payload.userId);

    if (!user) {
      throw new ApiError(401, 'Invalid or expired token');
    }

    req.user = user;
    req.auth = {
      token,
      payload,
    };

    next();
  } catch (error) {
    if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
      next(new ApiError(401, 'Invalid or expired token'));
      return;
    }

    next(error);
  }
}
