'use strict';
var RedeemRequest;
(function (RedeemRequest) {
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Submited"] = 'Submited'] = "Submited";
        StatusEnum[StatusEnum["Approved"] = 'Approved'] = "Approved";
        StatusEnum[StatusEnum["Rejected"] = 'Rejected'] = "Rejected";
    })(RedeemRequest.StatusEnum || (RedeemRequest.StatusEnum = {}));
    var StatusEnum = RedeemRequest.StatusEnum;
})(RedeemRequest = exports.RedeemRequest || (exports.RedeemRequest = {}));
//# sourceMappingURL=RedeemRequest.js.map