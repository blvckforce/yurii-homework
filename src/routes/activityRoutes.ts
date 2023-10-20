import express from 'express';
import { getRandomActivity } from '../controllers/activityController';

const router = express.Router();

router.get('/', getRandomActivity);

export default router;
