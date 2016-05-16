import * as models from './models';
export interface RedeemRequest {
    id?: string;
    submited?: Date;
    status?: RedeemRequest.StatusEnum;
    statusComment?: string;
    closed?: Date;
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
