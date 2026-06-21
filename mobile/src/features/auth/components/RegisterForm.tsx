import {zodResolver} from '@hookform/resolvers/zod';
import React, {useState} from 'react';
import {Controller, useForm, useWatch} from 'react-hook-form';
import {Pressable, StyleSheet, View} from 'react-native';

import {Button} from '../../../shared/components/Button';
import {Icon} from '../../../shared/components/Icon';
import {Input} from '../../../shared/components/Input';
import {colors} from '../../../shared/constants/colors';
import {icons} from '../../../shared/constants/icons';
import {authText} from '../../../shared/constants/text';
import {
  type RegisterFormValues,
  registerSchema,
} from '../schemas/register.schema';
import {PasswordRules} from './PasswordRules';

export function RegisterForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const {
    control,
    handleSubmit,
    formState: {errors, isSubmitting},
  } = useForm<RegisterFormValues>({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(registerSchema),
  });
  const password = useWatch({control, name: 'password'});

  const onSubmit = handleSubmit(() => {
    // API integration will be added later.
  });

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="fullName"
        render={({field: {onBlur, onChange, value}}) => (
          <Input
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            error={errors.fullName?.message}
            leftElement={
              <Icon
                name={icons.auth.user}
                color={colors.primary}
                size={21}
                iconStyle="regular"
              />
            }
            autoCapitalize="words"
            autoComplete="name"
            placeholder={authText.register.fullNamePlaceholder}
            textContentType="name"
          />
        )}
      />

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
            placeholder={authText.register.emailPlaceholder}
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
              <PasswordVisibilityToggle
                isVisible={isPasswordVisible}
                onPress={() => setIsPasswordVisible(current => !current)}
              />
            }
            autoCapitalize="none"
            autoComplete="new-password"
            placeholder={authText.register.passwordPlaceholder}
            secureTextEntry={!isPasswordVisible}
            textContentType="newPassword"
          />
        )}
      />

      <Controller
        control={control}
        name="confirmPassword"
        render={({field: {onBlur, onChange, value}}) => (
          <Input
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            error={errors.confirmPassword?.message}
            leftElement={
              <Icon
                name={icons.auth.password}
                color={colors.primary}
                size={21}
                iconStyle="solid"
              />
            }
            rightElement={
              <PasswordVisibilityToggle
                isVisible={isConfirmPasswordVisible}
                onPress={() =>
                  setIsConfirmPasswordVisible(current => !current)
                }
              />
            }
            autoCapitalize="none"
            autoComplete="new-password"
            placeholder={authText.register.confirmPasswordPlaceholder}
            secureTextEntry={!isConfirmPasswordVisible}
            textContentType="newPassword"
          />
        )}
      />

      <PasswordRules password={password ?? ''} />

      <Button
        title={authText.register.submit}
        loading={isSubmitting}
        onPress={onSubmit}
        style={styles.submit}
      />
    </View>
  );
}

type PasswordVisibilityToggleProps = {
  isVisible: boolean;
  onPress: () => void;
};

function PasswordVisibilityToggle({
  isVisible,
  onPress,
}: PasswordVisibilityToggleProps) {
  return (
    <Pressable accessibilityRole="button" onPress={onPress}>
      <Icon
        name={isVisible ? icons.auth.passwordVisible : icons.auth.passwordHidden}
        color={colors.textMuted}
        size={20}
        iconStyle="regular"
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  submit: {
    marginTop: 10,
  },
});
