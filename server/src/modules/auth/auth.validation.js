import Joi from 'joi';

const passwordSchema = Joi.string()
  .min(8)
  .pattern(/[A-Z]/)
  .pattern(/[a-z]/)
  .pattern(/[0-9]/)
  .pattern(/[^A-Za-z0-9]/)
  .required()
  .messages({
    'string.min': 'Password must be at least 8 characters',
    'string.pattern.base':
      'Password must include uppercase, lowercase, number, and special character',
  });

export const authValidation = {
  register: Joi.object({
    body: Joi.object({
      fullName: Joi.string().trim().min(2),
      name: Joi.string().trim().min(2),
      email: Joi.string().trim().email().required(),
      password: passwordSchema,
      confirmPassword: Joi.string()
        .valid(Joi.ref('password'))
        .required()
        .messages({
          'any.only': 'Passwords do not match',
        }),
    }).or('fullName', 'name'),
  }),

  login: Joi.object({
    body: Joi.object({
      email: Joi.string().trim().email().required(),
      password: Joi.string().min(8).required(),
    }),
  }),
};
