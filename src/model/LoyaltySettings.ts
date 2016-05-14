'use strict';
import * as models from './models';

export interface LoyaltySettings {

    checkinPoints?: number;

    isEnabled?: boolean;

    membershipLevelRules?: Array<models.MembershipLevel>;

    purchasePointsRules?: Array<models.PurchaseToPoints>;

    signupPoints?: number;

    waitingPointsRules?: Array<models.MinutesToPoints>;
}

