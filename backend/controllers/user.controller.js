import User from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const signup = asyncHandler(async (req, res) => {
    const {name, email, password, agreeTerms} = req.body;

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

const login = asyncHandler(async (req, res) => {
  const {email, password} = req.body;
  if(!email || !password){
    throw new ApiError(400, "Email and password required!");
  }

  const user = await User.findOne({ email });
  if(!user){
    throw new ApiError(401, "Invalid user credentials");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if(!isPasswordValid){
    throw new ApiError(401, "Invalid user credentials");
  }

  const token = jwt.sign(
    { id: user._id},
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );

  return res
  .status(200)
  .json(
    new ApiResponse(
    200,
    {
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name
      }
    },
    "Login successful"
    )
  );
})

const logout = asyncHandler(async (req, res) => {
  
})

export {signup, login}