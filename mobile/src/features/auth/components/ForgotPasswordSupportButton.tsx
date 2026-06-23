import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

import {Icon} from '../../../shared/components/Icon';
import {colors} from '../../../shared/constants/colors';
import {icons} from '../../../shared/constants/icons';
import {authText} from '../../../shared/constants/text';

export function ForgotPasswordSupportButton() {
  return (
    <Pressable accessibilityRole="button" style={styles.button}>
      <Icon
        name={icons.auth.support}
        color={colors.primary}
        size={22}
        iconStyle="regular"
      />
      <Text style={styles.label}>{authText.forgotPassword.supportAction}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 58,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 12,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  label: {
    flexShrink: 1,
    color: colors.primary,
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
});
