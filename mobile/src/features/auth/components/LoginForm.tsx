import {zodResolver} from '@hookform/resolvers/zod';
import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {Button} from '../../../shared/components/Button';
import {Icon} from '../../../shared/components/Icon';
import {Input} from '../../../shared/components/Input';
import {colors} from '../../../shared/constants/colors';
import {icons} from '../../../shared/constants/icons';
import {authText} from '../../../shared/constants/text';
import {
  type LoginFormValues,
  loginSchema,
} from '../schemas/login.schema';

type LoginFormProps = {
  onForgotPasswordPress: () => void;
  onLogin: (values: LoginFormValues) => string | null;
};

export function LoginForm({onForgotPasswordPress, onLogin}: LoginFormProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const {
    control,
    handleSubmit,
    setError,
    formState: {errors, isSubmitting},
  } = useForm<LoginFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = handleSubmit(values => {
    const errorMessage = onLogin(values);

    if (errorMessage) {
      setError('root', {message: errorMessage});
    }
  });

  return (
    <View style={styles.container}>
      {errors.root?.message ? (
        <Text style={styles.formError}>{errors.root.message}</Text>
      ) : null}
      <Controller
        control={control}
        name="email"
        render={({field: {onBlur, onChange, value}}) => (
          <Input
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            error={errors.email?.message}
            leftElement={
              <Icon
                name={icons.auth.email}
                color={colors.primary}
                size={22}
                iconStyle="regular"
              />
            }
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
            leftElement={
              <Icon
                name={icons.auth.password}
                color={colors.primary}
                size={21}
                iconStyle="solid"
              />
            }
            rightElement={
              <Pressable
                accessibilityRole="button"
                onPress={() => setIsPasswordVisible(current => !current)}>
                <Icon
                  name={
                    isPasswordVisible
                      ? icons.auth.passwordVisible
                      : icons.auth.passwordHidden
                  }
                  color={colors.textMuted}
                  size={20}
                  iconStyle="regular"
                />
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
  formError: {
    color: colors.error,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
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
});
