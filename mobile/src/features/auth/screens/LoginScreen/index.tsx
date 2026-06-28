import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useAuthSession} from '../../../../app/providers/AuthSessionProvider';
import {colors} from '../../../../shared/constants/colors';
import {authText} from '../../../../shared/constants/text';
import {AuthDivider} from '../../components/AuthDivider';
import {AuthFooterLink} from '../../components/AuthFooterLink';
import {AuthIconBadge} from '../../components/AuthIconBadge';
import {AuthSocialOptions} from '../../components/AuthSocialOptions';
import {LoginForm} from '../../components/LoginForm';
import type {LoginScreenProps} from '../../types/auth-navigation.types';
import {styles} from './styles';

export function LoginScreen({navigation}: LoginScreenProps) {
  const {signIn} = useAuthSession();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled">
          <View style={styles.header}>
            <AuthIconBadge />

            <Text style={styles.title}>{authText.login.title}</Text>
            <Text style={styles.subtitle}>{authText.login.subtitle}</Text>
          </View>

          <View style={styles.formSection}>
            <LoginForm
              onForgotPasswordPress={() =>
                navigation.navigate('ForgotPassword')
              }
              onLogin={signIn}
            />

            <AuthDivider label={authText.login.divider} />

            <AuthSocialOptions />

            <AuthFooterLink
              label={authText.login.footerLabel}
              actionLabel={authText.login.footerAction}
              onPress={() => navigation.navigate('Register')}
            />
          </View>

          <View style={styles.bottomGlow} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
