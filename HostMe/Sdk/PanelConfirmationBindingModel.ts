
namespace HostMe.Sdk {
    'use strict';

    export interface PanelConfirmationBindingModel {

        "customerName": string;

        "phoneNumber"?: string;

        "confirmationMethod"?: string;

        "groupSize": number;

        "areas"?: string;

        "note"?: string;

        "highChair"?: boolean;

        "stroller"?: boolean;
    }

}
