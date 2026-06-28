import { ROLES } from '../constants/roles.js';
import { config } from './index.js';
import { User } from '../modules/user/user.model.js';

const demoUsers = [
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: 'Password1!',
    role: ROLES.USER,
  },
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: 'Admin123!',
    role: ROLES.ADMIN,
  },
];

export async function seedDemoUsers() {
  if (config.nodeEnv !== 'development') {
    return;
  }

  const userCount = await User.countDocuments();

  if (userCount > 0) {
    return;
  }

  await User.create(demoUsers);
  console.log('[seed] demo users created');
}
