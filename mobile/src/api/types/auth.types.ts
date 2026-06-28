import type {AuthRole} from './api.types';

export type UserProfile = {
  id: string;
  name: string;
  email: string;
  initials: string;
  role: AuthRole;
};

export type AuthResult = {
  user: UserProfile;
  token: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type RegisterPayload = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type ProfileResponse = {
  user: UserProfile;
};
