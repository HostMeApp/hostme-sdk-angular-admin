'use strict';
var Availability;
(function (Availability) {
    (function (AvailabilityLevelEnum) {
        AvailabilityLevelEnum[AvailabilityLevelEnum["Available"] = 'Available'] = "Available";
        AvailabilityLevelEnum[AvailabilityLevelEnum["AvailableForWait"] = 'AvailableForWait'] = "AvailableForWait";
        AvailabilityLevelEnum[AvailabilityLevelEnum["NotEnoughCovers"] = 'NotEnoughCovers'] = "NotEnoughCovers";
        AvailabilityLevelEnum[AvailabilityLevelEnum["Overbooked"] = 'Overbooked'] = "Overbooked";
    })(Availability.AvailabilityLevelEnum || (Availability.AvailabilityLevelEnum = {}));
    var AvailabilityLevelEnum = Availability.AvailabilityLevelEnum;
})(Availability = exports.Availability || (exports.Availability = {}));
//# sourceMappingURL=Availability.js.map