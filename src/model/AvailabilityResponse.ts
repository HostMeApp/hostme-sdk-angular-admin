'use strict';
import * as models from './models';

export interface AvailabilityResponse {

    availabilities?: Array<models.Availability>;

    requestedTime?: string;

    totalCovers?: number;

    totalReservationCovers?: number;

    totalWaitCovers?: number;

    unitType?: AvailabilityResponse.UnitTypeEnum;
}

export namespace AvailabilityResponse {

    export enum UnitTypeEnum { 
        Cover = <any> 'Cover',
        Table = <any> 'Table',
        Default = <any> 'Default',
    }
}
