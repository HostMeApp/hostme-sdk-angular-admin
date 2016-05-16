"use strict";
var auth = require('./auth');
'use strict';
var ExternalAuthenticationApi = (function () {
    function ExternalAuthenticationApi($http, $httpParamSerializer, basePath) {
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
    Object.defineProperty(ExternalAuthenticationApi.prototype, "accessToken", {
        set: function (token) {
            this.authentications.oauth2.accessToken = token;
        },
        enumerable: true,
        configurable: true
    });
    ExternalAuthenticationApi.prototype.extendObj = function (objA, objB) {
        for (var key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    };
    ExternalAuthenticationApi.prototype.getExternalFacebookLogin = function (accessToken, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/authorization/externalFacebookLogin';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!accessToken) {
            throw new Error('Missing required parameter accessToken when calling getExternalFacebookLogin');
        }
        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
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
    ExternalAuthenticationApi.prototype.getExternalLogin = function (provider, error, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/authorization/externalLogin';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!provider) {
            throw new Error('Missing required parameter provider when calling getExternalLogin');
        }
        if (provider !== undefined) {
            queryParameters['provider'] = provider;
        }
        if (error !== undefined) {
            queryParameters['error'] = error;
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
    ExternalAuthenticationApi.prototype.getExternalLogins = function (returnUrl, generateState, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/authorization/externalLogins';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!returnUrl) {
            throw new Error('Missing required parameter returnUrl when calling getExternalLogins');
        }
        if (returnUrl !== undefined) {
            queryParameters['returnUrl'] = returnUrl;
        }
        if (generateState !== undefined) {
            queryParameters['generateState'] = generateState;
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
    ExternalAuthenticationApi.$inject = ['$http', '$httpParamSerializer'];
    return ExternalAuthenticationApi;
}());
exports.ExternalAuthenticationApi = ExternalAuthenticationApi;
//# sourceMappingURL=ExternalAuthenticationApi.js.map