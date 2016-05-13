'use strict';
import * as models from './models';

export interface RewardConditions {

    availableHours?: Array<models.WeekDayOpenHours>;

    membershipLevel?: string;
}

