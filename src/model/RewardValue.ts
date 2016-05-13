'use strict';
import * as models from './models';

export interface RewardValue {

    amount?: number;

    discount?: number;

    freeMeal?: string;

    type?: RewardValue.TypeEnum;
}

export namespace RewardValue {

    export enum TypeEnum { 
        Discount = <any> 'Discount',
        FreeMeal = <any> 'FreeMeal',
        MoneyOff = <any> 'MoneyOff',
    }
}
