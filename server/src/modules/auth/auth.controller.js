import { asyncHandler } from '../../utils/asyncHandler.js';
import { ApiResponse } from '../../utils/ApiResponse.js';

export const register = asyncHandler(async (_req, res) => {
  ApiResponse.success(res, {
    message: 'Register route is ready for implementation',
    statusCode: 201,
    data: null,
  });
});

export const login = asyncHandler(async (_req, res) => {
  ApiResponse.success(res, {
    message: 'Login route is ready for implementation',
    data: null,
  });
});

export const logout = asyncHandler(async (_req, res) => {
  ApiResponse.success(res, {
    message: 'Logout route is ready for implementation',
    data: null,
  });
});

export const authController = {
  register,
  login,
  logout,
};
