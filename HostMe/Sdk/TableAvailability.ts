
namespace HostMe.Sdk {
    'use strict';

    export interface TableAvailability {

        "minCoversRequired"?: number;

        "reservable"?: boolean;

        "hours"?: Array<WeekDayOpenHours>;
    }

}
