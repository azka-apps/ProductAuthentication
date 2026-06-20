import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {colors} from '../../../shared/constants/colors';

type AuthDividerProps = {
  label: string;
};

export function AuthDivider({label}: AuthDividerProps) {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.label}>{label}</Text>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 14,
    marginVertical: 26,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
  },
  label: {
    color: colors.textMuted,
    fontSize: 14,
    fontWeight: '500',
  },
});
