/* tslint:disable:no-unused-variable member-ordering */


namespace HostMe.Sdk {
    'use strict';


    export class AdminCoreApi {
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
         * @param model 
         */
        public addExternalLogin (model: AddExternalLoginBindingModel, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/api/core/admin/account/AddExternalLogin';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'model' is set
            if (!model) {
                throw new Error('Missing required parameter model when calling addExternalLogin');
            }






            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: model,
                
                
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
         * @param value 
         */
        public addNewRestaurant (value: NewRestaurantBindingModel, extraHttpRequestParams?: any ) : ng.IHttpPromise<WithAccessTokenContract1RestaurantContract> {
            const localVarPath = this.basePath + '/api/core/admin/restaurants';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'value' is set
            if (!value) {
                throw new Error('Missing required parameter value when calling addNewRestaurant');
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
         * @param model 
         */
        public changePassword (model: ChangePasswordBindingModel, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/api/core/admin/account/ChangePassword';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'model' is set
            if (!model) {
                throw new Error('Missing required parameter model when calling changePassword');
            }






            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: model,
                
                
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
         * @param invitationCode 
         * @param restaurantId 
         */
        public checkInvitationCode (invitationCode: string, restaurantId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<InvitationViewModel> {
            const localVarPath = this.basePath + '/api/core/admin/restaurants/{restaurantId}/invitations/{invitationCode}'
                .replace('{' + 'invitationCode' + '}', String(invitationCode))
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'invitationCode' is set
            if (!invitationCode) {
                throw new Error('Missing required parameter invitationCode when calling checkInvitationCode');
            }



            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling checkInvitationCode');
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
         * @param invitation 
         */
        public createInvitationCode (restaurantId: number, invitation: InvitationBindingModel, extraHttpRequestParams?: any ) : ng.IHttpPromise<string> {
            const localVarPath = this.basePath + '/api/core/admin/restaurants/{restaurantId}/invitations'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling createInvitationCode');
            }



            // verify required parameter 'invitation' is set
            if (!invitation) {
                throw new Error('Missing required parameter invitation when calling createInvitationCode');
            }






            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: invitation,
                
                
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
         * @param value 
         */
        public createNewAccountWithRestaurant (value: NewAccountWithRestaurantBindingModel, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/api/core/admin/tenant/restaurants';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'value' is set
            if (!value) {
                throw new Error('Missing required parameter value when calling createNewAccountWithRestaurant');
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
         * @param invitationCode 
         */
        public deleteInvitation (restaurantId: number, invitationCode: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/api/core/admin/restaurants/{restaurantId}/invitations/{invitationCode}'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'invitationCode' + '}', String(invitationCode));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling deleteInvitation');
            }



            // verify required parameter 'invitationCode' is set
            if (!invitationCode) {
                throw new Error('Missing required parameter invitationCode when calling deleteInvitation');
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
         */
        public deleteRestaurant (restaurantId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/api/core/admin/restaurants/{restaurantId}'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling deleteRestaurant');
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
         * @param userId 
         * @param role 
         */
        public deleteUser (restaurantId: number, userId: string, role: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/api/core/admin/restaurants/{restaurantId}/users/{userId}'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'userId' + '}', String(userId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling deleteUser');
            }



            // verify required parameter 'userId' is set
            if (!userId) {
                throw new Error('Missing required parameter userId when calling deleteUser');
            }



            // verify required parameter 'role' is set
            if (!role) {
                throw new Error('Missing required parameter role when calling deleteUser');
            }



            if (role !== undefined) {
                queryParameters['role'] = role;
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
         * @param phone 
         * @param email 
         */
        public findRestaurantsByUserPhone (phone?: string, email?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<Restaurant>> {
            const localVarPath = this.basePath + '/api/core/admin/tenant/restaurants/find';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);







            if (phone !== undefined) {
                queryParameters['phone'] = phone;
            }


            if (email !== undefined) {
                queryParameters['email'] = email;
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
         * @param phone 
         * @param email 
         */
        public findUserByPhoneAsync (phone?: string, email?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<UserInfo> {
            const localVarPath = this.basePath + '/api/core/admin/tenant/users/find';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);







            if (phone !== undefined) {
                queryParameters['phone'] = phone;
            }


            if (email !== undefined) {
                queryParameters['email'] = email;
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
         */
        public getAllUserRestaurants (extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<Restaurant>> {
            const localVarPath = this.basePath + '/api/core/admin/restaurants';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);






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
        public getCustomSettings (restaurantId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Object> {
            const localVarPath = this.basePath + '/api/core/admin/restaurants/{restaurantId}/customSettings'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling getCustomSettings');
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
        public getInvitations (restaurantId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<InvitationViewModel>> {
            const localVarPath = this.basePath + '/api/core/admin/restaurants/{restaurantId}/invitations'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling getInvitations');
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
         * @param returnUrl 
         * @param generateState 
         */
        public getManageInfo (returnUrl: string, generateState?: boolean, extraHttpRequestParams?: any ) : ng.IHttpPromise<ManageInfoViewModel> {
            const localVarPath = this.basePath + '/api/core/admin/account/ManageInfo';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'returnUrl' is set
            if (!returnUrl) {
                throw new Error('Missing required parameter returnUrl when calling getManageInfo');
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

            return this.$http(httpRequestParams);
        }

        /**
         * 
         * 
         * @param restaurantId 
         * @param tableNumber 
         */
        public getRegistrationToken (restaurantId: number, tableNumber?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<string> {
            const localVarPath = this.basePath + '/api/core/admin/restaurants/{restaurantId}/loyalty/token'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling getRegistrationToken');
            }





            if (tableNumber !== undefined) {
                queryParameters['tableNumber'] = tableNumber;
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
        public getRestaurantById (restaurantId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Restaurant> {
            const localVarPath = this.basePath + '/api/core/admin/restaurants/{restaurantId}'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling getRestaurantById');
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
        public getRestaurantSettings (restaurantId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<RestaurantSettings> {
            const localVarPath = this.basePath + '/api/core/admin/restaurants/{restaurantId}/settings'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling getRestaurantSettings');
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
         */
        public getUserInfo (extraHttpRequestParams?: any ) : ng.IHttpPromise<UserInfoViewModel> {
            const localVarPath = this.basePath + '/api/core/admin/account/UserInfo';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);






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
         */
        public getUserProfile (extraHttpRequestParams?: any ) : ng.IHttpPromise<UserProfile> {
            const localVarPath = this.basePath + '/api/core/admin/account/profile';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);






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
        public getUsers (restaurantId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<RestaurantUserInfo>> {
            const localVarPath = this.basePath + '/api/core/admin/restaurants/{restaurantId}/users'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling getUsers');
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
         */
        public logout (extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/api/core/admin/account/Logout';

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
         */
        public me (extraHttpRequestParams?: any ) : ng.IHttpPromise<UserInfo> {
            const localVarPath = this.basePath + '/api/core/admin/account/me';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);






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
         * @param image 
         */
        public postProfileImage (image: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/api/core/admin/account/profile/image';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'image' is set
            if (!image) {
                throw new Error('Missing required parameter image when calling postProfileImage');
            }






            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: image,
                
                
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
        public profileImage (extraHttpRequestParams?: any ) : ng.IHttpPromise<string> {
            const localVarPath = this.basePath + '/api/core/admin/account/profile/image';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);






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
         * @param model 
         */
        public register (model: RegisterBindingModel, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/api/core/admin/account/Register';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'model' is set
            if (!model) {
                throw new Error('Missing required parameter model when calling register');
            }






            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: model,
                
                
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
         * @param model 
         */
        public registerExternal (model: RegisterExternalBindingModel, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/api/core/admin/account/RegisterExternal';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'model' is set
            if (!model) {
                throw new Error('Missing required parameter model when calling registerExternal');
            }






            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: model,
                
                
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
         * @param invitationCode 
         */
        public reinvite (restaurantId: number, invitationCode: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/api/core/admin/restaurants/{restaurantId}/invitations/{invitationCode}/reinvite'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'invitationCode' + '}', String(invitationCode));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling reinvite');
            }



            // verify required parameter 'invitationCode' is set
            if (!invitationCode) {
                throw new Error('Missing required parameter invitationCode when calling reinvite');
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
         * @param model 
         */
        public resetPassword (model: ResetPasswordBindingModel, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/api/core/admin/account/ResetPassword';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'model' is set
            if (!model) {
                throw new Error('Missing required parameter model when calling resetPassword');
            }






            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: model,
                
                
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
        public setCustomSettings (restaurantId: number, settings: Object, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/api/core/admin/restaurants/{restaurantId}/customSettings'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling setCustomSettings');
            }



            // verify required parameter 'settings' is set
            if (!settings) {
                throw new Error('Missing required parameter settings when calling setCustomSettings');
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
         * @param model 
         */
        public setPassword (model: SetPasswordBindingModel, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/api/core/admin/account/SetPassword';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'model' is set
            if (!model) {
                throw new Error('Missing required parameter model when calling setPassword');
            }






            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: model,
                
                
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
        public setRestaurantSettings (restaurantId: number, settings: RestaurantSettings, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/api/core/admin/restaurants/{restaurantId}/settings'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling setRestaurantSettings');
            }



            // verify required parameter 'settings' is set
            if (!settings) {
                throw new Error('Missing required parameter settings when calling setRestaurantSettings');
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
         * @param value 
         */
        public updateRestaurant (restaurantId: number, value: Restaurant, extraHttpRequestParams?: any ) : ng.IHttpPromise<Restaurant> {
            const localVarPath = this.basePath + '/api/core/admin/restaurants/{restaurantId}'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling updateRestaurant');
            }



            // verify required parameter 'value' is set
            if (!value) {
                throw new Error('Missing required parameter value when calling updateRestaurant');
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

        /**
         * 
         * 
         * @param profile 
         */
        public updateUserProfile (profile: UserProfile, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/api/core/admin/account/profile';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'profile' is set
            if (!profile) {
                throw new Error('Missing required parameter profile when calling updateUserProfile');
            }






            let httpRequestParams: any = {
                method: 'PUT',
                url: localVarPath,
                json: true,
                data: profile,
                
                
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

