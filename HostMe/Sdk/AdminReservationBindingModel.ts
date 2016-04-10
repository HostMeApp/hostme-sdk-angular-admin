
namespace HostMe.Sdk {
    'use strict';

    export interface AdminReservationBindingModel {

        "restaurantId": number;

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

        "type"?: AdminReservationBindingModel.TypeEnum;
    }

    export namespace AdminReservationBindingModel {

        export enum TypeEnum { 
            Standard = <any> 'Standard',
            Hybrid = <any> 'Hybrid'
        }
    }
}
