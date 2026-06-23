import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Icon} from '../../../shared/components/Icon';
import {colors} from '../../../shared/constants/colors';
import {icons} from '../../../shared/constants/icons';

export function ForgotPasswordIconBadge() {
  return (
    <View style={styles.glowOuter}>
      <View style={styles.glowInner}>
        <View style={styles.badge}>
          <Icon
            name={icons.auth.forgotBadge}
            color={colors.white}
            size={40}
            iconStyle="solid"
          />
          <View style={styles.lockBadge}>
            <Icon
              name={icons.auth.password}
              color={colors.white}
              size={14}
              iconStyle="solid"
            />
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
    width: 74,
    height: 66,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
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
  lockBadge: {
    position: 'absolute',
    right: -8,
    bottom: -8,
    width: 34,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: colors.background,
    borderRadius: 17,
    backgroundColor: colors.primary,
  },
});
