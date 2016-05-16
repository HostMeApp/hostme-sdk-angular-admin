import * as models from '../model/models';
import * as auth from './auth';
export declare class AdminLoyaltyApi {
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
    addMember(restaurantId: number, contract: models.MembershipCreate, extraHttpRequestParams?: any): ng.IHttpPromise<models.Object>;
    addNewReward(restaurantId: number, reward: models.Reward, extraHttpRequestParams?: any): ng.IHttpPromise<models.Reward>;
    approveRedeemRequest(restaurantId: number, redeemId: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.RedeemRequest>;
    closeMembership(restaurantId: number, memberId: number, extraHttpRequestParams?: any): ng.IHttpPromise<models.Member>;
    deleteReward(restaurantId: number, rewardId: string, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    filter(restaurantId: number, take: number, token: string, extraHttpRequestParams?: any): ng.IHttpPromise<Array<models.CustomerProfile>>;
    findMemberByPhoneNumber(restaurantId: number, phoneNumber: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.Member>;
    getAlRewards(restaurantId: number, extraHttpRequestParams?: any): ng.IHttpPromise<Array<models.Reward>>;
    getAllMembers(restaurantId: number, extraHttpRequestParams?: any): ng.IHttpPromise<models.ODataPagedResult1MemberContract>;
    getAllRedeemRequests(restaurantId: number, extraHttpRequestParams?: any): ng.IHttpPromise<Array<models.RedeemRequest>>;
    getDefaultLoyaltySettings(restaurantId: number, extraHttpRequestParams?: any): ng.IHttpPromise<models.LoyaltySettings>;
    getLoyaltySettings(restaurantId: number, extraHttpRequestParams?: any): ng.IHttpPromise<models.LoyaltySettings>;
    getMemberAvatar(restaurantId: number, memberId: number, extraHttpRequestParams?: any): ng.IHttpPromise<string>;
    getMemberTransactions(restaurantId: number, memberId: number, extraHttpRequestParams?: any): ng.IHttpPromise<models.ODataPagedResult1TransactionContract>;
    getMemberVisits(restaurantId: number, memberId: number, extraHttpRequestParams?: any): ng.IHttpPromise<models.ODataPagedResult1MembershipVisitItemContract>;
    getMembershipInfo(restaurantId: number, memberId: number, extraHttpRequestParams?: any): ng.IHttpPromise<models.Member>;
    getRewardById(restaurantId: number, rewardId: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.Reward>;
    publishReward(restaurantId: number, rewardId: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.Reward>;
    rejectRedeemRequest(restaurantId: number, redeemId: string, reject: models.RedeemRequestReject, extraHttpRequestParams?: any): ng.IHttpPromise<models.RedeemRequest>;
    setLoyaltySettings(restaurantId: number, settings: models.LoyaltySettings, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    unpublishReward(restaurantId: number, rewardId: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.Reward>;
    updateMember(restaurantId: number, memberId: number, contract: models.MembershipUpdate, extraHttpRequestParams?: any): ng.IHttpPromise<models.Object>;
    updateReward(restaurantId: number, rewardId: string, reward: models.Reward, extraHttpRequestParams?: any): ng.IHttpPromise<models.Reward>;
}
