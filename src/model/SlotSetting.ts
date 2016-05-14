'use strict';
import * as models from './models';

export interface SlotSetting {

    interval?: models.WeekDayOpenHours;

    maxCoversPerSlot?: number;
}

