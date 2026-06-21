import React, {type ReactNode} from 'react';
import {StyleSheet, TextInput, type TextInputProps, View} from 'react-native';

import {colors} from '../constants/colors';
import {Typography} from './Typography';

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
      {label ? <Typography variant="label">{label}</Typography> : null}
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
      {error ? <Typography variant="error">{error}</Typography> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 6,
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
});
