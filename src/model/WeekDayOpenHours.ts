'use strict';
import * as models from './models';

export interface WeekDayOpenHours {

    time?: Array<models.HourlyInterval>;

    weekDay?: number;
}

