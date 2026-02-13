import express from 'express';
const router = express.Router();
import { signup, login, logout, updateProfile, checkAuth } from '../controllers/auth.controller.js';
import { protectRoute } from '../middleware/auth.middleware.js';

router.post("/signup", signup);
router.post("/login", login)
router.post("/logout", logout);

// if user is logged in then only he can update his profile
router.put("/update-profile",protectRoute, updateProfile);

router.get("/check", protectRoute, checkAuth);

export default router;