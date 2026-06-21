import React, {type ReactNode} from 'react';
import {StyleSheet, Text, type TextProps, type TextStyle} from 'react-native';

import {colors} from '../constants/colors';

type TypographyVariant =
  | 'title'
  | 'subtitle'
  | 'body'
  | 'label'
  | 'caption'
  | 'button'
  | 'error';

type TypographyProps = TextProps & {
  children: ReactNode;
  variant?: TypographyVariant;
  color?: string;
  align?: TextStyle['textAlign'];
};

export function Typography({
  children,
  variant = 'body',
  color,
  align,
  style,
  ...props
}: TypographyProps) {
  return (
    <Text
      {...props}
      style={[
        styles.base,
        styles[variant],
        color ? {color} : null,
        align ? {textAlign: align} : null,
        style,
      ]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  base: {
    color: colors.text,
  },
  title: {
    color: colors.text,
    fontSize: 30,
    fontWeight: '900',
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: 16,
    fontWeight: '400',
  },
  body: {
    color: colors.text,
    fontSize: 15,
    fontWeight: '400',
  },
  label: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '700',
  },
  caption: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: '600',
  },
  button: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
  error: {
    color: colors.error,
    fontSize: 12,
    fontWeight: '600',
  },
});
