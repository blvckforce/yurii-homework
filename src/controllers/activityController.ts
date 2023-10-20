import { Request, Response } from 'express';
import { fetchRandomActivity } from '../services/activityService';
import { sharedContext } from '../context';

export async function getRandomActivity(req: Request, res: Response) {
    try {
        const userProfile = sharedContext.userProfile;

        if (!userProfile) {
            return res.status(400).json({ error: 'User profile not set' });
        }

        const randomActivity = await fetchRandomActivity();

        if (!randomActivity) {
            return res.status(500).json({ error: 'Failed to fetch activity' });
        }

        // Check if the fetched activity matches the user's preferences
        if (
            randomActivity.accessibility === userProfile.accessibility &&
            randomActivity.price === userProfile.price
        ) {
            res.json(randomActivity);
        } else {
            res.status(404).json({ message: 'No matching activities found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}
