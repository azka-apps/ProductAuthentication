import { Router } from 'express';

import { authenticate } from '../../middleware/authenticate.js';
import { validate } from '../../middleware/validate.js';
import { login, logout, register } from './auth.controller.js';
import { authValidation } from './auth.validation.js';

const router = Router();

router.post('/register', validate(authValidation.register), register);
router.post('/login', validate(authValidation.login), login);
router.post('/logout', authenticate, logout);

export default router;
