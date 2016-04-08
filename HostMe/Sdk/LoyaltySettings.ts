
namespace HostMe.Sdk {
    'use strict';




    export interface LoyaltySettings {



        "checkinPoints"?: number;



        "isEnabled"?: boolean;



        "membershipLevelRules"?: Array<MembershipLevel>;



        "purchasePointsRules"?: Array<PurchaseToPoints>;



        "signupPoints"?: number;



        "waitingPointsRules"?: Array<MinutesToPoints>;

    }




}
