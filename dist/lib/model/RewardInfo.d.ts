import * as models from './models';
export interface RewardInfo {
    description?: string;
    id?: string;
    imageUrl?: string;
    priceInPoints?: number;
    redeemRequest?: models.RedeemRequestInfo;
    value?: models.RewardValue;
}
