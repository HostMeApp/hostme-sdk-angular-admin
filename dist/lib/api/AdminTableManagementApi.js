"use strict";
var auth = require('./auth');
'use strict';
var AdminTableManagementApi = (function () {
    function AdminTableManagementApi($http, config, $httpParamSerializer) {
        this.$http = $http;
        this.config = config;
        this.$httpParamSerializer = $httpParamSerializer;
        this.defaultHeaders = {};
        this.authentications = {
            'default': new auth.VoidAuth(),
            'oauth2': new auth.OAuth(),
        };
    }
    Object.defineProperty(AdminTableManagementApi.prototype, "accessToken", {
        set: function (token) {
            this.authentications.oauth2.accessToken = token;
        },
        enumerable: true,
        configurable: true
    });
    AdminTableManagementApi.prototype.extendObj = function (objA, objB) {
        for (var key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    };
    AdminTableManagementApi.prototype.createNewFloor = function (restaurantId, floor, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/tm/admin/restaurants/{restaurantId}/floors'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling createNewFloor');
        }
        if (!floor) {
            throw new Error('Missing required parameter floor when calling createNewFloor');
        }
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            json: true,
            data: floor,
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
    AdminTableManagementApi.prototype.createOrUpdateTableConfiguration = function (restaurantId, tables, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/tm/admin/restaurants/{restaurantId}/tables'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling createOrUpdateTableConfiguration');
        }
        if (!tables) {
            throw new Error('Missing required parameter tables when calling createOrUpdateTableConfiguration');
        }
        var httpRequestParams = {
            method: 'PUT',
            url: localVarPath,
            json: true,
            data: tables,
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
    AdminTableManagementApi.prototype.deleteFloor = function (restaurantId, floorId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/tm/admin/restaurants/{restaurantId}/floors/{floorId}'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'floorId' + '}', String(floorId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling deleteFloor');
        }
        if (!floorId) {
            throw new Error('Missing required parameter floorId when calling deleteFloor');
        }
        var httpRequestParams = {
            method: 'DELETE',
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
    AdminTableManagementApi.prototype.getAllTableCombinations = function (restaurantId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/tm/admin/restaurants/{restaurantId}/tables/combinations'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getAllTableCombinations');
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
    AdminTableManagementApi.prototype.getApprovedTableCombinations = function (restaurantId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/tm/admin/restaurants/{restaurantId}/tables/combinations/approved'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getApprovedTableCombinations');
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
    AdminTableManagementApi.prototype.getAvailableTables = function (restaurantId, date, partySize, areas, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/tm/admin/restaurants/{restaurantId}/tables/available'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getAvailableTables');
        }
        if (!date) {
            throw new Error('Missing required parameter date when calling getAvailableTables');
        }
        if (!partySize) {
            throw new Error('Missing required parameter partySize when calling getAvailableTables');
        }
        if (date !== undefined) {
            queryParameters['date'] = date;
        }
        if (partySize !== undefined) {
            queryParameters['partySize'] = partySize;
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
    AdminTableManagementApi.prototype.getFloorDetails = function (restaurantId, floorId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/tm/admin/restaurants/{restaurantId}/floors/{floorId}'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'floorId' + '}', String(floorId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getFloorDetails');
        }
        if (!floorId) {
            throw new Error('Missing required parameter floorId when calling getFloorDetails');
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
    AdminTableManagementApi.prototype.getRestaurantFloors = function (restaurantId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/tm/admin/restaurants/{restaurantId}/floors'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getRestaurantFloors');
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
    AdminTableManagementApi.prototype.getTableMonitors = function (restaurantId, tableTurnOver, time, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/tm/admin/restaurants/{restaurantId}/tables/monitors'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getTableMonitors');
        }
        if (tableTurnOver !== undefined) {
            queryParameters['tableTurnOver'] = tableTurnOver;
        }
        if (time !== undefined) {
            queryParameters['time'] = time;
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
    AdminTableManagementApi.prototype.getTableUsersList = function (restaurantId, partySize, time, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/tm/admin/restaurants/{restaurantId}/tables/users'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getTableUsersList');
        }
        if (partySize !== undefined) {
            queryParameters['partySize'] = partySize;
        }
        if (time !== undefined) {
            queryParameters['time'] = time;
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
    AdminTableManagementApi.prototype.getTables = function (restaurantId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/tm/admin/restaurants/{restaurantId}/tables'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getTables');
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
    AdminTableManagementApi.prototype.releaseTable = function (restaurantId, tableNumber, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/tm/admin/restaurants/{restaurantId}/tables/{tableNumber}/release'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'tableNumber' + '}', String(tableNumber));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling releaseTable');
        }
        if (!tableNumber) {
            throw new Error('Missing required parameter tableNumber when calling releaseTable');
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
    AdminTableManagementApi.prototype.seatPartyAtTable = function (restaurantId, tableNumber, partySize, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/tm/admin/restaurants/{restaurantId}/tables/{tableNumber}/seat'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'tableNumber' + '}', String(tableNumber));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling seatPartyAtTable');
        }
        if (!tableNumber) {
            throw new Error('Missing required parameter tableNumber when calling seatPartyAtTable');
        }
        if (!partySize) {
            throw new Error('Missing required parameter partySize when calling seatPartyAtTable');
        }
        if (partySize !== undefined) {
            queryParameters['partySize'] = partySize;
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
    AdminTableManagementApi.prototype.setApprovedTableCombinations = function (restaurantId, combinations, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/tm/admin/restaurants/{restaurantId}/tables/combinations/approved'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling setApprovedTableCombinations');
        }
        if (!combinations) {
            throw new Error('Missing required parameter combinations when calling setApprovedTableCombinations');
        }
        var httpRequestParams = {
            method: 'PUT',
            url: localVarPath,
            json: true,
            data: combinations,
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
    AdminTableManagementApi.prototype.updateFloor = function (restaurantId, floorId, floor, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/tm/admin/restaurants/{restaurantId}/floors/{floorId}'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'floorId' + '}', String(floorId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling updateFloor');
        }
        if (!floorId) {
            throw new Error('Missing required parameter floorId when calling updateFloor');
        }
        if (!floor) {
            throw new Error('Missing required parameter floor when calling updateFloor');
        }
        var httpRequestParams = {
            method: 'PUT',
            url: localVarPath,
            json: true,
            data: floor,
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
    AdminTableManagementApi.$inject = ['$http', 'IApiConfig', '$httpParamSerializer'];
    return AdminTableManagementApi;
}());
exports.AdminTableManagementApi = AdminTableManagementApi;
//# sourceMappingURL=AdminTableManagementApi.js.map