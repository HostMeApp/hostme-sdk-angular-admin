import * as models from './models';
export interface AvailabilityResponse {
    availabilities?: Array<models.Availability>;
    requestedTime?: Date;
    totalCovers?: number;
    totalReservationCovers?: number;
    totalWaitCovers?: number;
    unitType?: AvailabilityResponse.UnitTypeEnum;
}
export declare namespace AvailabilityResponse {
    enum UnitTypeEnum {
        Cover,
        Table,
        Default,
    }
}
