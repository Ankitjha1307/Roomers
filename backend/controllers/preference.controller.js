import Preference from "../models/preference.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const savePreferences = asyncHandler(async (req, res) => {
  const userId = req.user.id; 
  if(!userId){
    throw new ApiError(404, "User not found!");
  }

  const existingPreference = await Preference.findOne({ user: userId });

  if (existingPreference) {
    const updated = await Preference.findOneAndUpdate(
      { user: userId },
      req.body,
      { new: true }
    );

    return res.status(200).json(
      new ApiResponse(200, updated, "Preferences updated successfully")
    );
  }

  const preference = await Preference.create({
    user: userId,
    ...req.body
  });

  return res.status(201).json(
    new ApiResponse(201, preference, "Preferences saved successfully")
  );
});

export { savePreferences };
