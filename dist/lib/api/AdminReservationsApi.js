"use strict";
var auth = require('./auth');
'use strict';
var AdminReservationsApi = (function () {
    function AdminReservationsApi($http, config, $httpParamSerializer) {
        this.$http = $http;
        this.config = config;
        this.$httpParamSerializer = $httpParamSerializer;
        this.defaultHeaders = {};
        this.authentications = {
            'default': new auth.VoidAuth(),
            'oauth2': new auth.OAuth(),
        };
    }
    Object.defineProperty(AdminReservationsApi.prototype, "accessToken", {
        set: function (token) {
            this.authentications.oauth2.accessToken = token;
        },
        enumerable: true,
        configurable: true
    });
    AdminReservationsApi.prototype.extendObj = function (objA, objB) {
        for (var key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    };
    AdminReservationsApi.prototype.addNewReservation = function (restaurantId, value, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/rsv/admin/restaurants/{restaurantId}/reservations'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling addNewReservation');
        }
        if (!value) {
            throw new Error('Missing required parameter value when calling addNewReservation');
        }
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            json: true,
            data: value,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
        }
        this.authentications.oauth2.applyToRequest(httpRequestParams);
        this.authentications.default.applyToRequest(httpRequestParams);
        return this.$http(httpRequestParams);
    };
    AdminReservationsApi.prototype.cancelReservation = function (restaurantId, reservationId, cancelReservationContract, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/rsv/admin/restaurants/{restaurantId}/reservations/{reservationId}/cancel'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'reservationId' + '}', String(reservationId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling cancelReservation');
        }
        if (!reservationId) {
            throw new Error('Missing required parameter reservationId when calling cancelReservation');
        }
        if (!cancelReservationContract) {
            throw new Error('Missing required parameter cancelReservationContract when calling cancelReservation');
        }
        var httpRequestParams = {
            method: 'PUT',
            url: localVarPath,
            json: true,
            data: cancelReservationContract,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
        }
        this.authentications.oauth2.applyToRequest(httpRequestParams);
        this.authentications.default.applyToRequest(httpRequestParams);
        return this.$http(httpRequestParams);
    };
    AdminReservationsApi.prototype.closeAsNoShow = function (restaurantId, reservationId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/rsv/admin/restaurants/{restaurantId}/reservations/{reservationId}/noshow'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'reservationId' + '}', String(reservationId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling closeAsNoShow');
        }
        if (!reservationId) {
            throw new Error('Missing required parameter reservationId when calling closeAsNoShow');
        }
        var httpRequestParams = {
            method: 'PUT',
            url: localVarPath,
            json: true,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
        }
        this.authentications.oauth2.applyToRequest(httpRequestParams);
        this.authentications.default.applyToRequest(httpRequestParams);
        return this.$http(httpRequestParams);
    };
    AdminReservationsApi.prototype.closeAsSeated = function (restaurantId, reservationId, tableNumber, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/rsv/admin/restaurants/{restaurantId}/reservations/{reservationId}/seat'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'reservationId' + '}', String(reservationId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling closeAsSeated');
        }
        if (!reservationId) {
            throw new Error('Missing required parameter reservationId when calling closeAsSeated');
        }
        if (tableNumber !== undefined) {
            queryParameters['tableNumber'] = tableNumber;
        }
        var httpRequestParams = {
            method: 'PUT',
            url: localVarPath,
            json: true,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
        }
        this.authentications.oauth2.applyToRequest(httpRequestParams);
        this.authentications.default.applyToRequest(httpRequestParams);
        return this.$http(httpRequestParams);
    };
    AdminReservationsApi.prototype.getMessages = function (restaurantId, reservationId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/rsv/admin/restaurants/{restaurantId}/reservations/{reservationId}/messages'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'reservationId' + '}', String(reservationId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getMessages');
        }
        if (!reservationId) {
            throw new Error('Missing required parameter reservationId when calling getMessages');
        }
        var httpRequestParams = {
            method: 'GET',
            url: localVarPath,
            json: true,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
        }
        this.authentications.oauth2.applyToRequest(httpRequestParams);
        this.authentications.default.applyToRequest(httpRequestParams);
        return this.$http(httpRequestParams);
    };
    AdminReservationsApi.prototype.getReservationAvailability = function (restaurantId, date, partySize, rangeInMinutes, tableTurnOver, type, areas, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/rsv/admin/restaurants/{restaurantId}/availability'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getReservationAvailability');
        }
        if (!date) {
            throw new Error('Missing required parameter date when calling getReservationAvailability');
        }
        if (!partySize) {
            throw new Error('Missing required parameter partySize when calling getReservationAvailability');
        }
        if (!rangeInMinutes) {
            throw new Error('Missing required parameter rangeInMinutes when calling getReservationAvailability');
        }
        if (date !== undefined) {
            queryParameters['date'] = date;
        }
        if (partySize !== undefined) {
            queryParameters['partySize'] = partySize;
        }
        if (rangeInMinutes !== undefined) {
            queryParameters['rangeInMinutes'] = rangeInMinutes;
        }
        if (tableTurnOver !== undefined) {
            queryParameters['tableTurnOver'] = tableTurnOver;
        }
        if (type !== undefined) {
            queryParameters['type'] = type;
        }
        if (areas !== undefined) {
            queryParameters['areas'] = areas;
        }
        var httpRequestParams = {
            method: 'GET',
            url: localVarPath,
            json: true,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
        }
        this.authentications.oauth2.applyToRequest(httpRequestParams);
        this.authentications.default.applyToRequest(httpRequestParams);
        return this.$http(httpRequestParams);
    };
    AdminReservationsApi.prototype.getReservationById = function (restaurantId, reservationId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/rsv/admin/restaurants/{restaurantId}/reservations/{reservationId}'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'reservationId' + '}', String(reservationId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getReservationById');
        }
        if (!reservationId) {
            throw new Error('Missing required parameter reservationId when calling getReservationById');
        }
        var httpRequestParams = {
            method: 'GET',
            url: localVarPath,
            json: true,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
        }
        this.authentications.oauth2.applyToRequest(httpRequestParams);
        this.authentications.default.applyToRequest(httpRequestParams);
        return this.$http(httpRequestParams);
    };
    AdminReservationsApi.prototype.getReservationSettings = function (restaurantId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/rsv/admin/restaurants/{restaurantId}/settings'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getReservationSettings');
        }
        var httpRequestParams = {
            method: 'GET',
            url: localVarPath,
            json: true,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
        }
        this.authentications.oauth2.applyToRequest(httpRequestParams);
        this.authentications.default.applyToRequest(httpRequestParams);
        return this.$http(httpRequestParams);
    };
    AdminReservationsApi.prototype.getReservationsForPeriod = function (restaurantId, from, to, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/rsv/admin/restaurants/{restaurantId}/reservations'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getReservationsForPeriod');
        }
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (to !== undefined) {
            queryParameters['to'] = to;
        }
        var httpRequestParams = {
            method: 'GET',
            url: localVarPath,
            json: true,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
        }
        this.authentications.oauth2.applyToRequest(httpRequestParams);
        this.authentications.default.applyToRequest(httpRequestParams);
        return this.$http(httpRequestParams);
    };
    AdminReservationsApi.prototype.getRestaurantReservationsStatistic = function (restaurantId, date, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/rsv/admin/restaurants/{restaurantId}/reservations/stats'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getRestaurantReservationsStatistic');
        }
        if (date !== undefined) {
            queryParameters['date'] = date;
        }
        var httpRequestParams = {
            method: 'GET',
            url: localVarPath,
            json: true,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
        }
        this.authentications.oauth2.applyToRequest(httpRequestParams);
        this.authentications.default.applyToRequest(httpRequestParams);
        return this.$http(httpRequestParams);
    };
    AdminReservationsApi.prototype.getUnreadMessagesCount = function (restaurantId, from, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/rsv/admin/restaurants/{restaurantId}/reservations/messages/unread/count'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getUnreadMessagesCount');
        }
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        var httpRequestParams = {
            method: 'GET',
            url: localVarPath,
            json: true,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
        }
        this.authentications.oauth2.applyToRequest(httpRequestParams);
        this.authentications.default.applyToRequest(httpRequestParams);
        return this.$http(httpRequestParams);
    };
    AdminReservationsApi.prototype.placeOnWaitList = function (restaurantId, reservationId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/rsv/admin/restaurants/{restaurantId}/reservations/{reservationId}/schedule'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'reservationId' + '}', String(reservationId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling placeOnWaitList');
        }
        if (!reservationId) {
            throw new Error('Missing required parameter reservationId when calling placeOnWaitList');
        }
        var httpRequestParams = {
            method: 'PUT',
            url: localVarPath,
            json: true,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
        }
        this.authentications.oauth2.applyToRequest(httpRequestParams);
        this.authentications.default.applyToRequest(httpRequestParams);
        return this.$http(httpRequestParams);
    };
    AdminReservationsApi.prototype.reOpenReservation = function (restaurantId, reservationId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/rsv/admin/restaurants/{restaurantId}/reservations/{reservationId}/reopen'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'reservationId' + '}', String(reservationId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling reOpenReservation');
        }
        if (!reservationId) {
            throw new Error('Missing required parameter reservationId when calling reOpenReservation');
        }
        var httpRequestParams = {
            method: 'PUT',
            url: localVarPath,
            json: true,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
        }
        this.authentications.oauth2.applyToRequest(httpRequestParams);
        this.authentications.default.applyToRequest(httpRequestParams);
        return this.$http(httpRequestParams);
    };
    AdminReservationsApi.prototype.readAllMessage = function (restaurantId, reservationId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/rsv/admin/restaurants/{restaurantId}/reservations/{reservationId}/messages/readall'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'reservationId' + '}', String(reservationId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling readAllMessage');
        }
        if (!reservationId) {
            throw new Error('Missing required parameter reservationId when calling readAllMessage');
        }
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            json: true,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
        }
        this.authentications.oauth2.applyToRequest(httpRequestParams);
        this.authentications.default.applyToRequest(httpRequestParams);
        return this.$http(httpRequestParams);
    };
    AdminReservationsApi.prototype.sendGrid = function (from, html, text, to, subject, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/rsv/admin/email/yelp';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!from) {
            throw new Error('Missing required parameter from when calling sendGrid');
        }
        if (!html) {
            throw new Error('Missing required parameter html when calling sendGrid');
        }
        if (!text) {
            throw new Error('Missing required parameter text when calling sendGrid');
        }
        if (!to) {
            throw new Error('Missing required parameter to when calling sendGrid');
        }
        if (!subject) {
            throw new Error('Missing required parameter subject when calling sendGrid');
        }
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (html !== undefined) {
            queryParameters['html'] = html;
        }
        if (text !== undefined) {
            queryParameters['text'] = text;
        }
        if (to !== undefined) {
            queryParameters['to'] = to;
        }
        if (subject !== undefined) {
            queryParameters['subject'] = subject;
        }
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            json: true,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
        }
        this.authentications.default.applyToRequest(httpRequestParams);
        return this.$http(httpRequestParams);
    };
    AdminReservationsApi.prototype.sendMessage = function (restaurantId, reservationId, createMessageContract, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/rsv/admin/restaurants/{restaurantId}/reservations/{reservationId}/messages'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'reservationId' + '}', String(reservationId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling sendMessage');
        }
        if (!reservationId) {
            throw new Error('Missing required parameter reservationId when calling sendMessage');
        }
        if (!createMessageContract) {
            throw new Error('Missing required parameter createMessageContract when calling sendMessage');
        }
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            json: true,
            data: createMessageContract,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
        }
        this.authentications.oauth2.applyToRequest(httpRequestParams);
        this.authentications.default.applyToRequest(httpRequestParams);
        return this.$http(httpRequestParams);
    };
    AdminReservationsApi.prototype.setReservationSettings = function (restaurantId, settings, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/rsv/admin/restaurants/{restaurantId}/settings'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling setReservationSettings');
        }
        if (!settings) {
            throw new Error('Missing required parameter settings when calling setReservationSettings');
        }
        var httpRequestParams = {
            method: 'PUT',
            url: localVarPath,
            json: true,
            data: settings,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
        }
        this.authentications.oauth2.applyToRequest(httpRequestParams);
        this.authentications.default.applyToRequest(httpRequestParams);
        return this.$http(httpRequestParams);
    };
    AdminReservationsApi.prototype.submitYelpReservation = function (extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/rsv/admin/email/yelp/inbound';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            json: true,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
        }
        this.authentications.default.applyToRequest(httpRequestParams);
        return this.$http(httpRequestParams);
    };
    AdminReservationsApi.prototype.updateReservation = function (restaurantId, reservationId, value, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/rsv/admin/restaurants/{restaurantId}/reservations/{reservationId}'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'reservationId' + '}', String(reservationId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling updateReservation');
        }
        if (!reservationId) {
            throw new Error('Missing required parameter reservationId when calling updateReservation');
        }
        if (!value) {
            throw new Error('Missing required parameter value when calling updateReservation');
        }
        var httpRequestParams = {
            method: 'PUT',
            url: localVarPath,
            json: true,
            data: value,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
        }
        this.authentications.oauth2.applyToRequest(httpRequestParams);
        this.authentications.default.applyToRequest(httpRequestParams);
        return this.$http(httpRequestParams);
    };
    AdminReservationsApi.$inject = ['$http', 'IApiConfig', '$httpParamSerializer'];
    return AdminReservationsApi;
}());
exports.AdminReservationsApi = AdminReservationsApi;
//# sourceMappingURL=AdminReservationsApi.js.map