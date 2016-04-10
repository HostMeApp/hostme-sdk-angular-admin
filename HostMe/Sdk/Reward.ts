
namespace HostMe.Sdk {
    'use strict';

    export interface Reward {

        "conditions"?: RewardConditions;

        "description"?: string;

        "id"?: string;

        "imageUrl"?: string;

        "priceInPoints"?: number;

        "value"?: RewardValue;

        "status"?: Reward.StatusEnum;
    }

    export namespace Reward {

        export enum StatusEnum { 
            Published = <any> 'Published',
            Unpublished = <any> 'Unpublished'
        }
    }
}
