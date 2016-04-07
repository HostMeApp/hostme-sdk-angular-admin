
namespace HostMe.Sdk {
    'use strict';




    export interface RedeemRequest {



        "id"?: string;



        "submited"?: Date;



        "status"?: RedeemRequest.StatusEnum;



        "statusComment"?: string;



        "closed"?: Date;



        "rewardId"?: string;



        "customerMembershipId"?: number;



        "tableNumber"?: string;



        "memberInfo"?: Member;



        "rewardDetails"?: RewardInfo;

    }


    export namespace RedeemRequest {







        export enum StatusEnum { 
            Submited = <any> 'Submited',
            Approved = <any> 'Approved',
            Rejected = <any> 'Rejected'
        }
















    }



}
