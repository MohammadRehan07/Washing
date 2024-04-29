
import express from 'express';
import { handleUserRequests } from '../controllers/gatewayControllers';

const router = express.Router();

router.use('/users', handleUserRequests);

export default router;
