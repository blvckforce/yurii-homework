import { Request, Response } from 'express';
import {check, validationResult} from "express-validator";

import { UserProfile } from '../models/userProfile';
import { sharedContext } from '../context';

// Validation rules
export const createUserProfileValidationRules = [
    check('name').not().isEmpty().withMessage('Name is required'),
    check('accessibility')
        .isIn(['High', 'Medium', 'Low'])
        .withMessage('Invalid accessibility level'),
    check('price')
        .isIn(['Free', 'Low', 'High'])
        .withMessage('Invalid price level'),
];

export function createUserProfile(req: Request, res: Response) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, accessibility, price } = req.body;

    if (!name || !accessibility || !price) {
        return res.status(400).json({ error: 'Invalid request data' });
    }

    const userProfile: UserProfile = {
        name,
        accessibility,
        price,
    };

    sharedContext.setUserProfile(userProfile);

    res.json({ message: 'User profile created' });
}
