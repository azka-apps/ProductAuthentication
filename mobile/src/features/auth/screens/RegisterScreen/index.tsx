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
import {AuthFooterLink} from '../../components/AuthFooterLink';
import {AuthIconBadge} from '../../components/AuthIconBadge';
import {RegisterForm} from '../../components/RegisterForm';
import type {RegisterScreenProps} from '../../types/auth-navigation.types';
import {styles} from './styles';

export function RegisterScreen({navigation}: RegisterScreenProps) {
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
            <AuthIconBadge name={icons.auth.registerBadge} />

            <Text style={styles.title}>{authText.register.title}</Text>
            <Text style={styles.subtitle}>{authText.register.subtitle}</Text>
          </View>

          <View style={styles.formSection}>
            <RegisterForm />

            <AuthFooterLink
              label={authText.register.footerLabel}
              actionLabel={authText.register.footerAction}
              onPress={() => navigation.navigate('Login')}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
