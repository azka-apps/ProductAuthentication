import React from 'react';
import {StyleSheet, View} from 'react-native';

import {colors} from '../../../shared/constants/colors';

export function AuthIconBadge() {
  return (
    <View style={styles.glowOuter}>
      <View style={styles.glowInner}>
        <View style={styles.badge}>
          <View style={styles.lockShackle} />
          <View style={styles.lockBody}>
            <View style={styles.lockDot} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  glowOuter: {
    width: 138,
    height: 138,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 69,
    backgroundColor: colors.primaryGlowSoft,
  },
  glowInner: {
    width: 104,
    height: 104,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 52,
    backgroundColor: colors.primaryGlow,
  },
  badge: {
    width: 68,
    height: 68,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: colors.primary,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowOpacity: 0.24,
    shadowRadius: 24,
    elevation: 10,
  },
  lockShackle: {
    width: 24,
    height: 22,
    marginBottom: -4,
    borderWidth: 4,
    borderBottomWidth: 0,
    borderColor: colors.white,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  lockBody: {
    width: 34,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: colors.white,
    borderRadius: 7,
  },
  lockDot: {
    width: 5,
    height: 9,
    borderRadius: 4,
    backgroundColor: colors.white,
  },
});
