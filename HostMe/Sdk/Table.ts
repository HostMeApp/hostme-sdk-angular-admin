
namespace HostMe.Sdk {
    'use strict';

    export interface Table {

        "tableNumber"?: string;

        "tableTopSize"?: number;

        "area"?: string;

        "tags"?: Array<string>;

        "reservability"?: TableAvailability;

        "waitability"?: TableAvailability;
    }

}
