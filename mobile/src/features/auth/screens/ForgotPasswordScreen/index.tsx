import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Icon} from '../../../../shared/components/Icon';
import {colors} from '../../../../shared/constants/colors';
import {icons} from '../../../../shared/constants/icons';
import {authText} from '../../../../shared/constants/text';
import {AuthDivider} from '../../components/AuthDivider';
import {AuthFooterLink} from '../../components/AuthFooterLink';
import {ForgotPasswordForm} from '../../components/ForgotPasswordForm';
import {ForgotPasswordIconBadge} from '../../components/ForgotPasswordIconBadge';
import {ForgotPasswordSupportButton} from '../../components/ForgotPasswordSupportButton';
import type {ForgotPasswordScreenProps} from '../../types/auth-navigation.types';
import {styles} from './styles';

export function ForgotPasswordScreen({navigation}: ForgotPasswordScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled">
          <Pressable
            accessibilityRole="button"
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
            <Icon
              name={icons.auth.back}
              color={colors.primary}
              size={24}
              iconStyle="solid"
            />
          </Pressable>

          <View style={styles.header}>
            <ForgotPasswordIconBadge />

            <Text style={styles.title}>{authText.forgotPassword.title}</Text>
            <Text style={styles.subtitle}>
              {authText.forgotPassword.subtitle}
            </Text>
          </View>

          <View style={styles.formSection}>
            <ForgotPasswordForm />

            <AuthDivider label={authText.forgotPassword.divider} />

            <ForgotPasswordSupportButton />

            <AuthFooterLink
              label={authText.forgotPassword.footerLabel}
              actionLabel={authText.forgotPassword.footerAction}
              onPress={() => navigation.navigate('Login')}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
