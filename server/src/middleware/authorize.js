export function authorize(...allowedRoles) {
  return (_req, _res, next) => {
    // TODO: ensure req.user.role is included in allowedRoles
    void allowedRoles;
    next();
  };
}
