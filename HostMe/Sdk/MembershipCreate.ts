
namespace HostMe.Sdk {
    'use strict';

    export interface MembershipCreate {

        "fullName": string;

        "phoneNumber": string;

        "note"?: string;

        "profile"?: Profile;
    }

}
