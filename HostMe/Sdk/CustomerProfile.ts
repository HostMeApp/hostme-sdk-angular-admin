
namespace HostMe.Sdk {
    'use strict';

    export interface CustomerProfile {

        "lastVisitDate"?: Date;

        "phoneNumber"?: string;

        "visitsCount"?: number;

        "fullName"?: string;

        "status"?: string;

        "membershipLevel"?: string;

        "points"?: number;

        "customerProfile"?: Profile;
    }

}
