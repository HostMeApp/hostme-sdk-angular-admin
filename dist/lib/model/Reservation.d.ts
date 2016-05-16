import * as models from './models';
export interface Reservation {
    unreadMessageCount?: number;
    id?: string;
    restaurant?: models.RestaurantContactInfo;
    created?: Date;
    closed?: Date;
    reservationTime?: Date;
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
export declare namespace Reservation {
    enum TypeEnum {
        Standard,
        Hybrid,
    }
}
