
namespace HostMe.Sdk {
    'use strict';




    export interface AvailabilityResponse {



        "availabilities"?: Array<Availability>;



        "requestedTime"?: Date;



        "totalCovers"?: number;



        "totalReservationCovers"?: number;



        "totalWaitCovers"?: number;



        "unitType"?: AvailabilityResponse.UnitTypeEnum;

    }


    export namespace AvailabilityResponse {













        export enum UnitTypeEnum { 
            Cover = <any> 'Cover',
            Table = <any> 'Table',
            Default = <any> 'Default'
        }


    }



}
