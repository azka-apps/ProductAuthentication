import { Router } from 'express';

import { ApiResponse } from '../utils/ApiResponse.js';
import authRoutes from '../modules/auth/auth.routes.js';
import userRoutes from '../modules/user/user.routes.js';

const router = Router();

router.get('/health', (_req, res) => {
  ApiResponse.success(res, {
    message: 'Server is healthy',
    data: {
      project: 'ProductAuthentication',
      status: 'ok',
    },
  });
});

router.use('/auth', authRoutes);
router.use('/users', userRoutes);

export default router;
