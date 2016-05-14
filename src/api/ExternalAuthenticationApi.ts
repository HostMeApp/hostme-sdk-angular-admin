/* tslint:disable:no-unused-variable member-ordering */
import * as models from '../model/models';
import * as auth from './auth';

'use strict';
                                 	
    export class ExternalAuthenticationApi {
        protected basePath = 'http://hostme-services-dev.azurewebsites.net';
        public defaultHeaders : any = {};

        static $inject: string[] = ['$http', '$httpParamSerializer'];

        constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        
        public authentications = {
        'default': <auth.Authentication>new auth.VoidAuth(),
        'oauth2': new auth.OAuth(),
    }
    
    set accessToken(token: string) {
        this.authentications.oauth2.accessToken = token;
    }
    

        private extendObj<T1,T2>(objA: T1, objB: T2) {
            for(let key in objB) {
                if(objB.hasOwnProperty(key)) {
                    objA[key] = objB[key];
                }
            }
            return <T1&T2>objA;
        }

        /**
         * 
         * 
         * @param accessToken 
         */
        public getExternalFacebookLogin (accessToken: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/authorization/externalFacebookLogin';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'accessToken' is set
            if (!accessToken) {
                throw new Error('Missing required parameter accessToken when calling getExternalFacebookLogin');
            }
            if (accessToken !== undefined) {
                queryParameters['access_token'] = accessToken;
            }

            let httpRequestParams: any = {
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
        }
        /**
         * 
         * 
         * @param provider 
         * @param error 
         */
        public getExternalLogin (provider: string, error?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/authorization/externalLogin';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
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

            let httpRequestParams: any = {
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
        }
        /**
         * 
         * 
         * @param returnUrl 
         * @param generateState 
         */
        public getExternalLogins (returnUrl: string, generateState?: boolean, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.ExternalLogin>> {
            const localVarPath = this.basePath + '/authorization/externalLogins';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
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

            let httpRequestParams: any = {
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
        }
    }
