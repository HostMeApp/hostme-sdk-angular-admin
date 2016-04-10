
namespace HostMe.Sdk {
    'use strict';

    export interface RewardInfo {

        "description"?: string;

        "id"?: string;

        "imageUrl"?: string;

        "priceInPoints"?: number;

        "redeemRequest"?: RedeemRequestInfo;

        "value"?: RewardValue;
    }

}
