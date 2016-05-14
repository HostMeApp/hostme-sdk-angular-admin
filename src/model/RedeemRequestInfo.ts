'use strict';
import * as models from './models';

export interface RedeemRequestInfo {

    id?: string;

    status?: RedeemRequestInfo.StatusEnum;

    statusComment?: string;

    tableNumber?: string;
}

export namespace RedeemRequestInfo {

    export enum StatusEnum { 
        Submited = <any> 'Submited',
        Approved = <any> 'Approved',
        Rejected = <any> 'Rejected',
    }
}
