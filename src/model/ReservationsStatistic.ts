'use strict';
import * as models from './models';

export interface ReservationsStatistic {

    today?: number;

    week?: number;

    canceled?: number;

    breakfast?: models.ReservationsDaypartStats;

    lunch?: models.ReservationsDaypartStats;

    dinner?: models.ReservationsDaypartStats;
}

