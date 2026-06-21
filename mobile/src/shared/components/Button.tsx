import React from 'react';
import {Pressable, StyleSheet, type PressableProps} from 'react-native';

import {colors} from '../constants/colors';
import {Loader} from './Loader';
import {Typography} from './Typography';

type ButtonProps = PressableProps & {
  title: string;
  loading?: boolean;
};

export function Button({title, loading = false, disabled, ...props}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <Pressable
      {...props}
      accessibilityRole="button"
      disabled={isDisabled}
      style={({pressed}) => [
        styles.button,
        pressed && !isDisabled ? styles.pressed : null,
        isDisabled ? styles.disabled : null,
      ]}>
      {loading ? (
        <Loader color={colors.white} />
      ) : (
        <Typography variant="button">{title}</Typography>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 62,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.26,
    shadowRadius: 18,
    elevation: 8,
  },
  pressed: {
    opacity: 0.86,
  },
  disabled: {
    backgroundColor: colors.primaryMuted,
  },
});
