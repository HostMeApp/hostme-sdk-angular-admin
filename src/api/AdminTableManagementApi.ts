/* tslint:disable:no-unused-variable member-ordering */
import * as models from '../model/models';
import * as auth from './auth';
import {IApiConfig} from '../client/IApiConfig';

'use strict';
                                 	
    export class AdminTableManagementApi {
        public defaultHeaders : any = {};

        static $inject: string[] = ['$http','IApiConfig', '$httpParamSerializer'];

        constructor(protected $http: ng.IHttpService, protected config: IApiConfig, protected $httpParamSerializer?: (d: any) => any) {
           
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
         * @param restaurantId 
         * @param floor 
         */
        public createNewFloor (restaurantId: number, floor: models.Floor, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.Floor> {
            const localVarPath = this.config.basePath + '/api/tm/admin/restaurants/{restaurantId}/floors'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling createNewFloor');
            }
            // verify required parameter 'floor' is set
            if (!floor) {
                throw new Error('Missing required parameter floor when calling createNewFloor');
            }
            let httpRequestParams: any = {
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
            
                this.authentications.oauth2.applyToRequest(httpRequestParams);
            this.authentications.default.applyToRequest(httpRequestParams);

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * 
         * @param restaurantId 
         * @param floorId 
         */
        public deleteFloor (restaurantId: number, floorId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.config.basePath + '/api/tm/admin/restaurants/{restaurantId}/floors/{floorId}'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'floorId' + '}', String(floorId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling deleteFloor');
            }
            // verify required parameter 'floorId' is set
            if (!floorId) {
                throw new Error('Missing required parameter floorId when calling deleteFloor');
            }
            let httpRequestParams: any = {
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
        }
        /**
         * 
         * 
         * @param restaurantId 
         */
        public getAllTableCombinations (restaurantId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.TableInfo>> {
            const localVarPath = this.config.basePath + '/api/tm/admin/restaurants/{restaurantId}/tables/combinations'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling getAllTableCombinations');
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
            
                this.authentications.oauth2.applyToRequest(httpRequestParams);
            this.authentications.default.applyToRequest(httpRequestParams);

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * 
         * @param restaurantId 
         */
        public getApprovedTableCombinations (restaurantId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.TableInfo>> {
            const localVarPath = this.config.basePath + '/api/tm/admin/restaurants/{restaurantId}/tables/combinations/approved'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling getApprovedTableCombinations');
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
            
                this.authentications.oauth2.applyToRequest(httpRequestParams);
            this.authentications.default.applyToRequest(httpRequestParams);

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * 
         * @param restaurantId 
         * @param date 
         * @param partySize 
         * @param areas 
         */
        public getAvailableTables (restaurantId: number, date: Date, partySize: number, areas?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.TableInfo>> {
            const localVarPath = this.config.basePath + '/api/tm/admin/restaurants/{restaurantId}/tables/available'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
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
            
                this.authentications.oauth2.applyToRequest(httpRequestParams);
            this.authentications.default.applyToRequest(httpRequestParams);

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * 
         * @param restaurantId 
         * @param floorId 
         */
        public getFloorDetails (restaurantId: number, floorId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.Floor> {
            const localVarPath = this.config.basePath + '/api/tm/admin/restaurants/{restaurantId}/floors/{floorId}'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'floorId' + '}', String(floorId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling getFloorDetails');
            }
            // verify required parameter 'floorId' is set
            if (!floorId) {
                throw new Error('Missing required parameter floorId when calling getFloorDetails');
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
            
                this.authentications.oauth2.applyToRequest(httpRequestParams);
            this.authentications.default.applyToRequest(httpRequestParams);

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * 
         * @param restaurantId 
         */
        public getRestaurantFloors (restaurantId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.FloorInfo>> {
            const localVarPath = this.config.basePath + '/api/tm/admin/restaurants/{restaurantId}/floors'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling getRestaurantFloors');
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
            
                this.authentications.oauth2.applyToRequest(httpRequestParams);
            this.authentications.default.applyToRequest(httpRequestParams);

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * 
         * @param restaurantId 
         * @param tableTurnOver 
         * @param time 
         */
        public getTableMonitors (restaurantId: number, tableTurnOver?: number, time?: Date, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.TableMonitor>> {
            const localVarPath = this.config.basePath + '/api/tm/admin/restaurants/{restaurantId}/tables/monitors'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
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
            
                this.authentications.oauth2.applyToRequest(httpRequestParams);
            this.authentications.default.applyToRequest(httpRequestParams);

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * 
         * @param restaurantId 
         * @param partySize 
         * @param time 
         */
        public getTableUsersList (restaurantId: number, partySize?: number, time?: Date, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.TableUser>> {
            const localVarPath = this.config.basePath + '/api/tm/admin/restaurants/{restaurantId}/tables/users'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
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
            
                this.authentications.oauth2.applyToRequest(httpRequestParams);
            this.authentications.default.applyToRequest(httpRequestParams);

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * 
         * @param restaurantId 
         */
        public getTables (restaurantId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.Table>> {
            const localVarPath = this.config.basePath + '/api/tm/admin/restaurants/{restaurantId}/tables'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling getTables');
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
            
                this.authentications.oauth2.applyToRequest(httpRequestParams);
            this.authentications.default.applyToRequest(httpRequestParams);

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * 
         * @param restaurantId 
         * @param tableNumber 
         */
        public releaseTable (restaurantId: number, tableNumber: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.TableMonitor> {
            const localVarPath = this.config.basePath + '/api/tm/admin/restaurants/{restaurantId}/tables/{tableNumber}/release'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'tableNumber' + '}', String(tableNumber));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling releaseTable');
            }
            // verify required parameter 'tableNumber' is set
            if (!tableNumber) {
                throw new Error('Missing required parameter tableNumber when calling releaseTable');
            }
            let httpRequestParams: any = {
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
        }
        /**
         * 
         * 
         * @param restaurantId 
         * @param tableNumber 
         * @param partySize 
         */
        public seatPartyAtTable (restaurantId: number, tableNumber: string, partySize: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.TableMonitor> {
            const localVarPath = this.config.basePath + '/api/tm/admin/restaurants/{restaurantId}/tables/{tableNumber}/seat'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'tableNumber' + '}', String(tableNumber));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
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

            let httpRequestParams: any = {
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
        }
        /**
         * 
         * 
         * @param restaurantId 
         * @param combinations 
         */
        public setApprovedTableCombinations (restaurantId: number, combinations: Array<models.Table>, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.config.basePath + '/api/tm/admin/restaurants/{restaurantId}/tables/combinations/approved'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling setApprovedTableCombinations');
            }
            // verify required parameter 'combinations' is set
            if (!combinations) {
                throw new Error('Missing required parameter combinations when calling setApprovedTableCombinations');
            }
            let httpRequestParams: any = {
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
            
                this.authentications.oauth2.applyToRequest(httpRequestParams);
            this.authentications.default.applyToRequest(httpRequestParams);

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * 
         * @param restaurantId 
         * @param tableNumber 
         * @param stateContract 
         */
        public setTableState (restaurantId: number, tableNumber: string, stateContract: models.ChangeTableState, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.config.basePath + '/api/tm/admin/restaurants/{restaurantId}/tables/{tableNumber}/state'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'tableNumber' + '}', String(tableNumber));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling setTableState');
            }
            // verify required parameter 'tableNumber' is set
            if (!tableNumber) {
                throw new Error('Missing required parameter tableNumber when calling setTableState');
            }
            // verify required parameter 'stateContract' is set
            if (!stateContract) {
                throw new Error('Missing required parameter stateContract when calling setTableState');
            }
            let httpRequestParams: any = {
                method: 'PUT',
                url: localVarPath,
                json: true,
                data: stateContract,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            
                this.authentications.oauth2.applyToRequest(httpRequestParams);
            this.authentications.default.applyToRequest(httpRequestParams);

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * 
         * @param restaurantId 
         * @param floorId 
         * @param floor 
         */
        public updateFloor (restaurantId: number, floorId: string, floor: models.Floor, extraHttpRequestParams?: any ) : ng.IHttpPromise<any> {
            const localVarPath = this.config.basePath + '/api/tm/admin/restaurants/{restaurantId}/floors/{floorId}'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'floorId' + '}', String(floorId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
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
            let httpRequestParams: any = {
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
            
                this.authentications.oauth2.applyToRequest(httpRequestParams);
            this.authentications.default.applyToRequest(httpRequestParams);

            return this.$http(httpRequestParams);
        }
    }
