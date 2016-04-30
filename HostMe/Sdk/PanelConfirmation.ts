
namespace HostMe.Sdk {
    'use strict';

    export interface PanelConfirmation {

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
