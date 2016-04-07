
namespace HostMe.Sdk {
    'use strict';




    export interface UserInfo {



        "id"?: string;



        "userName"?: string;



        "email"?: string;



        "fullName"?: string;



        "phoneNumber"?: string;



        "roles"?: Array<RoleInfo>;



        "identities"?: Array<UserIdentityInfo>;



        "subscriptions"?: Array<UserSubscriptionInfo>;

    }




}
