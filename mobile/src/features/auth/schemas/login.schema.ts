import {z} from 'zod';

import {authText} from '../../../shared/constants/text';

export const loginSchema = z.object({
  email: z.string().email(authText.validation.emailInvalid),
  password: z
    .string()
    .min(1, authText.validation.passwordRequired)
    .min(8, authText.validation.passwordMinLength),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
