import * as models from './models';
export interface MembershipCreate {
    fullName?: string;
    phoneNumber?: string;
    note?: string;
    profile?: models.Profile;
}
