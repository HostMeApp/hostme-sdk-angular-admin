'use strict';
import * as models from './models';

export interface Availability {

    acceptReservations?: boolean;

    availabilityLevel?: Availability.AvailabilityLevelEnum;

    inWaitCovers?: number;

    maxCoversForSlot?: number;

    open?: boolean;

    recommendedTables?: string;

    requestedTime?: boolean;

    reservedCovers?: number;

    time?: string;
}

export namespace Availability {

    export enum AvailabilityLevelEnum { 
        Available = <any> 'Available',
        AvailableForWait = <any> 'AvailableForWait',
        NotEnoughCovers = <any> 'NotEnoughCovers',
        Overbooked = <any> 'Overbooked',
    }
}
