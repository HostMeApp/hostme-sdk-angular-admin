
namespace HostMe.Sdk {
    'use strict';

    export interface ManageInfo {

        "localLoginProvider"?: string;

        "userName"?: string;

        "logins"?: Array<UserLoginInfo>;

        "externalLoginProviders"?: Array<ExternalLogin>;
    }

}
