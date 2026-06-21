import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {Icon} from '../../../shared/components/Icon';
import {colors} from '../../../shared/constants/colors';
import {icons} from '../../../shared/constants/icons';
import {authText} from '../../../shared/constants/text';

export function AuthSocialOptions() {
  return (
    <View style={styles.container}>
      <SocialButton iconName={icons.social.google} label={authText.social.google} />
      <SocialButton iconName={icons.social.apple} label={authText.social.apple} />
    </View>
  );
}

type SocialButtonProps = {
  iconName: 'apple' | 'google';
  label: string;
};

function SocialButton({iconName, label}: SocialButtonProps) {
  return (
    <Pressable accessibilityRole="button" style={styles.button}>
      <Icon
        name={iconName}
        iconStyle="brand"
        color={
          label === authText.social.google ? colors.primary : colors.textStrong
        }
        size={22}
      />
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 14,
  },
  button: {
    flex: 1,
    minHeight: 54,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
    borderWidth: 1,
    borderColor: colors.borderSoft,
    borderRadius: 8,
    backgroundColor: colors.surface,
    shadowColor: colors.shadowNeutral,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 3,
  },
  label: {
    color: colors.textStrong,
    fontSize: 15,
    fontWeight: '700',
  },
});
