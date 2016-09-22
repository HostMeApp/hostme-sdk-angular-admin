import * as models from './models';
export interface CreateReservation {
    reservationTime?: string;
    customerName?: string;
    phoneNumber?: string;
    groupSize?: number;
    areas?: string;
    note?: string;
    tableNumber?: string;
    highChair?: boolean;
    stroller?: boolean;
    party?: boolean;
    estimatedTurnOverTime?: number;
    type?: CreateReservation.TypeEnum;
    customerProfile?: models.Profile;
}
export declare namespace CreateReservation {
    enum TypeEnum {
        Standard,
        Hybrid,
    }
}
