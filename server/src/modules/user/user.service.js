import { ApiError } from '../../utils/ApiError.js';
import { User } from './user.model.js';

function getInitials(name) {
  return name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0].toUpperCase())
    .join('');
}

export function formatUserProfile(user) {
  return {
    id: user._id.toString(),
    name: user.name,
    email: user.email,
    initials: getInitials(user.name),
    role: user.role,
  };
}

export async function getProfileById(userId) {
  const user = await User.findById(userId);

  if (!user) {
    throw new ApiError(404, 'User not found');
  }

  return formatUserProfile(user);
}
