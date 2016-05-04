
namespace HostMe.Sdk {
    'use strict';

    export interface Reservation {

        "unreadMessageCount"?: number;

        "id"?: string;

        "restaurant"?: RestaurantContactInfo;

        "created"?: Date;

        "closed"?: Date;

        "reservationTime"?: Date;

        "status"?: string;

        "customerName"?: string;

        "groupSize"?: number;

        "phone"?: string;

        "notificationUrl"?: string;

        "areas"?: string;

        "note"?: string;

        "tableNumber"?: string;

        "highChair"?: boolean;

        "stroller"?: boolean;

        "estimatedTurnOverTime"?: number;

        "messages"?: Array<Message>;

        "membership"?: MembershipInfo;

        "type"?: Reservation.TypeEnum;

        "party"?: boolean;

        "customerProfile"?: Profile;
    }

    export namespace Reservation {

        export enum TypeEnum { 
            Standard = <any> 'Standard',
            Hybrid = <any> 'Hybrid'
        }
    }
}
