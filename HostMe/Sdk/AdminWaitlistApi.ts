/* tslint:disable:no-unused-variable member-ordering */

namespace HostMe.Sdk {
    'use strict';

    export class AdminWaitlistApi {
        protected basePath = 'http://hostme-services-dev.azurewebsites.net';
        public defaultHeaders : any = {};

        static $inject: string[] = ['$http', '$httpParamSerializer'];

        constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        private extendObj<T1,T2>(objA: T1, objB: T2) {
            for(let key in objB){
                if(objB.hasOwnProperty(key)){
                    objA[key] = objB[key];
                }
            }
            return <T1&T2>objA;
        }

        /**
         * 
         * 
         * @param restaurantId 
         * @param conf 
         */
        public addConfirmedWaiting (restaurantId: number, conf: PanelConfirmationBindingModel, extraHttpRequestParams?: any ) : ng.IHttpPromise<WaitingItem> {
            const localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/confirmed'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling addConfirmedWaiting');
            }
            // verify required parameter 'conf' is set
            if (!conf) {
                throw new Error('Missing required parameter conf when calling addConfirmedWaiting');
            }
            let httpRequestParams: any = {
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
        }
        /**
         * Preregister customer for the specified restaurant and returns waiting record with Confirmation Code. Use this method when  customer is going to use HostMe mobile application.\r\n            This registration requires customer confirmation by entering confirmation number.
         * 
         * @param restaurantId Identifier of the restaurant registered in our system
         */
        public addNewWaiting (restaurantId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<WaitingItem> {
            const localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling addNewWaiting');
            }
            let httpRequestParams: any = {
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
        }
        /**
         * When table is ready hostess originates Call event. It notifies client that table is ready
         * 
         * @param restaurantId Restaurant identifier
         * @param waitingItemId Waiting item identifier
         * @param tableNumber Number of the table
         */
        public callWaitingParty (restaurantId: number, waitingItemId: number, tableNumber?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}/call'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'waitingItemId' + '}', String(waitingItemId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
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

            return this.$http(httpRequestParams);
        }
        /**
         * Closes current waiting position. When person gets a table, hostess should close current position.
         * 
         * @param restaurantId Restaurant identifier
         * @param waitingItemId Identifier of the waiting item
         */
        public close (restaurantId: number, waitingItemId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}/close'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'waitingItemId' + '}', String(waitingItemId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling close');
            }
            // verify required parameter 'waitingItemId' is set
            if (!waitingItemId) {
                throw new Error('Missing required parameter waitingItemId when calling close');
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

            return this.$http(httpRequestParams);
        }
        /**
         * Cancel waiting item
         * 
         * @param restaurantId Restaurant identifier
         * @param waitingItemId Waiting item identifier
         * @param origin This parameter specifies who send the message. It could be host or client.
         * @param comment Free text comment, such as \&quot;Sorry but it was to long wait, we decided to go to another restaurant.\&quot;
         */
        public closeAsCanceled (restaurantId: number, waitingItemId: number, origin: string, comment: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}/cancel'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'waitingItemId' + '}', String(waitingItemId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
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

            let httpRequestParams: any = {
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
        }
        /**
         * Set current waiting record in sited state. When person gets a table, hostess should mark current record as sited.
         * 
         * @param restaurantId Restaurant identifier
         * @param waitingItemId Identifier of the waiting item
         */
        public closeAsSeated (restaurantId: number, waitingItemId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}/sited'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'waitingItemId' + '}', String(waitingItemId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling closeAsSeated');
            }
            // verify required parameter 'waitingItemId' is set
            if (!waitingItemId) {
                throw new Error('Missing required parameter waitingItemId when calling closeAsSeated');
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

            return this.$http(httpRequestParams);
        }
        /**
         * Confirm waiting record from HostMe mobile application
         * 
         * @param restaurantId Restaurant identifier
         * @param waitingItemId Waiting item identifier
         * @param conf Confirmation model
         */
        public confirm (restaurantId: number, waitingItemId: number, conf: PanelConfirmationBindingModel, extraHttpRequestParams?: any ) : ng.IHttpPromise<WaitingItem> {
            const localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}/confirm'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'waitingItemId' + '}', String(waitingItemId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
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
            let httpRequestParams: any = {
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
        }
        /**
         * Returns all waiting items for the selecetd restaurant
         * 
         * @param restaurantId Restaurant identifier
         * @param queryOptions OData query
         * @param from 
         * @param to 
         */
        public getAllWaitings (restaurantId: number, queryOptions?: string, from?: string, to?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<WaitingItem>> {
            const localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling getAllWaitings');
            }
            if (queryOptions !== undefined) {
                queryParameters['queryOptions'] = queryOptions;
            }

            if (from !== undefined) {
                queryParameters['from'] = from;
            }

            if (to !== undefined) {
                queryParameters['to'] = to;
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

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * 
         * @param restaurantId 
         * @param waitingItemId 
         */
        public getMessages (restaurantId: number, waitingItemId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<Message>> {
            const localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}/messages'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'waitingItemId' + '}', String(waitingItemId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling getMessages');
            }
            // verify required parameter 'waitingItemId' is set
            if (!waitingItemId) {
                throw new Error('Missing required parameter waitingItemId when calling getMessages');
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

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * 
         * @param restaurantId 
         * @param area 
         */
        public getRestaurantWaitingsStatistic (restaurantId: number, area?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<WaitingsStatistic> {
            const localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/stats'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling getRestaurantWaitingsStatistic');
            }
            if (area !== undefined) {
                queryParameters['area'] = area;
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

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * 
         * @param restaurantId 
         */
        public getTodayStats (restaurantId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<WaitingStats> {
            const localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/stats'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling getTodayStats');
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

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * 
         * @param restaurantId 
         */
        public getUnreadMessagesCount (restaurantId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<number> {
            const localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/messages/count-unread'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling getUnreadMessagesCount');
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

            return this.$http(httpRequestParams);
        }
        /**
         * Returns waiting item by waiting item identifier
         * 
         * @param restaurantId Restaurant identifier
         * @param waitingItemId Identifier of the waiting item
         */
        public getWaitingById (restaurantId: number, waitingItemId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<WaitingItem> {
            const localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'waitingItemId' + '}', String(waitingItemId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling getWaitingById');
            }
            // verify required parameter 'waitingItemId' is set
            if (!waitingItemId) {
                throw new Error('Missing required parameter waitingItemId when calling getWaitingById');
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

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * 
         * @param restaurantId 
         */
        public getWaitingSettings (restaurantId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<WaitingSettings> {
            const localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/settings'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling getWaitingSettings');
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

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * 
         * @param restaurantId 
         * @param from 
         * @param to 
         */
        public getWaitingTimeByGroup (restaurantId: number, from?: Date, to?: Date, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<WaitingsStatReportItem>> {
            const localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/analytics/waitings/groupby/partysize'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
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

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * 
         * @param restaurantId 
         * @param from 
         * @param to 
         */
        public getWaitingTimeByHour (restaurantId: number, from?: Date, to?: Date, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<WaitingsStatReportItem>> {
            const localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/analytics/waitings/groupby/hour'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
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

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * 
         * @param restaurantId 
         * @param from 
         * @param to 
         */
        public getWaitingTimeByLine (restaurantId: number, from?: Date, to?: Date, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<WaitingsStatReportItem>> {
            const localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/analytics/waitings/groupby/line'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
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

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * 
         * @param restaurantId 
         * @param from 
         * @param to 
         */
        public getWaitingTimeByMeal (restaurantId: number, from?: Date, to?: Date, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<WaitingsStatReportItem>> {
            const localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/analytics/waitings/groupby/mealtype'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
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

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * 
         * @param restaurantId 
         * @param from 
         * @param to 
         */
        public getWaitingTimeByWeek (restaurantId: number, from?: Date, to?: Date, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<WaitingsStatReportItem>> {
            const localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/analytics/waitings/groupby/week'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
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

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * 
         * @param restaurantId 
         * @param from 
         * @param to 
         */
        public getWaitingTimeByWeekDay (restaurantId: number, from?: Date, to?: Date, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<WaitingsStatReportItem>> {
            const localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/analytics/waitings/groupby/weekday'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
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

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * 
         * @param restaurantId 
         * @param from 
         * @param to 
         */
        public getWaitingsForPeriod (restaurantId: number, from?: Date, to?: Date, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<WaitingReportItem>> {
            const localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/analytics/waitings'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
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

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * 
         * @param restaurantId 
         * @param groupBy 
         * @param from 
         * @param to 
         */
        public getWaitingsGroupBy (restaurantId: number, groupBy: string, from?: Date, to?: Date, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<WaitingsStatReportItem>> {
            const localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/analytics/waitings/groupby'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
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

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * 
         * @param from 
         * @param to 
         * @param body 
         */
        public incoming (from: string, to: string, body: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Object> {
            const localVarPath = this.basePath + '/api/wm/admin/smsclient/incoming';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
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

            return this.$http(httpRequestParams);
        }
        /**
         * Mark all message as read.
         * 
         * @param restaurantId Restaurant identifier
         * @param waitingItemId Waiting item identifier
         */
        public markAllMessagesAsRead (restaurantId: number, waitingItemId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}/messages/readall'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'waitingItemId' + '}', String(waitingItemId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling markAllMessagesAsRead');
            }
            // verify required parameter 'waitingItemId' is set
            if (!waitingItemId) {
                throw new Error('Missing required parameter waitingItemId when calling markAllMessagesAsRead');
            }
            let httpRequestParams: any = {
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
        }
        /**
         * Put waiting item, on hold manually
         * 
         * @param restaurantId Restaurant identifier
         * @param waitingItemId Waiting item identifier
         */
        public putOnHold (restaurantId: number, waitingItemId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}/putonhold'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'waitingItemId' + '}', String(waitingItemId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling putOnHold');
            }
            // verify required parameter 'waitingItemId' is set
            if (!waitingItemId) {
                throw new Error('Missing required parameter waitingItemId when calling putOnHold');
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

            return this.$http(httpRequestParams);
        }
        /**
         * Reopen closed waiting item
         * 
         * @param restaurantId Restaurant identifier
         * @param waitingItemId Waiting item identifier
         */
        public reOpenWaiting (restaurantId: number, waitingItemId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<WaitingItem> {
            const localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}/reopen'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'waitingItemId' + '}', String(waitingItemId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling reOpenWaiting');
            }
            // verify required parameter 'waitingItemId' is set
            if (!waitingItemId) {
                throw new Error('Missing required parameter waitingItemId when calling reOpenWaiting');
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

            return this.$http(httpRequestParams);
        }
        /**
         * Sends a message related to specified waiting item.
         * 
         * @param restaurantId Restaurant identifier
         * @param waitingItemId Waiting item identifier
         * @param origin This parameter specifies who send the message. It could be host or client.
         * @param body The body of the message
         */
        public sendMessage (restaurantId: number, waitingItemId: number, origin: string, body: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Message> {
            const localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}/sendmessage'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'waitingItemId' + '}', String(waitingItemId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
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

            let httpRequestParams: any = {
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
        }
        /**
         * 
         * 
         * @param restaurantId 
         * @param settings 
         */
        public setWaitingSettings (restaurantId: number, settings: WaitingSettings, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/settings'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling setWaitingSettings');
            }
            // verify required parameter 'settings' is set
            if (!settings) {
                throw new Error('Missing required parameter settings when calling setWaitingSettings');
            }
            let httpRequestParams: any = {
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
        }
        /**
         * Set waiting item off hold
         * 
         * @param restaurantId Restaurant identifier
         * @param waitingItemId Waiting item identifier
         */
        public takeOffHold (restaurantId: number, waitingItemId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}/takeoffhold'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'waitingItemId' + '}', String(waitingItemId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling takeOffHold');
            }
            // verify required parameter 'waitingItemId' is set
            if (!waitingItemId) {
                throw new Error('Missing required parameter waitingItemId when calling takeOffHold');
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

            return this.$http(httpRequestParams);
        }
        /**
         * Update waitingitem
         * 
         * @param restaurantId Identifier of the restaurant registered in our system
         * @param waitingItemId Identifier of the waiting record in our system
         * @param item Update model of waiting record
         */
        public updateWaiting (restaurantId: number, waitingItemId: number, item: UpdateWaitingItemBindingModel, extraHttpRequestParams?: any ) : ng.IHttpPromise<WaitingItem> {
            const localVarPath = this.basePath + '/api/wm/admin/restaurant/{restaurantId}/waitings/{waitingItemId}'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'waitingItemId' + '}', String(waitingItemId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
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
            let httpRequestParams: any = {
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
        }
    }
}
