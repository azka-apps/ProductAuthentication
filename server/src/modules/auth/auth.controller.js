import { asyncHandler } from '../../utils/asyncHandler.js';
import { ApiResponse } from '../../utils/ApiResponse.js';
import * as authService from './auth.service.js';

export const register = asyncHandler(async (req, res) => {
  const data = await authService.register(req.body);

  ApiResponse.success(res, {
    message: 'Registration successful',
    statusCode: 201,
    data,
  });
});

export const login = asyncHandler(async (req, res) => {
  const data = await authService.login(req.body);

  ApiResponse.success(res, {
    message: 'Login successful',
    data,
  });
});

export const logout = asyncHandler(async (_req, res) => {
  ApiResponse.success(res, {
    message: 'Logout successful',
    data: null,
  });
});
