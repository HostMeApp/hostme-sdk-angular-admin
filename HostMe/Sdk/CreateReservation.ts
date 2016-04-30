
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

        "estimatedTurnOverTime"?: number;

        "type"?: CreateReservation.TypeEnum;
    }

    export namespace CreateReservation {

        export enum TypeEnum { 
            Standard = <any> 'Standard',
            Hybrid = <any> 'Hybrid'
        }
    }
}
