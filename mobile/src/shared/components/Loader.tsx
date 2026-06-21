import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  type ActivityIndicatorProps,
  type ViewStyle,
} from 'react-native';

import {colors} from '../constants/colors';

type LoaderProps = ActivityIndicatorProps & {
  centered?: boolean;
  containerStyle?: ViewStyle;
};

export function Loader({
  centered = false,
  color = colors.primary,
  size = 'small',
  containerStyle,
  ...props
}: LoaderProps) {
  if (!centered) {
    return <ActivityIndicator {...props} color={color} size={size} />;
  }

  return (
    <View style={[styles.centered, containerStyle]}>
      <ActivityIndicator {...props} color={color} size={size} />
    </View>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
