import { ApiError } from '../utils/ApiError.js';

export function authorize(...allowedRoles) {
  return (req, _res, next) => {
    if (!req.user) {
      next(new ApiError(401, 'Authentication required'));
      return;
    }

    if (!allowedRoles.includes(req.user.role)) {
      next(new ApiError(403, 'You do not have permission to access this resource'));
      return;
    }

    next();
  };
}
