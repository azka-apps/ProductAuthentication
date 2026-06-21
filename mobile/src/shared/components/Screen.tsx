import React, {type ReactNode} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  type ScrollViewProps,
  type StatusBarStyle,
  type ViewStyle,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {colors} from '../constants/colors';

type ScreenProps = {
  children: ReactNode;
  scroll?: boolean;
  keyboardAvoiding?: boolean;
  statusBarStyle?: StatusBarStyle;
  backgroundColor?: string;
  contentContainerStyle?: ViewStyle;
  style?: ViewStyle;
  scrollViewProps?: ScrollViewProps;
};

export function Screen({
  children,
  scroll = false,
  keyboardAvoiding = false,
  statusBarStyle = 'dark-content',
  backgroundColor = colors.background,
  contentContainerStyle,
  style,
  scrollViewProps,
}: ScreenProps) {
  const content = scroll ? (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      {...scrollViewProps}
      contentContainerStyle={[
        styles.scrollContent,
        contentContainerStyle,
        scrollViewProps?.contentContainerStyle,
      ]}>
      {children}
    </ScrollView>
  ) : (
    <View style={[styles.content, contentContainerStyle]}>{children}</View>
  );

  const body = keyboardAvoiding ? (
    <KeyboardAvoidingView
      style={styles.keyboardView}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      {content}
    </KeyboardAvoidingView>
  ) : (
    content
  );

  return (
    <SafeAreaView style={[styles.safeArea, {backgroundColor}, style]}>
      <StatusBar barStyle={statusBarStyle} backgroundColor={backgroundColor} />
      {body}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
});
