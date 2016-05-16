"use strict";
var auth = require('./auth');
'use strict';
var AdminWaitingManagementApi = (function () {
    function AdminWaitingManagementApi($http, $httpParamSerializer, basePath) {
        this.$http = $http;
        this.$httpParamSerializer = $httpParamSerializer;
        this.basePath = 'http://hostme-services-dev.azurewebsites.net';
        this.defaultHeaders = {};
        this.authentications = {
            'default': new auth.VoidAuth(),
            'oauth2': new auth.OAuth(),
        };
        if (basePath) {
            this.basePath = basePath;
        }
    }
    Object.defineProperty(AdminWaitingManagementApi.prototype, "accessToken", {
        set: function (token) {
            this.authentications.oauth2.accessToken = token;
        },
        enumerable: true,
        configurable: true
    });
    AdminWaitingManagementApi.prototype.extendObj = function (objA, objB) {
        for (var key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    };
    AdminWaitingManagementApi.prototype.addConfirmedWaiting = function (restaurantId, conf, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/confirmed'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling addConfirmedWaiting');
        }
        if (!conf) {
            throw new Error('Missing required parameter conf when calling addConfirmedWaiting');
        }
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            json: true,
            data: conf,
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
    AdminWaitingManagementApi.prototype.addNewWaiting = function (restaurantId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling addNewWaiting');
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
    AdminWaitingManagementApi.prototype.callWaitingParty = function (restaurantId, waitingItemId, tableNumber, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}/call'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'waitingItemId' + '}', String(waitingItemId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling callWaitingParty');
        }
        if (!waitingItemId) {
            throw new Error('Missing required parameter waitingItemId when calling callWaitingParty');
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
    AdminWaitingManagementApi.prototype.close = function (restaurantId, waitingItemId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}/close'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'waitingItemId' + '}', String(waitingItemId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling close');
        }
        if (!waitingItemId) {
            throw new Error('Missing required parameter waitingItemId when calling close');
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
    AdminWaitingManagementApi.prototype.closeAsCanceled = function (restaurantId, waitingItemId, origin, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}/cancel'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'waitingItemId' + '}', String(waitingItemId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling closeAsCanceled');
        }
        if (!waitingItemId) {
            throw new Error('Missing required parameter waitingItemId when calling closeAsCanceled');
        }
        if (!origin) {
            throw new Error('Missing required parameter origin when calling closeAsCanceled');
        }
        if (origin !== undefined) {
            queryParameters['origin'] = origin;
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
    AdminWaitingManagementApi.prototype.closeAsSeated = function (restaurantId, waitingItemId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}/sited'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'waitingItemId' + '}', String(waitingItemId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling closeAsSeated');
        }
        if (!waitingItemId) {
            throw new Error('Missing required parameter waitingItemId when calling closeAsSeated');
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
    AdminWaitingManagementApi.prototype.confirm = function (restaurantId, waitingItemId, conf, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}/confirm'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'waitingItemId' + '}', String(waitingItemId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling confirm');
        }
        if (!waitingItemId) {
            throw new Error('Missing required parameter waitingItemId when calling confirm');
        }
        if (!conf) {
            throw new Error('Missing required parameter conf when calling confirm');
        }
        var httpRequestParams = {
            method: 'PUT',
            url: localVarPath,
            json: true,
            data: conf,
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
    AdminWaitingManagementApi.prototype.getAllWaitings = function (restaurantId, queryOptions, area, groupSize, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getAllWaitings');
        }
        if (queryOptions !== undefined) {
            queryParameters['queryOptions'] = queryOptions;
        }
        if (area !== undefined) {
            queryParameters['area'] = area;
        }
        if (groupSize !== undefined) {
            queryParameters['groupSize'] = groupSize;
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
    AdminWaitingManagementApi.prototype.getMessages = function (restaurantId, waitingItemId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}/messages'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'waitingItemId' + '}', String(waitingItemId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getMessages');
        }
        if (!waitingItemId) {
            throw new Error('Missing required parameter waitingItemId when calling getMessages');
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
    AdminWaitingManagementApi.prototype.getRestaurantWaitingsStatistic = function (restaurantId, area, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/stats'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getRestaurantWaitingsStatistic');
        }
        if (area !== undefined) {
            queryParameters['area'] = area;
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
    AdminWaitingManagementApi.prototype.getTodayStats = function (restaurantId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/stats'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getTodayStats');
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
    AdminWaitingManagementApi.prototype.getUnreadMessagesCount = function (restaurantId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/messages/unread/count'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getUnreadMessagesCount');
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
    AdminWaitingManagementApi.prototype.getWaitingById = function (restaurantId, waitingItemId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'waitingItemId' + '}', String(waitingItemId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getWaitingById');
        }
        if (!waitingItemId) {
            throw new Error('Missing required parameter waitingItemId when calling getWaitingById');
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
    AdminWaitingManagementApi.prototype.getWaitingSettings = function (restaurantId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/settings'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getWaitingSettings');
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
    AdminWaitingManagementApi.prototype.getWaitingTimeByGroup = function (restaurantId, from, to, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/analytics/waitings/groupby/partysize'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getWaitingTimeByGroup');
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
    AdminWaitingManagementApi.prototype.getWaitingTimeByHour = function (restaurantId, from, to, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/analytics/waitings/groupby/hour'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getWaitingTimeByHour');
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
    AdminWaitingManagementApi.prototype.getWaitingTimeByLine = function (restaurantId, from, to, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/analytics/waitings/waitings/groupby/line'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getWaitingTimeByLine');
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
    AdminWaitingManagementApi.prototype.getWaitingTimeByMeal = function (restaurantId, from, to, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/analytics/waitings/groupby/mealtype'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getWaitingTimeByMeal');
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
    AdminWaitingManagementApi.prototype.getWaitingTimeByWeek = function (restaurantId, from, to, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/analytics/waitings/groupby/week'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getWaitingTimeByWeek');
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
    AdminWaitingManagementApi.prototype.getWaitingTimeByWeekDay = function (restaurantId, from, to, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/analytics/waitings/groupby/weekday'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getWaitingTimeByWeekDay');
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
    AdminWaitingManagementApi.prototype.getWaitingsForPeriod = function (restaurantId, from, to, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/analytics/waitings'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getWaitingsForPeriod');
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
    AdminWaitingManagementApi.prototype.getWaitingsGroupBy = function (restaurantId, groupBy, from, to, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/analytics/waitings/groupby'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getWaitingsGroupBy');
        }
        if (!groupBy) {
            throw new Error('Missing required parameter groupBy when calling getWaitingsGroupBy');
        }
        if (groupBy !== undefined) {
            queryParameters['groupBy'] = groupBy;
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
    AdminWaitingManagementApi.prototype.incoming = function (from, to, body, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/wm/admin/smsclient/incoming';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!from) {
            throw new Error('Missing required parameter from when calling incoming');
        }
        if (!to) {
            throw new Error('Missing required parameter to when calling incoming');
        }
        if (!body) {
            throw new Error('Missing required parameter body when calling incoming');
        }
        if (from !== undefined) {
            queryParameters['from'] = from;
        }
        if (to !== undefined) {
            queryParameters['to'] = to;
        }
        if (body !== undefined) {
            queryParameters['body'] = body;
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
        this.authentications.default.applyToRequest(httpRequestParams);
        return this.$http(httpRequestParams);
    };
    AdminWaitingManagementApi.prototype.markAllMessagesAsRead = function (restaurantId, waitingItemId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}/messages/readall'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'waitingItemId' + '}', String(waitingItemId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling markAllMessagesAsRead');
        }
        if (!waitingItemId) {
            throw new Error('Missing required parameter waitingItemId when calling markAllMessagesAsRead');
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
    AdminWaitingManagementApi.prototype.putOnHold = function (restaurantId, waitingItemId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}/putonhold'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'waitingItemId' + '}', String(waitingItemId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling putOnHold');
        }
        if (!waitingItemId) {
            throw new Error('Missing required parameter waitingItemId when calling putOnHold');
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
    AdminWaitingManagementApi.prototype.reOpenWaiting = function (restaurantId, waitingItemId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}/reopen'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'waitingItemId' + '}', String(waitingItemId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling reOpenWaiting');
        }
        if (!waitingItemId) {
            throw new Error('Missing required parameter waitingItemId when calling reOpenWaiting');
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
    AdminWaitingManagementApi.prototype.sendMessage = function (restaurantId, waitingItemId, origin, createMessage, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}/sendmessage'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'waitingItemId' + '}', String(waitingItemId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling sendMessage');
        }
        if (!waitingItemId) {
            throw new Error('Missing required parameter waitingItemId when calling sendMessage');
        }
        if (!origin) {
            throw new Error('Missing required parameter origin when calling sendMessage');
        }
        if (!createMessage) {
            throw new Error('Missing required parameter createMessage when calling sendMessage');
        }
        if (origin !== undefined) {
            queryParameters['origin'] = origin;
        }
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            json: true,
            data: createMessage,
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
    AdminWaitingManagementApi.prototype.setWaitingSettings = function (restaurantId, settings, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/settings'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling setWaitingSettings');
        }
        if (!settings) {
            throw new Error('Missing required parameter settings when calling setWaitingSettings');
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
    AdminWaitingManagementApi.prototype.takeOffHold = function (restaurantId, waitingItemId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}/takeoffhold'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'waitingItemId' + '}', String(waitingItemId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling takeOffHold');
        }
        if (!waitingItemId) {
            throw new Error('Missing required parameter waitingItemId when calling takeOffHold');
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
    AdminWaitingManagementApi.prototype.updateWaiting = function (restaurantId, waitingItemId, item, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'waitingItemId' + '}', String(waitingItemId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling updateWaiting');
        }
        if (!waitingItemId) {
            throw new Error('Missing required parameter waitingItemId when calling updateWaiting');
        }
        if (!item) {
            throw new Error('Missing required parameter item when calling updateWaiting');
        }
        var httpRequestParams = {
            method: 'PUT',
            url: localVarPath,
            json: true,
            data: item,
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
    AdminWaitingManagementApi.$inject = ['$http', '$httpParamSerializer'];
    return AdminWaitingManagementApi;
}());
exports.AdminWaitingManagementApi = AdminWaitingManagementApi;
//# sourceMappingURL=AdminWaitingManagementApi.js.map