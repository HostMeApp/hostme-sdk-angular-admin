
namespace HostMe.Sdk {
    'use strict';

    export interface ReservationsStatistic {

        "today"?: number;

        "week"?: number;

        "canceled"?: number;

        "breakfast"?: ReservationsDaypartStats;

        "lunch"?: ReservationsDaypartStats;

        "dinner"?: ReservationsDaypartStats;
    }

}
