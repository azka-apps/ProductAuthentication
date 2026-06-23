import {zodResolver} from '@hookform/resolvers/zod';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';

import {Button} from '../../../shared/components/Button';
import {Icon} from '../../../shared/components/Icon';
import {Input} from '../../../shared/components/Input';
import {colors} from '../../../shared/constants/colors';
import {icons} from '../../../shared/constants/icons';
import {authText} from '../../../shared/constants/text';
import {
  type ForgotPasswordFormValues,
  forgotPasswordSchema,
} from '../schemas/forgot-password.schema';
import {ForgotPasswordInfoCard} from './ForgotPasswordInfoCard';

export function ForgotPasswordForm() {
  const {
    control,
    handleSubmit,
    formState: {errors, isSubmitting},
  } = useForm<ForgotPasswordFormValues>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(forgotPasswordSchema),
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
            label={authText.forgotPassword.emailLabel}
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
            placeholder={authText.forgotPassword.emailPlaceholder}
            textContentType="emailAddress"
          />
        )}
      />

      <ForgotPasswordInfoCard />

      <Button
        title={authText.forgotPassword.submit}
        loading={isSubmitting}
        onPress={onSubmit}
        style={styles.submit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 24,
  },
  submit: {
    marginTop: 4,
  },
});
