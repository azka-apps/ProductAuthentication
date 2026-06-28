import React, {
  createContext,
  type ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react';

export type AuthRole = 'user' | 'admin';

type AuthUser = {
  name: string;
  email: string;
  initials: string;
  role: AuthRole;
};

export type SignInCredentials = {
  email: string;
  password: string;
};

type AuthSessionContextValue = {
  user: AuthUser | null;
  isAuthenticated: boolean;
  signIn: (credentials: SignInCredentials) => string | null;
  signOut: () => void;
};

type MockAccount = AuthUser & {password: string};

const mockAccounts: MockAccount[] = [
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    initials: 'JD',
    role: 'user',
    password: 'Password1!',
  },
  {
    name: 'Admin User',
    email: 'admin@example.com',
    initials: 'AU',
    role: 'admin',
    password: 'Admin123!',
  },
];

const AuthSessionContext = createContext<AuthSessionContextValue | null>(null);

type AuthSessionProviderProps = {
  children: ReactNode;
};

export function AuthSessionProvider({children}: AuthSessionProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(null);

  const value = useMemo<AuthSessionContextValue>(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      signIn: credentials => {
        const normalizedEmail = credentials.email.trim().toLowerCase();
        const account = mockAccounts.find(
          entry =>
            entry.email.toLowerCase() === normalizedEmail &&
            entry.password === credentials.password,
        );

        if (!account) {
          return 'Invalid email or password';
        }

        const {password: _password, ...authenticatedUser} = account;
        setUser(authenticatedUser);
        return null;
      },
      signOut: () => setUser(null),
    }),
    [user],
  );

  return (
    <AuthSessionContext.Provider value={value}>
      {children}
    </AuthSessionContext.Provider>
  );
}

export function useAuthSession() {
  const context = useContext(AuthSessionContext);

  if (!context) {
    throw new Error('useAuthSession must be used inside AuthSessionProvider');
  }

  return context;
}
