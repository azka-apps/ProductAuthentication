import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {colors} from '../constants/colors';
import {icons} from '../constants/icons';
import {Icon} from './Icon';

type AppTabRoute = 'Home' | 'Profile';

type AppTabBarProps = {
  activeRoute: AppTabRoute;
  onNavigate: (route: AppTabRoute) => void;
};

const tabs = [
  {
    route: 'Home',
    label: 'Home',
    icon: icons.app.home,
  },
  {
    route: 'Profile',
    label: 'Profile',
    icon: icons.app.profile,
  },
] as const;

export function AppTabBar({activeRoute, onNavigate}: AppTabBarProps) {
  return (
    <View style={styles.container}>
      {tabs.map(tab => {
        const isActive = tab.route === activeRoute;

        return (
          <Pressable
            key={tab.route}
            accessibilityRole="button"
            accessibilityState={{selected: isActive}}
            onPress={() => onNavigate(tab.route)}
            style={styles.tab}>
            <Icon
              name={tab.icon}
              color={isActive ? colors.primary : colors.textMuted}
              size={25}
              iconStyle="solid"
            />
            <Text style={[styles.label, isActive ? styles.activeLabel : null]}>
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 78,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 22,
    backgroundColor: colors.surface,
    paddingHorizontal: 18,
    shadowColor: colors.shadowNeutral,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.08,
    shadowRadius: 22,
    elevation: 8,
  },
  tab: {
    width: 112,
    minHeight: 58,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  label: {
    color: colors.textMuted,
    fontSize: 14,
    fontWeight: '700',
  },
  activeLabel: {
    color: colors.primary,
  },
});
