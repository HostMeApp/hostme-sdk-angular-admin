'use strict';
import * as models from './models';

export interface WaitingReportItem {

    status?: string;

    created?: string;

    groupSize?: number;

    startPosition?: number;

    timeToCall?: number;

    timeToSeat?: number;

    timeToCancel?: number;
}

