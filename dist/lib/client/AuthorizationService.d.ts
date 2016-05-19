import { IApiConfig } from './IApiConfig';
export interface AccessTokenViewModel {
    access_token: string;
    '.expires': Date;
    '.issued': Date;
    token_type: string;
    userName: string;
}
export interface IApi {
    authentications: any;
}
export declare class AuthorizationService {
    protected $http: ng.IHttpService;
    protected $q: ng.IQService;
    protected config: IApiConfig;
    protected $httpParamSerializer: (d: any) => any;
    defaultHeaders: any;
    static $inject: string[];
    constructor($http: ng.IHttpService, $q: ng.IQService, config: IApiConfig, $httpParamSerializer?: (d: any) => any);
    Authorize(api: IApi, userName: string, password: string): ng.IPromise<any>;
    getToken(userName: string, password: string): ng.IPromise<AccessTokenViewModel>;
}
