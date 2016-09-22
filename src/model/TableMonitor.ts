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

    nextReservationTime?: string;

    assignmentTime?: string;

    registrationTime?: string;

    estimatedReleaseTime?: string;

    waiter?: models.WaiterMonitor;

    state?: string;
}

export namespace TableMonitor {

    export enum StatusEnum { 
        Available = <any> 'Available',
        Busy = <any> 'Busy',
        Assigned = <any> 'Assigned',
        Reserved = <any> 'Reserved',
    }
}
