import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Icon} from '../../../shared/components/Icon';
import {colors} from '../../../shared/constants/colors';
import {icons} from '../../../shared/constants/icons';

type AuthIconBadgeProps = {
  name?: typeof icons.auth.lockBadge | typeof icons.auth.registerBadge;
};

export function AuthIconBadge({name = icons.auth.lockBadge}: AuthIconBadgeProps) {
  return (
    <View style={styles.glowOuter}>
      <View style={styles.glowInner}>
        <View style={styles.badge}>
          <Icon
            name={name}
            color={colors.white}
            size={30}
            iconStyle="solid"
          />
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
});
