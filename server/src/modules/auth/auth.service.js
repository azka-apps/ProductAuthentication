import { ROLES } from '../../constants/roles.js';
import { ApiError } from '../../utils/ApiError.js';
import { signAccessToken } from '../../utils/jwt.js';
import { User } from '../user/user.model.js';
import { formatUserProfile } from '../user/user.service.js';

function normalizeEmail(email) {
  return email.trim().toLowerCase();
}

function resolveName({ fullName, name }) {
  return (fullName || name || '').trim();
}

function createAuthResult(user) {
  return {
    user: formatUserProfile(user),
    token: signAccessToken(user),
  };
}

export async function register(payload) {
  const name = resolveName(payload);
  const email = normalizeEmail(payload.email);

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new ApiError(409, 'Email is already registered');
  }

  const user = await User.create({
    name,
    email,
    password: payload.password,
    role: ROLES.USER,
  });

  return createAuthResult(user);
}

export async function login(payload) {
  const email = normalizeEmail(payload.email);
  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await user.comparePassword(payload.password))) {
    throw new ApiError(401, 'Invalid email or password');
  }

  return createAuthResult(user);
}
