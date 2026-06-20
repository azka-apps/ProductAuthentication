import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import type {AppStackParamList} from '../../app/navigation/navigation.types';
import {HomeScreen} from '../../features/home/screens/HomeScreen';
import {ProfileScreen} from '../../features/profile/screens/ProfileScreen';

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
