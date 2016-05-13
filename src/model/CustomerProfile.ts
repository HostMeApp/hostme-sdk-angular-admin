'use strict';
import * as models from './models';

export interface CustomerProfile {

    lastVisitDate?: Date;

    phoneNumber?: string;

    visitsCount?: number;

    fullName?: string;

    status?: string;

    membershipLevel?: string;

    points?: number;

    customerProfile?: models.Profile;
}

