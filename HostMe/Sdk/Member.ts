
namespace HostMe.Sdk {
    'use strict';

    export interface Member {

        "id"?: number;

        "membershipLevel"?: string;

        "points"?: number;

        "joinDate"?: Date;

        "status"?: string;

        "numberOfVisits30Days"?: number;

        "numberOfVisitsTotal"?: number;

        "lastVisitDate"?: Date;

        "customer"?: UserProfile;
    }

}
