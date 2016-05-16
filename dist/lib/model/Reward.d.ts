import * as models from './models';
export interface Reward {
    conditions?: models.RewardConditions;
    description?: string;
    id?: string;
    imageUrl?: string;
    priceInPoints?: number;
    value?: models.RewardValue;
    status?: Reward.StatusEnum;
}
export declare namespace Reward {
    enum StatusEnum {
        Published,
        Unpublished,
    }
}
