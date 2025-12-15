import User from "../models/user.model";
import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import bcrypt from "bcrypt";

const signup = asyncHandler(async (req, res) => {
    const {name, email, password, agreeTerms} = req.body;
    console.log("name: "+name);

    if ([name, email, password].some((field) => field?.trim() ==="")) {
        throw new ApiError(400, "All fields are required!!")
    }

    if (!agreeTerms) {
    throw new ApiError(400, "You must accept terms and conditions");
  }

  const existingUser = await User.findOne({ email });
  if (existingUser){
    throw new ApiError(409, "User with this email already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    agreedToTerms: agreeTerms
  });

   return res
    .status(201)
    .json(
      new ApiResponse(
        201,
        {
          id: user._id,
          email: user.email
        },
        "User registered successfully"
      )
    );
})

export {signup}