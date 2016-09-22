'use strict';
import * as models from './models';

export interface Member {

    id?: number;

    membershipLevel?: string;

    points?: number;

    joinDate?: string;

    status?: string;

    numberOfVisits30Days?: number;

    numberOfVisitsTotal?: number;

    lastVisitDate?: string;

    customer?: models.UserProfile;

    profile?: models.Profile;

    note?: string;
}

