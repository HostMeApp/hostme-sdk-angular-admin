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
export declare namespace Availability {
    enum AvailabilityLevelEnum {
        Available,
        AvailableForWait,
        NotEnoughCovers,
        Overbooked,
    }
}
