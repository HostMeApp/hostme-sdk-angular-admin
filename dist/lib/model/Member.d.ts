import * as models from './models';
export interface Member {
    id?: number;
    membershipLevel?: string;
    points?: number;
    joinDate?: Date;
    status?: string;
    numberOfVisits30Days?: number;
    numberOfVisitsTotal?: number;
    lastVisitDate?: Date;
    customer?: models.UserProfile;
    profile?: models.Profile;
    note?: string;
}
