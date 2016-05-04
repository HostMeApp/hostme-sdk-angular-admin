
namespace HostMe.Sdk {
    'use strict';

    export interface CreateReservation {

        "reservationTime": Date;

        "customerName": string;

        "phoneNumber": string;

        "groupSize": number;

        "areas"?: string;

        "note"?: string;

        "tableNumber"?: string;

        "highChair"?: boolean;

        "stroller"?: boolean;

        "party"?: boolean;

        "estimatedTurnOverTime"?: number;

        "type": CreateReservation.TypeEnum;

        "customerProfile"?: Profile;
    }

    export namespace CreateReservation {

        export enum TypeEnum { 
            Standard = <any> 'Standard',
            Hybrid = <any> 'Hybrid'
        }
    }
}
