import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {
  AuthSessionProvider,
  useAuthSession,
} from '../providers/AuthSessionProvider';
import {AuthStack} from '../../features/auth/navigation/AuthStack';
import {AppStack} from '../../shared/navigation/AppStack';
import type {RootStackParamList} from './navigation.types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <AuthSessionProvider>
      <RootNavigationContent />
    </AuthSessionProvider>
  );
}

function RootNavigationContent() {
  const {isAuthenticated} = useAuthSession();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isAuthenticated ? (
          <Stack.Screen name="App" component={AppStack} />
        ) : (
          <Stack.Screen name="Auth" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
