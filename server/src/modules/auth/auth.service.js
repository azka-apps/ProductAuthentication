import { ROLES } from '../../constants/roles.js';
import { ApiError } from '../../utils/ApiError.js';
import { signAccessToken } from '../../utils/jwt.js';
import { User } from '../user/user.model.js';
import { formatUserProfile } from '../user/user.service.js';

function resolveName({ fullName, name }) {
  return (fullName || name || '').trim();
}

export async function register(payload) {
  const name = resolveName(payload);
  const email = payload.email.trim().toLowerCase();

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

  const token = signAccessToken(user);

  return {
    user: formatUserProfile(user),
    token,
  };
}

export async function login(payload) {
  const email = payload.email.trim().toLowerCase();
  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    throw new ApiError(401, 'Invalid email or password');
  }

  const isPasswordValid = await user.comparePassword(payload.password);

  if (!isPasswordValid) {
    throw new ApiError(401, 'Invalid email or password');
  }

  const token = signAccessToken(user);

  return {
    user: formatUserProfile(user),
    token,
  };
}

export async function logout() {
  return null;
}
