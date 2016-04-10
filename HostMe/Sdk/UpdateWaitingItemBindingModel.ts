
namespace HostMe.Sdk {
    'use strict';

    export interface UpdateWaitingItemBindingModel {

        "id": number;

        "customerName": string;

        "groupSize": number;

        "phone"?: string;

        "areas"?: string;

        "note"?: string;

        "tableNumber"?: string;

        "highChair"?: boolean;

        "stroller"?: boolean;

        "estimatedTurnOverTime"?: number;
    }

}
