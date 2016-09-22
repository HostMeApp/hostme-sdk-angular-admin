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
export declare namespace RedeemRequest {
    enum StatusEnum {
        Submited,
        Approved,
        Rejected,
    }
}
