import express from 'express';
import { protectRoute } from '../middleware/auth.middleware.js';
import { getUserForSidebar } from '../controllers/message.controller.js';

const router = express.Router();

router.get("/user", protectRoute , getUserForSidebar);



export default router;