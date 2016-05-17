import * as models from './models';
export interface MembershipUpdate {
    note?: string;
    profile?: models.Profile;
    customer?: models.UserProfile;
}
