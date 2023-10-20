import { UserProfile } from './models/userProfile';

export class SharedContext {
    userProfile: UserProfile | null = null;

    setUserProfile(userProfile: UserProfile) {
        this.userProfile = userProfile;
    }
}

export const sharedContext = new SharedContext();
