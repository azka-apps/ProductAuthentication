import { Router } from 'express';

import { authenticate } from '../../middleware/authenticate.js';
import { validate } from '../../middleware/validate.js';
import { authController } from './auth.controller.js';
import { authValidation } from './auth.validation.js';

const router = Router();

router.post('/register', validate(authValidation.register), authController.register);
router.post('/login', validate(authValidation.login), authController.login);
router.post('/logout', authenticate, authController.logout);

export default router;
