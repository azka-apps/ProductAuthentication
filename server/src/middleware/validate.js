import { ApiError } from '../utils/ApiError.js';

export function validate(schema) {
  return (req, _res, next) => {
    const { error, value } = schema.validate(
      {
        body: req.body,
        query: req.query,
        params: req.params,
      },
      {
        abortEarly: false,
        stripUnknown: true,
      },
    );

    if (error) {
      const message = error.details.map(detail => detail.message).join(', ');
      return next(new ApiError(400, message));
    }

    if (value.body) {
      req.body = value.body;
    }

    if (value.query) {
      req.query = value.query;
    }

    if (value.params) {
      req.params = value.params;
    }

    return next();
  };
}
