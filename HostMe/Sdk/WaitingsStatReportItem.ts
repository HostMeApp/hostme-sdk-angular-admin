
namespace HostMe.Sdk {
    'use strict';




    export interface WaitingsStatReportItem {



        "dimensions"?: WaitingsStatDimensions;



        "totalPartyCount"?: number;



        "totalHeadCount"?: number;



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



        /**
         * Maximum line position at a given period
         */

        "maxLine"?: number;



        "avgLine"?: number;

    }




}
