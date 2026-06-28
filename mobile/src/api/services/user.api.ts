import {httpClient} from '../client/httpClient';
import {userEndpoints} from '../endpoints/user.endpoints';
import type {ApiSuccessResponse} from '../types/api.types';
import type {ProfileResponse} from '../types/auth.types';

export const userApi = {
  async getProfile(): Promise<ProfileResponse> {
    const {data} = await httpClient.get<ApiSuccessResponse<ProfileResponse>>(
      userEndpoints.profile,
    );

    return data.data;
  },
};
