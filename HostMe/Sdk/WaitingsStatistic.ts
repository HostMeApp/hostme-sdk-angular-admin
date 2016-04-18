
namespace HostMe.Sdk {
    'use strict';

    export interface WaitingsStatistic {

        "inList"?: number;

        "called"?: number;

        "tablesAvailable"?: number;

        "oneTwoGroup"?: AverageWaitingTime;

        "threeFourGroup"?: AverageWaitingTime;

        "fiveSixGroup"?: AverageWaitingTime;
    }

}
