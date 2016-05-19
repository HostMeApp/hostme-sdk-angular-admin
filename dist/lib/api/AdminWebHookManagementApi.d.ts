import * as models from '../model/models';
import * as auth from './auth';
import { IApiConfig } from '../client/IApiConfig';
export declare class AdminWebHookManagementApi {
    protected $http: ng.IHttpService;
    protected config: IApiConfig;
    protected $httpParamSerializer: (d: any) => any;
    defaultHeaders: any;
    static $inject: string[];
    constructor($http: ng.IHttpService, config: IApiConfig, $httpParamSerializer?: (d: any) => any);
    authentications: {
        'default': auth.Authentication;
        'oauth2': auth.OAuth;
    };
    accessToken: string;
    private extendObj<T1, T2>(objA, objB);
    _delete(id: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.Object>;
    deleteAll(extraHttpRequestParams?: any): ng.IHttpPromise<models.Object>;
    get(extraHttpRequestParams?: any): ng.IHttpPromise<Array<models.WebHookFilter>>;
    get_1(extraHttpRequestParams?: any): ng.IHttpPromise<Array<models.WebHook>>;
    lookup(id: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.WebHook>;
    post(webHook: models.WebHook, extraHttpRequestParams?: any): ng.IHttpPromise<models.WebHook>;
    put(id: string, webHook: models.WebHook, extraHttpRequestParams?: any): ng.IHttpPromise<models.Object>;
}
