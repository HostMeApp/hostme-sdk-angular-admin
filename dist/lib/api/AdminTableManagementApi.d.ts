import * as models from '../model/models';
import * as auth from './auth';
export declare class AdminTableManagementApi {
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
    createNewFloor(restaurantId: number, floor: models.Floor, extraHttpRequestParams?: any): ng.IHttpPromise<models.Floor>;
    createOrUpdateTableConfiguration(restaurantId: number, tables: Array<models.Table>, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    deleteFloor(restaurantId: number, floorId: string, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    getAllTableCombinations(restaurantId: number, extraHttpRequestParams?: any): ng.IHttpPromise<Array<models.TableInfo>>;
    getApprovedTableCombinations(restaurantId: number, extraHttpRequestParams?: any): ng.IHttpPromise<Array<models.TableInfo>>;
    getAvailableTables(restaurantId: number, date: Date, partySize: number, areas?: string, extraHttpRequestParams?: any): ng.IHttpPromise<Array<models.TableInfo>>;
    getFloorDetails(restaurantId: number, floorId: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.Floor>;
    getRestaurantFloors(restaurantId: number, extraHttpRequestParams?: any): ng.IHttpPromise<Array<models.FloorInfo>>;
    getTableMonitors(restaurantId: number, tableTurnOver?: number, time?: Date, extraHttpRequestParams?: any): ng.IHttpPromise<Array<models.TableMonitor>>;
    getTableUsersList(restaurantId: number, partySize?: number, time?: Date, extraHttpRequestParams?: any): ng.IHttpPromise<Array<models.TableUser>>;
    getTables(restaurantId: number, extraHttpRequestParams?: any): ng.IHttpPromise<Array<models.Table>>;
    releaseTable(restaurantId: number, tableNumber: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.TableMonitor>;
    seatPartyAtTable(restaurantId: number, tableNumber: string, partySize: number, extraHttpRequestParams?: any): ng.IHttpPromise<models.TableMonitor>;
    setApprovedTableCombinations(restaurantId: number, combinations: Array<models.Table>, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    updateFloor(restaurantId: number, floorId: string, floor: models.Floor, extraHttpRequestParams?: any): ng.IHttpPromise<models.Floor>;
}
