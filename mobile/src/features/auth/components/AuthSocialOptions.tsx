import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {colors} from '../../../shared/constants/colors';
import {authText} from '../../../shared/constants/text';

export function AuthSocialOptions() {
  return (
    <View style={styles.container}>
      <SocialButton icon="G" label={authText.social.google} />
      <SocialButton icon="A" label={authText.social.apple} />
    </View>
  );
}

type SocialButtonProps = {
  icon: string;
  label: string;
};

function SocialButton({icon, label}: SocialButtonProps) {
  return (
    <Pressable accessibilityRole="button" style={styles.button}>
      <Text
        style={[
          styles.icon,
          label === authText.social.google && styles.googleIcon,
        ]}>
        {icon}
      </Text>
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
  icon: {
    color: colors.textStrong,
    fontSize: 18,
    fontWeight: '900',
  },
  googleIcon: {
    color: colors.primary,
  },
  label: {
    color: colors.textStrong,
    fontSize: 15,
    fontWeight: '700',
  },
});
