import * as Keychain from 'react-native-keychain';

const TOKEN_SERVICE = 'product-authentication-access-token';

export const tokenStorage = {
  async getAccessToken(): Promise<string | null> {
    const credentials = await Keychain.getGenericPassword({
      service: TOKEN_SERVICE,
    });

    if (!credentials) {
      return null;
    }

    return credentials.password;
  },

  async setAccessToken(token: string): Promise<void> {
    await Keychain.setGenericPassword('access-token', token, {
      service: TOKEN_SERVICE,
      accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED,
    });
  },

  async clearAccessToken(): Promise<void> {
    await Keychain.resetGenericPassword({
      service: TOKEN_SERVICE,
    });
  },
};
