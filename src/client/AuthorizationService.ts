import {IApiConfig} from './IApiConfig';

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

export class AuthorizationService {
    defaultHeaders: any = {};
    static $inject = ['$http','$q','IApiConfig', '$httpParamSerializer'];
    
    constructor(protected $http: ng.IHttpService, protected $q: ng.IQService, protected config: IApiConfig,  protected $httpParamSerializer?: (d: any) => any) {
        
    }
    
    public Authorize(api: IApi, userName: string, password: string): ng.IPromise<any> {
        var deffer = this.$q.defer();
        this.getToken(userName, password).then(function (response) {
            api.authentications.oauth2.accessToken = response.access_token;
            deffer.resolve();
        }, function (params) {
            deffer.reject(params);
        });
        return deffer.promise;
    }
        
    
    public getToken (userName: string, password: string): ng.IPromise<AccessTokenViewModel> {
        
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
        }, (err) => {
            deffer.reject(err);
        });
        
        return  deffer.promise;
    };
}
