import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Icon} from '../../../shared/components/Icon';
import {colors} from '../../../shared/constants/colors';
import {icons} from '../../../shared/constants/icons';
import {authText} from '../../../shared/constants/text';

const passwordRules = [
  {label: authText.passwordRules.minLength, test: (value: string) => value.length >= 8},
  {label: authText.passwordRules.uppercase, test: (value: string) => /[A-Z]/.test(value)},
  {label: authText.passwordRules.lowercase, test: (value: string) => /[a-z]/.test(value)},
  {label: authText.passwordRules.number, test: (value: string) => /[0-9]/.test(value)},
  {
    label: authText.passwordRules.specialCharacter,
    test: (value: string) => /[^A-Za-z0-9]/.test(value),
  },
];

type PasswordRulesProps = {
  password: string;
};

export function PasswordRules({password}: PasswordRulesProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{authText.register.passwordRulesTitle}</Text>
      {passwordRules.map(rule => {
        const isValid = rule.test(password);

        return (
          <View key={rule.label} style={styles.rule}>
            <Icon
              name={icons.auth.ruleCheck}
              color={isValid ? colors.primary : colors.primaryRule}
              size={16}
              iconStyle="regular"
            />
            <Text style={[styles.ruleText, isValid ? styles.ruleTextValid : null]}>
              {rule.label}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    borderRadius: 18,
    backgroundColor: colors.primarySoft,
    paddingHorizontal: 18,
    paddingVertical: 16,
  },
  title: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 2,
  },
  rule: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
  },
  ruleText: {
    color: colors.textStrong,
    fontSize: 14,
  },
  ruleTextValid: {
    color: colors.primary,
    fontWeight: '600',
  },
});
