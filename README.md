#Angular SDK for HOstMe Admin APIs

##Get started:
```
npm install hostme-sdk-angular-admin
```

##Initialize API clients:

```
import * as HostmeSdk from 'hostme-sdk-angular-admin';
import * as angular from 'angular';

class ApiConfig implements HostmeSdk.IApiConfig {
    constructor(
        public basePath: string,
        public timeout: number,
        public defaultHeaders?: any) {
    }
}

angular.module('app', ['ngComponentRouter', commonModule.name, componentsModule.name])
    .config(['$locationProvider',
        ($locationProvider: angular.ILocationProvider) => {
            $locationProvider.html5Mode(true);
        }])
    .value('$routerRootComponent', 'app')
    .value('state', { value: 'home' })
    .constant('apiConfig', new ApiConfig('http://hostme-services-dev.azurewebsites.net', 30))
    .service('coreAdminApi', ['$http', 'apiConfig',
        ($http: ng.IHttpService, apiConfig: HostmeSdk.IApiConfig) => {
            return new HostmeSdk.AdminCoreApi($http, apiConfig);
        }])
    .service('loyaltyAdminApi', ['$http', 'apiConfig',
        ($http: ng.IHttpService, apiConfig: HostmeSdk.IApiConfig) => {
            return new HostmeSdk.AdminLoyaltyApi($http, apiConfig);
        }])
    .service('authenticationApi', ['$http', 'apiConfig',
        ($http: ng.IHttpService, apiConfig: HostmeSdk.IApiConfig) => {
            return new HostmeSdk.AuthorizationService($http, $q, apiConfig);
        }])
```

##Create new account:

```
var userInfo = {
            fullName: 'Jon Jonson',
            email: 'jon"example.com',
            phoneNumber: '1111111111',
            password: 'password1234',
            confirmPassword: 'password1234'
        };
        this.AdminCoreApi.register(userInfo);

Get token:
var token = AuthenticationService.getToken(user.email, user.login.password).then((result) => {
    this.AdminCoreApi.accessToken = result.access_token;
});
```
