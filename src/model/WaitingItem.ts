'use strict';
import * as models from './models';

export interface WaitingItem {

    id?: number;

    status?: string;

    created?: string;

    closed?: string;

    confirmationCode?: number;

    customerName?: string;

    groupSize?: number;

    phone?: string;

    registrationMethod?: string;

    deviceType?: string;

    notificationUrl?: string;

    areas?: string;

    expectedTime?: string;

    position?: number;

    note?: string;

    tableNumber?: string;

    statusTime?: string;

    restaurantId?: number;

    highChair?: boolean;

    stroller?: boolean;

    onHoldMode?: string;

    onHoldTime?: string;

    onHoldEndTime?: string;

    messages?: Array<models.Message>;

    membership?: models.MembershipInfo;

    reservation?: models.ReservationInfo;

    estimatedTurnOverTime?: number;

    unreadMessageCount?: number;

    restaurant?: models.RestaurantContactInfo;

    customerProfile?: models.Profile;

    party?: boolean;
}

