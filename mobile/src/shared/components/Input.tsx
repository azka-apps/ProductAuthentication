import React, {type ReactNode} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  type TextInputProps,
  View,
} from 'react-native';

import {colors} from '../constants/colors';

type InputProps = TextInputProps & {
  label?: string;
  error?: string;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
};

export function Input({
  label,
  error,
  leftElement,
  rightElement,
  style,
  ...props
}: InputProps) {
  return (
    <View style={styles.container}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View style={[styles.inputWrapper, error ? styles.inputError : null]}>
        {leftElement ? (
          <View style={styles.leftElement}>{leftElement}</View>
        ) : null}
        <TextInput
          {...props}
          style={[styles.input, style]}
          placeholderTextColor={colors.textPlaceholder}
        />
        {rightElement ? (
          <View style={styles.rightElement}>{rightElement}</View>
        ) : null}
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 6,
  },
  label: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '700',
  },
  inputWrapper: {
    minHeight: 58,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 18,
    backgroundColor: colors.surfaceSoft,
    paddingHorizontal: 18,
  },
  input: {
    flex: 1,
    color: colors.textInput,
    fontSize: 16,
    paddingVertical: 0,
  },
  inputError: {
    borderColor: colors.error,
  },
  leftElement: {
    marginRight: 14,
  },
  rightElement: {
    marginLeft: 12,
  },
  error: {
    color: colors.error,
    fontSize: 12,
    fontWeight: '600',
  },
});
