
import express from 'express';
import { handleUserRequests } from '../controllers/gatewayControllers.js';

const router = express.Router();

router.use('/users', handleUserRequests);

export default router;
