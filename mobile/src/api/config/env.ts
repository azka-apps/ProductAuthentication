import {Platform} from 'react-native';

const devHost = Platform.select({
  android: '10.0.2.2',
  ios: 'localhost',
  default: 'localhost',
});

export const apiConfig = {
  baseUrl: __DEV__
    ? `http://${devHost}:3000/api`
    : 'https://your-production-api.com/api',
  timeout: 15000,
} as const;
