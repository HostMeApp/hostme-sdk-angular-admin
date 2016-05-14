'use strict';
import * as models from './models';

export interface TableMonitor {

    tableNumber?: string;

    status?: TableMonitor.StatusEnum;

    waitingItemId?: number;

    reservationId?: string;

    registrationId?: number;

    partySize?: number;

    membership?: models.MembershipInfo;

    nextReservationTime?: Date;

    assignmentTime?: Date;

    registrationTime?: Date;

    estimatedReleaseTime?: Date;
}

export namespace TableMonitor {

    export enum StatusEnum { 
        Available = <any> 'Available',
        Busy = <any> 'Busy',
        Assigned = <any> 'Assigned',
        Reserved = <any> 'Reserved',
    }
}
