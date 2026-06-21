import {z} from 'zod';

import {authText} from '../../../shared/constants/text';

export const registerSchema = z
  .object({
    fullName: z
      .string()
      .min(1, authText.validation.fullNameRequired)
      .min(2, authText.validation.fullNameMinLength),
    email: z.string().email(authText.validation.emailInvalid),
    password: z
      .string()
      .min(1, authText.validation.passwordRequired)
      .min(8, authText.validation.passwordMinLength)
      .regex(/[A-Z]/, authText.validation.passwordUppercase)
      .regex(/[a-z]/, authText.validation.passwordLowercase)
      .regex(/[0-9]/, authText.validation.passwordNumber)
      .regex(/[^A-Za-z0-9]/, authText.validation.passwordSpecialCharacter),
    confirmPassword: z
      .string()
      .min(1, authText.validation.confirmPasswordRequired),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: authText.validation.passwordsDoNotMatch,
    path: ['confirmPassword'],
  });

export type RegisterFormValues = z.infer<typeof registerSchema>;
