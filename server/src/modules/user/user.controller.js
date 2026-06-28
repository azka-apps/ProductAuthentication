import { asyncHandler } from '../../utils/asyncHandler.js';
import { ApiResponse } from '../../utils/ApiResponse.js';
import { getProfileById } from './user.service.js';

export const getProfile = asyncHandler(async (req, res) => {
  const user = await getProfileById(req.user._id);

  ApiResponse.success(res, {
    message: 'Profile fetched successfully',
    data: { user },
  });
});
