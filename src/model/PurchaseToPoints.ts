'use strict';
import * as models from './models';

export interface PurchaseToPoints {

    flatPoints?: number;

    maxAmount?: number;

    method?: string;

    minAmount?: number;

    pointsPerCent?: number;
}

