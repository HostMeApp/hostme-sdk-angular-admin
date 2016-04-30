
namespace HostMe.Sdk {
    'use strict';

    export interface WaitingsStatReportItem {

        "dimensions"?: WaitingsStatDimensions;

        "totalPartyCount"?: number;

        "totalSeatedCount"?: number;

        "totalCanceledCount"?: number;

        "minTimeToCall"?: number;

        "avgTimeToCall"?: number;

        "maxTimeToCall"?: number;

        "minTimeToSeat"?: number;

        "avgTimeToSeat"?: number;

        "maxTimeToSeat"?: number;

        "minTimeToCancel"?: number;

        "avgTimeToCancel"?: number;

        "maxTimeToCancel"?: number;

        "maxLine"?: number;

        "avgLine"?: number;
    }

}
