import express from "express";
import { savePreferences } from "../controllers/preference.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", authMiddleware, savePreferences);

export default router;
