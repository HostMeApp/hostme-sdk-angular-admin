var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
/* tslint:disable:no-unused-variable member-ordering */
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
        var AdminAuthApi = (function () {
            function AdminAuthApi($http, $httpParamSerializer, basePath) {
                this.$http = $http;
                this.$httpParamSerializer = $httpParamSerializer;
                this.basePath = 'http://hostme-services-dev.azurewebsites.net';
                this.defaultHeaders = {};
                if (basePath) {
                    this.basePath = basePath;
                }
            }
            AdminAuthApi.prototype.extendObj = function (objA, objB) {
                for (var key in objB) {
                    if (objB.hasOwnProperty(key)) {
                        objA[key] = objB[key];
                    }
                }
                return objA;
            };
            /**
             *
             *
             * @param userId
             * @param code
             */
            AdminAuthApi.prototype.confirmEmail = function (userId, code, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/authorization/ConfirmEmail';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'userId' is set
                if (!userId) {
                    throw new Error('Missing required parameter userId when calling confirmEmail');
                }
                // verify required parameter 'code' is set
                if (!code) {
                    throw new Error('Missing required parameter code when calling confirmEmail');
                }
                if (userId !== undefined) {
                    queryParameters['userId'] = userId;
                }
                if (code !== undefined) {
                    queryParameters['code'] = code;
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param accessToken
             */
            AdminAuthApi.prototype.getExternalFacebookLogin = function (accessToken, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/authorization/ExternalFacebookLogin';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'accessToken' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param provider
             * @param error
             */
            AdminAuthApi.prototype.getExternalLogin = function (provider, error, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/authorization/ExternalLogin';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'provider' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param returnUrl
             * @param generateState
             */
            AdminAuthApi.prototype.getExternalLogins = function (returnUrl, generateState, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/authorization/ExternalLogins';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'returnUrl' is set
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
                return this.$http(httpRequestParams);
            };
            AdminAuthApi.$inject = ['$http', '$httpParamSerializer'];
            return AdminAuthApi;
        }());
        Sdk.AdminAuthApi = AdminAuthApi;
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
/* tslint:disable:no-unused-variable member-ordering */
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
        var AdminCoreApi = (function () {
            function AdminCoreApi($http, $httpParamSerializer, basePath) {
                this.$http = $http;
                this.$httpParamSerializer = $httpParamSerializer;
                this.basePath = 'http://hostme-services-dev.azurewebsites.net';
                this.defaultHeaders = {};
                if (basePath) {
                    this.basePath = basePath;
                }
            }
            AdminCoreApi.prototype.extendObj = function (objA, objB) {
                for (var key in objB) {
                    if (objB.hasOwnProperty(key)) {
                        objA[key] = objB[key];
                    }
                }
                return objA;
            };
            /**
             *
             *
             * @param model
             */
            AdminCoreApi.prototype.addExternalLogin = function (model, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/admin/account/AddExternalLogin';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'model' is set
                if (!model) {
                    throw new Error('Missing required parameter model when calling addExternalLogin');
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param value
             */
            AdminCoreApi.prototype.addNewRestaurant = function (value, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/admin/restaurants';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'value' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param model
             */
            AdminCoreApi.prototype.changePassword = function (model, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/admin/account/ChangePassword';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'model' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param invitationCode
             * @param restaurantId
             */
            AdminCoreApi.prototype.checkInvitationCode = function (invitationCode, restaurantId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/admin/restaurants/{restaurantId}/invitations/{invitationCode}'
                    .replace('{' + 'invitationCode' + '}', String(invitationCode))
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'invitationCode' is set
                if (!invitationCode) {
                    throw new Error('Missing required parameter invitationCode when calling checkInvitationCode');
                }
                // verify required parameter 'restaurantId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param invitation
             */
            AdminCoreApi.prototype.createInvitationCode = function (restaurantId, invitation, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/admin/restaurants/{restaurantId}/invitations'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling createInvitationCode');
                }
                // verify required parameter 'invitation' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param value
             */
            AdminCoreApi.prototype.createNewAccountWithRestaurant = function (value, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/admin/tenant/restaurants';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'value' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param invitationCode
             */
            AdminCoreApi.prototype.deleteInvitation = function (restaurantId, invitationCode, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/admin/restaurants/{restaurantId}/invitations/{invitationCode}'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId))
                    .replace('{' + 'invitationCode' + '}', String(invitationCode));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling deleteInvitation');
                }
                // verify required parameter 'invitationCode' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             */
            AdminCoreApi.prototype.deleteRestaurant = function (restaurantId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/admin/restaurants/{restaurantId}'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param userId
             * @param role
             */
            AdminCoreApi.prototype.deleteUser = function (restaurantId, userId, role, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/admin/restaurants/{restaurantId}/users/{userId}'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId))
                    .replace('{' + 'userId' + '}', String(userId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling deleteUser');
                }
                // verify required parameter 'userId' is set
                if (!userId) {
                    throw new Error('Missing required parameter userId when calling deleteUser');
                }
                // verify required parameter 'role' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param phone
             * @param email
             */
            AdminCoreApi.prototype.findRestaurantsByUserPhone = function (phone, email, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/admin/tenant/restaurants/find';
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param phone
             * @param email
             */
            AdminCoreApi.prototype.findUserByPhoneAsync = function (phone, email, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/admin/tenant/users/find';
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             */
            AdminCoreApi.prototype.getAllUserRestaurants = function (extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/admin/restaurants';
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             */
            AdminCoreApi.prototype.getCustomSettings = function (restaurantId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/admin/restaurants/{restaurantId}/customSettings'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             */
            AdminCoreApi.prototype.getInvitations = function (restaurantId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/admin/restaurants/{restaurantId}/invitations'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param returnUrl
             * @param generateState
             */
            AdminCoreApi.prototype.getManageInfo = function (returnUrl, generateState, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/admin/account/ManageInfo';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'returnUrl' is set
                if (!returnUrl) {
                    throw new Error('Missing required parameter returnUrl when calling getManageInfo');
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param tableNumber
             */
            AdminCoreApi.prototype.getRegistrationToken = function (restaurantId, tableNumber, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/admin/restaurants/{restaurantId}/loyalty/token'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             */
            AdminCoreApi.prototype.getRestaurantById = function (restaurantId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/admin/restaurants/{restaurantId}'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             */
            AdminCoreApi.prototype.getRestaurantConfiguration = function (restaurantId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/admin/restaurants/{restaurantId}/config'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             */
            AdminCoreApi.prototype.getRestaurantSettings = function (restaurantId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/admin/restaurants/{restaurantId}/settings'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             */
            AdminCoreApi.prototype.getUserInfo = function (extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/admin/account/UserInfo';
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             */
            AdminCoreApi.prototype.getUserProfile = function (extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/admin/account/profile';
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             */
            AdminCoreApi.prototype.getUsers = function (restaurantId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/admin/restaurants/{restaurantId}/users'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             */
            AdminCoreApi.prototype.logout = function (extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/admin/account/Logout';
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             */
            AdminCoreApi.prototype.me = function (extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/admin/account/me';
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param image
             */
            AdminCoreApi.prototype.postProfileImage = function (image, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/admin/account/profile/image';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'image' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             */
            AdminCoreApi.prototype.profileImage = function (extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/admin/account/profile/image';
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param model
             */
            AdminCoreApi.prototype.register = function (model, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/admin/account/Register';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'model' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param model
             */
            AdminCoreApi.prototype.registerExternal = function (model, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/admin/account/RegisterExternal';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'model' is set
                if (!model) {
                    throw new Error('Missing required parameter model when calling registerExternal');
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param invitationCode
             */
            AdminCoreApi.prototype.reinvite = function (restaurantId, invitationCode, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/admin/restaurants/{restaurantId}/invitations/{invitationCode}/reinvite'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId))
                    .replace('{' + 'invitationCode' + '}', String(invitationCode));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling reinvite');
                }
                // verify required parameter 'invitationCode' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param model
             */
            AdminCoreApi.prototype.resetPassword = function (model, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/admin/account/ResetPassword';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'model' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param settings
             */
            AdminCoreApi.prototype.setCustomSettings = function (restaurantId, settings, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/admin/restaurants/{restaurantId}/customSettings'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling setCustomSettings');
                }
                // verify required parameter 'settings' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param model
             */
            AdminCoreApi.prototype.setPassword = function (model, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/admin/account/SetPassword';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'model' is set
                if (!model) {
                    throw new Error('Missing required parameter model when calling setPassword');
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param settings
             */
            AdminCoreApi.prototype.setRestaurantSettings = function (restaurantId, settings, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/admin/restaurants/{restaurantId}/settings'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling setRestaurantSettings');
                }
                // verify required parameter 'settings' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param value
             */
            AdminCoreApi.prototype.updateRestaurant = function (restaurantId, value, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/admin/restaurants/{restaurantId}'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling updateRestaurant');
                }
                // verify required parameter 'value' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param profile
             */
            AdminCoreApi.prototype.updateUserProfile = function (profile, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/admin/account/profile';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'profile' is set
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
                return this.$http(httpRequestParams);
            };
            AdminCoreApi.$inject = ['$http', '$httpParamSerializer'];
            return AdminCoreApi;
        }());
        Sdk.AdminCoreApi = AdminCoreApi;
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
/* tslint:disable:no-unused-variable member-ordering */
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
        var AdminLoyaltyApi = (function () {
            function AdminLoyaltyApi($http, $httpParamSerializer, basePath) {
                this.$http = $http;
                this.$httpParamSerializer = $httpParamSerializer;
                this.basePath = 'http://hostme-services-dev.azurewebsites.net';
                this.defaultHeaders = {};
                if (basePath) {
                    this.basePath = basePath;
                }
            }
            AdminLoyaltyApi.prototype.extendObj = function (objA, objB) {
                for (var key in objB) {
                    if (objB.hasOwnProperty(key)) {
                        objA[key] = objB[key];
                    }
                }
                return objA;
            };
            /**
             *
             *
             * @param restaurantId
             * @param reward
             */
            AdminLoyaltyApi.prototype.addNewReward = function (restaurantId, reward, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/rewards'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling addNewReward');
                }
                // verify required parameter 'reward' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param redeemId
             */
            AdminLoyaltyApi.prototype.approveRedeemRequest = function (restaurantId, redeemId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/redeems/{redeemId}/approve'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId))
                    .replace('{' + 'redeemId' + '}', String(redeemId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling approveRedeemRequest');
                }
                // verify required parameter 'redeemId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param memberId
             */
            AdminLoyaltyApi.prototype.closeMembership = function (restaurantId, memberId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/members/{memberId}/close'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId))
                    .replace('{' + 'memberId' + '}', String(memberId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling closeMembership');
                }
                // verify required parameter 'memberId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param model
             */
            AdminLoyaltyApi.prototype.createRestaurantUser = function (restaurantId, model, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/loyalty/admin/restaurants/{restaurantId}'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling createRestaurantUser');
                }
                // verify required parameter 'model' is set
                if (!model) {
                    throw new Error('Missing required parameter model when calling createRestaurantUser');
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param rewardId
             */
            AdminLoyaltyApi.prototype.deleteReward = function (restaurantId, rewardId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/rewards/{rewardId}'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId))
                    .replace('{' + 'rewardId' + '}', String(rewardId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling deleteReward');
                }
                // verify required parameter 'rewardId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param token
             */
            AdminLoyaltyApi.prototype.filter = function (restaurantId, token, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/members/filter'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling filter');
                }
                // verify required parameter 'token' is set
                if (!token) {
                    throw new Error('Missing required parameter token when calling filter');
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param phoneNumber
             */
            AdminLoyaltyApi.prototype.findMemberByPhoneNumber = function (restaurantId, phoneNumber, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/members/find'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling findMemberByPhoneNumber');
                }
                // verify required parameter 'phoneNumber' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             */
            AdminLoyaltyApi.prototype.getAlRewards = function (restaurantId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/rewards'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             */
            AdminLoyaltyApi.prototype.getAllMembers = function (restaurantId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/members'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             */
            AdminLoyaltyApi.prototype.getAllRedeemRequests = function (restaurantId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/redeems'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             */
            AdminLoyaltyApi.prototype.getDefaultLoyaltySettings = function (restaurantId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/defaultSettings'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             */
            AdminLoyaltyApi.prototype.getLoyaltySettings = function (restaurantId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/settings'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param memberId
             */
            AdminLoyaltyApi.prototype.getMemberAvatar = function (restaurantId, memberId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/members/{memberId}/avatar'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId))
                    .replace('{' + 'memberId' + '}', String(memberId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling getMemberAvatar');
                }
                // verify required parameter 'memberId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param memberId
             */
            AdminLoyaltyApi.prototype.getMemberTransactions = function (restaurantId, memberId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/members/{memberId}/transactions'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId))
                    .replace('{' + 'memberId' + '}', String(memberId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling getMemberTransactions');
                }
                // verify required parameter 'memberId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param memberId
             */
            AdminLoyaltyApi.prototype.getMembershipInfo = function (restaurantId, memberId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/members/{memberId}'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId))
                    .replace('{' + 'memberId' + '}', String(memberId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling getMembershipInfo');
                }
                // verify required parameter 'memberId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param rewardId
             */
            AdminLoyaltyApi.prototype.getRewardById = function (restaurantId, rewardId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/rewards/{rewardId}'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId))
                    .replace('{' + 'rewardId' + '}', String(rewardId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling getRewardById');
                }
                // verify required parameter 'rewardId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param rewardId
             */
            AdminLoyaltyApi.prototype.publishReward = function (restaurantId, rewardId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/rewards/{rewardId}/publish'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId))
                    .replace('{' + 'rewardId' + '}', String(rewardId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling publishReward');
                }
                // verify required parameter 'rewardId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param redeemId
             * @param reason
             */
            AdminLoyaltyApi.prototype.rejectRedeemRequest = function (restaurantId, redeemId, reason, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/redeems/{redeemId}/reject'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId))
                    .replace('{' + 'redeemId' + '}', String(redeemId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling rejectRedeemRequest');
                }
                // verify required parameter 'redeemId' is set
                if (!redeemId) {
                    throw new Error('Missing required parameter redeemId when calling rejectRedeemRequest');
                }
                // verify required parameter 'reason' is set
                if (!reason) {
                    throw new Error('Missing required parameter reason when calling rejectRedeemRequest');
                }
                var httpRequestParams = {
                    method: 'POST',
                    url: localVarPath,
                    json: true,
                    data: reason,
                    params: queryParameters,
                    headers: headerParams
                };
                if (extraHttpRequestParams) {
                    httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
                }
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param settings
             */
            AdminLoyaltyApi.prototype.setLoyaltySettings = function (restaurantId, settings, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/settings'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling setLoyaltySettings');
                }
                // verify required parameter 'settings' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param rewardId
             */
            AdminLoyaltyApi.prototype.unpublishReward = function (restaurantId, rewardId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/rewards/{rewardId}/unpublish'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId))
                    .replace('{' + 'rewardId' + '}', String(rewardId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling unpublishReward');
                }
                // verify required parameter 'rewardId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param rewardId
             * @param reward
             */
            AdminLoyaltyApi.prototype.updateReward = function (restaurantId, rewardId, reward, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/rewards/{rewardId}'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId))
                    .replace('{' + 'rewardId' + '}', String(rewardId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling updateReward');
                }
                // verify required parameter 'rewardId' is set
                if (!rewardId) {
                    throw new Error('Missing required parameter rewardId when calling updateReward');
                }
                // verify required parameter 'reward' is set
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
                return this.$http(httpRequestParams);
            };
            AdminLoyaltyApi.$inject = ['$http', '$httpParamSerializer'];
            return AdminLoyaltyApi;
        }());
        Sdk.AdminLoyaltyApi = AdminLoyaltyApi;
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
        var AdminReservationBindingModel;
        (function (AdminReservationBindingModel) {
            (function (TypeEnum) {
                TypeEnum[TypeEnum["Standard"] = 'Standard'] = "Standard";
                TypeEnum[TypeEnum["Hybrid"] = 'Hybrid'] = "Hybrid";
            })(AdminReservationBindingModel.TypeEnum || (AdminReservationBindingModel.TypeEnum = {}));
            var TypeEnum = AdminReservationBindingModel.TypeEnum;
        })(AdminReservationBindingModel = Sdk.AdminReservationBindingModel || (Sdk.AdminReservationBindingModel = {}));
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
/* tslint:disable:no-unused-variable member-ordering */
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
        var AdminReservationsApi = (function () {
            function AdminReservationsApi($http, $httpParamSerializer, basePath) {
                this.$http = $http;
                this.$httpParamSerializer = $httpParamSerializer;
                this.basePath = 'http://hostme-services-dev.azurewebsites.net';
                this.defaultHeaders = {};
                if (basePath) {
                    this.basePath = basePath;
                }
            }
            AdminReservationsApi.prototype.extendObj = function (objA, objB) {
                for (var key in objB) {
                    if (objB.hasOwnProperty(key)) {
                        objA[key] = objB[key];
                    }
                }
                return objA;
            };
            /**
             *
             *
             * @param restaurantId
             * @param value
             */
            AdminReservationsApi.prototype.addNewReservation = function (restaurantId, value, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/rsv/admin/restaurants/{restaurantId}/reservations'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling addNewReservation');
                }
                // verify required parameter 'value' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param reservationId
             * @param notes
             */
            AdminReservationsApi.prototype.cancelReservation = function (restaurantId, reservationId, notes, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/rsv/admin/restaurants/{restaurantId}/reservations/{reservationId}/cancel'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId))
                    .replace('{' + 'reservationId' + '}', String(reservationId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling cancelReservation');
                }
                // verify required parameter 'reservationId' is set
                if (!reservationId) {
                    throw new Error('Missing required parameter reservationId when calling cancelReservation');
                }
                // verify required parameter 'notes' is set
                if (!notes) {
                    throw new Error('Missing required parameter notes when calling cancelReservation');
                }
                var httpRequestParams = {
                    method: 'PUT',
                    url: localVarPath,
                    json: true,
                    data: notes,
                    params: queryParameters,
                    headers: headerParams
                };
                if (extraHttpRequestParams) {
                    httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
                }
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param reservationId
             */
            AdminReservationsApi.prototype.closeAsNoShow = function (restaurantId, reservationId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/rsv/admin/restaurants/{restaurantId}/reservations/{reservationId}/noshow'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId))
                    .replace('{' + 'reservationId' + '}', String(reservationId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling closeAsNoShow');
                }
                // verify required parameter 'reservationId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param reservationId
             * @param tableNumber
             */
            AdminReservationsApi.prototype.closeAsSeated = function (restaurantId, reservationId, tableNumber, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/rsv/admin/restaurants/{restaurantId}/reservations/{reservationId}/seat'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId))
                    .replace('{' + 'reservationId' + '}', String(reservationId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling closeAsSeated');
                }
                // verify required parameter 'reservationId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             */
            AdminReservationsApi.prototype.geReservationSettings = function (restaurantId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/rsv/admin/restaurants/{restaurantId}/settings'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling geReservationSettings');
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param reservationId
             */
            AdminReservationsApi.prototype.getMessages = function (restaurantId, reservationId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/rsv/admin/restaurants/{restaurantId}/reservations/{reservationId}/messages'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId))
                    .replace('{' + 'reservationId' + '}', String(reservationId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling getMessages');
                }
                // verify required parameter 'reservationId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param date
             * @param partySize
             * @param rangeInMinutes
             * @param tableTurnOver
             * @param type
             * @param areas
             */
            AdminReservationsApi.prototype.getReservationAvailability = function (restaurantId, date, partySize, rangeInMinutes, tableTurnOver, type, areas, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/rsv/admin/restaurants/{restaurantId}/availability'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling getReservationAvailability');
                }
                // verify required parameter 'date' is set
                if (!date) {
                    throw new Error('Missing required parameter date when calling getReservationAvailability');
                }
                // verify required parameter 'partySize' is set
                if (!partySize) {
                    throw new Error('Missing required parameter partySize when calling getReservationAvailability');
                }
                // verify required parameter 'rangeInMinutes' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param reservationId
             */
            AdminReservationsApi.prototype.getReservationById = function (restaurantId, reservationId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/rsv/admin/restaurants/{restaurantId}/reservations/{reservationId}'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId))
                    .replace('{' + 'reservationId' + '}', String(reservationId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling getReservationById');
                }
                // verify required parameter 'reservationId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param from
             * @param to
             */
            AdminReservationsApi.prototype.getReservationsForPeriod = function (restaurantId, from, to, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/rsv/admin/restaurants/{restaurantId}/reservations'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param date
             */
            AdminReservationsApi.prototype.getRestaurantReservationsStatistic = function (restaurantId, date, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/rsv/admin/restaurants/{restaurantId}/reservations/stats'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param from
             */
            AdminReservationsApi.prototype.getUnreadMessagesCount = function (restaurantId, from, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/rsv/admin/restaurants/{restaurantId}/reservations/messages/count-unread'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param reservationId
             */
            AdminReservationsApi.prototype.placeOnWaitList = function (restaurantId, reservationId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/rsv/admin/restaurants/{restaurantId}/reservations/{reservationId}/schedule'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId))
                    .replace('{' + 'reservationId' + '}', String(reservationId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling placeOnWaitList');
                }
                // verify required parameter 'reservationId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param reservationId
             */
            AdminReservationsApi.prototype.reOpenReservation = function (restaurantId, reservationId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/rsv/admin/restaurants/{restaurantId}/reservations/{reservationId}/reopen'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId))
                    .replace('{' + 'reservationId' + '}', String(reservationId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling reOpenReservation');
                }
                // verify required parameter 'reservationId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             * Mark all message as read.
             *
             * @param restaurantId Restaurant identifier
             * @param reservationId Reservation identifier
             */
            AdminReservationsApi.prototype.readAllMessage = function (restaurantId, reservationId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/rsv/admin/restaurants/{restaurantId}/reservations/{reservationId}/messages/readall'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId))
                    .replace('{' + 'reservationId' + '}', String(reservationId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling readAllMessage');
                }
                // verify required parameter 'reservationId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param from
             * @param html
             * @param text
             * @param to
             * @param subject
             */
            AdminReservationsApi.prototype.sendGrid = function (from, html, text, to, subject, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/rsv/admin/email/yelp';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'from' is set
                if (!from) {
                    throw new Error('Missing required parameter from when calling sendGrid');
                }
                // verify required parameter 'html' is set
                if (!html) {
                    throw new Error('Missing required parameter html when calling sendGrid');
                }
                // verify required parameter 'text' is set
                if (!text) {
                    throw new Error('Missing required parameter text when calling sendGrid');
                }
                // verify required parameter 'to' is set
                if (!to) {
                    throw new Error('Missing required parameter to when calling sendGrid');
                }
                // verify required parameter 'subject' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             * Sends a message related to specified reservation.
             *
             * @param restaurantId Restaurant identifier
             * @param reservationId Reservation identifier
             * @param body The body of the message
             */
            AdminReservationsApi.prototype.sendMessage = function (restaurantId, reservationId, body, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/rsv/admin/restaurants/{restaurantId}/reservations/{reservationId}/messages'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId))
                    .replace('{' + 'reservationId' + '}', String(reservationId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling sendMessage');
                }
                // verify required parameter 'reservationId' is set
                if (!reservationId) {
                    throw new Error('Missing required parameter reservationId when calling sendMessage');
                }
                // verify required parameter 'body' is set
                if (!body) {
                    throw new Error('Missing required parameter body when calling sendMessage');
                }
                var httpRequestParams = {
                    method: 'POST',
                    url: localVarPath,
                    json: true,
                    data: body,
                    params: queryParameters,
                    headers: headerParams
                };
                if (extraHttpRequestParams) {
                    httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
                }
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param settings
             */
            AdminReservationsApi.prototype.setReservationSettings = function (restaurantId, settings, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/rsv/admin/restaurants/{restaurantId}/settings'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling setReservationSettings');
                }
                // verify required parameter 'settings' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             */
            AdminReservationsApi.prototype.submitYelpReservation = function (extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/rsv/admin/email/yelp/inbound';
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param reservationId
             * @param value
             */
            AdminReservationsApi.prototype.updateReservation = function (restaurantId, reservationId, value, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/rsv/admin/restaurants/{restaurantId}/reservations/{reservationId}'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId))
                    .replace('{' + 'reservationId' + '}', String(reservationId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling updateReservation');
                }
                // verify required parameter 'reservationId' is set
                if (!reservationId) {
                    throw new Error('Missing required parameter reservationId when calling updateReservation');
                }
                // verify required parameter 'value' is set
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
                return this.$http(httpRequestParams);
            };
            AdminReservationsApi.$inject = ['$http', '$httpParamSerializer'];
            return AdminReservationsApi;
        }());
        Sdk.AdminReservationsApi = AdminReservationsApi;
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
/* tslint:disable:no-unused-variable member-ordering */
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
        var AdminTableApi = (function () {
            function AdminTableApi($http, $httpParamSerializer, basePath) {
                this.$http = $http;
                this.$httpParamSerializer = $httpParamSerializer;
                this.basePath = 'http://hostme-services-dev.azurewebsites.net';
                this.defaultHeaders = {};
                if (basePath) {
                    this.basePath = basePath;
                }
            }
            AdminTableApi.prototype.extendObj = function (objA, objB) {
                for (var key in objB) {
                    if (objB.hasOwnProperty(key)) {
                        objA[key] = objB[key];
                    }
                }
                return objA;
            };
            /**
             *
             *
             * @param restaurantId
             * @param floor
             */
            AdminTableApi.prototype.createNewFloor = function (restaurantId, floor, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/tm/admin/restaurants/{restaurantId}/floors'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling createNewFloor');
                }
                // verify required parameter 'floor' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param tables
             */
            AdminTableApi.prototype.createOrUpdateTableConfiguration = function (restaurantId, tables, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/tm/admin/restaurants/{restaurantId}/tables'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling createOrUpdateTableConfiguration');
                }
                // verify required parameter 'tables' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param floorId
             */
            AdminTableApi.prototype.deleteFloor = function (restaurantId, floorId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/tm/admin/restaurants/{restaurantId}/floors/{floorId}'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId))
                    .replace('{' + 'floorId' + '}', String(floorId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling deleteFloor');
                }
                // verify required parameter 'floorId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             */
            AdminTableApi.prototype.getAllTableCombinations = function (restaurantId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/tm/admin/restaurants/{restaurantId}/tables/combinations'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             */
            AdminTableApi.prototype.getApprovedTableCombinations = function (restaurantId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/tm/admin/restaurants/{restaurantId}/tables/combinations/approved'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param date
             * @param partySize
             * @param areas
             */
            AdminTableApi.prototype.getAvailableTables = function (restaurantId, date, partySize, areas, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/tm/admin/restaurants/{restaurantId}/tables/available'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling getAvailableTables');
                }
                // verify required parameter 'date' is set
                if (!date) {
                    throw new Error('Missing required parameter date when calling getAvailableTables');
                }
                // verify required parameter 'partySize' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param floorId
             */
            AdminTableApi.prototype.getFloorDetails = function (restaurantId, floorId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/tm/admin/restaurants/{restaurantId}/floors/{floorId}'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId))
                    .replace('{' + 'floorId' + '}', String(floorId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling getFloorDetails');
                }
                // verify required parameter 'floorId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             */
            AdminTableApi.prototype.getRestaurantFloors = function (restaurantId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/tm/admin/restaurants/{restaurantId}/floors'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param tableTurnOver
             * @param time
             */
            AdminTableApi.prototype.getTableMonitors = function (restaurantId, tableTurnOver, time, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/tm/admin/restaurants/{restaurantId}/tables/monitors'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param partySize
             * @param time
             */
            AdminTableApi.prototype.getTableUsersList = function (restaurantId, partySize, time, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/tm/admin/restaurants/{restaurantId}/tables/users'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             */
            AdminTableApi.prototype.getTables = function (restaurantId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/tm/admin/restaurants/{restaurantId}/tables'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param tableNumber
             */
            AdminTableApi.prototype.releaseTable = function (restaurantId, tableNumber, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/tm/admin/restaurants/{restaurantId}/tables/{tableNumber}/release'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId))
                    .replace('{' + 'tableNumber' + '}', String(tableNumber));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling releaseTable');
                }
                // verify required parameter 'tableNumber' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param tableNumber
             * @param partySize
             */
            AdminTableApi.prototype.seatPartyAtTable = function (restaurantId, tableNumber, partySize, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/tm/admin/restaurants/{restaurantId}/tables/{tableNumber}/seat'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId))
                    .replace('{' + 'tableNumber' + '}', String(tableNumber));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling seatPartyAtTable');
                }
                // verify required parameter 'tableNumber' is set
                if (!tableNumber) {
                    throw new Error('Missing required parameter tableNumber when calling seatPartyAtTable');
                }
                // verify required parameter 'partySize' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param combinations
             */
            AdminTableApi.prototype.setApprovedTableCombinations = function (restaurantId, combinations, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/tm/admin/restaurants/{restaurantId}/tables/combinations/approved'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling setApprovedTableCombinations');
                }
                // verify required parameter 'combinations' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param floorId
             * @param floor
             */
            AdminTableApi.prototype.updateFloor = function (restaurantId, floorId, floor, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/tm/admin/restaurants/{restaurantId}/floors/{floorId}'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId))
                    .replace('{' + 'floorId' + '}', String(floorId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling updateFloor');
                }
                // verify required parameter 'floorId' is set
                if (!floorId) {
                    throw new Error('Missing required parameter floorId when calling updateFloor');
                }
                // verify required parameter 'floor' is set
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
                return this.$http(httpRequestParams);
            };
            AdminTableApi.$inject = ['$http', '$httpParamSerializer'];
            return AdminTableApi;
        }());
        Sdk.AdminTableApi = AdminTableApi;
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
/* tslint:disable:no-unused-variable member-ordering */
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
        var AdminWaitlistApi = (function () {
            function AdminWaitlistApi($http, $httpParamSerializer, basePath) {
                this.$http = $http;
                this.$httpParamSerializer = $httpParamSerializer;
                this.basePath = 'http://hostme-services-dev.azurewebsites.net';
                this.defaultHeaders = {};
                if (basePath) {
                    this.basePath = basePath;
                }
            }
            AdminWaitlistApi.prototype.extendObj = function (objA, objB) {
                for (var key in objB) {
                    if (objB.hasOwnProperty(key)) {
                        objA[key] = objB[key];
                    }
                }
                return objA;
            };
            /**
             *
             *
             * @param restaurantId
             * @param conf
             */
            AdminWaitlistApi.prototype.addConfirmedWaiting = function (restaurantId, conf, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/confirmed'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling addConfirmedWaiting');
                }
                // verify required parameter 'conf' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             * Preregister customer for the specified restaurant and returns waiting record with Confirmation Code. Use this method when  customer is going to use HostMe mobile application.\r\n            This registration requires customer confirmation by entering confirmation number.
             *
             * @param restaurantId Identifier of the restaurant registered in our system
             */
            AdminWaitlistApi.prototype.addNewWaiting = function (restaurantId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             * When table is ready hostess originates Call event. It notifies client that table is ready
             *
             * @param restaurantId Restaurant identifier
             * @param waitingItemId Waiting item identifier
             * @param tableNumber Number of the table
             */
            AdminWaitlistApi.prototype.callWaitingParty = function (restaurantId, waitingItemId, tableNumber, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}/call'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId))
                    .replace('{' + 'waitingItemId' + '}', String(waitingItemId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling callWaitingParty');
                }
                // verify required parameter 'waitingItemId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             * Closes current waiting position. When person gets a table, hostess should close current position.
             *
             * @param restaurantId Restaurant identifier
             * @param waitingItemId Identifier of the waiting item
             */
            AdminWaitlistApi.prototype.close = function (restaurantId, waitingItemId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}/close'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId))
                    .replace('{' + 'waitingItemId' + '}', String(waitingItemId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling close');
                }
                // verify required parameter 'waitingItemId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             * Cancel waiting item
             *
             * @param restaurantId Restaurant identifier
             * @param waitingItemId Waiting item identifier
             * @param origin This parameter specifies who send the message. It could be host or client.
             * @param comment Free text comment, such as \&quot;Sorry but it was to long wait, we decided to go to another restaurant.\&quot;
             */
            AdminWaitlistApi.prototype.closeAsCanceled = function (restaurantId, waitingItemId, origin, comment, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}/cancel'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId))
                    .replace('{' + 'waitingItemId' + '}', String(waitingItemId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling closeAsCanceled');
                }
                // verify required parameter 'waitingItemId' is set
                if (!waitingItemId) {
                    throw new Error('Missing required parameter waitingItemId when calling closeAsCanceled');
                }
                // verify required parameter 'origin' is set
                if (!origin) {
                    throw new Error('Missing required parameter origin when calling closeAsCanceled');
                }
                // verify required parameter 'comment' is set
                if (!comment) {
                    throw new Error('Missing required parameter comment when calling closeAsCanceled');
                }
                if (origin !== undefined) {
                    queryParameters['origin'] = origin;
                }
                var httpRequestParams = {
                    method: 'PUT',
                    url: localVarPath,
                    json: true,
                    data: comment,
                    params: queryParameters,
                    headers: headerParams
                };
                if (extraHttpRequestParams) {
                    httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
                }
                return this.$http(httpRequestParams);
            };
            /**
             * Set current waiting record in sited state. When person gets a table, hostess should mark current record as sited.
             *
             * @param restaurantId Restaurant identifier
             * @param waitingItemId Identifier of the waiting item
             */
            AdminWaitlistApi.prototype.closeAsSeated = function (restaurantId, waitingItemId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}/sited'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId))
                    .replace('{' + 'waitingItemId' + '}', String(waitingItemId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling closeAsSeated');
                }
                // verify required parameter 'waitingItemId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             * Confirm waiting record from HostMe mobile application
             *
             * @param restaurantId Restaurant identifier
             * @param waitingItemId Waiting item identifier
             * @param conf Confirmation model
             */
            AdminWaitlistApi.prototype.confirm = function (restaurantId, waitingItemId, conf, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}/confirm'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId))
                    .replace('{' + 'waitingItemId' + '}', String(waitingItemId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling confirm');
                }
                // verify required parameter 'waitingItemId' is set
                if (!waitingItemId) {
                    throw new Error('Missing required parameter waitingItemId when calling confirm');
                }
                // verify required parameter 'conf' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             * Returns all waiting items for the selecetd restaurant
             *
             * @param restaurantId Restaurant identifier
             * @param queryOptions OData query
             * @param area
             * @param groupSize
             */
            AdminWaitlistApi.prototype.getAllWaitings = function (restaurantId, queryOptions, area, groupSize, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param waitingItemId
             */
            AdminWaitlistApi.prototype.getMessages = function (restaurantId, waitingItemId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}/messages'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId))
                    .replace('{' + 'waitingItemId' + '}', String(waitingItemId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling getMessages');
                }
                // verify required parameter 'waitingItemId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param area
             */
            AdminWaitlistApi.prototype.getRestaurantWaitingsStatistic = function (restaurantId, area, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/stats'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             */
            AdminWaitlistApi.prototype.getTodayStats = function (restaurantId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/stats'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             */
            AdminWaitlistApi.prototype.getUnreadMessagesCount = function (restaurantId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/messages/count-unread'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             * Returns waiting item by waiting item identifier
             *
             * @param restaurantId Restaurant identifier
             * @param waitingItemId Identifier of the waiting item
             */
            AdminWaitlistApi.prototype.getWaitingById = function (restaurantId, waitingItemId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId))
                    .replace('{' + 'waitingItemId' + '}', String(waitingItemId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling getWaitingById');
                }
                // verify required parameter 'waitingItemId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             */
            AdminWaitlistApi.prototype.getWaitingSettings = function (restaurantId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/settings'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param from
             * @param to
             */
            AdminWaitlistApi.prototype.getWaitingTimeByGroup = function (restaurantId, from, to, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/analytics/waitings/groupby/partysize'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param from
             * @param to
             */
            AdminWaitlistApi.prototype.getWaitingTimeByHour = function (restaurantId, from, to, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/analytics/waitings/groupby/hour'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param from
             * @param to
             */
            AdminWaitlistApi.prototype.getWaitingTimeByLine = function (restaurantId, from, to, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/analytics/waitings/waitings/groupby/line'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param from
             * @param to
             */
            AdminWaitlistApi.prototype.getWaitingTimeByMeal = function (restaurantId, from, to, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/analytics/waitings/groupby/mealtype'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param from
             * @param to
             */
            AdminWaitlistApi.prototype.getWaitingTimeByWeek = function (restaurantId, from, to, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/analytics/waitings/groupby/week'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param from
             * @param to
             */
            AdminWaitlistApi.prototype.getWaitingTimeByWeekDay = function (restaurantId, from, to, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/analytics/waitings/groupby/weekday'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param from
             * @param to
             */
            AdminWaitlistApi.prototype.getWaitingsForPeriod = function (restaurantId, from, to, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/analytics/waitings'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param groupBy
             * @param from
             * @param to
             */
            AdminWaitlistApi.prototype.getWaitingsGroupBy = function (restaurantId, groupBy, from, to, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/analytics/waitings/groupby'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling getWaitingsGroupBy');
                }
                // verify required parameter 'groupBy' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param from
             * @param to
             * @param body
             */
            AdminWaitlistApi.prototype.incoming = function (from, to, body, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/wm/admin/smsclient/incoming';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'from' is set
                if (!from) {
                    throw new Error('Missing required parameter from when calling incoming');
                }
                // verify required parameter 'to' is set
                if (!to) {
                    throw new Error('Missing required parameter to when calling incoming');
                }
                // verify required parameter 'body' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             * Mark all message as read.
             *
             * @param restaurantId Restaurant identifier
             * @param waitingItemId Waiting item identifier
             */
            AdminWaitlistApi.prototype.markAllMessagesAsRead = function (restaurantId, waitingItemId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}/messages/readall'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId))
                    .replace('{' + 'waitingItemId' + '}', String(waitingItemId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling markAllMessagesAsRead');
                }
                // verify required parameter 'waitingItemId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             * Put waiting item, on hold manually
             *
             * @param restaurantId Restaurant identifier
             * @param waitingItemId Waiting item identifier
             */
            AdminWaitlistApi.prototype.putOnHold = function (restaurantId, waitingItemId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}/putonhold'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId))
                    .replace('{' + 'waitingItemId' + '}', String(waitingItemId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling putOnHold');
                }
                // verify required parameter 'waitingItemId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             * Reopen closed waiting item
             *
             * @param restaurantId Restaurant identifier
             * @param waitingItemId Waiting item identifier
             */
            AdminWaitlistApi.prototype.reOpenWaiting = function (restaurantId, waitingItemId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}/reopen'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId))
                    .replace('{' + 'waitingItemId' + '}', String(waitingItemId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling reOpenWaiting');
                }
                // verify required parameter 'waitingItemId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             * Sends a message related to specified waiting item.
             *
             * @param restaurantId Restaurant identifier
             * @param waitingItemId Waiting item identifier
             * @param origin This parameter specifies who send the message. It could be host or client.
             * @param body The body of the message
             */
            AdminWaitlistApi.prototype.sendMessage = function (restaurantId, waitingItemId, origin, body, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}/sendmessage'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId))
                    .replace('{' + 'waitingItemId' + '}', String(waitingItemId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling sendMessage');
                }
                // verify required parameter 'waitingItemId' is set
                if (!waitingItemId) {
                    throw new Error('Missing required parameter waitingItemId when calling sendMessage');
                }
                // verify required parameter 'origin' is set
                if (!origin) {
                    throw new Error('Missing required parameter origin when calling sendMessage');
                }
                // verify required parameter 'body' is set
                if (!body) {
                    throw new Error('Missing required parameter body when calling sendMessage');
                }
                if (origin !== undefined) {
                    queryParameters['origin'] = origin;
                }
                var httpRequestParams = {
                    method: 'POST',
                    url: localVarPath,
                    json: true,
                    data: body,
                    params: queryParameters,
                    headers: headerParams
                };
                if (extraHttpRequestParams) {
                    httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
                }
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param settings
             */
            AdminWaitlistApi.prototype.setWaitingSettings = function (restaurantId, settings, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/settings'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling setWaitingSettings');
                }
                // verify required parameter 'settings' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             * Set waiting item off hold
             *
             * @param restaurantId Restaurant identifier
             * @param waitingItemId Waiting item identifier
             */
            AdminWaitlistApi.prototype.takeOffHold = function (restaurantId, waitingItemId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}/takeoffhold'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId))
                    .replace('{' + 'waitingItemId' + '}', String(waitingItemId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling takeOffHold');
                }
                // verify required parameter 'waitingItemId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             * Update waitingitem
             *
             * @param restaurantId Identifier of the restaurant registered in our system
             * @param waitingItemId Identifier of the waiting record in our system
             * @param item Update model of waiting record
             */
            AdminWaitlistApi.prototype.updateWaiting = function (restaurantId, waitingItemId, item, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId))
                    .replace('{' + 'waitingItemId' + '}', String(waitingItemId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling updateWaiting');
                }
                // verify required parameter 'waitingItemId' is set
                if (!waitingItemId) {
                    throw new Error('Missing required parameter waitingItemId when calling updateWaiting');
                }
                // verify required parameter 'item' is set
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
                return this.$http(httpRequestParams);
            };
            AdminWaitlistApi.$inject = ['$http', '$httpParamSerializer'];
            return AdminWaitlistApi;
        }());
        Sdk.AdminWaitlistApi = AdminWaitlistApi;
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
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
        })(Availability = Sdk.Availability || (Sdk.Availability = {}));
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
        var AvailabilityResponse;
        (function (AvailabilityResponse) {
            (function (UnitTypeEnum) {
                UnitTypeEnum[UnitTypeEnum["Cover"] = 'Cover'] = "Cover";
                UnitTypeEnum[UnitTypeEnum["Table"] = 'Table'] = "Table";
                UnitTypeEnum[UnitTypeEnum["Default"] = 'Default'] = "Default";
            })(AvailabilityResponse.UnitTypeEnum || (AvailabilityResponse.UnitTypeEnum = {}));
            var UnitTypeEnum = AvailabilityResponse.UnitTypeEnum;
        })(AvailabilityResponse = Sdk.AvailabilityResponse || (Sdk.AvailabilityResponse = {}));
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
        var RedeemRequest;
        (function (RedeemRequest) {
            (function (StatusEnum) {
                StatusEnum[StatusEnum["Submited"] = 'Submited'] = "Submited";
                StatusEnum[StatusEnum["Approved"] = 'Approved'] = "Approved";
                StatusEnum[StatusEnum["Rejected"] = 'Rejected'] = "Rejected";
            })(RedeemRequest.StatusEnum || (RedeemRequest.StatusEnum = {}));
            var StatusEnum = RedeemRequest.StatusEnum;
        })(RedeemRequest = Sdk.RedeemRequest || (Sdk.RedeemRequest = {}));
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
        var RedeemRequestInfo;
        (function (RedeemRequestInfo) {
            (function (StatusEnum) {
                StatusEnum[StatusEnum["Submited"] = 'Submited'] = "Submited";
                StatusEnum[StatusEnum["Approved"] = 'Approved'] = "Approved";
                StatusEnum[StatusEnum["Rejected"] = 'Rejected'] = "Rejected";
            })(RedeemRequestInfo.StatusEnum || (RedeemRequestInfo.StatusEnum = {}));
            var StatusEnum = RedeemRequestInfo.StatusEnum;
        })(RedeemRequestInfo = Sdk.RedeemRequestInfo || (Sdk.RedeemRequestInfo = {}));
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
        var Reservation;
        (function (Reservation) {
            (function (TypeEnum) {
                TypeEnum[TypeEnum["Standard"] = 'Standard'] = "Standard";
                TypeEnum[TypeEnum["Hybrid"] = 'Hybrid'] = "Hybrid";
            })(Reservation.TypeEnum || (Reservation.TypeEnum = {}));
            var TypeEnum = Reservation.TypeEnum;
        })(Reservation = Sdk.Reservation || (Sdk.Reservation = {}));
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
        var ReservationSettings;
        (function (ReservationSettings) {
            (function (AvailabilityMethodEnum) {
                AvailabilityMethodEnum[AvailabilityMethodEnum["Cover"] = 'Cover'] = "Cover";
                AvailabilityMethodEnum[AvailabilityMethodEnum["Table"] = 'Table'] = "Table";
                AvailabilityMethodEnum[AvailabilityMethodEnum["Default"] = 'Default'] = "Default";
            })(ReservationSettings.AvailabilityMethodEnum || (ReservationSettings.AvailabilityMethodEnum = {}));
            var AvailabilityMethodEnum = ReservationSettings.AvailabilityMethodEnum;
        })(ReservationSettings = Sdk.ReservationSettings || (Sdk.ReservationSettings = {}));
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
        var Reward;
        (function (Reward) {
            (function (StatusEnum) {
                StatusEnum[StatusEnum["Published"] = 'Published'] = "Published";
                StatusEnum[StatusEnum["Unpublished"] = 'Unpublished'] = "Unpublished";
            })(Reward.StatusEnum || (Reward.StatusEnum = {}));
            var StatusEnum = Reward.StatusEnum;
        })(Reward = Sdk.Reward || (Sdk.Reward = {}));
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
        var RewardValue;
        (function (RewardValue) {
            (function (TypeEnum) {
                TypeEnum[TypeEnum["Discount"] = 'Discount'] = "Discount";
                TypeEnum[TypeEnum["FreeMeal"] = 'FreeMeal'] = "FreeMeal";
                TypeEnum[TypeEnum["MoneyOff"] = 'MoneyOff'] = "MoneyOff";
            })(RewardValue.TypeEnum || (RewardValue.TypeEnum = {}));
            var TypeEnum = RewardValue.TypeEnum;
        })(RewardValue = Sdk.RewardValue || (Sdk.RewardValue = {}));
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
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
        })(TableMonitor = Sdk.TableMonitor || (Sdk.TableMonitor = {}));
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
