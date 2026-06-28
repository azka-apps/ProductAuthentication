import axios from 'axios';

import {apiConfig} from '../config/env';
import {tokenStorage} from '../storage/tokenStorage';

export const httpClient = axios.create({
  baseURL: apiConfig.baseUrl,
  timeout: apiConfig.timeout,
  headers: {
    'Content-Type': 'application/json',
  },
});

httpClient.interceptors.request.use(async config => {
  const token = await tokenStorage.getAccessToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

httpClient.interceptors.response.use(
  response => response,
  error => Promise.reject(error),
);

export function isHttpClientConfigured(): boolean {
  return Boolean(httpClient.defaults.baseURL);
}
