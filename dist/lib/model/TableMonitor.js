'use strict';
var TableMonitor;
(function (TableMonitor) {
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Available"] = 'Available'] = "Available";
        StatusEnum[StatusEnum["Busy"] = 'Busy'] = "Busy";
        StatusEnum[StatusEnum["Assigned"] = 'Assigned'] = "Assigned";
        StatusEnum[StatusEnum["Reserved"] = 'Reserved'] = "Reserved";
    })(TableMonitor.StatusEnum || (TableMonitor.StatusEnum = {}));
    var StatusEnum = TableMonitor.StatusEnum;
})(TableMonitor = exports.TableMonitor || (exports.TableMonitor = {}));
//# sourceMappingURL=TableMonitor.js.map