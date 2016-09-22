'use strict';
import * as models from './models';

export interface RedeemRequest {

    id?: string;

    submited?: string;

    status?: RedeemRequest.StatusEnum;

    statusComment?: string;

    closed?: string;

    rewardId?: string;

    tableNumber?: string;

    memberInfo?: models.Member;

    rewardDetails?: models.RewardInfo;
}

export namespace RedeemRequest {

    export enum StatusEnum { 
        Submited = <any> 'Submited',
        Approved = <any> 'Approved',
        Rejected = <any> 'Rejected',
    }
}
