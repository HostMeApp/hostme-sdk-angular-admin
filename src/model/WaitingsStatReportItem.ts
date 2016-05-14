'use strict';
import * as models from './models';

export interface WaitingsStatReportItem {

    dimensions?: models.WaitingsStatDimensions;

    totalPartyCount?: number;

    totalSeatedCount?: number;

    totalCanceledCount?: number;

    minTimeToCall?: number;

    avgTimeToCall?: number;

    maxTimeToCall?: number;

    minTimeToSeat?: number;

    avgTimeToSeat?: number;

    maxTimeToSeat?: number;

    minTimeToCancel?: number;

    avgTimeToCancel?: number;

    maxTimeToCancel?: number;

    maxLine?: number;

    avgLine?: number;
}

