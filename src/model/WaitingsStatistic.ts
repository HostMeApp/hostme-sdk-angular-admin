'use strict';
import * as models from './models';

export interface WaitingsStatistic {

    inList?: number;

    called?: number;

    tablesAvailable?: number;

    oneTwoGroup?: models.AverageWaitingTime;

    threeFourGroup?: models.AverageWaitingTime;

    fiveSixGroup?: models.AverageWaitingTime;
}

