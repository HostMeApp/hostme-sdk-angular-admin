'use strict';
import * as models from './models';

export interface Message {

    id?: number;

    body?: string;

    time?: Date;

    origin?: string;

    isAutoMessage?: boolean;

    deliveryStatus?: string;

    deliveryTime?: Date;

    deliveryFailureReason?: string;

    isRead?: boolean;
}

