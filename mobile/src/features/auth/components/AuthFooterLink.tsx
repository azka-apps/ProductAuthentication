import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {colors} from '../../../shared/constants/colors';

type AuthFooterLinkProps = {
  label: string;
  actionLabel: string;
  onPress: () => void;
};

export function AuthFooterLink({
  label,
  actionLabel,
  onPress,
}: AuthFooterLinkProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Pressable accessibilityRole="button" onPress={onPress}>
        <Text style={styles.action}>{actionLabel}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
    marginTop: 28,
  },
  label: {
    color: colors.textMuted,
    fontSize: 15,
  },
  action: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: '700',
  },
});
