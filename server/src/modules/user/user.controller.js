import { asyncHandler } from '../../utils/asyncHandler.js';
import { ApiResponse } from '../../utils/ApiResponse.js';

export const getProfile = asyncHandler(async (_req, res) => {
  ApiResponse.success(res, {
    message: 'Get profile route is ready for implementation',
    data: null,
  });
});

export const userController = {
  getProfile,
};
