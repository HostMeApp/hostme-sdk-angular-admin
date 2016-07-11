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
    waiter?: models.WaiterMonitor;
    state?: string;
}
export declare namespace TableMonitor {
    enum StatusEnum {
        Available,
        Busy,
        Assigned,
        Reserved,
    }
}
