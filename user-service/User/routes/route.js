import express from 'express';
import { createUser } from '../controllers/user.js'; // Corrected import path

const router = express.Router();
router.post('/', createUser);

export default router;
