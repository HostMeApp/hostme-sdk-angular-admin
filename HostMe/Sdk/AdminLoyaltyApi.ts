/* tslint:disable:no-unused-variable member-ordering */

namespace HostMe.Sdk {
    'use strict';

    export class AdminLoyaltyApi {
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
         * @param reward 
         */
        public addNewReward (restaurantId: number, reward: Reward, extraHttpRequestParams?: any ) : ng.IHttpPromise<Reward> {
            const localVarPath = this.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/rewards'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling addNewReward');
            }
            // verify required parameter 'reward' is set
            if (!reward) {
                throw new Error('Missing required parameter reward when calling addNewReward');
            }
            let httpRequestParams: any = {
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
        }
        /**
         * 
         * 
         * @param restaurantId 
         * @param redeemId 
         */
        public approveRedeemRequest (restaurantId: number, redeemId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<RedeemRequest> {
            const localVarPath = this.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/redeems/{redeemId}/approve'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'redeemId' + '}', String(redeemId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling approveRedeemRequest');
            }
            // verify required parameter 'redeemId' is set
            if (!redeemId) {
                throw new Error('Missing required parameter redeemId when calling approveRedeemRequest');
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
         * @param restaurantId 
         * @param memberId 
         */
        public closeMembership (restaurantId: number, memberId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Member> {
            const localVarPath = this.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/members/{memberId}/close'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'memberId' + '}', String(memberId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling closeMembership');
            }
            // verify required parameter 'memberId' is set
            if (!memberId) {
                throw new Error('Missing required parameter memberId when calling closeMembership');
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
         * @param restaurantId 
         * @param rewardId 
         */
        public deleteReward (restaurantId: number, rewardId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Object> {
            const localVarPath = this.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/rewards/{rewardId}'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'rewardId' + '}', String(rewardId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling deleteReward');
            }
            // verify required parameter 'rewardId' is set
            if (!rewardId) {
                throw new Error('Missing required parameter rewardId when calling deleteReward');
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

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * 
         * @param restaurantId 
         * @param phoneNumber 
         */
        public findMemberByPhoneNumber (restaurantId: number, phoneNumber: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Member> {
            const localVarPath = this.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/members/find'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
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
         */
        public getAlRewards (restaurantId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<Reward>> {
            const localVarPath = this.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/rewards'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling getAlRewards');
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
        public getAllMembers (restaurantId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<ODataPagedResult1MemberContract> {
            const localVarPath = this.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/members'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling getAllMembers');
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
        public getAllRedeemRequests (restaurantId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<RedeemRequest>> {
            const localVarPath = this.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/redeems'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling getAllRedeemRequests');
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
        public getDefaultLoyaltySettings (restaurantId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<LoyaltySettings> {
            const localVarPath = this.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/defaultSettings'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling getDefaultLoyaltySettings');
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
        public getLoyaltySettings (restaurantId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<LoyaltySettings> {
            const localVarPath = this.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/settings'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling getLoyaltySettings');
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
         * @param memberId 
         */
        public getMemberAvatar (restaurantId: number, memberId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<string> {
            const localVarPath = this.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/members/{memberId}/avatar'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'memberId' + '}', String(memberId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling getMemberAvatar');
            }
            // verify required parameter 'memberId' is set
            if (!memberId) {
                throw new Error('Missing required parameter memberId when calling getMemberAvatar');
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
         * @param memberId 
         */
        public getMemberTransactions (restaurantId: number, memberId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<ODataPagedResult1TransactionContract> {
            const localVarPath = this.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/members/{memberId}/transactions'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'memberId' + '}', String(memberId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling getMemberTransactions');
            }
            // verify required parameter 'memberId' is set
            if (!memberId) {
                throw new Error('Missing required parameter memberId when calling getMemberTransactions');
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
         * @param memberId 
         */
        public getMembershipInfo (restaurantId: number, memberId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Member> {
            const localVarPath = this.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/members/{memberId}'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'memberId' + '}', String(memberId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling getMembershipInfo');
            }
            // verify required parameter 'memberId' is set
            if (!memberId) {
                throw new Error('Missing required parameter memberId when calling getMembershipInfo');
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
         * @param rewardId 
         */
        public getRewardById (restaurantId: number, rewardId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Reward> {
            const localVarPath = this.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/rewards/{rewardId}'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'rewardId' + '}', String(rewardId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling getRewardById');
            }
            // verify required parameter 'rewardId' is set
            if (!rewardId) {
                throw new Error('Missing required parameter rewardId when calling getRewardById');
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
         * @param rewardId 
         */
        public publishReward (restaurantId: number, rewardId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Reward> {
            const localVarPath = this.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/rewards/{rewardId}/publish'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'rewardId' + '}', String(rewardId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling publishReward');
            }
            // verify required parameter 'rewardId' is set
            if (!rewardId) {
                throw new Error('Missing required parameter rewardId when calling publishReward');
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
         * @param redeemId 
         * @param reason 
         */
        public rejectRedeemRequest (restaurantId: number, redeemId: string, reason: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<RedeemRequest> {
            const localVarPath = this.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/redeems/{redeemId}/reject'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'redeemId' + '}', String(redeemId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
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
            let httpRequestParams: any = {
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
        }
        /**
         * 
         * 
         * @param restaurantId 
         * @param settings 
         */
        public setLoyaltySettings (restaurantId: number, settings: LoyaltySettings, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/settings'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling setLoyaltySettings');
            }
            // verify required parameter 'settings' is set
            if (!settings) {
                throw new Error('Missing required parameter settings when calling setLoyaltySettings');
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
         * @param restaurantId 
         * @param rewardId 
         */
        public unpublishReward (restaurantId: number, rewardId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Reward> {
            const localVarPath = this.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/rewards/{rewardId}/unpublish'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'rewardId' + '}', String(rewardId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling unpublishReward');
            }
            // verify required parameter 'rewardId' is set
            if (!rewardId) {
                throw new Error('Missing required parameter rewardId when calling unpublishReward');
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
         * @param rewardId 
         * @param reward 
         */
        public updateReward (restaurantId: number, rewardId: string, reward: Reward, extraHttpRequestParams?: any ) : ng.IHttpPromise<Reward> {
            const localVarPath = this.basePath + '/api/loyalty/admin/restaurants/{restaurantId}/rewards/{rewardId}'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'rewardId' + '}', String(rewardId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
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
            let httpRequestParams: any = {
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
        }
    }
}
