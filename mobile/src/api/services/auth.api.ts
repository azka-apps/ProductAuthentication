import {httpClient} from '../client/httpClient';
import {authEndpoints} from '../endpoints/auth.endpoints';
import type {ApiSuccessResponse} from '../types/api.types';
import type {
  AuthResult,
  LoginPayload,
  RegisterPayload,
} from '../types/auth.types';

export const authApi = {
  async register(payload: RegisterPayload): Promise<AuthResult> {
    const {data} = await httpClient.post<ApiSuccessResponse<AuthResult>>(
      authEndpoints.register,
      payload,
    );

    return data.data;
  },

  async login(payload: LoginPayload): Promise<AuthResult> {
    const {data} = await httpClient.post<ApiSuccessResponse<AuthResult>>(
      authEndpoints.login,
      payload,
    );

    return data.data;
  },

  async logout(): Promise<void> {
    await httpClient.post<ApiSuccessResponse<null>>(authEndpoints.logout);
  },
};
