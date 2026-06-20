import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {AuthStack} from '../../features/auth/navigation/AuthStack';
import {AppStack} from '../../shared/navigation/AppStack';
import type {RootStackParamList} from './navigation.types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="App" component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
