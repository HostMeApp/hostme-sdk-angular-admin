'use strict';
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

export namespace Reward {

    export enum StatusEnum { 
        Published = <any> 'Published',
        Unpublished = <any> 'Unpublished',
    }
}
