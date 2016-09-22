(function(f) {
    if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = f()
    } else if (typeof define === "function" && define.amd) {
        define([], f)
    } else {
        var g;
        if (typeof window !== "undefined") {
            g = window
        } else if (typeof global !== "undefined") {
            g = global
        } else if (typeof self !== "undefined") {
            g = self
        } else {
            g = this
        }
        g.listComponent = f()
    }
})(function() {
        var define, module, exports;
require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var auth = require('./auth');
'use strict';
var AdminCoreApi = (function () {
    function AdminCoreApi($http, config, $httpParamSerializer) {
        this.$http = $http;
        this.config = config;
        this.$httpParamSerializer = $httpParamSerializer;
        this.defaultHeaders = {};
        this.authentications = {
            'default': new auth.VoidAuth(),
            'oauth2': new auth.OAuth(),
        };
    }
    Object.defineProperty(AdminCoreApi.prototype, "accessToken", {
        set: function (token) {
            this.authentications.oauth2.accessToken = token;
        },
        enumerable: true,
        configurable: true
    });
    AdminCoreApi.prototype.extendObj = function (objA, objB) {
        for (var key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    };
    AdminCoreApi.prototype.addNewRestaurant = function (value, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/admin/restaurants';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!value) {
            throw new Error('Missing required parameter value when calling addNewRestaurant');
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
    AdminCoreApi.prototype.addRestaurantZone = function (restaurantId, contract, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/admin/restaurants/{restaurantId}/zones'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling addRestaurantZone');
        }
        if (!contract) {
            throw new Error('Missing required parameter contract when calling addRestaurantZone');
        }
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            json: true,
            data: contract,
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
    AdminCoreApi.prototype.addWaiter = function (restaurantId, contract, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/admin/restaurants/{restaurantId}/waiters'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling addWaiter');
        }
        if (!contract) {
            throw new Error('Missing required parameter contract when calling addWaiter');
        }
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            json: true,
            data: contract,
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
    AdminCoreApi.prototype.addWaiterToZone = function (restaurantId, zoneId, contract, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/admin/restaurants/{restaurantId}/zones/{zoneId}/waiter'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'zoneId' + '}', String(zoneId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling addWaiterToZone');
        }
        if (!zoneId) {
            throw new Error('Missing required parameter zoneId when calling addWaiterToZone');
        }
        if (!contract) {
            throw new Error('Missing required parameter contract when calling addWaiterToZone');
        }
        var httpRequestParams = {
            method: 'PUT',
            url: localVarPath,
            json: true,
            data: contract,
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
    AdminCoreApi.prototype.assignWaiterToTable = function (restaurantId, tableNumber, contract, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/admin/restaurants/{restaurantId}/tables/{tableNumber}/waiter'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'tableNumber' + '}', String(tableNumber));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling assignWaiterToTable');
        }
        if (!tableNumber) {
            throw new Error('Missing required parameter tableNumber when calling assignWaiterToTable');
        }
        if (!contract) {
            throw new Error('Missing required parameter contract when calling assignWaiterToTable');
        }
        var httpRequestParams = {
            method: 'PUT',
            url: localVarPath,
            json: true,
            data: contract,
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
    AdminCoreApi.prototype.changePassword = function (model, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/admin/account/password/change';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!model) {
            throw new Error('Missing required parameter model when calling changePassword');
        }
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            json: true,
            data: model,
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
    AdminCoreApi.prototype.checkInvitationCode = function (invitationCode, restaurantId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/admin/restaurants/{restaurantId}/invitations/{invitationCode}'
            .replace('{' + 'invitationCode' + '}', String(invitationCode))
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!invitationCode) {
            throw new Error('Missing required parameter invitationCode when calling checkInvitationCode');
        }
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling checkInvitationCode');
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
    AdminCoreApi.prototype.createInvitationCode = function (restaurantId, invitation, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/admin/restaurants/{restaurantId}/invitations'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling createInvitationCode');
        }
        if (!invitation) {
            throw new Error('Missing required parameter invitation when calling createInvitationCode');
        }
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            json: true,
            data: invitation,
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
    AdminCoreApi.prototype.createNewAccountWithRestaurant = function (value, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/admin/tenant/restaurants';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!value) {
            throw new Error('Missing required parameter value when calling createNewAccountWithRestaurant');
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
        this.authentications.default.applyToRequest(httpRequestParams);
        return this.$http(httpRequestParams);
    };
    AdminCoreApi.prototype.deleteInvitation = function (restaurantId, invitationCode, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/admin/restaurants/{restaurantId}/invitations/{invitationCode}'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'invitationCode' + '}', String(invitationCode));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling deleteInvitation');
        }
        if (!invitationCode) {
            throw new Error('Missing required parameter invitationCode when calling deleteInvitation');
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
    AdminCoreApi.prototype.deleteRestaurant = function (restaurantId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/admin/restaurants/{restaurantId}'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling deleteRestaurant');
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
    AdminCoreApi.prototype.deleteUser = function (restaurantId, userId, role, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/admin/restaurants/{restaurantId}/users/{userId}'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'userId' + '}', String(userId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling deleteUser');
        }
        if (!userId) {
            throw new Error('Missing required parameter userId when calling deleteUser');
        }
        if (!role) {
            throw new Error('Missing required parameter role when calling deleteUser');
        }
        if (role !== undefined) {
            queryParameters['role'] = role;
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
    AdminCoreApi.prototype.deleteWaiter = function (restaurantId, waiterId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/admin/restaurants/{restaurantId}/waiters/{waiterId}'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'waiterId' + '}', String(waiterId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling deleteWaiter');
        }
        if (!waiterId) {
            throw new Error('Missing required parameter waiterId when calling deleteWaiter');
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
    AdminCoreApi.prototype.deleteZone = function (restaurantId, zoneId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/admin/restaurants/{restaurantId}/zones/{zoneId}'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'zoneId' + '}', String(zoneId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling deleteZone');
        }
        if (!zoneId) {
            throw new Error('Missing required parameter zoneId when calling deleteZone');
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
    AdminCoreApi.prototype.findRestaurantsByUserPhone = function (phone, email, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/admin/tenant/restaurants/find';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (phone !== undefined) {
            queryParameters['phone'] = phone;
        }
        if (email !== undefined) {
            queryParameters['email'] = email;
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
    AdminCoreApi.prototype.findUserByPhoneAsync = function (phone, email, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/admin/tenant/users/find';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (phone !== undefined) {
            queryParameters['phone'] = phone;
        }
        if (email !== undefined) {
            queryParameters['email'] = email;
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
    AdminCoreApi.prototype.getAllUserRestaurants = function (extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/admin/restaurants';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
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
    AdminCoreApi.prototype.getCustomSettings = function (restaurantId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/admin/restaurants/{restaurantId}/settings/custom'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getCustomSettings');
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
    AdminCoreApi.prototype.getInvitations = function (restaurantId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/admin/restaurants/{restaurantId}/invitations'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getInvitations');
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
    AdminCoreApi.prototype.getRegistrationToken = function (restaurantId, tableNumber, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/admin/restaurants/{restaurantId}/loyalty/token'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getRegistrationToken');
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
    AdminCoreApi.prototype.getRestaurantById = function (restaurantId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/admin/restaurants/{restaurantId}'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getRestaurantById');
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
    AdminCoreApi.prototype.getRestaurantConfiguration = function (restaurantId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/admin/restaurants/{restaurantId}/config'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getRestaurantConfiguration');
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
    AdminCoreApi.prototype.getRestaurantSettings = function (restaurantId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/admin/restaurants/{restaurantId}/settings'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getRestaurantSettings');
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
    AdminCoreApi.prototype.getRestaurantZones = function (restaurantId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/admin/restaurants/{restaurantId}/zones'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getRestaurantZones');
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
    AdminCoreApi.prototype.getUserProfile = function (extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/admin/account/profile';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
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
    AdminCoreApi.prototype.getUsers = function (restaurantId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/admin/restaurants/{restaurantId}/users'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getUsers');
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
    AdminCoreApi.prototype.getWaiterZones = function (restaurantId, waiterId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/admin/restaurants/{restaurantId}/waiters/{waiterId}/zones'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'waiterId' + '}', String(waiterId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getWaiterZones');
        }
        if (!waiterId) {
            throw new Error('Missing required parameter waiterId when calling getWaiterZones');
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
    AdminCoreApi.prototype.getWaiters = function (restaurantId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/admin/restaurants/{restaurantId}/waiters'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getWaiters');
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
    AdminCoreApi.prototype.me = function (extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/admin/account/me';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
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
    AdminCoreApi.prototype.postProfileImage = function (image, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/admin/account/profile/image';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!image) {
            throw new Error('Missing required parameter image when calling postProfileImage');
        }
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            json: true,
            data: image,
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
    AdminCoreApi.prototype.profileImage = function (extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/admin/account/profile/image';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
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
    AdminCoreApi.prototype.register = function (model, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/admin/account/register';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!model) {
            throw new Error('Missing required parameter model when calling register');
        }
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            json: true,
            data: model,
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
    AdminCoreApi.prototype.reinvite = function (restaurantId, invitationCode, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/admin/restaurants/{restaurantId}/invitations/{invitationCode}/reinvite'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'invitationCode' + '}', String(invitationCode));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling reinvite');
        }
        if (!invitationCode) {
            throw new Error('Missing required parameter invitationCode when calling reinvite');
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
    AdminCoreApi.prototype.removeWaiterFromZone = function (restaurantId, zoneId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/admin/restaurants/{restaurantId}/zones/{zoneId}/waiter'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'zoneId' + '}', String(zoneId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling removeWaiterFromZone');
        }
        if (!zoneId) {
            throw new Error('Missing required parameter zoneId when calling removeWaiterFromZone');
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
    AdminCoreApi.prototype.resetPassword = function (model, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/admin/account/password/reset';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!model) {
            throw new Error('Missing required parameter model when calling resetPassword');
        }
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            json: true,
            data: model,
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
    AdminCoreApi.prototype.setCustomSettings = function (restaurantId, settings, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/admin/restaurants/{restaurantId}/setting/custom'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling setCustomSettings');
        }
        if (!settings) {
            throw new Error('Missing required parameter settings when calling setCustomSettings');
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
    AdminCoreApi.prototype.setRestaurantSettings = function (restaurantId, settings, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/admin/restaurants/{restaurantId}/settings'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling setRestaurantSettings');
        }
        if (!settings) {
            throw new Error('Missing required parameter settings when calling setRestaurantSettings');
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
    AdminCoreApi.prototype.updateRestaurant = function (restaurantId, value, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/admin/restaurants/{restaurantId}'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling updateRestaurant');
        }
        if (!value) {
            throw new Error('Missing required parameter value when calling updateRestaurant');
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
    AdminCoreApi.prototype.updateRestaurantZone = function (restaurantId, zoneId, contract, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/admin/restaurants/{restaurantId}/zones/{zoneId}'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'zoneId' + '}', String(zoneId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling updateRestaurantZone');
        }
        if (!zoneId) {
            throw new Error('Missing required parameter zoneId when calling updateRestaurantZone');
        }
        if (!contract) {
            throw new Error('Missing required parameter contract when calling updateRestaurantZone');
        }
        var httpRequestParams = {
            method: 'PUT',
            url: localVarPath,
            json: true,
            data: contract,
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
    AdminCoreApi.prototype.updateUserProfile = function (profile, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/admin/account/profile';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!profile) {
            throw new Error('Missing required parameter profile when calling updateUserProfile');
        }
        var httpRequestParams = {
            method: 'PUT',
            url: localVarPath,
            json: true,
            data: profile,
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
    AdminCoreApi.prototype.updateWaiter = function (restaurantId, waiterId, contract, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/admin/restaurants/{restaurantId}/waiters/{waiterId}'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'waiterId' + '}', String(waiterId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling updateWaiter');
        }
        if (!waiterId) {
            throw new Error('Missing required parameter waiterId when calling updateWaiter');
        }
        if (!contract) {
            throw new Error('Missing required parameter contract when calling updateWaiter');
        }
        var httpRequestParams = {
            method: 'PUT',
            url: localVarPath,
            json: true,
            data: contract,
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
    AdminCoreApi.prototype.updateWaiterZone = function (restaurantId, waiterId, contract, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/admin/restaurants/{restaurantId}/waiters/{waiterId}/zones'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'waiterId' + '}', String(waiterId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling updateWaiterZone');
        }
        if (!waiterId) {
            throw new Error('Missing required parameter waiterId when calling updateWaiterZone');
        }
        if (!contract) {
            throw new Error('Missing required parameter contract when calling updateWaiterZone');
        }
        var httpRequestParams = {
            method: 'PUT',
            url: localVarPath,
            json: true,
            data: contract,
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
    AdminCoreApi.$inject = ['$http', 'IApiConfig', '$httpParamSerializer'];
    return AdminCoreApi;
}());
exports.AdminCoreApi = AdminCoreApi;

},{"./auth":8}],2:[function(require,module,exports){
"use strict";
var auth = require('./auth');
'use strict';
var AdminLoyaltyApi = (function () {
    function AdminLoyaltyApi($http, config, $httpParamSerializer) {
        this.$http = $http;
        this.config = config;
        this.$httpParamSerializer = $httpParamSerializer;
        this.defaultHeaders = {};
        this.authentications = {
            'default': new auth.VoidAuth(),
            'oauth2': new auth.OAuth(),
        };
    }
    Object.defineProperty(AdminLoyaltyApi.prototype, "accessToken", {
        set: function (token) {
            this.authentications.oauth2.accessToken = token;
        },
        enumerable: true,
        configurable: true
    });
    AdminLoyaltyApi.prototype.extendObj = function (objA, objB) {
        for (var key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    };
    AdminLoyaltyApi.prototype.addMember = function (restaurantId, contract, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/members'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling addMember');
        }
        if (!contract) {
            throw new Error('Missing required parameter contract when calling addMember');
        }
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            json: true,
            data: contract,
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
    AdminLoyaltyApi.prototype.addNewReward = function (restaurantId, reward, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/rewards'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling addNewReward');
        }
        if (!reward) {
            throw new Error('Missing required parameter reward when calling addNewReward');
        }
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            json: true,
            data: reward,
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
    AdminLoyaltyApi.prototype.approveRedeemRequest = function (restaurantId, redeemId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/redeems/{redeemId}/approve'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'redeemId' + '}', String(redeemId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling approveRedeemRequest');
        }
        if (!redeemId) {
            throw new Error('Missing required parameter redeemId when calling approveRedeemRequest');
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
    AdminLoyaltyApi.prototype.closeMembership = function (restaurantId, memberId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/members/{memberId}/close'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'memberId' + '}', String(memberId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling closeMembership');
        }
        if (!memberId) {
            throw new Error('Missing required parameter memberId when calling closeMembership');
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
    AdminLoyaltyApi.prototype.deleteReward = function (restaurantId, rewardId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/rewards/{rewardId}'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'rewardId' + '}', String(rewardId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling deleteReward');
        }
        if (!rewardId) {
            throw new Error('Missing required parameter rewardId when calling deleteReward');
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
    AdminLoyaltyApi.prototype.exportMembers = function (restaurantId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/members/export'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling exportMembers');
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
    AdminLoyaltyApi.prototype.filter = function (restaurantId, take, token, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/members/filter'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling filter');
        }
        if (!take) {
            throw new Error('Missing required parameter take when calling filter');
        }
        if (!token) {
            throw new Error('Missing required parameter token when calling filter');
        }
        if (take !== undefined) {
            queryParameters['take'] = take;
        }
        if (token !== undefined) {
            queryParameters['token'] = token;
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
    AdminLoyaltyApi.prototype.findMemberByPhoneNumber = function (restaurantId, phoneNumber, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/members/find'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling findMemberByPhoneNumber');
        }
        if (!phoneNumber) {
            throw new Error('Missing required parameter phoneNumber when calling findMemberByPhoneNumber');
        }
        if (phoneNumber !== undefined) {
            queryParameters['phoneNumber'] = phoneNumber;
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
    AdminLoyaltyApi.prototype.getAlRewards = function (restaurantId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/rewards'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getAlRewards');
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
    AdminLoyaltyApi.prototype.getAllMembers = function (restaurantId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/members'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getAllMembers');
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
    AdminLoyaltyApi.prototype.getAllRedeemRequests = function (restaurantId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/redeems'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getAllRedeemRequests');
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
    AdminLoyaltyApi.prototype.getDefaultLoyaltySettings = function (restaurantId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/settings/default'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getDefaultLoyaltySettings');
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
    AdminLoyaltyApi.prototype.getLoyaltySettings = function (restaurantId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/settings'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getLoyaltySettings');
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
    AdminLoyaltyApi.prototype.getMemberAvatar = function (restaurantId, memberId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/members/{memberId}/avatar'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'memberId' + '}', String(memberId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getMemberAvatar');
        }
        if (!memberId) {
            throw new Error('Missing required parameter memberId when calling getMemberAvatar');
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
    AdminLoyaltyApi.prototype.getMemberTransactions = function (restaurantId, memberId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/members/{memberId}/transactions'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'memberId' + '}', String(memberId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getMemberTransactions');
        }
        if (!memberId) {
            throw new Error('Missing required parameter memberId when calling getMemberTransactions');
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
    AdminLoyaltyApi.prototype.getMemberVisits = function (restaurantId, memberId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/members/{memberId}/visits'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'memberId' + '}', String(memberId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getMemberVisits');
        }
        if (!memberId) {
            throw new Error('Missing required parameter memberId when calling getMemberVisits');
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
    AdminLoyaltyApi.prototype.getMembershipInfo = function (restaurantId, memberId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/members/{memberId}'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'memberId' + '}', String(memberId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getMembershipInfo');
        }
        if (!memberId) {
            throw new Error('Missing required parameter memberId when calling getMembershipInfo');
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
    AdminLoyaltyApi.prototype.getRewardById = function (restaurantId, rewardId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/rewards/{rewardId}'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'rewardId' + '}', String(rewardId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getRewardById');
        }
        if (!rewardId) {
            throw new Error('Missing required parameter rewardId when calling getRewardById');
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
    AdminLoyaltyApi.prototype.publishReward = function (restaurantId, rewardId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/rewards/{rewardId}/publish'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'rewardId' + '}', String(rewardId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling publishReward');
        }
        if (!rewardId) {
            throw new Error('Missing required parameter rewardId when calling publishReward');
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
    AdminLoyaltyApi.prototype.rejectRedeemRequest = function (restaurantId, redeemId, reject, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/redeems/{redeemId}/reject'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'redeemId' + '}', String(redeemId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling rejectRedeemRequest');
        }
        if (!redeemId) {
            throw new Error('Missing required parameter redeemId when calling rejectRedeemRequest');
        }
        if (!reject) {
            throw new Error('Missing required parameter reject when calling rejectRedeemRequest');
        }
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            json: true,
            data: reject,
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
    AdminLoyaltyApi.prototype.setLoyaltySettings = function (restaurantId, settings, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/settings'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling setLoyaltySettings');
        }
        if (!settings) {
            throw new Error('Missing required parameter settings when calling setLoyaltySettings');
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
    AdminLoyaltyApi.prototype.unpublishReward = function (restaurantId, rewardId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/rewards/{rewardId}/unpublish'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'rewardId' + '}', String(rewardId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling unpublishReward');
        }
        if (!rewardId) {
            throw new Error('Missing required parameter rewardId when calling unpublishReward');
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
    AdminLoyaltyApi.prototype.updateMember = function (restaurantId, memberId, contract, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/members/{memberId}'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'memberId' + '}', String(memberId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling updateMember');
        }
        if (!memberId) {
            throw new Error('Missing required parameter memberId when calling updateMember');
        }
        if (!contract) {
            throw new Error('Missing required parameter contract when calling updateMember');
        }
        var httpRequestParams = {
            method: 'PUT',
            url: localVarPath,
            json: true,
            data: contract,
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
    AdminLoyaltyApi.prototype.updateReward = function (restaurantId, rewardId, reward, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/rewards/{rewardId}'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'rewardId' + '}', String(rewardId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling updateReward');
        }
        if (!rewardId) {
            throw new Error('Missing required parameter rewardId when calling updateReward');
        }
        if (!reward) {
            throw new Error('Missing required parameter reward when calling updateReward');
        }
        var httpRequestParams = {
            method: 'PUT',
            url: localVarPath,
            json: true,
            data: reward,
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
    AdminLoyaltyApi.$inject = ['$http', 'IApiConfig', '$httpParamSerializer'];
    return AdminLoyaltyApi;
}());
exports.AdminLoyaltyApi = AdminLoyaltyApi;

},{"./auth":8}],3:[function(require,module,exports){
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

},{"./auth":8}],4:[function(require,module,exports){
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
    AdminTableManagementApi.prototype.setTableState = function (restaurantId, tableNumber, stateContract, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/tm/admin/restaurants/{restaurantId}/tables/{tableNumber}/state'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'tableNumber' + '}', String(tableNumber));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling setTableState');
        }
        if (!tableNumber) {
            throw new Error('Missing required parameter tableNumber when calling setTableState');
        }
        if (!stateContract) {
            throw new Error('Missing required parameter stateContract when calling setTableState');
        }
        var httpRequestParams = {
            method: 'PUT',
            url: localVarPath,
            json: true,
            data: stateContract,
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

},{"./auth":8}],5:[function(require,module,exports){
"use strict";
var auth = require('./auth');
'use strict';
var AdminWaitingManagementApi = (function () {
    function AdminWaitingManagementApi($http, config, $httpParamSerializer) {
        this.$http = $http;
        this.config = config;
        this.$httpParamSerializer = $httpParamSerializer;
        this.defaultHeaders = {};
        this.authentications = {
            'default': new auth.VoidAuth(),
            'oauth2': new auth.OAuth(),
        };
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
        var localVarPath = this.config.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/confirmed'
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
        var localVarPath = this.config.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings'
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
        var localVarPath = this.config.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}/call'
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
        var localVarPath = this.config.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}/close'
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
        var localVarPath = this.config.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}/cancel'
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
        var localVarPath = this.config.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}/sited'
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
        var localVarPath = this.config.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}/confirm'
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
        var localVarPath = this.config.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings'
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
        var localVarPath = this.config.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}/messages'
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
        var localVarPath = this.config.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/stats'
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
        var localVarPath = this.config.basePath + '/api/wm/admin/restaurant/{restaurantId}/stats'
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
        var localVarPath = this.config.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/messages/unread/count'
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
        var localVarPath = this.config.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}'
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
        var localVarPath = this.config.basePath + '/api/wm/admin/restaurant/{restaurantId}/settings'
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
        var localVarPath = this.config.basePath + '/api/wm/admin/restaurant/{restaurantId}/analytics/waitings/groupby/partysize'
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
        var localVarPath = this.config.basePath + '/api/wm/admin/restaurant/{restaurantId}/analytics/waitings/groupby/hour'
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
        var localVarPath = this.config.basePath + '/api/wm/admin/restaurant/{restaurantId}/analytics/waitings/waitings/groupby/line'
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
        var localVarPath = this.config.basePath + '/api/wm/admin/restaurant/{restaurantId}/analytics/waitings/groupby/mealtype'
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
        var localVarPath = this.config.basePath + '/api/wm/admin/restaurant/{restaurantId}/analytics/waitings/groupby/week'
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
        var localVarPath = this.config.basePath + '/api/wm/admin/restaurant/{restaurantId}/analytics/waitings/groupby/weekday'
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
        var localVarPath = this.config.basePath + '/api/wm/admin/restaurant/{restaurantId}/analytics/waitings'
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
        var localVarPath = this.config.basePath + '/api/wm/admin/restaurant/{restaurantId}/analytics/waitings/groupby'
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
        var localVarPath = this.config.basePath + '/api/wm/admin/smsclient/incoming';
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
        var localVarPath = this.config.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}/messages/readall'
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
        var localVarPath = this.config.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}/putonhold'
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
        var localVarPath = this.config.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}/reopen'
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
        var localVarPath = this.config.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}/sendmessage'
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
        var localVarPath = this.config.basePath + '/api/wm/admin/restaurant/{restaurantId}/settings'
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
        var localVarPath = this.config.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}/takeoffhold'
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
        var localVarPath = this.config.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}'
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
    AdminWaitingManagementApi.$inject = ['$http', 'IApiConfig', '$httpParamSerializer'];
    return AdminWaitingManagementApi;
}());
exports.AdminWaitingManagementApi = AdminWaitingManagementApi;

},{"./auth":8}],6:[function(require,module,exports){
"use strict";
var auth = require('./auth');
'use strict';
var AdminWebHookManagementApi = (function () {
    function AdminWebHookManagementApi($http, config, $httpParamSerializer) {
        this.$http = $http;
        this.config = config;
        this.$httpParamSerializer = $httpParamSerializer;
        this.defaultHeaders = {};
        this.authentications = {
            'default': new auth.VoidAuth(),
            'oauth2': new auth.OAuth(),
        };
    }
    Object.defineProperty(AdminWebHookManagementApi.prototype, "accessToken", {
        set: function (token) {
            this.authentications.oauth2.accessToken = token;
        },
        enumerable: true,
        configurable: true
    });
    AdminWebHookManagementApi.prototype.extendObj = function (objA, objB) {
        for (var key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    };
    AdminWebHookManagementApi.prototype._delete = function (id, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/webhooks/registrations/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!id) {
            throw new Error('Missing required parameter id when calling _delete');
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
    AdminWebHookManagementApi.prototype.deleteAll = function (extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/webhooks/registrations';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
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
    AdminWebHookManagementApi.prototype.get = function (extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/webhooks/filters';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
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
    AdminWebHookManagementApi.prototype.get_1 = function (extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/webhooks/registrations';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
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
    AdminWebHookManagementApi.prototype.lookup = function (id, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/webhooks/registrations/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!id) {
            throw new Error('Missing required parameter id when calling lookup');
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
    AdminWebHookManagementApi.prototype.post = function (webHook, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/webhooks/registrations';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!webHook) {
            throw new Error('Missing required parameter webHook when calling post');
        }
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            json: true,
            data: webHook,
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
    AdminWebHookManagementApi.prototype.put = function (id, webHook, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/webhooks/registrations/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!id) {
            throw new Error('Missing required parameter id when calling put');
        }
        if (!webHook) {
            throw new Error('Missing required parameter webHook when calling put');
        }
        var httpRequestParams = {
            method: 'PUT',
            url: localVarPath,
            json: true,
            data: webHook,
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
    AdminWebHookManagementApi.$inject = ['$http', 'IApiConfig', '$httpParamSerializer'];
    return AdminWebHookManagementApi;
}());
exports.AdminWebHookManagementApi = AdminWebHookManagementApi;

},{"./auth":8}],7:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require('./AdminCoreApi'));
__export(require('./AdminLoyaltyApi'));
__export(require('./AdminReservationsApi'));
__export(require('./AdminTableManagementApi'));
__export(require('./AdminWaitingManagementApi'));
__export(require('./AdminWebHookManagementApi'));

},{"./AdminCoreApi":1,"./AdminLoyaltyApi":2,"./AdminReservationsApi":3,"./AdminTableManagementApi":4,"./AdminWaitingManagementApi":5,"./AdminWebHookManagementApi":6}],8:[function(require,module,exports){
"use strict";
var HttpBasicAuth = (function () {
    function HttpBasicAuth() {
    }
    HttpBasicAuth.prototype.applyToRequest = function (httpRequestParams) {
        httpRequestParams.auth = {
            username: this.username, password: this.password
        };
    };
    return HttpBasicAuth;
}());
exports.HttpBasicAuth = HttpBasicAuth;
var ApiKeyAuth = (function () {
    function ApiKeyAuth(location, paramName) {
        this.location = location;
        this.paramName = paramName;
    }
    ApiKeyAuth.prototype.applyToRequest = function (httpRequestParams) {
        if (this.location === 'query') {
            httpRequestParams.qs[this.paramName] = this.apiKey;
        }
        else if (this.location === 'header') {
            httpRequestParams.headers[this.paramName] = this.apiKey;
        }
    };
    return ApiKeyAuth;
}());
exports.ApiKeyAuth = ApiKeyAuth;
var OAuth = (function () {
    function OAuth() {
    }
    OAuth.prototype.applyToRequest = function (httpRequestParams) {
        httpRequestParams.headers['Authorization'] = 'Bearer ' + this.accessToken;
    };
    return OAuth;
}());
exports.OAuth = OAuth;
var VoidAuth = (function () {
    function VoidAuth() {
    }
    VoidAuth.prototype.applyToRequest = function (httpRequestParams) {
    };
    return VoidAuth;
}());
exports.VoidAuth = VoidAuth;

},{}],9:[function(require,module,exports){
"use strict";
var AuthorizationService = (function () {
    function AuthorizationService($http, $q, config, $httpParamSerializer) {
        this.$http = $http;
        this.$q = $q;
        this.config = config;
        this.$httpParamSerializer = $httpParamSerializer;
        this.defaultHeaders = {};
    }
    AuthorizationService.prototype.Authorize = function (api, userName, password) {
        var deffer = this.$q.defer();
        this.getToken(userName, password).then(function (response) {
            api.authentications.oauth2.accessToken = response.access_token;
            deffer.resolve();
        }, function (params) {
            deffer.reject(params);
        });
        return deffer.promise;
    };
    AuthorizationService.prototype.getToken = function (userName, password) {
        var deffer = this.$q.defer();
        var localVarPath = this.config.basePath + '/Token';
        var headerParams = { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' };
        var value = {
            username: userName,
            password: password,
            grant_type: 'password'
        };
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            json: true,
            data: this.$httpParamSerializer(value),
            headers: headerParams
        };
        this.$http(httpRequestParams).then(function (response) {
            deffer.resolve(response.data);
        }, function (err) {
            deffer.reject(err);
        });
        return deffer.promise;
    };
    ;
    AuthorizationService.$inject = ['$http', '$q', 'IApiConfig', '$httpParamSerializer'];
    return AuthorizationService;
}());
exports.AuthorizationService = AuthorizationService;

},{}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
'use strict';
var AvailabilityResponse;
(function (AvailabilityResponse) {
    (function (UnitTypeEnum) {
        UnitTypeEnum[UnitTypeEnum["Cover"] = 'Cover'] = "Cover";
        UnitTypeEnum[UnitTypeEnum["Table"] = 'Table'] = "Table";
        UnitTypeEnum[UnitTypeEnum["Default"] = 'Default'] = "Default";
    })(AvailabilityResponse.UnitTypeEnum || (AvailabilityResponse.UnitTypeEnum = {}));
    var UnitTypeEnum = AvailabilityResponse.UnitTypeEnum;
})(AvailabilityResponse = exports.AvailabilityResponse || (exports.AvailabilityResponse = {}));

},{}],12:[function(require,module,exports){
'use strict';
var CreateReservation;
(function (CreateReservation) {
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Standard"] = 'Standard'] = "Standard";
        TypeEnum[TypeEnum["Hybrid"] = 'Hybrid'] = "Hybrid";
    })(CreateReservation.TypeEnum || (CreateReservation.TypeEnum = {}));
    var TypeEnum = CreateReservation.TypeEnum;
})(CreateReservation = exports.CreateReservation || (exports.CreateReservation = {}));

},{}],13:[function(require,module,exports){
'use strict';
var IEdmSchemaElement;
(function (IEdmSchemaElement) {
    (function (SchemaElementKindEnum) {
        SchemaElementKindEnum[SchemaElementKindEnum["None"] = 'None'] = "None";
        SchemaElementKindEnum[SchemaElementKindEnum["TypeDefinition"] = 'TypeDefinition'] = "TypeDefinition";
        SchemaElementKindEnum[SchemaElementKindEnum["Function"] = 'Function'] = "Function";
        SchemaElementKindEnum[SchemaElementKindEnum["ValueTerm"] = 'ValueTerm'] = "ValueTerm";
        SchemaElementKindEnum[SchemaElementKindEnum["EntityContainer"] = 'EntityContainer'] = "EntityContainer";
    })(IEdmSchemaElement.SchemaElementKindEnum || (IEdmSchemaElement.SchemaElementKindEnum = {}));
    var SchemaElementKindEnum = IEdmSchemaElement.SchemaElementKindEnum;
})(IEdmSchemaElement = exports.IEdmSchemaElement || (exports.IEdmSchemaElement = {}));

},{}],14:[function(require,module,exports){
'use strict';
var IEdmTerm;
(function (IEdmTerm) {
    (function (TermKindEnum) {
        TermKindEnum[TermKindEnum["None"] = 'None'] = "None";
        TermKindEnum[TermKindEnum["Type"] = 'Type'] = "Type";
        TermKindEnum[TermKindEnum["Value"] = 'Value'] = "Value";
    })(IEdmTerm.TermKindEnum || (IEdmTerm.TermKindEnum = {}));
    var TermKindEnum = IEdmTerm.TermKindEnum;
    (function (SchemaElementKindEnum) {
        SchemaElementKindEnum[SchemaElementKindEnum["None"] = 'None'] = "None";
        SchemaElementKindEnum[SchemaElementKindEnum["TypeDefinition"] = 'TypeDefinition'] = "TypeDefinition";
        SchemaElementKindEnum[SchemaElementKindEnum["Function"] = 'Function'] = "Function";
        SchemaElementKindEnum[SchemaElementKindEnum["ValueTerm"] = 'ValueTerm'] = "ValueTerm";
        SchemaElementKindEnum[SchemaElementKindEnum["EntityContainer"] = 'EntityContainer'] = "EntityContainer";
    })(IEdmTerm.SchemaElementKindEnum || (IEdmTerm.SchemaElementKindEnum = {}));
    var SchemaElementKindEnum = IEdmTerm.SchemaElementKindEnum;
})(IEdmTerm = exports.IEdmTerm || (exports.IEdmTerm = {}));

},{}],15:[function(require,module,exports){
'use strict';
var IEdmType;
(function (IEdmType) {
    (function (TypeKindEnum) {
        TypeKindEnum[TypeKindEnum["None"] = 'None'] = "None";
        TypeKindEnum[TypeKindEnum["Primitive"] = 'Primitive'] = "Primitive";
        TypeKindEnum[TypeKindEnum["Entity"] = 'Entity'] = "Entity";
        TypeKindEnum[TypeKindEnum["Complex"] = 'Complex'] = "Complex";
        TypeKindEnum[TypeKindEnum["Row"] = 'Row'] = "Row";
        TypeKindEnum[TypeKindEnum["Collection"] = 'Collection'] = "Collection";
        TypeKindEnum[TypeKindEnum["EntityReference"] = 'EntityReference'] = "EntityReference";
        TypeKindEnum[TypeKindEnum["Enum"] = 'Enum'] = "Enum";
    })(IEdmType.TypeKindEnum || (IEdmType.TypeKindEnum = {}));
    var TypeKindEnum = IEdmType.TypeKindEnum;
})(IEdmType = exports.IEdmType || (exports.IEdmType = {}));

},{}],16:[function(require,module,exports){
'use strict';
var OrderByClause;
(function (OrderByClause) {
    (function (DirectionEnum) {
        DirectionEnum[DirectionEnum["Ascending"] = 'Ascending'] = "Ascending";
        DirectionEnum[DirectionEnum["Descending"] = 'Descending'] = "Descending";
    })(OrderByClause.DirectionEnum || (OrderByClause.DirectionEnum = {}));
    var DirectionEnum = OrderByClause.DirectionEnum;
})(OrderByClause = exports.OrderByClause || (exports.OrderByClause = {}));

},{}],17:[function(require,module,exports){
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

},{}],18:[function(require,module,exports){
'use strict';
var RedeemRequestInfo;
(function (RedeemRequestInfo) {
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Submited"] = 'Submited'] = "Submited";
        StatusEnum[StatusEnum["Approved"] = 'Approved'] = "Approved";
        StatusEnum[StatusEnum["Rejected"] = 'Rejected'] = "Rejected";
    })(RedeemRequestInfo.StatusEnum || (RedeemRequestInfo.StatusEnum = {}));
    var StatusEnum = RedeemRequestInfo.StatusEnum;
})(RedeemRequestInfo = exports.RedeemRequestInfo || (exports.RedeemRequestInfo = {}));

},{}],19:[function(require,module,exports){
'use strict';
var Reservation;
(function (Reservation) {
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Standard"] = 'Standard'] = "Standard";
        TypeEnum[TypeEnum["Hybrid"] = 'Hybrid'] = "Hybrid";
    })(Reservation.TypeEnum || (Reservation.TypeEnum = {}));
    var TypeEnum = Reservation.TypeEnum;
})(Reservation = exports.Reservation || (exports.Reservation = {}));

},{}],20:[function(require,module,exports){
'use strict';
var ReservationSettings;
(function (ReservationSettings) {
    (function (AvailabilityMethodEnum) {
        AvailabilityMethodEnum[AvailabilityMethodEnum["Cover"] = 'Cover'] = "Cover";
        AvailabilityMethodEnum[AvailabilityMethodEnum["Table"] = 'Table'] = "Table";
        AvailabilityMethodEnum[AvailabilityMethodEnum["Default"] = 'Default'] = "Default";
    })(ReservationSettings.AvailabilityMethodEnum || (ReservationSettings.AvailabilityMethodEnum = {}));
    var AvailabilityMethodEnum = ReservationSettings.AvailabilityMethodEnum;
})(ReservationSettings = exports.ReservationSettings || (exports.ReservationSettings = {}));

},{}],21:[function(require,module,exports){
'use strict';
var Reward;
(function (Reward) {
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Published"] = 'Published'] = "Published";
        StatusEnum[StatusEnum["Unpublished"] = 'Unpublished'] = "Unpublished";
    })(Reward.StatusEnum || (Reward.StatusEnum = {}));
    var StatusEnum = Reward.StatusEnum;
})(Reward = exports.Reward || (exports.Reward = {}));

},{}],22:[function(require,module,exports){
'use strict';
var RewardValue;
(function (RewardValue) {
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Discount"] = 'Discount'] = "Discount";
        TypeEnum[TypeEnum["FreeMeal"] = 'FreeMeal'] = "FreeMeal";
        TypeEnum[TypeEnum["MoneyOff"] = 'MoneyOff'] = "MoneyOff";
    })(RewardValue.TypeEnum || (RewardValue.TypeEnum = {}));
    var TypeEnum = RewardValue.TypeEnum;
})(RewardValue = exports.RewardValue || (exports.RewardValue = {}));

},{}],23:[function(require,module,exports){
'use strict';
var SingleValueNode;
(function (SingleValueNode) {
    (function (KindEnum) {
        KindEnum[KindEnum["None"] = 'None'] = "None";
        KindEnum[KindEnum["Constant"] = 'Constant'] = "Constant";
        KindEnum[KindEnum["Convert"] = 'Convert'] = "Convert";
        KindEnum[KindEnum["NonentityRangeVariableReference"] = 'NonentityRangeVariableReference'] = "NonentityRangeVariableReference";
        KindEnum[KindEnum["BinaryOperator"] = 'BinaryOperator'] = "BinaryOperator";
        KindEnum[KindEnum["UnaryOperator"] = 'UnaryOperator'] = "UnaryOperator";
        KindEnum[KindEnum["SingleValuePropertyAccess"] = 'SingleValuePropertyAccess'] = "SingleValuePropertyAccess";
        KindEnum[KindEnum["CollectionPropertyAccess"] = 'CollectionPropertyAccess'] = "CollectionPropertyAccess";
        KindEnum[KindEnum["SingleValueFunctionCall"] = 'SingleValueFunctionCall'] = "SingleValueFunctionCall";
        KindEnum[KindEnum["Any"] = 'Any'] = "Any";
        KindEnum[KindEnum["CollectionNavigationNode"] = 'CollectionNavigationNode'] = "CollectionNavigationNode";
        KindEnum[KindEnum["SingleNavigationNode"] = 'SingleNavigationNode'] = "SingleNavigationNode";
        KindEnum[KindEnum["SingleValueOpenPropertyAccess"] = 'SingleValueOpenPropertyAccess'] = "SingleValueOpenPropertyAccess";
        KindEnum[KindEnum["SingleEntityCast"] = 'SingleEntityCast'] = "SingleEntityCast";
        KindEnum[KindEnum["All"] = 'All'] = "All";
        KindEnum[KindEnum["EntityCollectionCast"] = 'EntityCollectionCast'] = "EntityCollectionCast";
        KindEnum[KindEnum["EntityRangeVariableReference"] = 'EntityRangeVariableReference'] = "EntityRangeVariableReference";
        KindEnum[KindEnum["SingleEntityFunctionCall"] = 'SingleEntityFunctionCall'] = "SingleEntityFunctionCall";
        KindEnum[KindEnum["CollectionFunctionCall"] = 'CollectionFunctionCall'] = "CollectionFunctionCall";
        KindEnum[KindEnum["EntityCollectionFunctionCall"] = 'EntityCollectionFunctionCall'] = "EntityCollectionFunctionCall";
        KindEnum[KindEnum["NamedFunctionParameter"] = 'NamedFunctionParameter'] = "NamedFunctionParameter";
    })(SingleValueNode.KindEnum || (SingleValueNode.KindEnum = {}));
    var KindEnum = SingleValueNode.KindEnum;
})(SingleValueNode = exports.SingleValueNode || (exports.SingleValueNode = {}));

},{}],24:[function(require,module,exports){
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

},{}],25:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require('./Availability'));
__export(require('./AvailabilityResponse'));
__export(require('./CreateReservation'));
__export(require('./IEdmSchemaElement'));
__export(require('./IEdmTerm'));
__export(require('./IEdmType'));
__export(require('./OrderByClause'));
__export(require('./RedeemRequest'));
__export(require('./RedeemRequestInfo'));
__export(require('./Reservation'));
__export(require('./ReservationSettings'));
__export(require('./Reward'));
__export(require('./RewardValue'));
__export(require('./SingleValueNode'));
__export(require('./TableMonitor'));

},{"./Availability":10,"./AvailabilityResponse":11,"./CreateReservation":12,"./IEdmSchemaElement":13,"./IEdmTerm":14,"./IEdmType":15,"./OrderByClause":16,"./RedeemRequest":17,"./RedeemRequestInfo":18,"./Reservation":19,"./ReservationSettings":20,"./Reward":21,"./RewardValue":22,"./SingleValueNode":23,"./TableMonitor":24}],"hostme-sdk-angular-admin":[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require('./api/api'));
__export(require('./model/models'));
var AuthorizationService_1 = require('./client/AuthorizationService');
exports.AuthorizationService = AuthorizationService_1.AuthorizationService;

},{"./api/api":7,"./client/AuthorizationService":9,"./model/models":25}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkaXN0L2xpYi9hcGkvQWRtaW5Db3JlQXBpLmpzIiwiZGlzdC9saWIvYXBpL0FkbWluTG95YWx0eUFwaS5qcyIsImRpc3QvbGliL2FwaS9BZG1pblJlc2VydmF0aW9uc0FwaS5qcyIsImRpc3QvbGliL2FwaS9BZG1pblRhYmxlTWFuYWdlbWVudEFwaS5qcyIsImRpc3QvbGliL2FwaS9BZG1pbldhaXRpbmdNYW5hZ2VtZW50QXBpLmpzIiwiZGlzdC9saWIvYXBpL0FkbWluV2ViSG9va01hbmFnZW1lbnRBcGkuanMiLCJkaXN0L2xpYi9hcGkvYXBpLmpzIiwiZGlzdC9saWIvYXBpL2F1dGguanMiLCJkaXN0L2xpYi9jbGllbnQvQXV0aG9yaXphdGlvblNlcnZpY2UuanMiLCJkaXN0L2xpYi9tb2RlbC9BdmFpbGFiaWxpdHkuanMiLCJkaXN0L2xpYi9tb2RlbC9BdmFpbGFiaWxpdHlSZXNwb25zZS5qcyIsImRpc3QvbGliL21vZGVsL0NyZWF0ZVJlc2VydmF0aW9uLmpzIiwiZGlzdC9saWIvbW9kZWwvSUVkbVNjaGVtYUVsZW1lbnQuanMiLCJkaXN0L2xpYi9tb2RlbC9JRWRtVGVybS5qcyIsImRpc3QvbGliL21vZGVsL0lFZG1UeXBlLmpzIiwiZGlzdC9saWIvbW9kZWwvT3JkZXJCeUNsYXVzZS5qcyIsImRpc3QvbGliL21vZGVsL1JlZGVlbVJlcXVlc3QuanMiLCJkaXN0L2xpYi9tb2RlbC9SZWRlZW1SZXF1ZXN0SW5mby5qcyIsImRpc3QvbGliL21vZGVsL1Jlc2VydmF0aW9uLmpzIiwiZGlzdC9saWIvbW9kZWwvUmVzZXJ2YXRpb25TZXR0aW5ncy5qcyIsImRpc3QvbGliL21vZGVsL1Jld2FyZC5qcyIsImRpc3QvbGliL21vZGVsL1Jld2FyZFZhbHVlLmpzIiwiZGlzdC9saWIvbW9kZWwvU2luZ2xlVmFsdWVOb2RlLmpzIiwiZGlzdC9saWIvbW9kZWwvVGFibGVNb25pdG9yLmpzIiwiZGlzdC9saWIvbW9kZWwvbW9kZWxzLmpzIiwiZGlzdC9saWIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2aENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL29CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3akJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcGJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIGF1dGggPSByZXF1aXJlKCcuL2F1dGgnKTtcclxuJ3VzZSBzdHJpY3QnO1xyXG52YXIgQWRtaW5Db3JlQXBpID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFkbWluQ29yZUFwaSgkaHR0cCwgY29uZmlnLCAkaHR0cFBhcmFtU2VyaWFsaXplcikge1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuICAgICAgICB0aGlzLiRodHRwUGFyYW1TZXJpYWxpemVyID0gJGh0dHBQYXJhbVNlcmlhbGl6ZXI7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0SGVhZGVycyA9IHt9O1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zID0ge1xyXG4gICAgICAgICAgICAnZGVmYXVsdCc6IG5ldyBhdXRoLlZvaWRBdXRoKCksXHJcbiAgICAgICAgICAgICdvYXV0aDInOiBuZXcgYXV0aC5PQXV0aCgpLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWRtaW5Db3JlQXBpLnByb3RvdHlwZSwgXCJhY2Nlc3NUb2tlblwiLCB7XHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodG9rZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFjY2Vzc1Rva2VuID0gdG9rZW47XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBBZG1pbkNvcmVBcGkucHJvdG90eXBlLmV4dGVuZE9iaiA9IGZ1bmN0aW9uIChvYmpBLCBvYmpCKSB7XHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIG9iakIpIHtcclxuICAgICAgICAgICAgaWYgKG9iakIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgb2JqQVtrZXldID0gb2JqQltrZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmpBO1xyXG4gICAgfTtcclxuICAgIEFkbWluQ29yZUFwaS5wcm90b3R5cGUuYWRkTmV3UmVzdGF1cmFudCA9IGZ1bmN0aW9uICh2YWx1ZSwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL2NvcmUvYWRtaW4vcmVzdGF1cmFudHMnO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciB2YWx1ZSB3aGVuIGNhbGxpbmcgYWRkTmV3UmVzdGF1cmFudCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogdmFsdWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pbkNvcmVBcGkucHJvdG90eXBlLmFkZFJlc3RhdXJhbnRab25lID0gZnVuY3Rpb24gKHJlc3RhdXJhbnRJZCwgY29udHJhY3QsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9jb3JlL2FkbWluL3Jlc3RhdXJhbnRzL3tyZXN0YXVyYW50SWR9L3pvbmVzJ1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyBhZGRSZXN0YXVyYW50Wm9uZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWNvbnRyYWN0KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgY29udHJhY3Qgd2hlbiBjYWxsaW5nIGFkZFJlc3RhdXJhbnRab25lJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiBjb250cmFjdCxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIEFkbWluQ29yZUFwaS5wcm90b3R5cGUuYWRkV2FpdGVyID0gZnVuY3Rpb24gKHJlc3RhdXJhbnRJZCwgY29udHJhY3QsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9jb3JlL2FkbWluL3Jlc3RhdXJhbnRzL3tyZXN0YXVyYW50SWR9L3dhaXRlcnMnXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXN0YXVyYW50SWQnICsgJ30nLCBTdHJpbmcocmVzdGF1cmFudElkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFyZXN0YXVyYW50SWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2hlbiBjYWxsaW5nIGFkZFdhaXRlcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWNvbnRyYWN0KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgY29udHJhY3Qgd2hlbiBjYWxsaW5nIGFkZFdhaXRlcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogY29udHJhY3QsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pbkNvcmVBcGkucHJvdG90eXBlLmFkZFdhaXRlclRvWm9uZSA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIHpvbmVJZCwgY29udHJhY3QsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9jb3JlL2FkbWluL3Jlc3RhdXJhbnRzL3tyZXN0YXVyYW50SWR9L3pvbmVzL3t6b25lSWR9L3dhaXRlcidcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc3RhdXJhbnRJZCcgKyAnfScsIFN0cmluZyhyZXN0YXVyYW50SWQpKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAnem9uZUlkJyArICd9JywgU3RyaW5nKHpvbmVJZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyBhZGRXYWl0ZXJUb1pvbmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF6b25lSWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciB6b25lSWQgd2hlbiBjYWxsaW5nIGFkZFdhaXRlclRvWm9uZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWNvbnRyYWN0KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgY29udHJhY3Qgd2hlbiBjYWxsaW5nIGFkZFdhaXRlclRvWm9uZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiBjb250cmFjdCxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIEFkbWluQ29yZUFwaS5wcm90b3R5cGUuYXNzaWduV2FpdGVyVG9UYWJsZSA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIHRhYmxlTnVtYmVyLCBjb250cmFjdCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL2NvcmUvYWRtaW4vcmVzdGF1cmFudHMve3Jlc3RhdXJhbnRJZH0vdGFibGVzL3t0YWJsZU51bWJlcn0vd2FpdGVyJ1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICd0YWJsZU51bWJlcicgKyAnfScsIFN0cmluZyh0YWJsZU51bWJlcikpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyBhc3NpZ25XYWl0ZXJUb1RhYmxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGFibGVOdW1iZXIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciB0YWJsZU51bWJlciB3aGVuIGNhbGxpbmcgYXNzaWduV2FpdGVyVG9UYWJsZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWNvbnRyYWN0KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgY29udHJhY3Qgd2hlbiBjYWxsaW5nIGFzc2lnbldhaXRlclRvVGFibGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogY29udHJhY3QsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pbkNvcmVBcGkucHJvdG90eXBlLmNoYW5nZVBhc3N3b3JkID0gZnVuY3Rpb24gKG1vZGVsLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvY29yZS9hZG1pbi9hY2NvdW50L3Bhc3N3b3JkL2NoYW5nZSc7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFtb2RlbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIG1vZGVsIHdoZW4gY2FsbGluZyBjaGFuZ2VQYXNzd29yZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogbW9kZWwsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pbkNvcmVBcGkucHJvdG90eXBlLmNoZWNrSW52aXRhdGlvbkNvZGUgPSBmdW5jdGlvbiAoaW52aXRhdGlvbkNvZGUsIHJlc3RhdXJhbnRJZCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL2NvcmUvYWRtaW4vcmVzdGF1cmFudHMve3Jlc3RhdXJhbnRJZH0vaW52aXRhdGlvbnMve2ludml0YXRpb25Db2RlfSdcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ2ludml0YXRpb25Db2RlJyArICd9JywgU3RyaW5nKGludml0YXRpb25Db2RlKSlcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc3RhdXJhbnRJZCcgKyAnfScsIFN0cmluZyhyZXN0YXVyYW50SWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIWludml0YXRpb25Db2RlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgaW52aXRhdGlvbkNvZGUgd2hlbiBjYWxsaW5nIGNoZWNrSW52aXRhdGlvbkNvZGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyZXN0YXVyYW50SWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2hlbiBjYWxsaW5nIGNoZWNrSW52aXRhdGlvbkNvZGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIEFkbWluQ29yZUFwaS5wcm90b3R5cGUuY3JlYXRlSW52aXRhdGlvbkNvZGUgPSBmdW5jdGlvbiAocmVzdGF1cmFudElkLCBpbnZpdGF0aW9uLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvY29yZS9hZG1pbi9yZXN0YXVyYW50cy97cmVzdGF1cmFudElkfS9pbnZpdGF0aW9ucydcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc3RhdXJhbnRJZCcgKyAnfScsIFN0cmluZyhyZXN0YXVyYW50SWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIXJlc3RhdXJhbnRJZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHJlc3RhdXJhbnRJZCB3aGVuIGNhbGxpbmcgY3JlYXRlSW52aXRhdGlvbkNvZGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpbnZpdGF0aW9uKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgaW52aXRhdGlvbiB3aGVuIGNhbGxpbmcgY3JlYXRlSW52aXRhdGlvbkNvZGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGludml0YXRpb24sXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pbkNvcmVBcGkucHJvdG90eXBlLmNyZWF0ZU5ld0FjY291bnRXaXRoUmVzdGF1cmFudCA9IGZ1bmN0aW9uICh2YWx1ZSwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL2NvcmUvYWRtaW4vdGVuYW50L3Jlc3RhdXJhbnRzJztcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgdmFsdWUgd2hlbiBjYWxsaW5nIGNyZWF0ZU5ld0FjY291bnRXaXRoUmVzdGF1cmFudCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogdmFsdWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgQWRtaW5Db3JlQXBpLnByb3RvdHlwZS5kZWxldGVJbnZpdGF0aW9uID0gZnVuY3Rpb24gKHJlc3RhdXJhbnRJZCwgaW52aXRhdGlvbkNvZGUsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9jb3JlL2FkbWluL3Jlc3RhdXJhbnRzL3tyZXN0YXVyYW50SWR9L2ludml0YXRpb25zL3tpbnZpdGF0aW9uQ29kZX0nXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXN0YXVyYW50SWQnICsgJ30nLCBTdHJpbmcocmVzdGF1cmFudElkKSlcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ2ludml0YXRpb25Db2RlJyArICd9JywgU3RyaW5nKGludml0YXRpb25Db2RlKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFyZXN0YXVyYW50SWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2hlbiBjYWxsaW5nIGRlbGV0ZUludml0YXRpb24nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpbnZpdGF0aW9uQ29kZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIGludml0YXRpb25Db2RlIHdoZW4gY2FsbGluZyBkZWxldGVJbnZpdGF0aW9uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pbkNvcmVBcGkucHJvdG90eXBlLmRlbGV0ZVJlc3RhdXJhbnQgPSBmdW5jdGlvbiAocmVzdGF1cmFudElkLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvY29yZS9hZG1pbi9yZXN0YXVyYW50cy97cmVzdGF1cmFudElkfSdcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc3RhdXJhbnRJZCcgKyAnfScsIFN0cmluZyhyZXN0YXVyYW50SWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIXJlc3RhdXJhbnRJZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHJlc3RhdXJhbnRJZCB3aGVuIGNhbGxpbmcgZGVsZXRlUmVzdGF1cmFudCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgQWRtaW5Db3JlQXBpLnByb3RvdHlwZS5kZWxldGVVc2VyID0gZnVuY3Rpb24gKHJlc3RhdXJhbnRJZCwgdXNlcklkLCByb2xlLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvY29yZS9hZG1pbi9yZXN0YXVyYW50cy97cmVzdGF1cmFudElkfS91c2Vycy97dXNlcklkfSdcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc3RhdXJhbnRJZCcgKyAnfScsIFN0cmluZyhyZXN0YXVyYW50SWQpKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAndXNlcklkJyArICd9JywgU3RyaW5nKHVzZXJJZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyBkZWxldGVVc2VyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdXNlcklkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgdXNlcklkIHdoZW4gY2FsbGluZyBkZWxldGVVc2VyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcm9sZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHJvbGUgd2hlbiBjYWxsaW5nIGRlbGV0ZVVzZXInKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJvbGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtZXRlcnNbJ3JvbGUnXSA9IHJvbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pbkNvcmVBcGkucHJvdG90eXBlLmRlbGV0ZVdhaXRlciA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIHdhaXRlcklkLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvY29yZS9hZG1pbi9yZXN0YXVyYW50cy97cmVzdGF1cmFudElkfS93YWl0ZXJzL3t3YWl0ZXJJZH0nXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXN0YXVyYW50SWQnICsgJ30nLCBTdHJpbmcocmVzdGF1cmFudElkKSlcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3dhaXRlcklkJyArICd9JywgU3RyaW5nKHdhaXRlcklkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFyZXN0YXVyYW50SWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2hlbiBjYWxsaW5nIGRlbGV0ZVdhaXRlcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXdhaXRlcklkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgd2FpdGVySWQgd2hlbiBjYWxsaW5nIGRlbGV0ZVdhaXRlcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgQWRtaW5Db3JlQXBpLnByb3RvdHlwZS5kZWxldGVab25lID0gZnVuY3Rpb24gKHJlc3RhdXJhbnRJZCwgem9uZUlkLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvY29yZS9hZG1pbi9yZXN0YXVyYW50cy97cmVzdGF1cmFudElkfS96b25lcy97em9uZUlkfSdcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc3RhdXJhbnRJZCcgKyAnfScsIFN0cmluZyhyZXN0YXVyYW50SWQpKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAnem9uZUlkJyArICd9JywgU3RyaW5nKHpvbmVJZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyBkZWxldGVab25lJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghem9uZUlkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgem9uZUlkIHdoZW4gY2FsbGluZyBkZWxldGVab25lJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pbkNvcmVBcGkucHJvdG90eXBlLmZpbmRSZXN0YXVyYW50c0J5VXNlclBob25lID0gZnVuY3Rpb24gKHBob25lLCBlbWFpbCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL2NvcmUvYWRtaW4vdGVuYW50L3Jlc3RhdXJhbnRzL2ZpbmQnO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmIChwaG9uZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyc1sncGhvbmUnXSA9IHBob25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZW1haWwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtZXRlcnNbJ2VtYWlsJ10gPSBlbWFpbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pbkNvcmVBcGkucHJvdG90eXBlLmZpbmRVc2VyQnlQaG9uZUFzeW5jID0gZnVuY3Rpb24gKHBob25lLCBlbWFpbCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL2NvcmUvYWRtaW4vdGVuYW50L3VzZXJzL2ZpbmQnO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmIChwaG9uZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyc1sncGhvbmUnXSA9IHBob25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZW1haWwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtZXRlcnNbJ2VtYWlsJ10gPSBlbWFpbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pbkNvcmVBcGkucHJvdG90eXBlLmdldEFsbFVzZXJSZXN0YXVyYW50cyA9IGZ1bmN0aW9uIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvY29yZS9hZG1pbi9yZXN0YXVyYW50cyc7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIEFkbWluQ29yZUFwaS5wcm90b3R5cGUuZ2V0Q3VzdG9tU2V0dGluZ3MgPSBmdW5jdGlvbiAocmVzdGF1cmFudElkLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvY29yZS9hZG1pbi9yZXN0YXVyYW50cy97cmVzdGF1cmFudElkfS9zZXR0aW5ncy9jdXN0b20nXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXN0YXVyYW50SWQnICsgJ30nLCBTdHJpbmcocmVzdGF1cmFudElkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFyZXN0YXVyYW50SWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2hlbiBjYWxsaW5nIGdldEN1c3RvbVNldHRpbmdzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pbkNvcmVBcGkucHJvdG90eXBlLmdldEludml0YXRpb25zID0gZnVuY3Rpb24gKHJlc3RhdXJhbnRJZCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL2NvcmUvYWRtaW4vcmVzdGF1cmFudHMve3Jlc3RhdXJhbnRJZH0vaW52aXRhdGlvbnMnXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXN0YXVyYW50SWQnICsgJ30nLCBTdHJpbmcocmVzdGF1cmFudElkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFyZXN0YXVyYW50SWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2hlbiBjYWxsaW5nIGdldEludml0YXRpb25zJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pbkNvcmVBcGkucHJvdG90eXBlLmdldFJlZ2lzdHJhdGlvblRva2VuID0gZnVuY3Rpb24gKHJlc3RhdXJhbnRJZCwgdGFibGVOdW1iZXIsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9jb3JlL2FkbWluL3Jlc3RhdXJhbnRzL3tyZXN0YXVyYW50SWR9L2xveWFsdHkvdG9rZW4nXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXN0YXVyYW50SWQnICsgJ30nLCBTdHJpbmcocmVzdGF1cmFudElkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFyZXN0YXVyYW50SWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2hlbiBjYWxsaW5nIGdldFJlZ2lzdHJhdGlvblRva2VuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0YWJsZU51bWJlciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyc1sndGFibGVOdW1iZXInXSA9IHRhYmxlTnVtYmVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgQWRtaW5Db3JlQXBpLnByb3RvdHlwZS5nZXRSZXN0YXVyYW50QnlJZCA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9jb3JlL2FkbWluL3Jlc3RhdXJhbnRzL3tyZXN0YXVyYW50SWR9J1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyBnZXRSZXN0YXVyYW50QnlJZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgQWRtaW5Db3JlQXBpLnByb3RvdHlwZS5nZXRSZXN0YXVyYW50Q29uZmlndXJhdGlvbiA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9jb3JlL2FkbWluL3Jlc3RhdXJhbnRzL3tyZXN0YXVyYW50SWR9L2NvbmZpZydcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc3RhdXJhbnRJZCcgKyAnfScsIFN0cmluZyhyZXN0YXVyYW50SWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIXJlc3RhdXJhbnRJZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHJlc3RhdXJhbnRJZCB3aGVuIGNhbGxpbmcgZ2V0UmVzdGF1cmFudENvbmZpZ3VyYXRpb24nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIEFkbWluQ29yZUFwaS5wcm90b3R5cGUuZ2V0UmVzdGF1cmFudFNldHRpbmdzID0gZnVuY3Rpb24gKHJlc3RhdXJhbnRJZCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL2NvcmUvYWRtaW4vcmVzdGF1cmFudHMve3Jlc3RhdXJhbnRJZH0vc2V0dGluZ3MnXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXN0YXVyYW50SWQnICsgJ30nLCBTdHJpbmcocmVzdGF1cmFudElkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFyZXN0YXVyYW50SWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2hlbiBjYWxsaW5nIGdldFJlc3RhdXJhbnRTZXR0aW5ncycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgQWRtaW5Db3JlQXBpLnByb3RvdHlwZS5nZXRSZXN0YXVyYW50Wm9uZXMgPSBmdW5jdGlvbiAocmVzdGF1cmFudElkLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvY29yZS9hZG1pbi9yZXN0YXVyYW50cy97cmVzdGF1cmFudElkfS96b25lcydcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc3RhdXJhbnRJZCcgKyAnfScsIFN0cmluZyhyZXN0YXVyYW50SWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIXJlc3RhdXJhbnRJZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHJlc3RhdXJhbnRJZCB3aGVuIGNhbGxpbmcgZ2V0UmVzdGF1cmFudFpvbmVzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pbkNvcmVBcGkucHJvdG90eXBlLmdldFVzZXJQcm9maWxlID0gZnVuY3Rpb24gKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9jb3JlL2FkbWluL2FjY291bnQvcHJvZmlsZSc7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIEFkbWluQ29yZUFwaS5wcm90b3R5cGUuZ2V0VXNlcnMgPSBmdW5jdGlvbiAocmVzdGF1cmFudElkLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvY29yZS9hZG1pbi9yZXN0YXVyYW50cy97cmVzdGF1cmFudElkfS91c2VycydcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc3RhdXJhbnRJZCcgKyAnfScsIFN0cmluZyhyZXN0YXVyYW50SWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIXJlc3RhdXJhbnRJZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHJlc3RhdXJhbnRJZCB3aGVuIGNhbGxpbmcgZ2V0VXNlcnMnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIEFkbWluQ29yZUFwaS5wcm90b3R5cGUuZ2V0V2FpdGVyWm9uZXMgPSBmdW5jdGlvbiAocmVzdGF1cmFudElkLCB3YWl0ZXJJZCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL2NvcmUvYWRtaW4vcmVzdGF1cmFudHMve3Jlc3RhdXJhbnRJZH0vd2FpdGVycy97d2FpdGVySWR9L3pvbmVzJ1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICd3YWl0ZXJJZCcgKyAnfScsIFN0cmluZyh3YWl0ZXJJZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyBnZXRXYWl0ZXJab25lcycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXdhaXRlcklkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgd2FpdGVySWQgd2hlbiBjYWxsaW5nIGdldFdhaXRlclpvbmVzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pbkNvcmVBcGkucHJvdG90eXBlLmdldFdhaXRlcnMgPSBmdW5jdGlvbiAocmVzdGF1cmFudElkLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvY29yZS9hZG1pbi9yZXN0YXVyYW50cy97cmVzdGF1cmFudElkfS93YWl0ZXJzJ1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyBnZXRXYWl0ZXJzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pbkNvcmVBcGkucHJvdG90eXBlLm1lID0gZnVuY3Rpb24gKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9jb3JlL2FkbWluL2FjY291bnQvbWUnO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pbkNvcmVBcGkucHJvdG90eXBlLnBvc3RQcm9maWxlSW1hZ2UgPSBmdW5jdGlvbiAoaW1hZ2UsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9jb3JlL2FkbWluL2FjY291bnQvcHJvZmlsZS9pbWFnZSc7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFpbWFnZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIGltYWdlIHdoZW4gY2FsbGluZyBwb3N0UHJvZmlsZUltYWdlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiBpbWFnZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIEFkbWluQ29yZUFwaS5wcm90b3R5cGUucHJvZmlsZUltYWdlID0gZnVuY3Rpb24gKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9jb3JlL2FkbWluL2FjY291bnQvcHJvZmlsZS9pbWFnZSc7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIEFkbWluQ29yZUFwaS5wcm90b3R5cGUucmVnaXN0ZXIgPSBmdW5jdGlvbiAobW9kZWwsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9jb3JlL2FkbWluL2FjY291bnQvcmVnaXN0ZXInO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghbW9kZWwpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciBtb2RlbCB3aGVuIGNhbGxpbmcgcmVnaXN0ZXInKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IG1vZGVsLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgQWRtaW5Db3JlQXBpLnByb3RvdHlwZS5yZWludml0ZSA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIGludml0YXRpb25Db2RlLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvY29yZS9hZG1pbi9yZXN0YXVyYW50cy97cmVzdGF1cmFudElkfS9pbnZpdGF0aW9ucy97aW52aXRhdGlvbkNvZGV9L3JlaW52aXRlJ1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdpbnZpdGF0aW9uQ29kZScgKyAnfScsIFN0cmluZyhpbnZpdGF0aW9uQ29kZSkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyByZWludml0ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWludml0YXRpb25Db2RlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgaW52aXRhdGlvbkNvZGUgd2hlbiBjYWxsaW5nIHJlaW52aXRlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pbkNvcmVBcGkucHJvdG90eXBlLnJlbW92ZVdhaXRlckZyb21ab25lID0gZnVuY3Rpb24gKHJlc3RhdXJhbnRJZCwgem9uZUlkLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvY29yZS9hZG1pbi9yZXN0YXVyYW50cy97cmVzdGF1cmFudElkfS96b25lcy97em9uZUlkfS93YWl0ZXInXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXN0YXVyYW50SWQnICsgJ30nLCBTdHJpbmcocmVzdGF1cmFudElkKSlcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3pvbmVJZCcgKyAnfScsIFN0cmluZyh6b25lSWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIXJlc3RhdXJhbnRJZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHJlc3RhdXJhbnRJZCB3aGVuIGNhbGxpbmcgcmVtb3ZlV2FpdGVyRnJvbVpvbmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF6b25lSWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciB6b25lSWQgd2hlbiBjYWxsaW5nIHJlbW92ZVdhaXRlckZyb21ab25lJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pbkNvcmVBcGkucHJvdG90eXBlLnJlc2V0UGFzc3dvcmQgPSBmdW5jdGlvbiAobW9kZWwsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9jb3JlL2FkbWluL2FjY291bnQvcGFzc3dvcmQvcmVzZXQnO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghbW9kZWwpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciBtb2RlbCB3aGVuIGNhbGxpbmcgcmVzZXRQYXNzd29yZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogbW9kZWwsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pbkNvcmVBcGkucHJvdG90eXBlLnNldEN1c3RvbVNldHRpbmdzID0gZnVuY3Rpb24gKHJlc3RhdXJhbnRJZCwgc2V0dGluZ3MsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9jb3JlL2FkbWluL3Jlc3RhdXJhbnRzL3tyZXN0YXVyYW50SWR9L3NldHRpbmcvY3VzdG9tJ1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyBzZXRDdXN0b21TZXR0aW5ncycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgc2V0dGluZ3Mgd2hlbiBjYWxsaW5nIHNldEN1c3RvbVNldHRpbmdzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IHNldHRpbmdzLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgQWRtaW5Db3JlQXBpLnByb3RvdHlwZS5zZXRSZXN0YXVyYW50U2V0dGluZ3MgPSBmdW5jdGlvbiAocmVzdGF1cmFudElkLCBzZXR0aW5ncywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL2NvcmUvYWRtaW4vcmVzdGF1cmFudHMve3Jlc3RhdXJhbnRJZH0vc2V0dGluZ3MnXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXN0YXVyYW50SWQnICsgJ30nLCBTdHJpbmcocmVzdGF1cmFudElkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFyZXN0YXVyYW50SWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2hlbiBjYWxsaW5nIHNldFJlc3RhdXJhbnRTZXR0aW5ncycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgc2V0dGluZ3Mgd2hlbiBjYWxsaW5nIHNldFJlc3RhdXJhbnRTZXR0aW5ncycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiBzZXR0aW5ncyxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIEFkbWluQ29yZUFwaS5wcm90b3R5cGUudXBkYXRlUmVzdGF1cmFudCA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIHZhbHVlLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvY29yZS9hZG1pbi9yZXN0YXVyYW50cy97cmVzdGF1cmFudElkfSdcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc3RhdXJhbnRJZCcgKyAnfScsIFN0cmluZyhyZXN0YXVyYW50SWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIXJlc3RhdXJhbnRJZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHJlc3RhdXJhbnRJZCB3aGVuIGNhbGxpbmcgdXBkYXRlUmVzdGF1cmFudCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgdmFsdWUgd2hlbiBjYWxsaW5nIHVwZGF0ZVJlc3RhdXJhbnQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogdmFsdWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pbkNvcmVBcGkucHJvdG90eXBlLnVwZGF0ZVJlc3RhdXJhbnRab25lID0gZnVuY3Rpb24gKHJlc3RhdXJhbnRJZCwgem9uZUlkLCBjb250cmFjdCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL2NvcmUvYWRtaW4vcmVzdGF1cmFudHMve3Jlc3RhdXJhbnRJZH0vem9uZXMve3pvbmVJZH0nXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXN0YXVyYW50SWQnICsgJ30nLCBTdHJpbmcocmVzdGF1cmFudElkKSlcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3pvbmVJZCcgKyAnfScsIFN0cmluZyh6b25lSWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIXJlc3RhdXJhbnRJZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHJlc3RhdXJhbnRJZCB3aGVuIGNhbGxpbmcgdXBkYXRlUmVzdGF1cmFudFpvbmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF6b25lSWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciB6b25lSWQgd2hlbiBjYWxsaW5nIHVwZGF0ZVJlc3RhdXJhbnRab25lJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghY29udHJhY3QpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciBjb250cmFjdCB3aGVuIGNhbGxpbmcgdXBkYXRlUmVzdGF1cmFudFpvbmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogY29udHJhY3QsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pbkNvcmVBcGkucHJvdG90eXBlLnVwZGF0ZVVzZXJQcm9maWxlID0gZnVuY3Rpb24gKHByb2ZpbGUsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9jb3JlL2FkbWluL2FjY291bnQvcHJvZmlsZSc7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFwcm9maWxlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcHJvZmlsZSB3aGVuIGNhbGxpbmcgdXBkYXRlVXNlclByb2ZpbGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogcHJvZmlsZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIEFkbWluQ29yZUFwaS5wcm90b3R5cGUudXBkYXRlV2FpdGVyID0gZnVuY3Rpb24gKHJlc3RhdXJhbnRJZCwgd2FpdGVySWQsIGNvbnRyYWN0LCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvY29yZS9hZG1pbi9yZXN0YXVyYW50cy97cmVzdGF1cmFudElkfS93YWl0ZXJzL3t3YWl0ZXJJZH0nXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXN0YXVyYW50SWQnICsgJ30nLCBTdHJpbmcocmVzdGF1cmFudElkKSlcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3dhaXRlcklkJyArICd9JywgU3RyaW5nKHdhaXRlcklkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFyZXN0YXVyYW50SWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2hlbiBjYWxsaW5nIHVwZGF0ZVdhaXRlcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXdhaXRlcklkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgd2FpdGVySWQgd2hlbiBjYWxsaW5nIHVwZGF0ZVdhaXRlcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWNvbnRyYWN0KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgY29udHJhY3Qgd2hlbiBjYWxsaW5nIHVwZGF0ZVdhaXRlcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiBjb250cmFjdCxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIEFkbWluQ29yZUFwaS5wcm90b3R5cGUudXBkYXRlV2FpdGVyWm9uZSA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIHdhaXRlcklkLCBjb250cmFjdCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL2NvcmUvYWRtaW4vcmVzdGF1cmFudHMve3Jlc3RhdXJhbnRJZH0vd2FpdGVycy97d2FpdGVySWR9L3pvbmVzJ1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICd3YWl0ZXJJZCcgKyAnfScsIFN0cmluZyh3YWl0ZXJJZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyB1cGRhdGVXYWl0ZXJab25lJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghd2FpdGVySWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciB3YWl0ZXJJZCB3aGVuIGNhbGxpbmcgdXBkYXRlV2FpdGVyWm9uZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWNvbnRyYWN0KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgY29udHJhY3Qgd2hlbiBjYWxsaW5nIHVwZGF0ZVdhaXRlclpvbmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogY29udHJhY3QsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pbkNvcmVBcGkuJGluamVjdCA9IFsnJGh0dHAnLCAnSUFwaUNvbmZpZycsICckaHR0cFBhcmFtU2VyaWFsaXplciddO1xyXG4gICAgcmV0dXJuIEFkbWluQ29yZUFwaTtcclxufSgpKTtcclxuZXhwb3J0cy5BZG1pbkNvcmVBcGkgPSBBZG1pbkNvcmVBcGk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFkbWluQ29yZUFwaS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIGF1dGggPSByZXF1aXJlKCcuL2F1dGgnKTtcclxuJ3VzZSBzdHJpY3QnO1xyXG52YXIgQWRtaW5Mb3lhbHR5QXBpID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFkbWluTG95YWx0eUFwaSgkaHR0cCwgY29uZmlnLCAkaHR0cFBhcmFtU2VyaWFsaXplcikge1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuICAgICAgICB0aGlzLiRodHRwUGFyYW1TZXJpYWxpemVyID0gJGh0dHBQYXJhbVNlcmlhbGl6ZXI7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0SGVhZGVycyA9IHt9O1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zID0ge1xyXG4gICAgICAgICAgICAnZGVmYXVsdCc6IG5ldyBhdXRoLlZvaWRBdXRoKCksXHJcbiAgICAgICAgICAgICdvYXV0aDInOiBuZXcgYXV0aC5PQXV0aCgpLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWRtaW5Mb3lhbHR5QXBpLnByb3RvdHlwZSwgXCJhY2Nlc3NUb2tlblwiLCB7XHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodG9rZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFjY2Vzc1Rva2VuID0gdG9rZW47XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBBZG1pbkxveWFsdHlBcGkucHJvdG90eXBlLmV4dGVuZE9iaiA9IGZ1bmN0aW9uIChvYmpBLCBvYmpCKSB7XHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIG9iakIpIHtcclxuICAgICAgICAgICAgaWYgKG9iakIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgb2JqQVtrZXldID0gb2JqQltrZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmpBO1xyXG4gICAgfTtcclxuICAgIEFkbWluTG95YWx0eUFwaS5wcm90b3R5cGUuYWRkTWVtYmVyID0gZnVuY3Rpb24gKHJlc3RhdXJhbnRJZCwgY29udHJhY3QsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9sb3lhbHR5L2FkbWluL3Jlc3RhdXJhbnRzL3tyZXN0YXVyYW50SWR9L21lbWJlcnMnXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXN0YXVyYW50SWQnICsgJ30nLCBTdHJpbmcocmVzdGF1cmFudElkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFyZXN0YXVyYW50SWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2hlbiBjYWxsaW5nIGFkZE1lbWJlcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWNvbnRyYWN0KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgY29udHJhY3Qgd2hlbiBjYWxsaW5nIGFkZE1lbWJlcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogY29udHJhY3QsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pbkxveWFsdHlBcGkucHJvdG90eXBlLmFkZE5ld1Jld2FyZCA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIHJld2FyZCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL2xveWFsdHkvYWRtaW4vcmVzdGF1cmFudHMve3Jlc3RhdXJhbnRJZH0vcmV3YXJkcydcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc3RhdXJhbnRJZCcgKyAnfScsIFN0cmluZyhyZXN0YXVyYW50SWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIXJlc3RhdXJhbnRJZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHJlc3RhdXJhbnRJZCB3aGVuIGNhbGxpbmcgYWRkTmV3UmV3YXJkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmV3YXJkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmV3YXJkIHdoZW4gY2FsbGluZyBhZGROZXdSZXdhcmQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IHJld2FyZCxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIEFkbWluTG95YWx0eUFwaS5wcm90b3R5cGUuYXBwcm92ZVJlZGVlbVJlcXVlc3QgPSBmdW5jdGlvbiAocmVzdGF1cmFudElkLCByZWRlZW1JZCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL2xveWFsdHkvYWRtaW4vcmVzdGF1cmFudHMve3Jlc3RhdXJhbnRJZH0vcmVkZWVtcy97cmVkZWVtSWR9L2FwcHJvdmUnXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXN0YXVyYW50SWQnICsgJ30nLCBTdHJpbmcocmVzdGF1cmFudElkKSlcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3JlZGVlbUlkJyArICd9JywgU3RyaW5nKHJlZGVlbUlkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFyZXN0YXVyYW50SWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2hlbiBjYWxsaW5nIGFwcHJvdmVSZWRlZW1SZXF1ZXN0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmVkZWVtSWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZWRlZW1JZCB3aGVuIGNhbGxpbmcgYXBwcm92ZVJlZGVlbVJlcXVlc3QnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pbkxveWFsdHlBcGkucHJvdG90eXBlLmNsb3NlTWVtYmVyc2hpcCA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIG1lbWJlcklkLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvbG95YWx0eS9hZG1pbi9yZXN0YXVyYW50cy97cmVzdGF1cmFudElkfS9tZW1iZXJzL3ttZW1iZXJJZH0vY2xvc2UnXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXN0YXVyYW50SWQnICsgJ30nLCBTdHJpbmcocmVzdGF1cmFudElkKSlcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ21lbWJlcklkJyArICd9JywgU3RyaW5nKG1lbWJlcklkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFyZXN0YXVyYW50SWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2hlbiBjYWxsaW5nIGNsb3NlTWVtYmVyc2hpcCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW1lbWJlcklkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgbWVtYmVySWQgd2hlbiBjYWxsaW5nIGNsb3NlTWVtYmVyc2hpcCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgQWRtaW5Mb3lhbHR5QXBpLnByb3RvdHlwZS5kZWxldGVSZXdhcmQgPSBmdW5jdGlvbiAocmVzdGF1cmFudElkLCByZXdhcmRJZCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL2xveWFsdHkvYWRtaW4vcmVzdGF1cmFudHMve3Jlc3RhdXJhbnRJZH0vcmV3YXJkcy97cmV3YXJkSWR9J1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXdhcmRJZCcgKyAnfScsIFN0cmluZyhyZXdhcmRJZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyBkZWxldGVSZXdhcmQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyZXdhcmRJZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHJld2FyZElkIHdoZW4gY2FsbGluZyBkZWxldGVSZXdhcmQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIEFkbWluTG95YWx0eUFwaS5wcm90b3R5cGUuZXhwb3J0TWVtYmVycyA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9sb3lhbHR5L2FkbWluL3Jlc3RhdXJhbnRzL3tyZXN0YXVyYW50SWR9L21lbWJlcnMvZXhwb3J0J1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyBleHBvcnRNZW1iZXJzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgQWRtaW5Mb3lhbHR5QXBpLnByb3RvdHlwZS5maWx0ZXIgPSBmdW5jdGlvbiAocmVzdGF1cmFudElkLCB0YWtlLCB0b2tlbiwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL2xveWFsdHkvYWRtaW4vcmVzdGF1cmFudHMve3Jlc3RhdXJhbnRJZH0vbWVtYmVycy9maWx0ZXInXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXN0YXVyYW50SWQnICsgJ30nLCBTdHJpbmcocmVzdGF1cmFudElkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFyZXN0YXVyYW50SWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2hlbiBjYWxsaW5nIGZpbHRlcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRha2UpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciB0YWtlIHdoZW4gY2FsbGluZyBmaWx0ZXInKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHRva2VuIHdoZW4gY2FsbGluZyBmaWx0ZXInKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRha2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtZXRlcnNbJ3Rha2UnXSA9IHRha2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0b2tlbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyc1sndG9rZW4nXSA9IHRva2VuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgQWRtaW5Mb3lhbHR5QXBpLnByb3RvdHlwZS5maW5kTWVtYmVyQnlQaG9uZU51bWJlciA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIHBob25lTnVtYmVyLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvbG95YWx0eS9hZG1pbi9yZXN0YXVyYW50cy97cmVzdGF1cmFudElkfS9tZW1iZXJzL2ZpbmQnXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXN0YXVyYW50SWQnICsgJ30nLCBTdHJpbmcocmVzdGF1cmFudElkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFyZXN0YXVyYW50SWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2hlbiBjYWxsaW5nIGZpbmRNZW1iZXJCeVBob25lTnVtYmVyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcGhvbmVOdW1iZXIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciBwaG9uZU51bWJlciB3aGVuIGNhbGxpbmcgZmluZE1lbWJlckJ5UGhvbmVOdW1iZXInKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBob25lTnVtYmVyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzWydwaG9uZU51bWJlciddID0gcGhvbmVOdW1iZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pbkxveWFsdHlBcGkucHJvdG90eXBlLmdldEFsUmV3YXJkcyA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9sb3lhbHR5L2FkbWluL3Jlc3RhdXJhbnRzL3tyZXN0YXVyYW50SWR9L3Jld2FyZHMnXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXN0YXVyYW50SWQnICsgJ30nLCBTdHJpbmcocmVzdGF1cmFudElkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFyZXN0YXVyYW50SWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2hlbiBjYWxsaW5nIGdldEFsUmV3YXJkcycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgQWRtaW5Mb3lhbHR5QXBpLnByb3RvdHlwZS5nZXRBbGxNZW1iZXJzID0gZnVuY3Rpb24gKHJlc3RhdXJhbnRJZCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL2xveWFsdHkvYWRtaW4vcmVzdGF1cmFudHMve3Jlc3RhdXJhbnRJZH0vbWVtYmVycydcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc3RhdXJhbnRJZCcgKyAnfScsIFN0cmluZyhyZXN0YXVyYW50SWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIXJlc3RhdXJhbnRJZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHJlc3RhdXJhbnRJZCB3aGVuIGNhbGxpbmcgZ2V0QWxsTWVtYmVycycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgQWRtaW5Mb3lhbHR5QXBpLnByb3RvdHlwZS5nZXRBbGxSZWRlZW1SZXF1ZXN0cyA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9sb3lhbHR5L2FkbWluL3Jlc3RhdXJhbnRzL3tyZXN0YXVyYW50SWR9L3JlZGVlbXMnXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXN0YXVyYW50SWQnICsgJ30nLCBTdHJpbmcocmVzdGF1cmFudElkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFyZXN0YXVyYW50SWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2hlbiBjYWxsaW5nIGdldEFsbFJlZGVlbVJlcXVlc3RzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pbkxveWFsdHlBcGkucHJvdG90eXBlLmdldERlZmF1bHRMb3lhbHR5U2V0dGluZ3MgPSBmdW5jdGlvbiAocmVzdGF1cmFudElkLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvbG95YWx0eS9hZG1pbi9yZXN0YXVyYW50cy97cmVzdGF1cmFudElkfS9zZXR0aW5ncy9kZWZhdWx0J1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyBnZXREZWZhdWx0TG95YWx0eVNldHRpbmdzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pbkxveWFsdHlBcGkucHJvdG90eXBlLmdldExveWFsdHlTZXR0aW5ncyA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9sb3lhbHR5L2FkbWluL3Jlc3RhdXJhbnRzL3tyZXN0YXVyYW50SWR9L3NldHRpbmdzJ1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyBnZXRMb3lhbHR5U2V0dGluZ3MnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIEFkbWluTG95YWx0eUFwaS5wcm90b3R5cGUuZ2V0TWVtYmVyQXZhdGFyID0gZnVuY3Rpb24gKHJlc3RhdXJhbnRJZCwgbWVtYmVySWQsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9sb3lhbHR5L2FkbWluL3Jlc3RhdXJhbnRzL3tyZXN0YXVyYW50SWR9L21lbWJlcnMve21lbWJlcklkfS9hdmF0YXInXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXN0YXVyYW50SWQnICsgJ30nLCBTdHJpbmcocmVzdGF1cmFudElkKSlcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ21lbWJlcklkJyArICd9JywgU3RyaW5nKG1lbWJlcklkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFyZXN0YXVyYW50SWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2hlbiBjYWxsaW5nIGdldE1lbWJlckF2YXRhcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW1lbWJlcklkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgbWVtYmVySWQgd2hlbiBjYWxsaW5nIGdldE1lbWJlckF2YXRhcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgQWRtaW5Mb3lhbHR5QXBpLnByb3RvdHlwZS5nZXRNZW1iZXJUcmFuc2FjdGlvbnMgPSBmdW5jdGlvbiAocmVzdGF1cmFudElkLCBtZW1iZXJJZCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL2xveWFsdHkvYWRtaW4vcmVzdGF1cmFudHMve3Jlc3RhdXJhbnRJZH0vbWVtYmVycy97bWVtYmVySWR9L3RyYW5zYWN0aW9ucydcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc3RhdXJhbnRJZCcgKyAnfScsIFN0cmluZyhyZXN0YXVyYW50SWQpKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAnbWVtYmVySWQnICsgJ30nLCBTdHJpbmcobWVtYmVySWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIXJlc3RhdXJhbnRJZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHJlc3RhdXJhbnRJZCB3aGVuIGNhbGxpbmcgZ2V0TWVtYmVyVHJhbnNhY3Rpb25zJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbWVtYmVySWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciBtZW1iZXJJZCB3aGVuIGNhbGxpbmcgZ2V0TWVtYmVyVHJhbnNhY3Rpb25zJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pbkxveWFsdHlBcGkucHJvdG90eXBlLmdldE1lbWJlclZpc2l0cyA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIG1lbWJlcklkLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvbG95YWx0eS9hZG1pbi9yZXN0YXVyYW50cy97cmVzdGF1cmFudElkfS9tZW1iZXJzL3ttZW1iZXJJZH0vdmlzaXRzJ1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdtZW1iZXJJZCcgKyAnfScsIFN0cmluZyhtZW1iZXJJZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyBnZXRNZW1iZXJWaXNpdHMnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFtZW1iZXJJZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIG1lbWJlcklkIHdoZW4gY2FsbGluZyBnZXRNZW1iZXJWaXNpdHMnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIEFkbWluTG95YWx0eUFwaS5wcm90b3R5cGUuZ2V0TWVtYmVyc2hpcEluZm8gPSBmdW5jdGlvbiAocmVzdGF1cmFudElkLCBtZW1iZXJJZCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL2xveWFsdHkvYWRtaW4vcmVzdGF1cmFudHMve3Jlc3RhdXJhbnRJZH0vbWVtYmVycy97bWVtYmVySWR9J1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdtZW1iZXJJZCcgKyAnfScsIFN0cmluZyhtZW1iZXJJZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyBnZXRNZW1iZXJzaGlwSW5mbycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW1lbWJlcklkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgbWVtYmVySWQgd2hlbiBjYWxsaW5nIGdldE1lbWJlcnNoaXBJbmZvJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pbkxveWFsdHlBcGkucHJvdG90eXBlLmdldFJld2FyZEJ5SWQgPSBmdW5jdGlvbiAocmVzdGF1cmFudElkLCByZXdhcmRJZCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL2xveWFsdHkvYWRtaW4vcmVzdGF1cmFudHMve3Jlc3RhdXJhbnRJZH0vcmV3YXJkcy97cmV3YXJkSWR9J1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXdhcmRJZCcgKyAnfScsIFN0cmluZyhyZXdhcmRJZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyBnZXRSZXdhcmRCeUlkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmV3YXJkSWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXdhcmRJZCB3aGVuIGNhbGxpbmcgZ2V0UmV3YXJkQnlJZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgQWRtaW5Mb3lhbHR5QXBpLnByb3RvdHlwZS5wdWJsaXNoUmV3YXJkID0gZnVuY3Rpb24gKHJlc3RhdXJhbnRJZCwgcmV3YXJkSWQsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9sb3lhbHR5L2FkbWluL3Jlc3RhdXJhbnRzL3tyZXN0YXVyYW50SWR9L3Jld2FyZHMve3Jld2FyZElkfS9wdWJsaXNoJ1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXdhcmRJZCcgKyAnfScsIFN0cmluZyhyZXdhcmRJZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyBwdWJsaXNoUmV3YXJkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmV3YXJkSWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXdhcmRJZCB3aGVuIGNhbGxpbmcgcHVibGlzaFJld2FyZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgQWRtaW5Mb3lhbHR5QXBpLnByb3RvdHlwZS5yZWplY3RSZWRlZW1SZXF1ZXN0ID0gZnVuY3Rpb24gKHJlc3RhdXJhbnRJZCwgcmVkZWVtSWQsIHJlamVjdCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL2xveWFsdHkvYWRtaW4vcmVzdGF1cmFudHMve3Jlc3RhdXJhbnRJZH0vcmVkZWVtcy97cmVkZWVtSWR9L3JlamVjdCdcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc3RhdXJhbnRJZCcgKyAnfScsIFN0cmluZyhyZXN0YXVyYW50SWQpKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVkZWVtSWQnICsgJ30nLCBTdHJpbmcocmVkZWVtSWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIXJlc3RhdXJhbnRJZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHJlc3RhdXJhbnRJZCB3aGVuIGNhbGxpbmcgcmVqZWN0UmVkZWVtUmVxdWVzdCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJlZGVlbUlkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVkZWVtSWQgd2hlbiBjYWxsaW5nIHJlamVjdFJlZGVlbVJlcXVlc3QnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyZWplY3QpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZWplY3Qgd2hlbiBjYWxsaW5nIHJlamVjdFJlZGVlbVJlcXVlc3QnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlamVjdCxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIEFkbWluTG95YWx0eUFwaS5wcm90b3R5cGUuc2V0TG95YWx0eVNldHRpbmdzID0gZnVuY3Rpb24gKHJlc3RhdXJhbnRJZCwgc2V0dGluZ3MsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9sb3lhbHR5L2FkbWluL3Jlc3RhdXJhbnRzL3tyZXN0YXVyYW50SWR9L3NldHRpbmdzJ1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyBzZXRMb3lhbHR5U2V0dGluZ3MnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzZXR0aW5ncykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHNldHRpbmdzIHdoZW4gY2FsbGluZyBzZXRMb3lhbHR5U2V0dGluZ3MnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogc2V0dGluZ3MsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pbkxveWFsdHlBcGkucHJvdG90eXBlLnVucHVibGlzaFJld2FyZCA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIHJld2FyZElkLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvbG95YWx0eS9hZG1pbi9yZXN0YXVyYW50cy97cmVzdGF1cmFudElkfS9yZXdhcmRzL3tyZXdhcmRJZH0vdW5wdWJsaXNoJ1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXdhcmRJZCcgKyAnfScsIFN0cmluZyhyZXdhcmRJZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyB1bnB1Ymxpc2hSZXdhcmQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyZXdhcmRJZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHJld2FyZElkIHdoZW4gY2FsbGluZyB1bnB1Ymxpc2hSZXdhcmQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIEFkbWluTG95YWx0eUFwaS5wcm90b3R5cGUudXBkYXRlTWVtYmVyID0gZnVuY3Rpb24gKHJlc3RhdXJhbnRJZCwgbWVtYmVySWQsIGNvbnRyYWN0LCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvbG95YWx0eS9hZG1pbi9yZXN0YXVyYW50cy97cmVzdGF1cmFudElkfS9tZW1iZXJzL3ttZW1iZXJJZH0nXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXN0YXVyYW50SWQnICsgJ30nLCBTdHJpbmcocmVzdGF1cmFudElkKSlcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ21lbWJlcklkJyArICd9JywgU3RyaW5nKG1lbWJlcklkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFyZXN0YXVyYW50SWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2hlbiBjYWxsaW5nIHVwZGF0ZU1lbWJlcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW1lbWJlcklkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgbWVtYmVySWQgd2hlbiBjYWxsaW5nIHVwZGF0ZU1lbWJlcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWNvbnRyYWN0KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgY29udHJhY3Qgd2hlbiBjYWxsaW5nIHVwZGF0ZU1lbWJlcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiBjb250cmFjdCxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIEFkbWluTG95YWx0eUFwaS5wcm90b3R5cGUudXBkYXRlUmV3YXJkID0gZnVuY3Rpb24gKHJlc3RhdXJhbnRJZCwgcmV3YXJkSWQsIHJld2FyZCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL2xveWFsdHkvYWRtaW4vcmVzdGF1cmFudHMve3Jlc3RhdXJhbnRJZH0vcmV3YXJkcy97cmV3YXJkSWR9J1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXdhcmRJZCcgKyAnfScsIFN0cmluZyhyZXdhcmRJZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyB1cGRhdGVSZXdhcmQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyZXdhcmRJZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHJld2FyZElkIHdoZW4gY2FsbGluZyB1cGRhdGVSZXdhcmQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyZXdhcmQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXdhcmQgd2hlbiBjYWxsaW5nIHVwZGF0ZVJld2FyZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiByZXdhcmQsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pbkxveWFsdHlBcGkuJGluamVjdCA9IFsnJGh0dHAnLCAnSUFwaUNvbmZpZycsICckaHR0cFBhcmFtU2VyaWFsaXplciddO1xyXG4gICAgcmV0dXJuIEFkbWluTG95YWx0eUFwaTtcclxufSgpKTtcclxuZXhwb3J0cy5BZG1pbkxveWFsdHlBcGkgPSBBZG1pbkxveWFsdHlBcGk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFkbWluTG95YWx0eUFwaS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIGF1dGggPSByZXF1aXJlKCcuL2F1dGgnKTtcclxuJ3VzZSBzdHJpY3QnO1xyXG52YXIgQWRtaW5SZXNlcnZhdGlvbnNBcGkgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQWRtaW5SZXNlcnZhdGlvbnNBcGkoJGh0dHAsIGNvbmZpZywgJGh0dHBQYXJhbVNlcmlhbGl6ZXIpIHtcclxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XHJcbiAgICAgICAgdGhpcy4kaHR0cFBhcmFtU2VyaWFsaXplciA9ICRodHRwUGFyYW1TZXJpYWxpemVyO1xyXG4gICAgICAgIHRoaXMuZGVmYXVsdEhlYWRlcnMgPSB7fTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucyA9IHtcclxuICAgICAgICAgICAgJ2RlZmF1bHQnOiBuZXcgYXV0aC5Wb2lkQXV0aCgpLFxyXG4gICAgICAgICAgICAnb2F1dGgyJzogbmV3IGF1dGguT0F1dGgoKSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFkbWluUmVzZXJ2YXRpb25zQXBpLnByb3RvdHlwZSwgXCJhY2Nlc3NUb2tlblwiLCB7XHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodG9rZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFjY2Vzc1Rva2VuID0gdG9rZW47XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBBZG1pblJlc2VydmF0aW9uc0FwaS5wcm90b3R5cGUuZXh0ZW5kT2JqID0gZnVuY3Rpb24gKG9iakEsIG9iakIpIHtcclxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqQikge1xyXG4gICAgICAgICAgICBpZiAob2JqQi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBvYmpBW2tleV0gPSBvYmpCW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9iakE7XHJcbiAgICB9O1xyXG4gICAgQWRtaW5SZXNlcnZhdGlvbnNBcGkucHJvdG90eXBlLmFkZE5ld1Jlc2VydmF0aW9uID0gZnVuY3Rpb24gKHJlc3RhdXJhbnRJZCwgdmFsdWUsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9yc3YvYWRtaW4vcmVzdGF1cmFudHMve3Jlc3RhdXJhbnRJZH0vcmVzZXJ2YXRpb25zJ1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyBhZGROZXdSZXNlcnZhdGlvbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgdmFsdWUgd2hlbiBjYWxsaW5nIGFkZE5ld1Jlc2VydmF0aW9uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiB2YWx1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIEFkbWluUmVzZXJ2YXRpb25zQXBpLnByb3RvdHlwZS5jYW5jZWxSZXNlcnZhdGlvbiA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIHJlc2VydmF0aW9uSWQsIGNhbmNlbFJlc2VydmF0aW9uQ29udHJhY3QsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9yc3YvYWRtaW4vcmVzdGF1cmFudHMve3Jlc3RhdXJhbnRJZH0vcmVzZXJ2YXRpb25zL3tyZXNlcnZhdGlvbklkfS9jYW5jZWwnXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXN0YXVyYW50SWQnICsgJ30nLCBTdHJpbmcocmVzdGF1cmFudElkKSlcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc2VydmF0aW9uSWQnICsgJ30nLCBTdHJpbmcocmVzZXJ2YXRpb25JZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyBjYW5jZWxSZXNlcnZhdGlvbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJlc2VydmF0aW9uSWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXNlcnZhdGlvbklkIHdoZW4gY2FsbGluZyBjYW5jZWxSZXNlcnZhdGlvbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWNhbmNlbFJlc2VydmF0aW9uQ29udHJhY3QpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciBjYW5jZWxSZXNlcnZhdGlvbkNvbnRyYWN0IHdoZW4gY2FsbGluZyBjYW5jZWxSZXNlcnZhdGlvbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiBjYW5jZWxSZXNlcnZhdGlvbkNvbnRyYWN0LFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgQWRtaW5SZXNlcnZhdGlvbnNBcGkucHJvdG90eXBlLmNsb3NlQXNOb1Nob3cgPSBmdW5jdGlvbiAocmVzdGF1cmFudElkLCByZXNlcnZhdGlvbklkLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvcnN2L2FkbWluL3Jlc3RhdXJhbnRzL3tyZXN0YXVyYW50SWR9L3Jlc2VydmF0aW9ucy97cmVzZXJ2YXRpb25JZH0vbm9zaG93J1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXNlcnZhdGlvbklkJyArICd9JywgU3RyaW5nKHJlc2VydmF0aW9uSWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIXJlc3RhdXJhbnRJZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHJlc3RhdXJhbnRJZCB3aGVuIGNhbGxpbmcgY2xvc2VBc05vU2hvdycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJlc2VydmF0aW9uSWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXNlcnZhdGlvbklkIHdoZW4gY2FsbGluZyBjbG9zZUFzTm9TaG93Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pblJlc2VydmF0aW9uc0FwaS5wcm90b3R5cGUuY2xvc2VBc1NlYXRlZCA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIHJlc2VydmF0aW9uSWQsIHRhYmxlTnVtYmVyLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvcnN2L2FkbWluL3Jlc3RhdXJhbnRzL3tyZXN0YXVyYW50SWR9L3Jlc2VydmF0aW9ucy97cmVzZXJ2YXRpb25JZH0vc2VhdCdcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc3RhdXJhbnRJZCcgKyAnfScsIFN0cmluZyhyZXN0YXVyYW50SWQpKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzZXJ2YXRpb25JZCcgKyAnfScsIFN0cmluZyhyZXNlcnZhdGlvbklkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFyZXN0YXVyYW50SWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2hlbiBjYWxsaW5nIGNsb3NlQXNTZWF0ZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyZXNlcnZhdGlvbklkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzZXJ2YXRpb25JZCB3aGVuIGNhbGxpbmcgY2xvc2VBc1NlYXRlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGFibGVOdW1iZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtZXRlcnNbJ3RhYmxlTnVtYmVyJ10gPSB0YWJsZU51bWJlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIEFkbWluUmVzZXJ2YXRpb25zQXBpLnByb3RvdHlwZS5nZXRNZXNzYWdlcyA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIHJlc2VydmF0aW9uSWQsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9yc3YvYWRtaW4vcmVzdGF1cmFudHMve3Jlc3RhdXJhbnRJZH0vcmVzZXJ2YXRpb25zL3tyZXNlcnZhdGlvbklkfS9tZXNzYWdlcydcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc3RhdXJhbnRJZCcgKyAnfScsIFN0cmluZyhyZXN0YXVyYW50SWQpKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzZXJ2YXRpb25JZCcgKyAnfScsIFN0cmluZyhyZXNlcnZhdGlvbklkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFyZXN0YXVyYW50SWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2hlbiBjYWxsaW5nIGdldE1lc3NhZ2VzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmVzZXJ2YXRpb25JZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHJlc2VydmF0aW9uSWQgd2hlbiBjYWxsaW5nIGdldE1lc3NhZ2VzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pblJlc2VydmF0aW9uc0FwaS5wcm90b3R5cGUuZ2V0UmVzZXJ2YXRpb25BdmFpbGFiaWxpdHkgPSBmdW5jdGlvbiAocmVzdGF1cmFudElkLCBkYXRlLCBwYXJ0eVNpemUsIHJhbmdlSW5NaW51dGVzLCB0YWJsZVR1cm5PdmVyLCB0eXBlLCBhcmVhcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL3Jzdi9hZG1pbi9yZXN0YXVyYW50cy97cmVzdGF1cmFudElkfS9hdmFpbGFiaWxpdHknXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXN0YXVyYW50SWQnICsgJ30nLCBTdHJpbmcocmVzdGF1cmFudElkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFyZXN0YXVyYW50SWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2hlbiBjYWxsaW5nIGdldFJlc2VydmF0aW9uQXZhaWxhYmlsaXR5Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghZGF0ZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIGRhdGUgd2hlbiBjYWxsaW5nIGdldFJlc2VydmF0aW9uQXZhaWxhYmlsaXR5Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcGFydHlTaXplKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcGFydHlTaXplIHdoZW4gY2FsbGluZyBnZXRSZXNlcnZhdGlvbkF2YWlsYWJpbGl0eScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJhbmdlSW5NaW51dGVzKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmFuZ2VJbk1pbnV0ZXMgd2hlbiBjYWxsaW5nIGdldFJlc2VydmF0aW9uQXZhaWxhYmlsaXR5Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYXRlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzWydkYXRlJ10gPSBkYXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGFydHlTaXplICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzWydwYXJ0eVNpemUnXSA9IHBhcnR5U2l6ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJhbmdlSW5NaW51dGVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzWydyYW5nZUluTWludXRlcyddID0gcmFuZ2VJbk1pbnV0ZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0YWJsZVR1cm5PdmVyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzWyd0YWJsZVR1cm5PdmVyJ10gPSB0YWJsZVR1cm5PdmVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyc1sndHlwZSddID0gdHlwZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyZWFzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzWydhcmVhcyddID0gYXJlYXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pblJlc2VydmF0aW9uc0FwaS5wcm90b3R5cGUuZ2V0UmVzZXJ2YXRpb25CeUlkID0gZnVuY3Rpb24gKHJlc3RhdXJhbnRJZCwgcmVzZXJ2YXRpb25JZCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL3Jzdi9hZG1pbi9yZXN0YXVyYW50cy97cmVzdGF1cmFudElkfS9yZXNlcnZhdGlvbnMve3Jlc2VydmF0aW9uSWR9J1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXNlcnZhdGlvbklkJyArICd9JywgU3RyaW5nKHJlc2VydmF0aW9uSWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIXJlc3RhdXJhbnRJZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHJlc3RhdXJhbnRJZCB3aGVuIGNhbGxpbmcgZ2V0UmVzZXJ2YXRpb25CeUlkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmVzZXJ2YXRpb25JZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHJlc2VydmF0aW9uSWQgd2hlbiBjYWxsaW5nIGdldFJlc2VydmF0aW9uQnlJZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgQWRtaW5SZXNlcnZhdGlvbnNBcGkucHJvdG90eXBlLmdldFJlc2VydmF0aW9uU2V0dGluZ3MgPSBmdW5jdGlvbiAocmVzdGF1cmFudElkLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvcnN2L2FkbWluL3Jlc3RhdXJhbnRzL3tyZXN0YXVyYW50SWR9L3NldHRpbmdzJ1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyBnZXRSZXNlcnZhdGlvblNldHRpbmdzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pblJlc2VydmF0aW9uc0FwaS5wcm90b3R5cGUuZ2V0UmVzZXJ2YXRpb25zRm9yUGVyaW9kID0gZnVuY3Rpb24gKHJlc3RhdXJhbnRJZCwgZnJvbSwgdG8sIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9yc3YvYWRtaW4vcmVzdGF1cmFudHMve3Jlc3RhdXJhbnRJZH0vcmVzZXJ2YXRpb25zJ1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyBnZXRSZXNlcnZhdGlvbnNGb3JQZXJpb2QnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZyb20gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtZXRlcnNbJ2Zyb20nXSA9IGZyb207XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0byAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyc1sndG8nXSA9IHRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgQWRtaW5SZXNlcnZhdGlvbnNBcGkucHJvdG90eXBlLmdldFJlc3RhdXJhbnRSZXNlcnZhdGlvbnNTdGF0aXN0aWMgPSBmdW5jdGlvbiAocmVzdGF1cmFudElkLCBkYXRlLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvcnN2L2FkbWluL3Jlc3RhdXJhbnRzL3tyZXN0YXVyYW50SWR9L3Jlc2VydmF0aW9ucy9zdGF0cydcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc3RhdXJhbnRJZCcgKyAnfScsIFN0cmluZyhyZXN0YXVyYW50SWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIXJlc3RhdXJhbnRJZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHJlc3RhdXJhbnRJZCB3aGVuIGNhbGxpbmcgZ2V0UmVzdGF1cmFudFJlc2VydmF0aW9uc1N0YXRpc3RpYycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGF0ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyc1snZGF0ZSddID0gZGF0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIEFkbWluUmVzZXJ2YXRpb25zQXBpLnByb3RvdHlwZS5nZXRVbnJlYWRNZXNzYWdlc0NvdW50ID0gZnVuY3Rpb24gKHJlc3RhdXJhbnRJZCwgZnJvbSwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL3Jzdi9hZG1pbi9yZXN0YXVyYW50cy97cmVzdGF1cmFudElkfS9yZXNlcnZhdGlvbnMvbWVzc2FnZXMvdW5yZWFkL2NvdW50J1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyBnZXRVbnJlYWRNZXNzYWdlc0NvdW50Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmcm9tICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzWydmcm9tJ10gPSBmcm9tO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgQWRtaW5SZXNlcnZhdGlvbnNBcGkucHJvdG90eXBlLnBsYWNlT25XYWl0TGlzdCA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIHJlc2VydmF0aW9uSWQsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9yc3YvYWRtaW4vcmVzdGF1cmFudHMve3Jlc3RhdXJhbnRJZH0vcmVzZXJ2YXRpb25zL3tyZXNlcnZhdGlvbklkfS9zY2hlZHVsZSdcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc3RhdXJhbnRJZCcgKyAnfScsIFN0cmluZyhyZXN0YXVyYW50SWQpKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzZXJ2YXRpb25JZCcgKyAnfScsIFN0cmluZyhyZXNlcnZhdGlvbklkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFyZXN0YXVyYW50SWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2hlbiBjYWxsaW5nIHBsYWNlT25XYWl0TGlzdCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJlc2VydmF0aW9uSWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXNlcnZhdGlvbklkIHdoZW4gY2FsbGluZyBwbGFjZU9uV2FpdExpc3QnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIEFkbWluUmVzZXJ2YXRpb25zQXBpLnByb3RvdHlwZS5yZU9wZW5SZXNlcnZhdGlvbiA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIHJlc2VydmF0aW9uSWQsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9yc3YvYWRtaW4vcmVzdGF1cmFudHMve3Jlc3RhdXJhbnRJZH0vcmVzZXJ2YXRpb25zL3tyZXNlcnZhdGlvbklkfS9yZW9wZW4nXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXN0YXVyYW50SWQnICsgJ30nLCBTdHJpbmcocmVzdGF1cmFudElkKSlcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc2VydmF0aW9uSWQnICsgJ30nLCBTdHJpbmcocmVzZXJ2YXRpb25JZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyByZU9wZW5SZXNlcnZhdGlvbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJlc2VydmF0aW9uSWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXNlcnZhdGlvbklkIHdoZW4gY2FsbGluZyByZU9wZW5SZXNlcnZhdGlvbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgQWRtaW5SZXNlcnZhdGlvbnNBcGkucHJvdG90eXBlLnJlYWRBbGxNZXNzYWdlID0gZnVuY3Rpb24gKHJlc3RhdXJhbnRJZCwgcmVzZXJ2YXRpb25JZCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL3Jzdi9hZG1pbi9yZXN0YXVyYW50cy97cmVzdGF1cmFudElkfS9yZXNlcnZhdGlvbnMve3Jlc2VydmF0aW9uSWR9L21lc3NhZ2VzL3JlYWRhbGwnXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXN0YXVyYW50SWQnICsgJ30nLCBTdHJpbmcocmVzdGF1cmFudElkKSlcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc2VydmF0aW9uSWQnICsgJ30nLCBTdHJpbmcocmVzZXJ2YXRpb25JZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyByZWFkQWxsTWVzc2FnZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJlc2VydmF0aW9uSWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXNlcnZhdGlvbklkIHdoZW4gY2FsbGluZyByZWFkQWxsTWVzc2FnZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIEFkbWluUmVzZXJ2YXRpb25zQXBpLnByb3RvdHlwZS5zZW5kR3JpZCA9IGZ1bmN0aW9uIChmcm9tLCBodG1sLCB0ZXh0LCB0bywgc3ViamVjdCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL3Jzdi9hZG1pbi9lbWFpbC95ZWxwJztcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIWZyb20pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciBmcm9tIHdoZW4gY2FsbGluZyBzZW5kR3JpZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWh0bWwpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciBodG1sIHdoZW4gY2FsbGluZyBzZW5kR3JpZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRleHQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciB0ZXh0IHdoZW4gY2FsbGluZyBzZW5kR3JpZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRvKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgdG8gd2hlbiBjYWxsaW5nIHNlbmRHcmlkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc3ViamVjdCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHN1YmplY3Qgd2hlbiBjYWxsaW5nIHNlbmRHcmlkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmcm9tICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzWydmcm9tJ10gPSBmcm9tO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaHRtbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyc1snaHRtbCddID0gaHRtbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRleHQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtZXRlcnNbJ3RleHQnXSA9IHRleHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0byAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyc1sndG8nXSA9IHRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3ViamVjdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyc1snc3ViamVjdCddID0gc3ViamVjdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgQWRtaW5SZXNlcnZhdGlvbnNBcGkucHJvdG90eXBlLnNlbmRNZXNzYWdlID0gZnVuY3Rpb24gKHJlc3RhdXJhbnRJZCwgcmVzZXJ2YXRpb25JZCwgY3JlYXRlTWVzc2FnZUNvbnRyYWN0LCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvcnN2L2FkbWluL3Jlc3RhdXJhbnRzL3tyZXN0YXVyYW50SWR9L3Jlc2VydmF0aW9ucy97cmVzZXJ2YXRpb25JZH0vbWVzc2FnZXMnXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXN0YXVyYW50SWQnICsgJ30nLCBTdHJpbmcocmVzdGF1cmFudElkKSlcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc2VydmF0aW9uSWQnICsgJ30nLCBTdHJpbmcocmVzZXJ2YXRpb25JZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyBzZW5kTWVzc2FnZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJlc2VydmF0aW9uSWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXNlcnZhdGlvbklkIHdoZW4gY2FsbGluZyBzZW5kTWVzc2FnZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWNyZWF0ZU1lc3NhZ2VDb250cmFjdCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIGNyZWF0ZU1lc3NhZ2VDb250cmFjdCB3aGVuIGNhbGxpbmcgc2VuZE1lc3NhZ2UnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGNyZWF0ZU1lc3NhZ2VDb250cmFjdCxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIEFkbWluUmVzZXJ2YXRpb25zQXBpLnByb3RvdHlwZS5zZXRSZXNlcnZhdGlvblNldHRpbmdzID0gZnVuY3Rpb24gKHJlc3RhdXJhbnRJZCwgc2V0dGluZ3MsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9yc3YvYWRtaW4vcmVzdGF1cmFudHMve3Jlc3RhdXJhbnRJZH0vc2V0dGluZ3MnXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXN0YXVyYW50SWQnICsgJ30nLCBTdHJpbmcocmVzdGF1cmFudElkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFyZXN0YXVyYW50SWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2hlbiBjYWxsaW5nIHNldFJlc2VydmF0aW9uU2V0dGluZ3MnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzZXR0aW5ncykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHNldHRpbmdzIHdoZW4gY2FsbGluZyBzZXRSZXNlcnZhdGlvblNldHRpbmdzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IHNldHRpbmdzLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgQWRtaW5SZXNlcnZhdGlvbnNBcGkucHJvdG90eXBlLnN1Ym1pdFllbHBSZXNlcnZhdGlvbiA9IGZ1bmN0aW9uIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvcnN2L2FkbWluL2VtYWlsL3llbHAvaW5ib3VuZCc7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgQWRtaW5SZXNlcnZhdGlvbnNBcGkucHJvdG90eXBlLnVwZGF0ZVJlc2VydmF0aW9uID0gZnVuY3Rpb24gKHJlc3RhdXJhbnRJZCwgcmVzZXJ2YXRpb25JZCwgdmFsdWUsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9yc3YvYWRtaW4vcmVzdGF1cmFudHMve3Jlc3RhdXJhbnRJZH0vcmVzZXJ2YXRpb25zL3tyZXNlcnZhdGlvbklkfSdcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc3RhdXJhbnRJZCcgKyAnfScsIFN0cmluZyhyZXN0YXVyYW50SWQpKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzZXJ2YXRpb25JZCcgKyAnfScsIFN0cmluZyhyZXNlcnZhdGlvbklkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFyZXN0YXVyYW50SWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2hlbiBjYWxsaW5nIHVwZGF0ZVJlc2VydmF0aW9uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmVzZXJ2YXRpb25JZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHJlc2VydmF0aW9uSWQgd2hlbiBjYWxsaW5nIHVwZGF0ZVJlc2VydmF0aW9uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciB2YWx1ZSB3aGVuIGNhbGxpbmcgdXBkYXRlUmVzZXJ2YXRpb24nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogdmFsdWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pblJlc2VydmF0aW9uc0FwaS4kaW5qZWN0ID0gWyckaHR0cCcsICdJQXBpQ29uZmlnJywgJyRodHRwUGFyYW1TZXJpYWxpemVyJ107XHJcbiAgICByZXR1cm4gQWRtaW5SZXNlcnZhdGlvbnNBcGk7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQWRtaW5SZXNlcnZhdGlvbnNBcGkgPSBBZG1pblJlc2VydmF0aW9uc0FwaTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QWRtaW5SZXNlcnZhdGlvbnNBcGkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBhdXRoID0gcmVxdWlyZSgnLi9hdXRoJyk7XHJcbid1c2Ugc3RyaWN0JztcclxudmFyIEFkbWluVGFibGVNYW5hZ2VtZW50QXBpID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFkbWluVGFibGVNYW5hZ2VtZW50QXBpKCRodHRwLCBjb25maWcsICRodHRwUGFyYW1TZXJpYWxpemVyKSB7XHJcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG4gICAgICAgIHRoaXMuJGh0dHBQYXJhbVNlcmlhbGl6ZXIgPSAkaHR0cFBhcmFtU2VyaWFsaXplcjtcclxuICAgICAgICB0aGlzLmRlZmF1bHRIZWFkZXJzID0ge307XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICdkZWZhdWx0JzogbmV3IGF1dGguVm9pZEF1dGgoKSxcclxuICAgICAgICAgICAgJ29hdXRoMic6IG5ldyBhdXRoLk9BdXRoKCksXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBZG1pblRhYmxlTWFuYWdlbWVudEFwaS5wcm90b3R5cGUsIFwiYWNjZXNzVG9rZW5cIiwge1xyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hY2Nlc3NUb2tlbiA9IHRva2VuO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgQWRtaW5UYWJsZU1hbmFnZW1lbnRBcGkucHJvdG90eXBlLmV4dGVuZE9iaiA9IGZ1bmN0aW9uIChvYmpBLCBvYmpCKSB7XHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIG9iakIpIHtcclxuICAgICAgICAgICAgaWYgKG9iakIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgb2JqQVtrZXldID0gb2JqQltrZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmpBO1xyXG4gICAgfTtcclxuICAgIEFkbWluVGFibGVNYW5hZ2VtZW50QXBpLnByb3RvdHlwZS5jcmVhdGVOZXdGbG9vciA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIGZsb29yLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvdG0vYWRtaW4vcmVzdGF1cmFudHMve3Jlc3RhdXJhbnRJZH0vZmxvb3JzJ1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyBjcmVhdGVOZXdGbG9vcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWZsb29yKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgZmxvb3Igd2hlbiBjYWxsaW5nIGNyZWF0ZU5ld0Zsb29yJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiBmbG9vcixcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIEFkbWluVGFibGVNYW5hZ2VtZW50QXBpLnByb3RvdHlwZS5kZWxldGVGbG9vciA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIGZsb29ySWQsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS90bS9hZG1pbi9yZXN0YXVyYW50cy97cmVzdGF1cmFudElkfS9mbG9vcnMve2Zsb29ySWR9J1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdmbG9vcklkJyArICd9JywgU3RyaW5nKGZsb29ySWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIXJlc3RhdXJhbnRJZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHJlc3RhdXJhbnRJZCB3aGVuIGNhbGxpbmcgZGVsZXRlRmxvb3InKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFmbG9vcklkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgZmxvb3JJZCB3aGVuIGNhbGxpbmcgZGVsZXRlRmxvb3InKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIEFkbWluVGFibGVNYW5hZ2VtZW50QXBpLnByb3RvdHlwZS5nZXRBbGxUYWJsZUNvbWJpbmF0aW9ucyA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS90bS9hZG1pbi9yZXN0YXVyYW50cy97cmVzdGF1cmFudElkfS90YWJsZXMvY29tYmluYXRpb25zJ1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyBnZXRBbGxUYWJsZUNvbWJpbmF0aW9ucycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgQWRtaW5UYWJsZU1hbmFnZW1lbnRBcGkucHJvdG90eXBlLmdldEFwcHJvdmVkVGFibGVDb21iaW5hdGlvbnMgPSBmdW5jdGlvbiAocmVzdGF1cmFudElkLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvdG0vYWRtaW4vcmVzdGF1cmFudHMve3Jlc3RhdXJhbnRJZH0vdGFibGVzL2NvbWJpbmF0aW9ucy9hcHByb3ZlZCdcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc3RhdXJhbnRJZCcgKyAnfScsIFN0cmluZyhyZXN0YXVyYW50SWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIXJlc3RhdXJhbnRJZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHJlc3RhdXJhbnRJZCB3aGVuIGNhbGxpbmcgZ2V0QXBwcm92ZWRUYWJsZUNvbWJpbmF0aW9ucycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgQWRtaW5UYWJsZU1hbmFnZW1lbnRBcGkucHJvdG90eXBlLmdldEF2YWlsYWJsZVRhYmxlcyA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIGRhdGUsIHBhcnR5U2l6ZSwgYXJlYXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS90bS9hZG1pbi9yZXN0YXVyYW50cy97cmVzdGF1cmFudElkfS90YWJsZXMvYXZhaWxhYmxlJ1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyBnZXRBdmFpbGFibGVUYWJsZXMnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFkYXRlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgZGF0ZSB3aGVuIGNhbGxpbmcgZ2V0QXZhaWxhYmxlVGFibGVzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcGFydHlTaXplKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcGFydHlTaXplIHdoZW4gY2FsbGluZyBnZXRBdmFpbGFibGVUYWJsZXMnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRhdGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtZXRlcnNbJ2RhdGUnXSA9IGRhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwYXJ0eVNpemUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtZXRlcnNbJ3BhcnR5U2l6ZSddID0gcGFydHlTaXplO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXJlYXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtZXRlcnNbJ2FyZWFzJ10gPSBhcmVhcztcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIEFkbWluVGFibGVNYW5hZ2VtZW50QXBpLnByb3RvdHlwZS5nZXRGbG9vckRldGFpbHMgPSBmdW5jdGlvbiAocmVzdGF1cmFudElkLCBmbG9vcklkLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvdG0vYWRtaW4vcmVzdGF1cmFudHMve3Jlc3RhdXJhbnRJZH0vZmxvb3JzL3tmbG9vcklkfSdcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc3RhdXJhbnRJZCcgKyAnfScsIFN0cmluZyhyZXN0YXVyYW50SWQpKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAnZmxvb3JJZCcgKyAnfScsIFN0cmluZyhmbG9vcklkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFyZXN0YXVyYW50SWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2hlbiBjYWxsaW5nIGdldEZsb29yRGV0YWlscycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWZsb29ySWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciBmbG9vcklkIHdoZW4gY2FsbGluZyBnZXRGbG9vckRldGFpbHMnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIEFkbWluVGFibGVNYW5hZ2VtZW50QXBpLnByb3RvdHlwZS5nZXRSZXN0YXVyYW50Rmxvb3JzID0gZnVuY3Rpb24gKHJlc3RhdXJhbnRJZCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL3RtL2FkbWluL3Jlc3RhdXJhbnRzL3tyZXN0YXVyYW50SWR9L2Zsb29ycydcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc3RhdXJhbnRJZCcgKyAnfScsIFN0cmluZyhyZXN0YXVyYW50SWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIXJlc3RhdXJhbnRJZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHJlc3RhdXJhbnRJZCB3aGVuIGNhbGxpbmcgZ2V0UmVzdGF1cmFudEZsb29ycycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgQWRtaW5UYWJsZU1hbmFnZW1lbnRBcGkucHJvdG90eXBlLmdldFRhYmxlTW9uaXRvcnMgPSBmdW5jdGlvbiAocmVzdGF1cmFudElkLCB0YWJsZVR1cm5PdmVyLCB0aW1lLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvdG0vYWRtaW4vcmVzdGF1cmFudHMve3Jlc3RhdXJhbnRJZH0vdGFibGVzL21vbml0b3JzJ1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyBnZXRUYWJsZU1vbml0b3JzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0YWJsZVR1cm5PdmVyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzWyd0YWJsZVR1cm5PdmVyJ10gPSB0YWJsZVR1cm5PdmVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGltZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyc1sndGltZSddID0gdGltZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIEFkbWluVGFibGVNYW5hZ2VtZW50QXBpLnByb3RvdHlwZS5nZXRUYWJsZVVzZXJzTGlzdCA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIHBhcnR5U2l6ZSwgdGltZSwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL3RtL2FkbWluL3Jlc3RhdXJhbnRzL3tyZXN0YXVyYW50SWR9L3RhYmxlcy91c2VycydcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc3RhdXJhbnRJZCcgKyAnfScsIFN0cmluZyhyZXN0YXVyYW50SWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIXJlc3RhdXJhbnRJZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHJlc3RhdXJhbnRJZCB3aGVuIGNhbGxpbmcgZ2V0VGFibGVVc2Vyc0xpc3QnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBhcnR5U2l6ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyc1sncGFydHlTaXplJ10gPSBwYXJ0eVNpemU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzWyd0aW1lJ10gPSB0aW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgQWRtaW5UYWJsZU1hbmFnZW1lbnRBcGkucHJvdG90eXBlLmdldFRhYmxlcyA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS90bS9hZG1pbi9yZXN0YXVyYW50cy97cmVzdGF1cmFudElkfS90YWJsZXMnXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXN0YXVyYW50SWQnICsgJ30nLCBTdHJpbmcocmVzdGF1cmFudElkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFyZXN0YXVyYW50SWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2hlbiBjYWxsaW5nIGdldFRhYmxlcycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgQWRtaW5UYWJsZU1hbmFnZW1lbnRBcGkucHJvdG90eXBlLnJlbGVhc2VUYWJsZSA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIHRhYmxlTnVtYmVyLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvdG0vYWRtaW4vcmVzdGF1cmFudHMve3Jlc3RhdXJhbnRJZH0vdGFibGVzL3t0YWJsZU51bWJlcn0vcmVsZWFzZSdcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc3RhdXJhbnRJZCcgKyAnfScsIFN0cmluZyhyZXN0YXVyYW50SWQpKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAndGFibGVOdW1iZXInICsgJ30nLCBTdHJpbmcodGFibGVOdW1iZXIpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIXJlc3RhdXJhbnRJZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHJlc3RhdXJhbnRJZCB3aGVuIGNhbGxpbmcgcmVsZWFzZVRhYmxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGFibGVOdW1iZXIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciB0YWJsZU51bWJlciB3aGVuIGNhbGxpbmcgcmVsZWFzZVRhYmxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pblRhYmxlTWFuYWdlbWVudEFwaS5wcm90b3R5cGUuc2VhdFBhcnR5QXRUYWJsZSA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIHRhYmxlTnVtYmVyLCBwYXJ0eVNpemUsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS90bS9hZG1pbi9yZXN0YXVyYW50cy97cmVzdGF1cmFudElkfS90YWJsZXMve3RhYmxlTnVtYmVyfS9zZWF0J1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICd0YWJsZU51bWJlcicgKyAnfScsIFN0cmluZyh0YWJsZU51bWJlcikpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyBzZWF0UGFydHlBdFRhYmxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGFibGVOdW1iZXIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciB0YWJsZU51bWJlciB3aGVuIGNhbGxpbmcgc2VhdFBhcnR5QXRUYWJsZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXBhcnR5U2l6ZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHBhcnR5U2l6ZSB3aGVuIGNhbGxpbmcgc2VhdFBhcnR5QXRUYWJsZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGFydHlTaXplICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzWydwYXJ0eVNpemUnXSA9IHBhcnR5U2l6ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIEFkbWluVGFibGVNYW5hZ2VtZW50QXBpLnByb3RvdHlwZS5zZXRBcHByb3ZlZFRhYmxlQ29tYmluYXRpb25zID0gZnVuY3Rpb24gKHJlc3RhdXJhbnRJZCwgY29tYmluYXRpb25zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvdG0vYWRtaW4vcmVzdGF1cmFudHMve3Jlc3RhdXJhbnRJZH0vdGFibGVzL2NvbWJpbmF0aW9ucy9hcHByb3ZlZCdcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc3RhdXJhbnRJZCcgKyAnfScsIFN0cmluZyhyZXN0YXVyYW50SWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIXJlc3RhdXJhbnRJZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHJlc3RhdXJhbnRJZCB3aGVuIGNhbGxpbmcgc2V0QXBwcm92ZWRUYWJsZUNvbWJpbmF0aW9ucycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWNvbWJpbmF0aW9ucykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIGNvbWJpbmF0aW9ucyB3aGVuIGNhbGxpbmcgc2V0QXBwcm92ZWRUYWJsZUNvbWJpbmF0aW9ucycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiBjb21iaW5hdGlvbnMsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pblRhYmxlTWFuYWdlbWVudEFwaS5wcm90b3R5cGUuc2V0VGFibGVTdGF0ZSA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIHRhYmxlTnVtYmVyLCBzdGF0ZUNvbnRyYWN0LCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvdG0vYWRtaW4vcmVzdGF1cmFudHMve3Jlc3RhdXJhbnRJZH0vdGFibGVzL3t0YWJsZU51bWJlcn0vc3RhdGUnXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXN0YXVyYW50SWQnICsgJ30nLCBTdHJpbmcocmVzdGF1cmFudElkKSlcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3RhYmxlTnVtYmVyJyArICd9JywgU3RyaW5nKHRhYmxlTnVtYmVyKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFyZXN0YXVyYW50SWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2hlbiBjYWxsaW5nIHNldFRhYmxlU3RhdGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0YWJsZU51bWJlcikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHRhYmxlTnVtYmVyIHdoZW4gY2FsbGluZyBzZXRUYWJsZVN0YXRlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc3RhdGVDb250cmFjdCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHN0YXRlQ29udHJhY3Qgd2hlbiBjYWxsaW5nIHNldFRhYmxlU3RhdGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogc3RhdGVDb250cmFjdCxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIEFkbWluVGFibGVNYW5hZ2VtZW50QXBpLnByb3RvdHlwZS51cGRhdGVGbG9vciA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIGZsb29ySWQsIGZsb29yLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvdG0vYWRtaW4vcmVzdGF1cmFudHMve3Jlc3RhdXJhbnRJZH0vZmxvb3JzL3tmbG9vcklkfSdcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc3RhdXJhbnRJZCcgKyAnfScsIFN0cmluZyhyZXN0YXVyYW50SWQpKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAnZmxvb3JJZCcgKyAnfScsIFN0cmluZyhmbG9vcklkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFyZXN0YXVyYW50SWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2hlbiBjYWxsaW5nIHVwZGF0ZUZsb29yJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghZmxvb3JJZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIGZsb29ySWQgd2hlbiBjYWxsaW5nIHVwZGF0ZUZsb29yJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghZmxvb3IpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciBmbG9vciB3aGVuIGNhbGxpbmcgdXBkYXRlRmxvb3InKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogZmxvb3IsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pblRhYmxlTWFuYWdlbWVudEFwaS4kaW5qZWN0ID0gWyckaHR0cCcsICdJQXBpQ29uZmlnJywgJyRodHRwUGFyYW1TZXJpYWxpemVyJ107XHJcbiAgICByZXR1cm4gQWRtaW5UYWJsZU1hbmFnZW1lbnRBcGk7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQWRtaW5UYWJsZU1hbmFnZW1lbnRBcGkgPSBBZG1pblRhYmxlTWFuYWdlbWVudEFwaTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QWRtaW5UYWJsZU1hbmFnZW1lbnRBcGkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBhdXRoID0gcmVxdWlyZSgnLi9hdXRoJyk7XHJcbid1c2Ugc3RyaWN0JztcclxudmFyIEFkbWluV2FpdGluZ01hbmFnZW1lbnRBcGkgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQWRtaW5XYWl0aW5nTWFuYWdlbWVudEFwaSgkaHR0cCwgY29uZmlnLCAkaHR0cFBhcmFtU2VyaWFsaXplcikge1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuICAgICAgICB0aGlzLiRodHRwUGFyYW1TZXJpYWxpemVyID0gJGh0dHBQYXJhbVNlcmlhbGl6ZXI7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0SGVhZGVycyA9IHt9O1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zID0ge1xyXG4gICAgICAgICAgICAnZGVmYXVsdCc6IG5ldyBhdXRoLlZvaWRBdXRoKCksXHJcbiAgICAgICAgICAgICdvYXV0aDInOiBuZXcgYXV0aC5PQXV0aCgpLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWRtaW5XYWl0aW5nTWFuYWdlbWVudEFwaS5wcm90b3R5cGUsIFwiYWNjZXNzVG9rZW5cIiwge1xyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hY2Nlc3NUb2tlbiA9IHRva2VuO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgQWRtaW5XYWl0aW5nTWFuYWdlbWVudEFwaS5wcm90b3R5cGUuZXh0ZW5kT2JqID0gZnVuY3Rpb24gKG9iakEsIG9iakIpIHtcclxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqQikge1xyXG4gICAgICAgICAgICBpZiAob2JqQi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBvYmpBW2tleV0gPSBvYmpCW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9iakE7XHJcbiAgICB9O1xyXG4gICAgQWRtaW5XYWl0aW5nTWFuYWdlbWVudEFwaS5wcm90b3R5cGUuYWRkQ29uZmlybWVkV2FpdGluZyA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIGNvbmYsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS93bS9hZG1pbi9yZXN0YXVyYW50L3tyZXN0YXVyYW50SWR9L3dhaXRpbmdzL2NvbmZpcm1lZCdcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc3RhdXJhbnRJZCcgKyAnfScsIFN0cmluZyhyZXN0YXVyYW50SWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIXJlc3RhdXJhbnRJZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHJlc3RhdXJhbnRJZCB3aGVuIGNhbGxpbmcgYWRkQ29uZmlybWVkV2FpdGluZycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWNvbmYpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciBjb25mIHdoZW4gY2FsbGluZyBhZGRDb25maXJtZWRXYWl0aW5nJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiBjb25mLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgQWRtaW5XYWl0aW5nTWFuYWdlbWVudEFwaS5wcm90b3R5cGUuYWRkTmV3V2FpdGluZyA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS93bS9hZG1pbi9yZXN0YXVyYW50L3tyZXN0YXVyYW50SWR9L3dhaXRpbmdzJ1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyBhZGROZXdXYWl0aW5nJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgQWRtaW5XYWl0aW5nTWFuYWdlbWVudEFwaS5wcm90b3R5cGUuY2FsbFdhaXRpbmdQYXJ0eSA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIHdhaXRpbmdJdGVtSWQsIHRhYmxlTnVtYmVyLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvd20vYWRtaW4vcmVzdGF1cmFudC97cmVzdGF1cmFudElkfS93YWl0aW5ncy97d2FpdGluZ0l0ZW1JZH0vY2FsbCdcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc3RhdXJhbnRJZCcgKyAnfScsIFN0cmluZyhyZXN0YXVyYW50SWQpKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAnd2FpdGluZ0l0ZW1JZCcgKyAnfScsIFN0cmluZyh3YWl0aW5nSXRlbUlkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFyZXN0YXVyYW50SWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2hlbiBjYWxsaW5nIGNhbGxXYWl0aW5nUGFydHknKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF3YWl0aW5nSXRlbUlkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgd2FpdGluZ0l0ZW1JZCB3aGVuIGNhbGxpbmcgY2FsbFdhaXRpbmdQYXJ0eScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGFibGVOdW1iZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtZXRlcnNbJ3RhYmxlTnVtYmVyJ10gPSB0YWJsZU51bWJlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIEFkbWluV2FpdGluZ01hbmFnZW1lbnRBcGkucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKHJlc3RhdXJhbnRJZCwgd2FpdGluZ0l0ZW1JZCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL3dtL2FkbWluL3Jlc3RhdXJhbnQve3Jlc3RhdXJhbnRJZH0vd2FpdGluZ3Mve3dhaXRpbmdJdGVtSWR9L2Nsb3NlJ1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICd3YWl0aW5nSXRlbUlkJyArICd9JywgU3RyaW5nKHdhaXRpbmdJdGVtSWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIXJlc3RhdXJhbnRJZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHJlc3RhdXJhbnRJZCB3aGVuIGNhbGxpbmcgY2xvc2UnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF3YWl0aW5nSXRlbUlkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgd2FpdGluZ0l0ZW1JZCB3aGVuIGNhbGxpbmcgY2xvc2UnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIEFkbWluV2FpdGluZ01hbmFnZW1lbnRBcGkucHJvdG90eXBlLmNsb3NlQXNDYW5jZWxlZCA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIHdhaXRpbmdJdGVtSWQsIG9yaWdpbiwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL3dtL2FkbWluL3Jlc3RhdXJhbnQve3Jlc3RhdXJhbnRJZH0vd2FpdGluZ3Mve3dhaXRpbmdJdGVtSWR9L2NhbmNlbCdcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc3RhdXJhbnRJZCcgKyAnfScsIFN0cmluZyhyZXN0YXVyYW50SWQpKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAnd2FpdGluZ0l0ZW1JZCcgKyAnfScsIFN0cmluZyh3YWl0aW5nSXRlbUlkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFyZXN0YXVyYW50SWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2hlbiBjYWxsaW5nIGNsb3NlQXNDYW5jZWxlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXdhaXRpbmdJdGVtSWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciB3YWl0aW5nSXRlbUlkIHdoZW4gY2FsbGluZyBjbG9zZUFzQ2FuY2VsZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvcmlnaW4pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciBvcmlnaW4gd2hlbiBjYWxsaW5nIGNsb3NlQXNDYW5jZWxlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob3JpZ2luICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzWydvcmlnaW4nXSA9IG9yaWdpbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIEFkbWluV2FpdGluZ01hbmFnZW1lbnRBcGkucHJvdG90eXBlLmNsb3NlQXNTZWF0ZWQgPSBmdW5jdGlvbiAocmVzdGF1cmFudElkLCB3YWl0aW5nSXRlbUlkLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvd20vYWRtaW4vcmVzdGF1cmFudC97cmVzdGF1cmFudElkfS93YWl0aW5ncy97d2FpdGluZ0l0ZW1JZH0vc2l0ZWQnXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXN0YXVyYW50SWQnICsgJ30nLCBTdHJpbmcocmVzdGF1cmFudElkKSlcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3dhaXRpbmdJdGVtSWQnICsgJ30nLCBTdHJpbmcod2FpdGluZ0l0ZW1JZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyBjbG9zZUFzU2VhdGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghd2FpdGluZ0l0ZW1JZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHdhaXRpbmdJdGVtSWQgd2hlbiBjYWxsaW5nIGNsb3NlQXNTZWF0ZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIEFkbWluV2FpdGluZ01hbmFnZW1lbnRBcGkucHJvdG90eXBlLmNvbmZpcm0gPSBmdW5jdGlvbiAocmVzdGF1cmFudElkLCB3YWl0aW5nSXRlbUlkLCBjb25mLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvd20vYWRtaW4vcmVzdGF1cmFudC97cmVzdGF1cmFudElkfS93YWl0aW5ncy97d2FpdGluZ0l0ZW1JZH0vY29uZmlybSdcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc3RhdXJhbnRJZCcgKyAnfScsIFN0cmluZyhyZXN0YXVyYW50SWQpKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAnd2FpdGluZ0l0ZW1JZCcgKyAnfScsIFN0cmluZyh3YWl0aW5nSXRlbUlkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFyZXN0YXVyYW50SWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2hlbiBjYWxsaW5nIGNvbmZpcm0nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF3YWl0aW5nSXRlbUlkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgd2FpdGluZ0l0ZW1JZCB3aGVuIGNhbGxpbmcgY29uZmlybScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWNvbmYpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciBjb25mIHdoZW4gY2FsbGluZyBjb25maXJtJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGNvbmYsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pbldhaXRpbmdNYW5hZ2VtZW50QXBpLnByb3RvdHlwZS5nZXRBbGxXYWl0aW5ncyA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIHF1ZXJ5T3B0aW9ucywgYXJlYSwgZ3JvdXBTaXplLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvd20vYWRtaW4vcmVzdGF1cmFudC97cmVzdGF1cmFudElkfS93YWl0aW5ncydcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc3RhdXJhbnRJZCcgKyAnfScsIFN0cmluZyhyZXN0YXVyYW50SWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIXJlc3RhdXJhbnRJZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHJlc3RhdXJhbnRJZCB3aGVuIGNhbGxpbmcgZ2V0QWxsV2FpdGluZ3MnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHF1ZXJ5T3B0aW9ucyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyc1sncXVlcnlPcHRpb25zJ10gPSBxdWVyeU9wdGlvbnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhcmVhICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzWydhcmVhJ10gPSBhcmVhO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ3JvdXBTaXplICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzWydncm91cFNpemUnXSA9IGdyb3VwU2l6ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIEFkbWluV2FpdGluZ01hbmFnZW1lbnRBcGkucHJvdG90eXBlLmdldE1lc3NhZ2VzID0gZnVuY3Rpb24gKHJlc3RhdXJhbnRJZCwgd2FpdGluZ0l0ZW1JZCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL3dtL2FkbWluL3Jlc3RhdXJhbnQve3Jlc3RhdXJhbnRJZH0vd2FpdGluZ3Mve3dhaXRpbmdJdGVtSWR9L21lc3NhZ2VzJ1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICd3YWl0aW5nSXRlbUlkJyArICd9JywgU3RyaW5nKHdhaXRpbmdJdGVtSWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIXJlc3RhdXJhbnRJZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHJlc3RhdXJhbnRJZCB3aGVuIGNhbGxpbmcgZ2V0TWVzc2FnZXMnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF3YWl0aW5nSXRlbUlkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgd2FpdGluZ0l0ZW1JZCB3aGVuIGNhbGxpbmcgZ2V0TWVzc2FnZXMnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIEFkbWluV2FpdGluZ01hbmFnZW1lbnRBcGkucHJvdG90eXBlLmdldFJlc3RhdXJhbnRXYWl0aW5nc1N0YXRpc3RpYyA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIGFyZWEsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS93bS9hZG1pbi9yZXN0YXVyYW50L3tyZXN0YXVyYW50SWR9L3dhaXRpbmdzL3N0YXRzJ1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyBnZXRSZXN0YXVyYW50V2FpdGluZ3NTdGF0aXN0aWMnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyZWEgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtZXRlcnNbJ2FyZWEnXSA9IGFyZWE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pbldhaXRpbmdNYW5hZ2VtZW50QXBpLnByb3RvdHlwZS5nZXRUb2RheVN0YXRzID0gZnVuY3Rpb24gKHJlc3RhdXJhbnRJZCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL3dtL2FkbWluL3Jlc3RhdXJhbnQve3Jlc3RhdXJhbnRJZH0vc3RhdHMnXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXN0YXVyYW50SWQnICsgJ30nLCBTdHJpbmcocmVzdGF1cmFudElkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFyZXN0YXVyYW50SWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2hlbiBjYWxsaW5nIGdldFRvZGF5U3RhdHMnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIEFkbWluV2FpdGluZ01hbmFnZW1lbnRBcGkucHJvdG90eXBlLmdldFVucmVhZE1lc3NhZ2VzQ291bnQgPSBmdW5jdGlvbiAocmVzdGF1cmFudElkLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvd20vYWRtaW4vcmVzdGF1cmFudC97cmVzdGF1cmFudElkfS93YWl0aW5ncy9tZXNzYWdlcy91bnJlYWQvY291bnQnXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXN0YXVyYW50SWQnICsgJ30nLCBTdHJpbmcocmVzdGF1cmFudElkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFyZXN0YXVyYW50SWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2hlbiBjYWxsaW5nIGdldFVucmVhZE1lc3NhZ2VzQ291bnQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIEFkbWluV2FpdGluZ01hbmFnZW1lbnRBcGkucHJvdG90eXBlLmdldFdhaXRpbmdCeUlkID0gZnVuY3Rpb24gKHJlc3RhdXJhbnRJZCwgd2FpdGluZ0l0ZW1JZCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL3dtL2FkbWluL3Jlc3RhdXJhbnQve3Jlc3RhdXJhbnRJZH0vd2FpdGluZ3Mve3dhaXRpbmdJdGVtSWR9J1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICd3YWl0aW5nSXRlbUlkJyArICd9JywgU3RyaW5nKHdhaXRpbmdJdGVtSWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIXJlc3RhdXJhbnRJZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHJlc3RhdXJhbnRJZCB3aGVuIGNhbGxpbmcgZ2V0V2FpdGluZ0J5SWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF3YWl0aW5nSXRlbUlkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgd2FpdGluZ0l0ZW1JZCB3aGVuIGNhbGxpbmcgZ2V0V2FpdGluZ0J5SWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIEFkbWluV2FpdGluZ01hbmFnZW1lbnRBcGkucHJvdG90eXBlLmdldFdhaXRpbmdTZXR0aW5ncyA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS93bS9hZG1pbi9yZXN0YXVyYW50L3tyZXN0YXVyYW50SWR9L3NldHRpbmdzJ1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyBnZXRXYWl0aW5nU2V0dGluZ3MnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIEFkbWluV2FpdGluZ01hbmFnZW1lbnRBcGkucHJvdG90eXBlLmdldFdhaXRpbmdUaW1lQnlHcm91cCA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIGZyb20sIHRvLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvd20vYWRtaW4vcmVzdGF1cmFudC97cmVzdGF1cmFudElkfS9hbmFseXRpY3Mvd2FpdGluZ3MvZ3JvdXBieS9wYXJ0eXNpemUnXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXN0YXVyYW50SWQnICsgJ30nLCBTdHJpbmcocmVzdGF1cmFudElkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFyZXN0YXVyYW50SWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2hlbiBjYWxsaW5nIGdldFdhaXRpbmdUaW1lQnlHcm91cCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZnJvbSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyc1snZnJvbSddID0gZnJvbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRvICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzWyd0byddID0gdG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pbldhaXRpbmdNYW5hZ2VtZW50QXBpLnByb3RvdHlwZS5nZXRXYWl0aW5nVGltZUJ5SG91ciA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIGZyb20sIHRvLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvd20vYWRtaW4vcmVzdGF1cmFudC97cmVzdGF1cmFudElkfS9hbmFseXRpY3Mvd2FpdGluZ3MvZ3JvdXBieS9ob3VyJ1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyBnZXRXYWl0aW5nVGltZUJ5SG91cicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZnJvbSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyc1snZnJvbSddID0gZnJvbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRvICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzWyd0byddID0gdG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pbldhaXRpbmdNYW5hZ2VtZW50QXBpLnByb3RvdHlwZS5nZXRXYWl0aW5nVGltZUJ5TGluZSA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIGZyb20sIHRvLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvd20vYWRtaW4vcmVzdGF1cmFudC97cmVzdGF1cmFudElkfS9hbmFseXRpY3Mvd2FpdGluZ3Mvd2FpdGluZ3MvZ3JvdXBieS9saW5lJ1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyBnZXRXYWl0aW5nVGltZUJ5TGluZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZnJvbSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyc1snZnJvbSddID0gZnJvbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRvICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzWyd0byddID0gdG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pbldhaXRpbmdNYW5hZ2VtZW50QXBpLnByb3RvdHlwZS5nZXRXYWl0aW5nVGltZUJ5TWVhbCA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIGZyb20sIHRvLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvd20vYWRtaW4vcmVzdGF1cmFudC97cmVzdGF1cmFudElkfS9hbmFseXRpY3Mvd2FpdGluZ3MvZ3JvdXBieS9tZWFsdHlwZSdcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc3RhdXJhbnRJZCcgKyAnfScsIFN0cmluZyhyZXN0YXVyYW50SWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIXJlc3RhdXJhbnRJZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHJlc3RhdXJhbnRJZCB3aGVuIGNhbGxpbmcgZ2V0V2FpdGluZ1RpbWVCeU1lYWwnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZyb20gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtZXRlcnNbJ2Zyb20nXSA9IGZyb207XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0byAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyc1sndG8nXSA9IHRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgQWRtaW5XYWl0aW5nTWFuYWdlbWVudEFwaS5wcm90b3R5cGUuZ2V0V2FpdGluZ1RpbWVCeVdlZWsgPSBmdW5jdGlvbiAocmVzdGF1cmFudElkLCBmcm9tLCB0bywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL3dtL2FkbWluL3Jlc3RhdXJhbnQve3Jlc3RhdXJhbnRJZH0vYW5hbHl0aWNzL3dhaXRpbmdzL2dyb3VwYnkvd2VlaydcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc3RhdXJhbnRJZCcgKyAnfScsIFN0cmluZyhyZXN0YXVyYW50SWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIXJlc3RhdXJhbnRJZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHJlc3RhdXJhbnRJZCB3aGVuIGNhbGxpbmcgZ2V0V2FpdGluZ1RpbWVCeVdlZWsnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZyb20gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtZXRlcnNbJ2Zyb20nXSA9IGZyb207XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0byAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyc1sndG8nXSA9IHRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgQWRtaW5XYWl0aW5nTWFuYWdlbWVudEFwaS5wcm90b3R5cGUuZ2V0V2FpdGluZ1RpbWVCeVdlZWtEYXkgPSBmdW5jdGlvbiAocmVzdGF1cmFudElkLCBmcm9tLCB0bywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL3dtL2FkbWluL3Jlc3RhdXJhbnQve3Jlc3RhdXJhbnRJZH0vYW5hbHl0aWNzL3dhaXRpbmdzL2dyb3VwYnkvd2Vla2RheSdcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc3RhdXJhbnRJZCcgKyAnfScsIFN0cmluZyhyZXN0YXVyYW50SWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIXJlc3RhdXJhbnRJZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHJlc3RhdXJhbnRJZCB3aGVuIGNhbGxpbmcgZ2V0V2FpdGluZ1RpbWVCeVdlZWtEYXknKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZyb20gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtZXRlcnNbJ2Zyb20nXSA9IGZyb207XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0byAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyc1sndG8nXSA9IHRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgQWRtaW5XYWl0aW5nTWFuYWdlbWVudEFwaS5wcm90b3R5cGUuZ2V0V2FpdGluZ3NGb3JQZXJpb2QgPSBmdW5jdGlvbiAocmVzdGF1cmFudElkLCBmcm9tLCB0bywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL3dtL2FkbWluL3Jlc3RhdXJhbnQve3Jlc3RhdXJhbnRJZH0vYW5hbHl0aWNzL3dhaXRpbmdzJ1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyBnZXRXYWl0aW5nc0ZvclBlcmlvZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZnJvbSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyc1snZnJvbSddID0gZnJvbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRvICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzWyd0byddID0gdG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pbldhaXRpbmdNYW5hZ2VtZW50QXBpLnByb3RvdHlwZS5nZXRXYWl0aW5nc0dyb3VwQnkgPSBmdW5jdGlvbiAocmVzdGF1cmFudElkLCBncm91cEJ5LCBmcm9tLCB0bywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL3dtL2FkbWluL3Jlc3RhdXJhbnQve3Jlc3RhdXJhbnRJZH0vYW5hbHl0aWNzL3dhaXRpbmdzL2dyb3VwYnknXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXN0YXVyYW50SWQnICsgJ30nLCBTdHJpbmcocmVzdGF1cmFudElkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFyZXN0YXVyYW50SWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2hlbiBjYWxsaW5nIGdldFdhaXRpbmdzR3JvdXBCeScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWdyb3VwQnkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciBncm91cEJ5IHdoZW4gY2FsbGluZyBnZXRXYWl0aW5nc0dyb3VwQnknKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdyb3VwQnkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtZXRlcnNbJ2dyb3VwQnknXSA9IGdyb3VwQnk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmcm9tICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzWydmcm9tJ10gPSBmcm9tO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodG8gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtZXRlcnNbJ3RvJ10gPSB0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIEFkbWluV2FpdGluZ01hbmFnZW1lbnRBcGkucHJvdG90eXBlLmluY29taW5nID0gZnVuY3Rpb24gKGZyb20sIHRvLCBib2R5LCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvd20vYWRtaW4vc21zY2xpZW50L2luY29taW5nJztcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIWZyb20pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciBmcm9tIHdoZW4gY2FsbGluZyBpbmNvbWluZycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRvKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgdG8gd2hlbiBjYWxsaW5nIGluY29taW5nJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghYm9keSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIGJvZHkgd2hlbiBjYWxsaW5nIGluY29taW5nJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmcm9tICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzWydmcm9tJ10gPSBmcm9tO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodG8gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtZXRlcnNbJ3RvJ10gPSB0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJvZHkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtZXRlcnNbJ2JvZHknXSA9IGJvZHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgQWRtaW5XYWl0aW5nTWFuYWdlbWVudEFwaS5wcm90b3R5cGUubWFya0FsbE1lc3NhZ2VzQXNSZWFkID0gZnVuY3Rpb24gKHJlc3RhdXJhbnRJZCwgd2FpdGluZ0l0ZW1JZCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL3dtL2FkbWluL3Jlc3RhdXJhbnQve3Jlc3RhdXJhbnRJZH0vd2FpdGluZ3Mve3dhaXRpbmdJdGVtSWR9L21lc3NhZ2VzL3JlYWRhbGwnXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXN0YXVyYW50SWQnICsgJ30nLCBTdHJpbmcocmVzdGF1cmFudElkKSlcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3dhaXRpbmdJdGVtSWQnICsgJ30nLCBTdHJpbmcod2FpdGluZ0l0ZW1JZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyBtYXJrQWxsTWVzc2FnZXNBc1JlYWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF3YWl0aW5nSXRlbUlkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgd2FpdGluZ0l0ZW1JZCB3aGVuIGNhbGxpbmcgbWFya0FsbE1lc3NhZ2VzQXNSZWFkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgQWRtaW5XYWl0aW5nTWFuYWdlbWVudEFwaS5wcm90b3R5cGUucHV0T25Ib2xkID0gZnVuY3Rpb24gKHJlc3RhdXJhbnRJZCwgd2FpdGluZ0l0ZW1JZCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL3dtL2FkbWluL3Jlc3RhdXJhbnQve3Jlc3RhdXJhbnRJZH0vd2FpdGluZ3Mve3dhaXRpbmdJdGVtSWR9L3B1dG9uaG9sZCdcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc3RhdXJhbnRJZCcgKyAnfScsIFN0cmluZyhyZXN0YXVyYW50SWQpKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAnd2FpdGluZ0l0ZW1JZCcgKyAnfScsIFN0cmluZyh3YWl0aW5nSXRlbUlkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFyZXN0YXVyYW50SWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2hlbiBjYWxsaW5nIHB1dE9uSG9sZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXdhaXRpbmdJdGVtSWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciB3YWl0aW5nSXRlbUlkIHdoZW4gY2FsbGluZyBwdXRPbkhvbGQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIEFkbWluV2FpdGluZ01hbmFnZW1lbnRBcGkucHJvdG90eXBlLnJlT3BlbldhaXRpbmcgPSBmdW5jdGlvbiAocmVzdGF1cmFudElkLCB3YWl0aW5nSXRlbUlkLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvd20vYWRtaW4vcmVzdGF1cmFudC97cmVzdGF1cmFudElkfS93YWl0aW5ncy97d2FpdGluZ0l0ZW1JZH0vcmVvcGVuJ1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICd3YWl0aW5nSXRlbUlkJyArICd9JywgU3RyaW5nKHdhaXRpbmdJdGVtSWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIXJlc3RhdXJhbnRJZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHJlc3RhdXJhbnRJZCB3aGVuIGNhbGxpbmcgcmVPcGVuV2FpdGluZycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXdhaXRpbmdJdGVtSWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciB3YWl0aW5nSXRlbUlkIHdoZW4gY2FsbGluZyByZU9wZW5XYWl0aW5nJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pbldhaXRpbmdNYW5hZ2VtZW50QXBpLnByb3RvdHlwZS5zZW5kTWVzc2FnZSA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIHdhaXRpbmdJdGVtSWQsIG9yaWdpbiwgY3JlYXRlTWVzc2FnZSwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL3dtL2FkbWluL3Jlc3RhdXJhbnQve3Jlc3RhdXJhbnRJZH0vd2FpdGluZ3Mve3dhaXRpbmdJdGVtSWR9L3NlbmRtZXNzYWdlJ1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICd3YWl0aW5nSXRlbUlkJyArICd9JywgU3RyaW5nKHdhaXRpbmdJdGVtSWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIXJlc3RhdXJhbnRJZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHJlc3RhdXJhbnRJZCB3aGVuIGNhbGxpbmcgc2VuZE1lc3NhZ2UnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF3YWl0aW5nSXRlbUlkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgd2FpdGluZ0l0ZW1JZCB3aGVuIGNhbGxpbmcgc2VuZE1lc3NhZ2UnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvcmlnaW4pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciBvcmlnaW4gd2hlbiBjYWxsaW5nIHNlbmRNZXNzYWdlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghY3JlYXRlTWVzc2FnZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIGNyZWF0ZU1lc3NhZ2Ugd2hlbiBjYWxsaW5nIHNlbmRNZXNzYWdlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvcmlnaW4gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtZXRlcnNbJ29yaWdpbiddID0gb3JpZ2luO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogY3JlYXRlTWVzc2FnZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIEFkbWluV2FpdGluZ01hbmFnZW1lbnRBcGkucHJvdG90eXBlLnNldFdhaXRpbmdTZXR0aW5ncyA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIHNldHRpbmdzLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvd20vYWRtaW4vcmVzdGF1cmFudC97cmVzdGF1cmFudElkfS9zZXR0aW5ncydcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc3RhdXJhbnRJZCcgKyAnfScsIFN0cmluZyhyZXN0YXVyYW50SWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIXJlc3RhdXJhbnRJZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHJlc3RhdXJhbnRJZCB3aGVuIGNhbGxpbmcgc2V0V2FpdGluZ1NldHRpbmdzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciBzZXR0aW5ncyB3aGVuIGNhbGxpbmcgc2V0V2FpdGluZ1NldHRpbmdzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IHNldHRpbmdzLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgQWRtaW5XYWl0aW5nTWFuYWdlbWVudEFwaS5wcm90b3R5cGUudGFrZU9mZkhvbGQgPSBmdW5jdGlvbiAocmVzdGF1cmFudElkLCB3YWl0aW5nSXRlbUlkLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvd20vYWRtaW4vcmVzdGF1cmFudC97cmVzdGF1cmFudElkfS93YWl0aW5ncy97d2FpdGluZ0l0ZW1JZH0vdGFrZW9mZmhvbGQnXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXN0YXVyYW50SWQnICsgJ30nLCBTdHJpbmcocmVzdGF1cmFudElkKSlcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3dhaXRpbmdJdGVtSWQnICsgJ30nLCBTdHJpbmcod2FpdGluZ0l0ZW1JZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyB0YWtlT2ZmSG9sZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXdhaXRpbmdJdGVtSWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciB3YWl0aW5nSXRlbUlkIHdoZW4gY2FsbGluZyB0YWtlT2ZmSG9sZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgQWRtaW5XYWl0aW5nTWFuYWdlbWVudEFwaS5wcm90b3R5cGUudXBkYXRlV2FpdGluZyA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIHdhaXRpbmdJdGVtSWQsIGl0ZW0sIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS93bS9hZG1pbi9yZXN0YXVyYW50L3tyZXN0YXVyYW50SWR9L3dhaXRpbmdzL3t3YWl0aW5nSXRlbUlkfSdcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc3RhdXJhbnRJZCcgKyAnfScsIFN0cmluZyhyZXN0YXVyYW50SWQpKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAnd2FpdGluZ0l0ZW1JZCcgKyAnfScsIFN0cmluZyh3YWl0aW5nSXRlbUlkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFyZXN0YXVyYW50SWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2hlbiBjYWxsaW5nIHVwZGF0ZVdhaXRpbmcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF3YWl0aW5nSXRlbUlkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgd2FpdGluZ0l0ZW1JZCB3aGVuIGNhbGxpbmcgdXBkYXRlV2FpdGluZycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWl0ZW0pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciBpdGVtIHdoZW4gY2FsbGluZyB1cGRhdGVXYWl0aW5nJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGl0ZW0sXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pbldhaXRpbmdNYW5hZ2VtZW50QXBpLiRpbmplY3QgPSBbJyRodHRwJywgJ0lBcGlDb25maWcnLCAnJGh0dHBQYXJhbVNlcmlhbGl6ZXInXTtcclxuICAgIHJldHVybiBBZG1pbldhaXRpbmdNYW5hZ2VtZW50QXBpO1xyXG59KCkpO1xyXG5leHBvcnRzLkFkbWluV2FpdGluZ01hbmFnZW1lbnRBcGkgPSBBZG1pbldhaXRpbmdNYW5hZ2VtZW50QXBpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1BZG1pbldhaXRpbmdNYW5hZ2VtZW50QXBpLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgYXV0aCA9IHJlcXVpcmUoJy4vYXV0aCcpO1xyXG4ndXNlIHN0cmljdCc7XHJcbnZhciBBZG1pbldlYkhvb2tNYW5hZ2VtZW50QXBpID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFkbWluV2ViSG9va01hbmFnZW1lbnRBcGkoJGh0dHAsIGNvbmZpZywgJGh0dHBQYXJhbVNlcmlhbGl6ZXIpIHtcclxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XHJcbiAgICAgICAgdGhpcy4kaHR0cFBhcmFtU2VyaWFsaXplciA9ICRodHRwUGFyYW1TZXJpYWxpemVyO1xyXG4gICAgICAgIHRoaXMuZGVmYXVsdEhlYWRlcnMgPSB7fTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucyA9IHtcclxuICAgICAgICAgICAgJ2RlZmF1bHQnOiBuZXcgYXV0aC5Wb2lkQXV0aCgpLFxyXG4gICAgICAgICAgICAnb2F1dGgyJzogbmV3IGF1dGguT0F1dGgoKSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFkbWluV2ViSG9va01hbmFnZW1lbnRBcGkucHJvdG90eXBlLCBcImFjY2Vzc1Rva2VuXCIsIHtcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYWNjZXNzVG9rZW4gPSB0b2tlbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIEFkbWluV2ViSG9va01hbmFnZW1lbnRBcGkucHJvdG90eXBlLmV4dGVuZE9iaiA9IGZ1bmN0aW9uIChvYmpBLCBvYmpCKSB7XHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIG9iakIpIHtcclxuICAgICAgICAgICAgaWYgKG9iakIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgb2JqQVtrZXldID0gb2JqQltrZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmpBO1xyXG4gICAgfTtcclxuICAgIEFkbWluV2ViSG9va01hbmFnZW1lbnRBcGkucHJvdG90eXBlLl9kZWxldGUgPSBmdW5jdGlvbiAoaWQsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS93ZWJob29rcy9yZWdpc3RyYXRpb25zL3tpZH0nXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdpZCcgKyAnfScsIFN0cmluZyhpZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghaWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciBpZCB3aGVuIGNhbGxpbmcgX2RlbGV0ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgQWRtaW5XZWJIb29rTWFuYWdlbWVudEFwaS5wcm90b3R5cGUuZGVsZXRlQWxsID0gZnVuY3Rpb24gKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS93ZWJob29rcy9yZWdpc3RyYXRpb25zJztcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgQWRtaW5XZWJIb29rTWFuYWdlbWVudEFwaS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS93ZWJob29rcy9maWx0ZXJzJztcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgQWRtaW5XZWJIb29rTWFuYWdlbWVudEFwaS5wcm90b3R5cGUuZ2V0XzEgPSBmdW5jdGlvbiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL3dlYmhvb2tzL3JlZ2lzdHJhdGlvbnMnO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pbldlYkhvb2tNYW5hZ2VtZW50QXBpLnByb3RvdHlwZS5sb29rdXAgPSBmdW5jdGlvbiAoaWQsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS93ZWJob29rcy9yZWdpc3RyYXRpb25zL3tpZH0nXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdpZCcgKyAnfScsIFN0cmluZyhpZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghaWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciBpZCB3aGVuIGNhbGxpbmcgbG9va3VwJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBBZG1pbldlYkhvb2tNYW5hZ2VtZW50QXBpLnByb3RvdHlwZS5wb3N0ID0gZnVuY3Rpb24gKHdlYkhvb2ssIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS93ZWJob29rcy9yZWdpc3RyYXRpb25zJztcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIXdlYkhvb2spIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciB3ZWJIb29rIHdoZW4gY2FsbGluZyBwb3N0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiB3ZWJIb29rLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgQWRtaW5XZWJIb29rTWFuYWdlbWVudEFwaS5wcm90b3R5cGUucHV0ID0gZnVuY3Rpb24gKGlkLCB3ZWJIb29rLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvd2ViaG9va3MvcmVnaXN0cmF0aW9ucy97aWR9J1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAnaWQnICsgJ30nLCBTdHJpbmcoaWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIWlkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2hlbiBjYWxsaW5nIHB1dCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXdlYkhvb2spIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciB3ZWJIb29rIHdoZW4gY2FsbGluZyBwdXQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogd2ViSG9vayxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIEFkbWluV2ViSG9va01hbmFnZW1lbnRBcGkuJGluamVjdCA9IFsnJGh0dHAnLCAnSUFwaUNvbmZpZycsICckaHR0cFBhcmFtU2VyaWFsaXplciddO1xyXG4gICAgcmV0dXJuIEFkbWluV2ViSG9va01hbmFnZW1lbnRBcGk7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQWRtaW5XZWJIb29rTWFuYWdlbWVudEFwaSA9IEFkbWluV2ViSG9va01hbmFnZW1lbnRBcGk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFkbWluV2ViSG9va01hbmFnZW1lbnRBcGkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5fX2V4cG9ydChyZXF1aXJlKCcuL0FkbWluQ29yZUFwaScpKTtcclxuX19leHBvcnQocmVxdWlyZSgnLi9BZG1pbkxveWFsdHlBcGknKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoJy4vQWRtaW5SZXNlcnZhdGlvbnNBcGknKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoJy4vQWRtaW5UYWJsZU1hbmFnZW1lbnRBcGknKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoJy4vQWRtaW5XYWl0aW5nTWFuYWdlbWVudEFwaScpKTtcclxuX19leHBvcnQocmVxdWlyZSgnLi9BZG1pbldlYkhvb2tNYW5hZ2VtZW50QXBpJykpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcGkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBIdHRwQmFzaWNBdXRoID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEh0dHBCYXNpY0F1dGgoKSB7XHJcbiAgICB9XHJcbiAgICBIdHRwQmFzaWNBdXRoLnByb3RvdHlwZS5hcHBseVRvUmVxdWVzdCA9IGZ1bmN0aW9uIChodHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zLmF1dGggPSB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLnVzZXJuYW1lLCBwYXNzd29yZDogdGhpcy5wYXNzd29yZFxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEh0dHBCYXNpY0F1dGg7XHJcbn0oKSk7XHJcbmV4cG9ydHMuSHR0cEJhc2ljQXV0aCA9IEh0dHBCYXNpY0F1dGg7XHJcbnZhciBBcGlLZXlBdXRoID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFwaUtleUF1dGgobG9jYXRpb24sIHBhcmFtTmFtZSkge1xyXG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcclxuICAgICAgICB0aGlzLnBhcmFtTmFtZSA9IHBhcmFtTmFtZTtcclxuICAgIH1cclxuICAgIEFwaUtleUF1dGgucHJvdG90eXBlLmFwcGx5VG9SZXF1ZXN0ID0gZnVuY3Rpb24gKGh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9jYXRpb24gPT09ICdxdWVyeScpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMucXNbdGhpcy5wYXJhbU5hbWVdID0gdGhpcy5hcGlLZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMubG9jYXRpb24gPT09ICdoZWFkZXInKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zLmhlYWRlcnNbdGhpcy5wYXJhbU5hbWVdID0gdGhpcy5hcGlLZXk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBBcGlLZXlBdXRoO1xyXG59KCkpO1xyXG5leHBvcnRzLkFwaUtleUF1dGggPSBBcGlLZXlBdXRoO1xyXG52YXIgT0F1dGggPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gT0F1dGgoKSB7XHJcbiAgICB9XHJcbiAgICBPQXV0aC5wcm90b3R5cGUuYXBwbHlUb1JlcXVlc3QgPSBmdW5jdGlvbiAoaHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICBodHRwUmVxdWVzdFBhcmFtcy5oZWFkZXJzWydBdXRob3JpemF0aW9uJ10gPSAnQmVhcmVyICcgKyB0aGlzLmFjY2Vzc1Rva2VuO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBPQXV0aDtcclxufSgpKTtcclxuZXhwb3J0cy5PQXV0aCA9IE9BdXRoO1xyXG52YXIgVm9pZEF1dGggPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVm9pZEF1dGgoKSB7XHJcbiAgICB9XHJcbiAgICBWb2lkQXV0aC5wcm90b3R5cGUuYXBwbHlUb1JlcXVlc3QgPSBmdW5jdGlvbiAoaHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVm9pZEF1dGg7XHJcbn0oKSk7XHJcbmV4cG9ydHMuVm9pZEF1dGggPSBWb2lkQXV0aDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXV0aC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIEF1dGhvcml6YXRpb25TZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEF1dGhvcml6YXRpb25TZXJ2aWNlKCRodHRwLCAkcSwgY29uZmlnLCAkaHR0cFBhcmFtU2VyaWFsaXplcikge1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLiRxID0gJHE7XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XHJcbiAgICAgICAgdGhpcy4kaHR0cFBhcmFtU2VyaWFsaXplciA9ICRodHRwUGFyYW1TZXJpYWxpemVyO1xyXG4gICAgICAgIHRoaXMuZGVmYXVsdEhlYWRlcnMgPSB7fTtcclxuICAgIH1cclxuICAgIEF1dGhvcml6YXRpb25TZXJ2aWNlLnByb3RvdHlwZS5BdXRob3JpemUgPSBmdW5jdGlvbiAoYXBpLCB1c2VyTmFtZSwgcGFzc3dvcmQpIHtcclxuICAgICAgICB2YXIgZGVmZmVyID0gdGhpcy4kcS5kZWZlcigpO1xyXG4gICAgICAgIHRoaXMuZ2V0VG9rZW4odXNlck5hbWUsIHBhc3N3b3JkKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBhcGkuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hY2Nlc3NUb2tlbiA9IHJlc3BvbnNlLmFjY2Vzc190b2tlbjtcclxuICAgICAgICAgICAgZGVmZmVyLnJlc29sdmUoKTtcclxuICAgICAgICB9LCBmdW5jdGlvbiAocGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGRlZmZlci5yZWplY3QocGFyYW1zKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZGVmZmVyLnByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgQXV0aG9yaXphdGlvblNlcnZpY2UucHJvdG90eXBlLmdldFRva2VuID0gZnVuY3Rpb24gKHVzZXJOYW1lLCBwYXNzd29yZCkge1xyXG4gICAgICAgIHZhciBkZWZmZXIgPSB0aGlzLiRxLmRlZmVyKCk7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9Ub2tlbic7XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLTgnIH07XHJcbiAgICAgICAgdmFyIHZhbHVlID0ge1xyXG4gICAgICAgICAgICB1c2VybmFtZTogdXNlck5hbWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAgICAgICAgICAgZ3JhbnRfdHlwZTogJ3Bhc3N3b3JkJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IHRoaXMuJGh0dHBQYXJhbVNlcmlhbGl6ZXIodmFsdWUpLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGRlZmZlci5yZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgZGVmZmVyLnJlamVjdChlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBkZWZmZXIucHJvbWlzZTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICBBdXRob3JpemF0aW9uU2VydmljZS4kaW5qZWN0ID0gWyckaHR0cCcsICckcScsICdJQXBpQ29uZmlnJywgJyRodHRwUGFyYW1TZXJpYWxpemVyJ107XHJcbiAgICByZXR1cm4gQXV0aG9yaXphdGlvblNlcnZpY2U7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQXV0aG9yaXphdGlvblNlcnZpY2UgPSBBdXRob3JpemF0aW9uU2VydmljZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXV0aG9yaXphdGlvblNlcnZpY2UuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgQXZhaWxhYmlsaXR5O1xyXG4oZnVuY3Rpb24gKEF2YWlsYWJpbGl0eSkge1xyXG4gICAgKGZ1bmN0aW9uIChBdmFpbGFiaWxpdHlMZXZlbEVudW0pIHtcclxuICAgICAgICBBdmFpbGFiaWxpdHlMZXZlbEVudW1bQXZhaWxhYmlsaXR5TGV2ZWxFbnVtW1wiQXZhaWxhYmxlXCJdID0gJ0F2YWlsYWJsZSddID0gXCJBdmFpbGFibGVcIjtcclxuICAgICAgICBBdmFpbGFiaWxpdHlMZXZlbEVudW1bQXZhaWxhYmlsaXR5TGV2ZWxFbnVtW1wiQXZhaWxhYmxlRm9yV2FpdFwiXSA9ICdBdmFpbGFibGVGb3JXYWl0J10gPSBcIkF2YWlsYWJsZUZvcldhaXRcIjtcclxuICAgICAgICBBdmFpbGFiaWxpdHlMZXZlbEVudW1bQXZhaWxhYmlsaXR5TGV2ZWxFbnVtW1wiTm90RW5vdWdoQ292ZXJzXCJdID0gJ05vdEVub3VnaENvdmVycyddID0gXCJOb3RFbm91Z2hDb3ZlcnNcIjtcclxuICAgICAgICBBdmFpbGFiaWxpdHlMZXZlbEVudW1bQXZhaWxhYmlsaXR5TGV2ZWxFbnVtW1wiT3ZlcmJvb2tlZFwiXSA9ICdPdmVyYm9va2VkJ10gPSBcIk92ZXJib29rZWRcIjtcclxuICAgIH0pKEF2YWlsYWJpbGl0eS5BdmFpbGFiaWxpdHlMZXZlbEVudW0gfHwgKEF2YWlsYWJpbGl0eS5BdmFpbGFiaWxpdHlMZXZlbEVudW0gPSB7fSkpO1xyXG4gICAgdmFyIEF2YWlsYWJpbGl0eUxldmVsRW51bSA9IEF2YWlsYWJpbGl0eS5BdmFpbGFiaWxpdHlMZXZlbEVudW07XHJcbn0pKEF2YWlsYWJpbGl0eSA9IGV4cG9ydHMuQXZhaWxhYmlsaXR5IHx8IChleHBvcnRzLkF2YWlsYWJpbGl0eSA9IHt9KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUF2YWlsYWJpbGl0eS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XHJcbnZhciBBdmFpbGFiaWxpdHlSZXNwb25zZTtcclxuKGZ1bmN0aW9uIChBdmFpbGFiaWxpdHlSZXNwb25zZSkge1xyXG4gICAgKGZ1bmN0aW9uIChVbml0VHlwZUVudW0pIHtcclxuICAgICAgICBVbml0VHlwZUVudW1bVW5pdFR5cGVFbnVtW1wiQ292ZXJcIl0gPSAnQ292ZXInXSA9IFwiQ292ZXJcIjtcclxuICAgICAgICBVbml0VHlwZUVudW1bVW5pdFR5cGVFbnVtW1wiVGFibGVcIl0gPSAnVGFibGUnXSA9IFwiVGFibGVcIjtcclxuICAgICAgICBVbml0VHlwZUVudW1bVW5pdFR5cGVFbnVtW1wiRGVmYXVsdFwiXSA9ICdEZWZhdWx0J10gPSBcIkRlZmF1bHRcIjtcclxuICAgIH0pKEF2YWlsYWJpbGl0eVJlc3BvbnNlLlVuaXRUeXBlRW51bSB8fCAoQXZhaWxhYmlsaXR5UmVzcG9uc2UuVW5pdFR5cGVFbnVtID0ge30pKTtcclxuICAgIHZhciBVbml0VHlwZUVudW0gPSBBdmFpbGFiaWxpdHlSZXNwb25zZS5Vbml0VHlwZUVudW07XHJcbn0pKEF2YWlsYWJpbGl0eVJlc3BvbnNlID0gZXhwb3J0cy5BdmFpbGFiaWxpdHlSZXNwb25zZSB8fCAoZXhwb3J0cy5BdmFpbGFiaWxpdHlSZXNwb25zZSA9IHt9KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUF2YWlsYWJpbGl0eVJlc3BvbnNlLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcclxudmFyIENyZWF0ZVJlc2VydmF0aW9uO1xyXG4oZnVuY3Rpb24gKENyZWF0ZVJlc2VydmF0aW9uKSB7XHJcbiAgICAoZnVuY3Rpb24gKFR5cGVFbnVtKSB7XHJcbiAgICAgICAgVHlwZUVudW1bVHlwZUVudW1bXCJTdGFuZGFyZFwiXSA9ICdTdGFuZGFyZCddID0gXCJTdGFuZGFyZFwiO1xyXG4gICAgICAgIFR5cGVFbnVtW1R5cGVFbnVtW1wiSHlicmlkXCJdID0gJ0h5YnJpZCddID0gXCJIeWJyaWRcIjtcclxuICAgIH0pKENyZWF0ZVJlc2VydmF0aW9uLlR5cGVFbnVtIHx8IChDcmVhdGVSZXNlcnZhdGlvbi5UeXBlRW51bSA9IHt9KSk7XHJcbiAgICB2YXIgVHlwZUVudW0gPSBDcmVhdGVSZXNlcnZhdGlvbi5UeXBlRW51bTtcclxufSkoQ3JlYXRlUmVzZXJ2YXRpb24gPSBleHBvcnRzLkNyZWF0ZVJlc2VydmF0aW9uIHx8IChleHBvcnRzLkNyZWF0ZVJlc2VydmF0aW9uID0ge30pKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q3JlYXRlUmVzZXJ2YXRpb24uanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgSUVkbVNjaGVtYUVsZW1lbnQ7XHJcbihmdW5jdGlvbiAoSUVkbVNjaGVtYUVsZW1lbnQpIHtcclxuICAgIChmdW5jdGlvbiAoU2NoZW1hRWxlbWVudEtpbmRFbnVtKSB7XHJcbiAgICAgICAgU2NoZW1hRWxlbWVudEtpbmRFbnVtW1NjaGVtYUVsZW1lbnRLaW5kRW51bVtcIk5vbmVcIl0gPSAnTm9uZSddID0gXCJOb25lXCI7XHJcbiAgICAgICAgU2NoZW1hRWxlbWVudEtpbmRFbnVtW1NjaGVtYUVsZW1lbnRLaW5kRW51bVtcIlR5cGVEZWZpbml0aW9uXCJdID0gJ1R5cGVEZWZpbml0aW9uJ10gPSBcIlR5cGVEZWZpbml0aW9uXCI7XHJcbiAgICAgICAgU2NoZW1hRWxlbWVudEtpbmRFbnVtW1NjaGVtYUVsZW1lbnRLaW5kRW51bVtcIkZ1bmN0aW9uXCJdID0gJ0Z1bmN0aW9uJ10gPSBcIkZ1bmN0aW9uXCI7XHJcbiAgICAgICAgU2NoZW1hRWxlbWVudEtpbmRFbnVtW1NjaGVtYUVsZW1lbnRLaW5kRW51bVtcIlZhbHVlVGVybVwiXSA9ICdWYWx1ZVRlcm0nXSA9IFwiVmFsdWVUZXJtXCI7XHJcbiAgICAgICAgU2NoZW1hRWxlbWVudEtpbmRFbnVtW1NjaGVtYUVsZW1lbnRLaW5kRW51bVtcIkVudGl0eUNvbnRhaW5lclwiXSA9ICdFbnRpdHlDb250YWluZXInXSA9IFwiRW50aXR5Q29udGFpbmVyXCI7XHJcbiAgICB9KShJRWRtU2NoZW1hRWxlbWVudC5TY2hlbWFFbGVtZW50S2luZEVudW0gfHwgKElFZG1TY2hlbWFFbGVtZW50LlNjaGVtYUVsZW1lbnRLaW5kRW51bSA9IHt9KSk7XHJcbiAgICB2YXIgU2NoZW1hRWxlbWVudEtpbmRFbnVtID0gSUVkbVNjaGVtYUVsZW1lbnQuU2NoZW1hRWxlbWVudEtpbmRFbnVtO1xyXG59KShJRWRtU2NoZW1hRWxlbWVudCA9IGV4cG9ydHMuSUVkbVNjaGVtYUVsZW1lbnQgfHwgKGV4cG9ydHMuSUVkbVNjaGVtYUVsZW1lbnQgPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1JRWRtU2NoZW1hRWxlbWVudC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XHJcbnZhciBJRWRtVGVybTtcclxuKGZ1bmN0aW9uIChJRWRtVGVybSkge1xyXG4gICAgKGZ1bmN0aW9uIChUZXJtS2luZEVudW0pIHtcclxuICAgICAgICBUZXJtS2luZEVudW1bVGVybUtpbmRFbnVtW1wiTm9uZVwiXSA9ICdOb25lJ10gPSBcIk5vbmVcIjtcclxuICAgICAgICBUZXJtS2luZEVudW1bVGVybUtpbmRFbnVtW1wiVHlwZVwiXSA9ICdUeXBlJ10gPSBcIlR5cGVcIjtcclxuICAgICAgICBUZXJtS2luZEVudW1bVGVybUtpbmRFbnVtW1wiVmFsdWVcIl0gPSAnVmFsdWUnXSA9IFwiVmFsdWVcIjtcclxuICAgIH0pKElFZG1UZXJtLlRlcm1LaW5kRW51bSB8fCAoSUVkbVRlcm0uVGVybUtpbmRFbnVtID0ge30pKTtcclxuICAgIHZhciBUZXJtS2luZEVudW0gPSBJRWRtVGVybS5UZXJtS2luZEVudW07XHJcbiAgICAoZnVuY3Rpb24gKFNjaGVtYUVsZW1lbnRLaW5kRW51bSkge1xyXG4gICAgICAgIFNjaGVtYUVsZW1lbnRLaW5kRW51bVtTY2hlbWFFbGVtZW50S2luZEVudW1bXCJOb25lXCJdID0gJ05vbmUnXSA9IFwiTm9uZVwiO1xyXG4gICAgICAgIFNjaGVtYUVsZW1lbnRLaW5kRW51bVtTY2hlbWFFbGVtZW50S2luZEVudW1bXCJUeXBlRGVmaW5pdGlvblwiXSA9ICdUeXBlRGVmaW5pdGlvbiddID0gXCJUeXBlRGVmaW5pdGlvblwiO1xyXG4gICAgICAgIFNjaGVtYUVsZW1lbnRLaW5kRW51bVtTY2hlbWFFbGVtZW50S2luZEVudW1bXCJGdW5jdGlvblwiXSA9ICdGdW5jdGlvbiddID0gXCJGdW5jdGlvblwiO1xyXG4gICAgICAgIFNjaGVtYUVsZW1lbnRLaW5kRW51bVtTY2hlbWFFbGVtZW50S2luZEVudW1bXCJWYWx1ZVRlcm1cIl0gPSAnVmFsdWVUZXJtJ10gPSBcIlZhbHVlVGVybVwiO1xyXG4gICAgICAgIFNjaGVtYUVsZW1lbnRLaW5kRW51bVtTY2hlbWFFbGVtZW50S2luZEVudW1bXCJFbnRpdHlDb250YWluZXJcIl0gPSAnRW50aXR5Q29udGFpbmVyJ10gPSBcIkVudGl0eUNvbnRhaW5lclwiO1xyXG4gICAgfSkoSUVkbVRlcm0uU2NoZW1hRWxlbWVudEtpbmRFbnVtIHx8IChJRWRtVGVybS5TY2hlbWFFbGVtZW50S2luZEVudW0gPSB7fSkpO1xyXG4gICAgdmFyIFNjaGVtYUVsZW1lbnRLaW5kRW51bSA9IElFZG1UZXJtLlNjaGVtYUVsZW1lbnRLaW5kRW51bTtcclxufSkoSUVkbVRlcm0gPSBleHBvcnRzLklFZG1UZXJtIHx8IChleHBvcnRzLklFZG1UZXJtID0ge30pKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SUVkbVRlcm0uanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgSUVkbVR5cGU7XHJcbihmdW5jdGlvbiAoSUVkbVR5cGUpIHtcclxuICAgIChmdW5jdGlvbiAoVHlwZUtpbmRFbnVtKSB7XHJcbiAgICAgICAgVHlwZUtpbmRFbnVtW1R5cGVLaW5kRW51bVtcIk5vbmVcIl0gPSAnTm9uZSddID0gXCJOb25lXCI7XHJcbiAgICAgICAgVHlwZUtpbmRFbnVtW1R5cGVLaW5kRW51bVtcIlByaW1pdGl2ZVwiXSA9ICdQcmltaXRpdmUnXSA9IFwiUHJpbWl0aXZlXCI7XHJcbiAgICAgICAgVHlwZUtpbmRFbnVtW1R5cGVLaW5kRW51bVtcIkVudGl0eVwiXSA9ICdFbnRpdHknXSA9IFwiRW50aXR5XCI7XHJcbiAgICAgICAgVHlwZUtpbmRFbnVtW1R5cGVLaW5kRW51bVtcIkNvbXBsZXhcIl0gPSAnQ29tcGxleCddID0gXCJDb21wbGV4XCI7XHJcbiAgICAgICAgVHlwZUtpbmRFbnVtW1R5cGVLaW5kRW51bVtcIlJvd1wiXSA9ICdSb3cnXSA9IFwiUm93XCI7XHJcbiAgICAgICAgVHlwZUtpbmRFbnVtW1R5cGVLaW5kRW51bVtcIkNvbGxlY3Rpb25cIl0gPSAnQ29sbGVjdGlvbiddID0gXCJDb2xsZWN0aW9uXCI7XHJcbiAgICAgICAgVHlwZUtpbmRFbnVtW1R5cGVLaW5kRW51bVtcIkVudGl0eVJlZmVyZW5jZVwiXSA9ICdFbnRpdHlSZWZlcmVuY2UnXSA9IFwiRW50aXR5UmVmZXJlbmNlXCI7XHJcbiAgICAgICAgVHlwZUtpbmRFbnVtW1R5cGVLaW5kRW51bVtcIkVudW1cIl0gPSAnRW51bSddID0gXCJFbnVtXCI7XHJcbiAgICB9KShJRWRtVHlwZS5UeXBlS2luZEVudW0gfHwgKElFZG1UeXBlLlR5cGVLaW5kRW51bSA9IHt9KSk7XHJcbiAgICB2YXIgVHlwZUtpbmRFbnVtID0gSUVkbVR5cGUuVHlwZUtpbmRFbnVtO1xyXG59KShJRWRtVHlwZSA9IGV4cG9ydHMuSUVkbVR5cGUgfHwgKGV4cG9ydHMuSUVkbVR5cGUgPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1JRWRtVHlwZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XHJcbnZhciBPcmRlckJ5Q2xhdXNlO1xyXG4oZnVuY3Rpb24gKE9yZGVyQnlDbGF1c2UpIHtcclxuICAgIChmdW5jdGlvbiAoRGlyZWN0aW9uRW51bSkge1xyXG4gICAgICAgIERpcmVjdGlvbkVudW1bRGlyZWN0aW9uRW51bVtcIkFzY2VuZGluZ1wiXSA9ICdBc2NlbmRpbmcnXSA9IFwiQXNjZW5kaW5nXCI7XHJcbiAgICAgICAgRGlyZWN0aW9uRW51bVtEaXJlY3Rpb25FbnVtW1wiRGVzY2VuZGluZ1wiXSA9ICdEZXNjZW5kaW5nJ10gPSBcIkRlc2NlbmRpbmdcIjtcclxuICAgIH0pKE9yZGVyQnlDbGF1c2UuRGlyZWN0aW9uRW51bSB8fCAoT3JkZXJCeUNsYXVzZS5EaXJlY3Rpb25FbnVtID0ge30pKTtcclxuICAgIHZhciBEaXJlY3Rpb25FbnVtID0gT3JkZXJCeUNsYXVzZS5EaXJlY3Rpb25FbnVtO1xyXG59KShPcmRlckJ5Q2xhdXNlID0gZXhwb3J0cy5PcmRlckJ5Q2xhdXNlIHx8IChleHBvcnRzLk9yZGVyQnlDbGF1c2UgPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1PcmRlckJ5Q2xhdXNlLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcclxudmFyIFJlZGVlbVJlcXVlc3Q7XHJcbihmdW5jdGlvbiAoUmVkZWVtUmVxdWVzdCkge1xyXG4gICAgKGZ1bmN0aW9uIChTdGF0dXNFbnVtKSB7XHJcbiAgICAgICAgU3RhdHVzRW51bVtTdGF0dXNFbnVtW1wiU3VibWl0ZWRcIl0gPSAnU3VibWl0ZWQnXSA9IFwiU3VibWl0ZWRcIjtcclxuICAgICAgICBTdGF0dXNFbnVtW1N0YXR1c0VudW1bXCJBcHByb3ZlZFwiXSA9ICdBcHByb3ZlZCddID0gXCJBcHByb3ZlZFwiO1xyXG4gICAgICAgIFN0YXR1c0VudW1bU3RhdHVzRW51bVtcIlJlamVjdGVkXCJdID0gJ1JlamVjdGVkJ10gPSBcIlJlamVjdGVkXCI7XHJcbiAgICB9KShSZWRlZW1SZXF1ZXN0LlN0YXR1c0VudW0gfHwgKFJlZGVlbVJlcXVlc3QuU3RhdHVzRW51bSA9IHt9KSk7XHJcbiAgICB2YXIgU3RhdHVzRW51bSA9IFJlZGVlbVJlcXVlc3QuU3RhdHVzRW51bTtcclxufSkoUmVkZWVtUmVxdWVzdCA9IGV4cG9ydHMuUmVkZWVtUmVxdWVzdCB8fCAoZXhwb3J0cy5SZWRlZW1SZXF1ZXN0ID0ge30pKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UmVkZWVtUmVxdWVzdC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XHJcbnZhciBSZWRlZW1SZXF1ZXN0SW5mbztcclxuKGZ1bmN0aW9uIChSZWRlZW1SZXF1ZXN0SW5mbykge1xyXG4gICAgKGZ1bmN0aW9uIChTdGF0dXNFbnVtKSB7XHJcbiAgICAgICAgU3RhdHVzRW51bVtTdGF0dXNFbnVtW1wiU3VibWl0ZWRcIl0gPSAnU3VibWl0ZWQnXSA9IFwiU3VibWl0ZWRcIjtcclxuICAgICAgICBTdGF0dXNFbnVtW1N0YXR1c0VudW1bXCJBcHByb3ZlZFwiXSA9ICdBcHByb3ZlZCddID0gXCJBcHByb3ZlZFwiO1xyXG4gICAgICAgIFN0YXR1c0VudW1bU3RhdHVzRW51bVtcIlJlamVjdGVkXCJdID0gJ1JlamVjdGVkJ10gPSBcIlJlamVjdGVkXCI7XHJcbiAgICB9KShSZWRlZW1SZXF1ZXN0SW5mby5TdGF0dXNFbnVtIHx8IChSZWRlZW1SZXF1ZXN0SW5mby5TdGF0dXNFbnVtID0ge30pKTtcclxuICAgIHZhciBTdGF0dXNFbnVtID0gUmVkZWVtUmVxdWVzdEluZm8uU3RhdHVzRW51bTtcclxufSkoUmVkZWVtUmVxdWVzdEluZm8gPSBleHBvcnRzLlJlZGVlbVJlcXVlc3RJbmZvIHx8IChleHBvcnRzLlJlZGVlbVJlcXVlc3RJbmZvID0ge30pKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UmVkZWVtUmVxdWVzdEluZm8uanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgUmVzZXJ2YXRpb247XHJcbihmdW5jdGlvbiAoUmVzZXJ2YXRpb24pIHtcclxuICAgIChmdW5jdGlvbiAoVHlwZUVudW0pIHtcclxuICAgICAgICBUeXBlRW51bVtUeXBlRW51bVtcIlN0YW5kYXJkXCJdID0gJ1N0YW5kYXJkJ10gPSBcIlN0YW5kYXJkXCI7XHJcbiAgICAgICAgVHlwZUVudW1bVHlwZUVudW1bXCJIeWJyaWRcIl0gPSAnSHlicmlkJ10gPSBcIkh5YnJpZFwiO1xyXG4gICAgfSkoUmVzZXJ2YXRpb24uVHlwZUVudW0gfHwgKFJlc2VydmF0aW9uLlR5cGVFbnVtID0ge30pKTtcclxuICAgIHZhciBUeXBlRW51bSA9IFJlc2VydmF0aW9uLlR5cGVFbnVtO1xyXG59KShSZXNlcnZhdGlvbiA9IGV4cG9ydHMuUmVzZXJ2YXRpb24gfHwgKGV4cG9ydHMuUmVzZXJ2YXRpb24gPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1SZXNlcnZhdGlvbi5qcy5tYXAiLCIndXNlIHN0cmljdCc7XHJcbnZhciBSZXNlcnZhdGlvblNldHRpbmdzO1xyXG4oZnVuY3Rpb24gKFJlc2VydmF0aW9uU2V0dGluZ3MpIHtcclxuICAgIChmdW5jdGlvbiAoQXZhaWxhYmlsaXR5TWV0aG9kRW51bSkge1xyXG4gICAgICAgIEF2YWlsYWJpbGl0eU1ldGhvZEVudW1bQXZhaWxhYmlsaXR5TWV0aG9kRW51bVtcIkNvdmVyXCJdID0gJ0NvdmVyJ10gPSBcIkNvdmVyXCI7XHJcbiAgICAgICAgQXZhaWxhYmlsaXR5TWV0aG9kRW51bVtBdmFpbGFiaWxpdHlNZXRob2RFbnVtW1wiVGFibGVcIl0gPSAnVGFibGUnXSA9IFwiVGFibGVcIjtcclxuICAgICAgICBBdmFpbGFiaWxpdHlNZXRob2RFbnVtW0F2YWlsYWJpbGl0eU1ldGhvZEVudW1bXCJEZWZhdWx0XCJdID0gJ0RlZmF1bHQnXSA9IFwiRGVmYXVsdFwiO1xyXG4gICAgfSkoUmVzZXJ2YXRpb25TZXR0aW5ncy5BdmFpbGFiaWxpdHlNZXRob2RFbnVtIHx8IChSZXNlcnZhdGlvblNldHRpbmdzLkF2YWlsYWJpbGl0eU1ldGhvZEVudW0gPSB7fSkpO1xyXG4gICAgdmFyIEF2YWlsYWJpbGl0eU1ldGhvZEVudW0gPSBSZXNlcnZhdGlvblNldHRpbmdzLkF2YWlsYWJpbGl0eU1ldGhvZEVudW07XHJcbn0pKFJlc2VydmF0aW9uU2V0dGluZ3MgPSBleHBvcnRzLlJlc2VydmF0aW9uU2V0dGluZ3MgfHwgKGV4cG9ydHMuUmVzZXJ2YXRpb25TZXR0aW5ncyA9IHt9KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVJlc2VydmF0aW9uU2V0dGluZ3MuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgUmV3YXJkO1xyXG4oZnVuY3Rpb24gKFJld2FyZCkge1xyXG4gICAgKGZ1bmN0aW9uIChTdGF0dXNFbnVtKSB7XHJcbiAgICAgICAgU3RhdHVzRW51bVtTdGF0dXNFbnVtW1wiUHVibGlzaGVkXCJdID0gJ1B1Ymxpc2hlZCddID0gXCJQdWJsaXNoZWRcIjtcclxuICAgICAgICBTdGF0dXNFbnVtW1N0YXR1c0VudW1bXCJVbnB1Ymxpc2hlZFwiXSA9ICdVbnB1Ymxpc2hlZCddID0gXCJVbnB1Ymxpc2hlZFwiO1xyXG4gICAgfSkoUmV3YXJkLlN0YXR1c0VudW0gfHwgKFJld2FyZC5TdGF0dXNFbnVtID0ge30pKTtcclxuICAgIHZhciBTdGF0dXNFbnVtID0gUmV3YXJkLlN0YXR1c0VudW07XHJcbn0pKFJld2FyZCA9IGV4cG9ydHMuUmV3YXJkIHx8IChleHBvcnRzLlJld2FyZCA9IHt9KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVJld2FyZC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XHJcbnZhciBSZXdhcmRWYWx1ZTtcclxuKGZ1bmN0aW9uIChSZXdhcmRWYWx1ZSkge1xyXG4gICAgKGZ1bmN0aW9uIChUeXBlRW51bSkge1xyXG4gICAgICAgIFR5cGVFbnVtW1R5cGVFbnVtW1wiRGlzY291bnRcIl0gPSAnRGlzY291bnQnXSA9IFwiRGlzY291bnRcIjtcclxuICAgICAgICBUeXBlRW51bVtUeXBlRW51bVtcIkZyZWVNZWFsXCJdID0gJ0ZyZWVNZWFsJ10gPSBcIkZyZWVNZWFsXCI7XHJcbiAgICAgICAgVHlwZUVudW1bVHlwZUVudW1bXCJNb25leU9mZlwiXSA9ICdNb25leU9mZiddID0gXCJNb25leU9mZlwiO1xyXG4gICAgfSkoUmV3YXJkVmFsdWUuVHlwZUVudW0gfHwgKFJld2FyZFZhbHVlLlR5cGVFbnVtID0ge30pKTtcclxuICAgIHZhciBUeXBlRW51bSA9IFJld2FyZFZhbHVlLlR5cGVFbnVtO1xyXG59KShSZXdhcmRWYWx1ZSA9IGV4cG9ydHMuUmV3YXJkVmFsdWUgfHwgKGV4cG9ydHMuUmV3YXJkVmFsdWUgPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1SZXdhcmRWYWx1ZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XHJcbnZhciBTaW5nbGVWYWx1ZU5vZGU7XHJcbihmdW5jdGlvbiAoU2luZ2xlVmFsdWVOb2RlKSB7XHJcbiAgICAoZnVuY3Rpb24gKEtpbmRFbnVtKSB7XHJcbiAgICAgICAgS2luZEVudW1bS2luZEVudW1bXCJOb25lXCJdID0gJ05vbmUnXSA9IFwiTm9uZVwiO1xyXG4gICAgICAgIEtpbmRFbnVtW0tpbmRFbnVtW1wiQ29uc3RhbnRcIl0gPSAnQ29uc3RhbnQnXSA9IFwiQ29uc3RhbnRcIjtcclxuICAgICAgICBLaW5kRW51bVtLaW5kRW51bVtcIkNvbnZlcnRcIl0gPSAnQ29udmVydCddID0gXCJDb252ZXJ0XCI7XHJcbiAgICAgICAgS2luZEVudW1bS2luZEVudW1bXCJOb25lbnRpdHlSYW5nZVZhcmlhYmxlUmVmZXJlbmNlXCJdID0gJ05vbmVudGl0eVJhbmdlVmFyaWFibGVSZWZlcmVuY2UnXSA9IFwiTm9uZW50aXR5UmFuZ2VWYXJpYWJsZVJlZmVyZW5jZVwiO1xyXG4gICAgICAgIEtpbmRFbnVtW0tpbmRFbnVtW1wiQmluYXJ5T3BlcmF0b3JcIl0gPSAnQmluYXJ5T3BlcmF0b3InXSA9IFwiQmluYXJ5T3BlcmF0b3JcIjtcclxuICAgICAgICBLaW5kRW51bVtLaW5kRW51bVtcIlVuYXJ5T3BlcmF0b3JcIl0gPSAnVW5hcnlPcGVyYXRvciddID0gXCJVbmFyeU9wZXJhdG9yXCI7XHJcbiAgICAgICAgS2luZEVudW1bS2luZEVudW1bXCJTaW5nbGVWYWx1ZVByb3BlcnR5QWNjZXNzXCJdID0gJ1NpbmdsZVZhbHVlUHJvcGVydHlBY2Nlc3MnXSA9IFwiU2luZ2xlVmFsdWVQcm9wZXJ0eUFjY2Vzc1wiO1xyXG4gICAgICAgIEtpbmRFbnVtW0tpbmRFbnVtW1wiQ29sbGVjdGlvblByb3BlcnR5QWNjZXNzXCJdID0gJ0NvbGxlY3Rpb25Qcm9wZXJ0eUFjY2VzcyddID0gXCJDb2xsZWN0aW9uUHJvcGVydHlBY2Nlc3NcIjtcclxuICAgICAgICBLaW5kRW51bVtLaW5kRW51bVtcIlNpbmdsZVZhbHVlRnVuY3Rpb25DYWxsXCJdID0gJ1NpbmdsZVZhbHVlRnVuY3Rpb25DYWxsJ10gPSBcIlNpbmdsZVZhbHVlRnVuY3Rpb25DYWxsXCI7XHJcbiAgICAgICAgS2luZEVudW1bS2luZEVudW1bXCJBbnlcIl0gPSAnQW55J10gPSBcIkFueVwiO1xyXG4gICAgICAgIEtpbmRFbnVtW0tpbmRFbnVtW1wiQ29sbGVjdGlvbk5hdmlnYXRpb25Ob2RlXCJdID0gJ0NvbGxlY3Rpb25OYXZpZ2F0aW9uTm9kZSddID0gXCJDb2xsZWN0aW9uTmF2aWdhdGlvbk5vZGVcIjtcclxuICAgICAgICBLaW5kRW51bVtLaW5kRW51bVtcIlNpbmdsZU5hdmlnYXRpb25Ob2RlXCJdID0gJ1NpbmdsZU5hdmlnYXRpb25Ob2RlJ10gPSBcIlNpbmdsZU5hdmlnYXRpb25Ob2RlXCI7XHJcbiAgICAgICAgS2luZEVudW1bS2luZEVudW1bXCJTaW5nbGVWYWx1ZU9wZW5Qcm9wZXJ0eUFjY2Vzc1wiXSA9ICdTaW5nbGVWYWx1ZU9wZW5Qcm9wZXJ0eUFjY2VzcyddID0gXCJTaW5nbGVWYWx1ZU9wZW5Qcm9wZXJ0eUFjY2Vzc1wiO1xyXG4gICAgICAgIEtpbmRFbnVtW0tpbmRFbnVtW1wiU2luZ2xlRW50aXR5Q2FzdFwiXSA9ICdTaW5nbGVFbnRpdHlDYXN0J10gPSBcIlNpbmdsZUVudGl0eUNhc3RcIjtcclxuICAgICAgICBLaW5kRW51bVtLaW5kRW51bVtcIkFsbFwiXSA9ICdBbGwnXSA9IFwiQWxsXCI7XHJcbiAgICAgICAgS2luZEVudW1bS2luZEVudW1bXCJFbnRpdHlDb2xsZWN0aW9uQ2FzdFwiXSA9ICdFbnRpdHlDb2xsZWN0aW9uQ2FzdCddID0gXCJFbnRpdHlDb2xsZWN0aW9uQ2FzdFwiO1xyXG4gICAgICAgIEtpbmRFbnVtW0tpbmRFbnVtW1wiRW50aXR5UmFuZ2VWYXJpYWJsZVJlZmVyZW5jZVwiXSA9ICdFbnRpdHlSYW5nZVZhcmlhYmxlUmVmZXJlbmNlJ10gPSBcIkVudGl0eVJhbmdlVmFyaWFibGVSZWZlcmVuY2VcIjtcclxuICAgICAgICBLaW5kRW51bVtLaW5kRW51bVtcIlNpbmdsZUVudGl0eUZ1bmN0aW9uQ2FsbFwiXSA9ICdTaW5nbGVFbnRpdHlGdW5jdGlvbkNhbGwnXSA9IFwiU2luZ2xlRW50aXR5RnVuY3Rpb25DYWxsXCI7XHJcbiAgICAgICAgS2luZEVudW1bS2luZEVudW1bXCJDb2xsZWN0aW9uRnVuY3Rpb25DYWxsXCJdID0gJ0NvbGxlY3Rpb25GdW5jdGlvbkNhbGwnXSA9IFwiQ29sbGVjdGlvbkZ1bmN0aW9uQ2FsbFwiO1xyXG4gICAgICAgIEtpbmRFbnVtW0tpbmRFbnVtW1wiRW50aXR5Q29sbGVjdGlvbkZ1bmN0aW9uQ2FsbFwiXSA9ICdFbnRpdHlDb2xsZWN0aW9uRnVuY3Rpb25DYWxsJ10gPSBcIkVudGl0eUNvbGxlY3Rpb25GdW5jdGlvbkNhbGxcIjtcclxuICAgICAgICBLaW5kRW51bVtLaW5kRW51bVtcIk5hbWVkRnVuY3Rpb25QYXJhbWV0ZXJcIl0gPSAnTmFtZWRGdW5jdGlvblBhcmFtZXRlciddID0gXCJOYW1lZEZ1bmN0aW9uUGFyYW1ldGVyXCI7XHJcbiAgICB9KShTaW5nbGVWYWx1ZU5vZGUuS2luZEVudW0gfHwgKFNpbmdsZVZhbHVlTm9kZS5LaW5kRW51bSA9IHt9KSk7XHJcbiAgICB2YXIgS2luZEVudW0gPSBTaW5nbGVWYWx1ZU5vZGUuS2luZEVudW07XHJcbn0pKFNpbmdsZVZhbHVlTm9kZSA9IGV4cG9ydHMuU2luZ2xlVmFsdWVOb2RlIHx8IChleHBvcnRzLlNpbmdsZVZhbHVlTm9kZSA9IHt9KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNpbmdsZVZhbHVlTm9kZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XHJcbnZhciBUYWJsZU1vbml0b3I7XHJcbihmdW5jdGlvbiAoVGFibGVNb25pdG9yKSB7XHJcbiAgICAoZnVuY3Rpb24gKFN0YXR1c0VudW0pIHtcclxuICAgICAgICBTdGF0dXNFbnVtW1N0YXR1c0VudW1bXCJBdmFpbGFibGVcIl0gPSAnQXZhaWxhYmxlJ10gPSBcIkF2YWlsYWJsZVwiO1xyXG4gICAgICAgIFN0YXR1c0VudW1bU3RhdHVzRW51bVtcIkJ1c3lcIl0gPSAnQnVzeSddID0gXCJCdXN5XCI7XHJcbiAgICAgICAgU3RhdHVzRW51bVtTdGF0dXNFbnVtW1wiQXNzaWduZWRcIl0gPSAnQXNzaWduZWQnXSA9IFwiQXNzaWduZWRcIjtcclxuICAgICAgICBTdGF0dXNFbnVtW1N0YXR1c0VudW1bXCJSZXNlcnZlZFwiXSA9ICdSZXNlcnZlZCddID0gXCJSZXNlcnZlZFwiO1xyXG4gICAgfSkoVGFibGVNb25pdG9yLlN0YXR1c0VudW0gfHwgKFRhYmxlTW9uaXRvci5TdGF0dXNFbnVtID0ge30pKTtcclxuICAgIHZhciBTdGF0dXNFbnVtID0gVGFibGVNb25pdG9yLlN0YXR1c0VudW07XHJcbn0pKFRhYmxlTW9uaXRvciA9IGV4cG9ydHMuVGFibGVNb25pdG9yIHx8IChleHBvcnRzLlRhYmxlTW9uaXRvciA9IHt9KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVRhYmxlTW9uaXRvci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbl9fZXhwb3J0KHJlcXVpcmUoJy4vQXZhaWxhYmlsaXR5JykpO1xyXG5fX2V4cG9ydChyZXF1aXJlKCcuL0F2YWlsYWJpbGl0eVJlc3BvbnNlJykpO1xyXG5fX2V4cG9ydChyZXF1aXJlKCcuL0NyZWF0ZVJlc2VydmF0aW9uJykpO1xyXG5fX2V4cG9ydChyZXF1aXJlKCcuL0lFZG1TY2hlbWFFbGVtZW50JykpO1xyXG5fX2V4cG9ydChyZXF1aXJlKCcuL0lFZG1UZXJtJykpO1xyXG5fX2V4cG9ydChyZXF1aXJlKCcuL0lFZG1UeXBlJykpO1xyXG5fX2V4cG9ydChyZXF1aXJlKCcuL09yZGVyQnlDbGF1c2UnKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoJy4vUmVkZWVtUmVxdWVzdCcpKTtcclxuX19leHBvcnQocmVxdWlyZSgnLi9SZWRlZW1SZXF1ZXN0SW5mbycpKTtcclxuX19leHBvcnQocmVxdWlyZSgnLi9SZXNlcnZhdGlvbicpKTtcclxuX19leHBvcnQocmVxdWlyZSgnLi9SZXNlcnZhdGlvblNldHRpbmdzJykpO1xyXG5fX2V4cG9ydChyZXF1aXJlKCcuL1Jld2FyZCcpKTtcclxuX19leHBvcnQocmVxdWlyZSgnLi9SZXdhcmRWYWx1ZScpKTtcclxuX19leHBvcnQocmVxdWlyZSgnLi9TaW5nbGVWYWx1ZU5vZGUnKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoJy4vVGFibGVNb25pdG9yJykpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1tb2RlbHMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5fX2V4cG9ydChyZXF1aXJlKCcuL2FwaS9hcGknKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoJy4vbW9kZWwvbW9kZWxzJykpO1xyXG52YXIgQXV0aG9yaXphdGlvblNlcnZpY2VfMSA9IHJlcXVpcmUoJy4vY2xpZW50L0F1dGhvcml6YXRpb25TZXJ2aWNlJyk7XHJcbmV4cG9ydHMuQXV0aG9yaXphdGlvblNlcnZpY2UgPSBBdXRob3JpemF0aW9uU2VydmljZV8xLkF1dGhvcml6YXRpb25TZXJ2aWNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiXX0=
return require('hostme-sdk-angular-admin');
});