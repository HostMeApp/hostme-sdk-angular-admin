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
//# sourceMappingURL=AdminLoyaltyApi.js.map