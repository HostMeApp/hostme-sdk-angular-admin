import * as models from '../model/models';
import * as auth from './auth';
export declare class ExternalAuthenticationApi {
    protected $http: ng.IHttpService;
    protected $httpParamSerializer: (d: any) => any;
    protected basePath: string;
    defaultHeaders: any;
    static $inject: string[];
    constructor($http: ng.IHttpService, $httpParamSerializer?: (d: any) => any, basePath?: string);
    authentications: {
        'default': auth.Authentication;
        'oauth2': auth.OAuth;
    };
    accessToken: string;
    private extendObj<T1, T2>(objA, objB);
    getExternalFacebookLogin(accessToken: string, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    getExternalLogin(provider: string, error?: string, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    getExternalLogins(returnUrl: string, generateState?: boolean, extraHttpRequestParams?: any): ng.IHttpPromise<Array<models.ExternalLogin>>;
}
