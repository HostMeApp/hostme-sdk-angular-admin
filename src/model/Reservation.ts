'use strict';
import * as models from './models';

export interface Reservation {

    unreadMessageCount?: number;

    id?: string;

    restaurant?: models.RestaurantContactInfo;

    created?: string;

    closed?: string;

    reservationTime?: string;

    status?: string;

    customerName?: string;

    groupSize?: number;

    phone?: string;

    notificationUrl?: string;

    areas?: string;

    note?: string;

    tableNumber?: string;

    highChair?: boolean;

    stroller?: boolean;

    estimatedTurnOverTime?: number;

    messages?: Array<models.Message>;

    membership?: models.MembershipInfo;

    type?: Reservation.TypeEnum;

    party?: boolean;

    customerProfile?: models.Profile;
}

export namespace Reservation {

    export enum TypeEnum { 
        Standard = <any> 'Standard',
        Hybrid = <any> 'Hybrid',
    }
}
