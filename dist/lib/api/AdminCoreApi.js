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
//# sourceMappingURL=AdminCoreApi.js.map