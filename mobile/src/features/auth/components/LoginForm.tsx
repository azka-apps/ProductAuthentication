import {zodResolver} from '@hookform/resolvers/zod';
import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {Button} from '../../../shared/components/Button';
import {Input} from '../../../shared/components/Input';
import {colors} from '../../../shared/constants/colors';
import {authText} from '../../../shared/constants/text';
import {
  type LoginFormValues,
  loginSchema,
} from '../schemas/login.schema';

type LoginFormProps = {
  onForgotPasswordPress: () => void;
};

export function LoginForm({onForgotPasswordPress}: LoginFormProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const {
    control,
    handleSubmit,
    formState: {errors, isSubmitting},
  } = useForm<LoginFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = handleSubmit(() => {
    // API integration will be added later.
  });

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="email"
        render={({field: {onBlur, onChange, value}}) => (
          <Input
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            error={errors.email?.message}
            leftElement={<Text style={styles.inputIcon}>@</Text>}
            autoCapitalize="none"
            autoComplete="email"
            keyboardType="email-address"
            placeholder={authText.login.emailPlaceholder}
            textContentType="emailAddress"
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({field: {onBlur, onChange, value}}) => (
          <Input
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            error={errors.password?.message}
            leftElement={<Text style={styles.inputIcon}>*</Text>}
            rightElement={
              <Pressable
                accessibilityRole="button"
                onPress={() => setIsPasswordVisible(current => !current)}>
                <Text style={styles.passwordToggle}>
                  {isPasswordVisible
                    ? authText.login.hidePassword
                    : authText.login.showPassword}
                </Text>
              </Pressable>
            }
            autoCapitalize="none"
            autoComplete="password"
            placeholder={authText.login.passwordPlaceholder}
            secureTextEntry={!isPasswordVisible}
            textContentType="password"
          />
        )}
      />

      <Pressable
        accessibilityRole="button"
        onPress={onForgotPasswordPress}
        style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>
          {authText.login.forgotPassword}
        </Text>
      </Pressable>

      <Button title={authText.login.submit} loading={isSubmitting} onPress={onSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: -4,
  },
  forgotPasswordText: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: '600',
  },
  inputIcon: {
    width: 18,
    color: colors.primary,
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
  },
  passwordToggle: {
    color: colors.textMuted,
    fontSize: 13,
    fontWeight: '700',
  },
});
