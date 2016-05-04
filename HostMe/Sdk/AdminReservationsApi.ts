/* tslint:disable:no-unused-variable member-ordering */

namespace HostMe.Sdk {
    'use strict';

    export class AdminReservationsApi {
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
         * @param value 
         */
        public addNewReservation (restaurantId: number, value: CreateReservation, extraHttpRequestParams?: any ) : ng.IHttpPromise<Reservation> {
            const localVarPath = this.basePath + '/api/rsv/admin/restaurants/{restaurantId}/reservations'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling addNewReservation');
            }
            // verify required parameter 'value' is set
            if (!value) {
                throw new Error('Missing required parameter value when calling addNewReservation');
            }
            let httpRequestParams: any = {
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
        }
        /**
         * 
         * 
         * @param restaurantId 
         * @param reservationId 
         * @param cancelReservationContract 
         */
        public cancelReservation (restaurantId: number, reservationId: string, cancelReservationContract: CancelReservation, extraHttpRequestParams?: any ) : ng.IHttpPromise<Reservation> {
            const localVarPath = this.basePath + '/api/rsv/admin/restaurants/{restaurantId}/reservations/{reservationId}/cancel'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'reservationId' + '}', String(reservationId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling cancelReservation');
            }
            // verify required parameter 'reservationId' is set
            if (!reservationId) {
                throw new Error('Missing required parameter reservationId when calling cancelReservation');
            }
            // verify required parameter 'cancelReservationContract' is set
            if (!cancelReservationContract) {
                throw new Error('Missing required parameter cancelReservationContract when calling cancelReservation');
            }
            let httpRequestParams: any = {
                method: 'PUT',
                url: localVarPath,
                json: true,
                data: cancelReservationContract,
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
         * @param reservationId 
         */
        public closeAsNoShow (restaurantId: number, reservationId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Reservation> {
            const localVarPath = this.basePath + '/api/rsv/admin/restaurants/{restaurantId}/reservations/{reservationId}/noshow'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'reservationId' + '}', String(reservationId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling closeAsNoShow');
            }
            // verify required parameter 'reservationId' is set
            if (!reservationId) {
                throw new Error('Missing required parameter reservationId when calling closeAsNoShow');
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
         * 
         * 
         * @param restaurantId 
         * @param reservationId 
         * @param tableNumber 
         */
        public closeAsSeated (restaurantId: number, reservationId: string, tableNumber?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Reservation> {
            const localVarPath = this.basePath + '/api/rsv/admin/restaurants/{restaurantId}/reservations/{reservationId}/seat'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'reservationId' + '}', String(reservationId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
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
         * 
         * 
         * @param restaurantId 
         * @param reservationId 
         */
        public getMessages (restaurantId: number, reservationId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<Message>> {
            const localVarPath = this.basePath + '/api/rsv/admin/restaurants/{restaurantId}/reservations/{reservationId}/messages'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'reservationId' + '}', String(reservationId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling getMessages');
            }
            // verify required parameter 'reservationId' is set
            if (!reservationId) {
                throw new Error('Missing required parameter reservationId when calling getMessages');
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
         * @param date 
         * @param partySize 
         * @param rangeInMinutes 
         * @param tableTurnOver 
         * @param type 
         * @param areas 
         */
        public getReservationAvailability (restaurantId: number, date: Date, partySize: number, rangeInMinutes: number, tableTurnOver?: number, type?: string, areas?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<AvailabilityResponse> {
            const localVarPath = this.basePath + '/api/rsv/admin/restaurants/{restaurantId}/availability'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
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
         * @param reservationId 
         */
        public getReservationById (restaurantId: number, reservationId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Reservation> {
            const localVarPath = this.basePath + '/api/rsv/admin/restaurants/{restaurantId}/reservations/{reservationId}'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'reservationId' + '}', String(reservationId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling getReservationById');
            }
            // verify required parameter 'reservationId' is set
            if (!reservationId) {
                throw new Error('Missing required parameter reservationId when calling getReservationById');
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
        public getReservationSettings (restaurantId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<ReservationSettings> {
            const localVarPath = this.basePath + '/api/rsv/admin/restaurants/{restaurantId}/settings'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling getReservationSettings');
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
        public getReservationsForPeriod (restaurantId: number, from?: Date, to?: Date, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<Reservation>> {
            const localVarPath = this.basePath + '/api/rsv/admin/restaurants/{restaurantId}/reservations'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
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
         * @param date 
         */
        public getRestaurantReservationsStatistic (restaurantId: number, date?: Date, extraHttpRequestParams?: any ) : ng.IHttpPromise<ReservationsStatistic> {
            const localVarPath = this.basePath + '/api/rsv/admin/restaurants/{restaurantId}/reservations/stats'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling getRestaurantReservationsStatistic');
            }
            if (date !== undefined) {
                queryParameters['date'] = date;
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
         */
        public getUnreadMessagesCount (restaurantId: number, from?: Date, extraHttpRequestParams?: any ) : ng.IHttpPromise<Count> {
            const localVarPath = this.basePath + '/api/rsv/admin/restaurants/{restaurantId}/reservations/messages/unread/count'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling getUnreadMessagesCount');
            }
            if (from !== undefined) {
                queryParameters['from'] = from;
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
         * @param reservationId 
         */
        public placeOnWaitList (restaurantId: number, reservationId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<WaitingItem> {
            const localVarPath = this.basePath + '/api/rsv/admin/restaurants/{restaurantId}/reservations/{reservationId}/schedule'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'reservationId' + '}', String(reservationId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling placeOnWaitList');
            }
            // verify required parameter 'reservationId' is set
            if (!reservationId) {
                throw new Error('Missing required parameter reservationId when calling placeOnWaitList');
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
         * 
         * 
         * @param restaurantId 
         * @param reservationId 
         */
        public reOpenReservation (restaurantId: number, reservationId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Reservation> {
            const localVarPath = this.basePath + '/api/rsv/admin/restaurants/{restaurantId}/reservations/{reservationId}/reopen'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'reservationId' + '}', String(reservationId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling reOpenReservation');
            }
            // verify required parameter 'reservationId' is set
            if (!reservationId) {
                throw new Error('Missing required parameter reservationId when calling reOpenReservation');
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
         * Mark all message as read.
         * 
         * @param restaurantId Restaurant identifier
         * @param reservationId Reservation identifier
         */
        public readAllMessage (restaurantId: number, reservationId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/api/rsv/admin/restaurants/{restaurantId}/reservations/{reservationId}/messages/readall'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'reservationId' + '}', String(reservationId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling readAllMessage');
            }
            // verify required parameter 'reservationId' is set
            if (!reservationId) {
                throw new Error('Missing required parameter reservationId when calling readAllMessage');
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
         * 
         * 
         * @param from 
         * @param html 
         * @param text 
         * @param to 
         * @param subject 
         */
        public sendGrid (from: string, html: string, text: string, to: string, subject: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Reservation> {
            const localVarPath = this.basePath + '/api/rsv/admin/email/yelp';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
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
         * Sends a message related to specified reservation.
         * 
         * @param restaurantId Restaurant identifier
         * @param reservationId Reservation identifier
         * @param createMessageContract The message with body
         */
        public sendMessage (restaurantId: number, reservationId: string, createMessageContract: CreateMessage, extraHttpRequestParams?: any ) : ng.IHttpPromise<Message> {
            const localVarPath = this.basePath + '/api/rsv/admin/restaurants/{restaurantId}/reservations/{reservationId}/messages'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'reservationId' + '}', String(reservationId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling sendMessage');
            }
            // verify required parameter 'reservationId' is set
            if (!reservationId) {
                throw new Error('Missing required parameter reservationId when calling sendMessage');
            }
            // verify required parameter 'createMessageContract' is set
            if (!createMessageContract) {
                throw new Error('Missing required parameter createMessageContract when calling sendMessage');
            }
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: createMessageContract,
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
        public setReservationSettings (restaurantId: number, settings: ReservationSettings, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/api/rsv/admin/restaurants/{restaurantId}/settings'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling setReservationSettings');
            }
            // verify required parameter 'settings' is set
            if (!settings) {
                throw new Error('Missing required parameter settings when calling setReservationSettings');
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
         * 
         * 
         */
        public submitYelpReservation (extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/api/rsv/admin/email/yelp/inbound';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
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
         * 
         * 
         * @param restaurantId 
         * @param reservationId 
         * @param value 
         */
        public updateReservation (restaurantId: number, reservationId: string, value: CreateReservation, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/api/rsv/admin/restaurants/{restaurantId}/reservations/{reservationId}'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'reservationId' + '}', String(reservationId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
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
            let httpRequestParams: any = {
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
        }
    }
}
