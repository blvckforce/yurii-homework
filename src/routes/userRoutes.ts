import express from 'express';
import {createUserProfile, createUserProfileValidationRules} from '../controllers/userController';
import {validate} from "../middleware/validator";

const router = express.Router();

router.post('/', createUserProfileValidationRules, validate, createUserProfile);

export default router;
