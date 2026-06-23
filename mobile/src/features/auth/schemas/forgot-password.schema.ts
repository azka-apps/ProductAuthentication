import {z} from 'zod';

import {authText} from '../../../shared/constants/text';

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, authText.validation.emailRequired)
    .email(authText.validation.emailInvalid),
});

export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;
