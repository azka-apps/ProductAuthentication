import { Router } from 'express';

import { authenticate } from '../../middleware/authenticate.js';
import { userController } from './user.controller.js';

const router = Router();

router.get('/me', authenticate, userController.getProfile);

export default router;
