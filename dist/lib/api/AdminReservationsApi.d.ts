import * as models from '../model/models';
import * as auth from './auth';
export declare class AdminReservationsApi {
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
    addNewReservation(restaurantId: number, value: models.CreateReservation, extraHttpRequestParams?: any): ng.IHttpPromise<models.Reservation>;
    cancelReservation(restaurantId: number, reservationId: string, cancelReservationContract: models.CancelReservation, extraHttpRequestParams?: any): ng.IHttpPromise<models.Reservation>;
    closeAsNoShow(restaurantId: number, reservationId: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.Reservation>;
    closeAsSeated(restaurantId: number, reservationId: string, tableNumber?: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.Reservation>;
    getMessages(restaurantId: number, reservationId: string, extraHttpRequestParams?: any): ng.IHttpPromise<Array<models.Message>>;
    getReservationAvailability(restaurantId: number, date: Date, partySize: number, rangeInMinutes: number, tableTurnOver?: number, type?: string, areas?: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.AvailabilityResponse>;
    getReservationById(restaurantId: number, reservationId: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.Reservation>;
    getReservationSettings(restaurantId: number, extraHttpRequestParams?: any): ng.IHttpPromise<models.ReservationSettings>;
    getReservationsForPeriod(restaurantId: number, from?: Date, to?: Date, extraHttpRequestParams?: any): ng.IHttpPromise<Array<models.Reservation>>;
    getRestaurantReservationsStatistic(restaurantId: number, date?: Date, extraHttpRequestParams?: any): ng.IHttpPromise<models.ReservationsStatistic>;
    getUnreadMessagesCount(restaurantId: number, from?: Date, extraHttpRequestParams?: any): ng.IHttpPromise<models.Count>;
    placeOnWaitList(restaurantId: number, reservationId: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.WaitingItem>;
    reOpenReservation(restaurantId: number, reservationId: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.Reservation>;
    readAllMessage(restaurantId: number, reservationId: string, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    sendGrid(from: string, html: string, text: string, to: string, subject: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.Reservation>;
    sendMessage(restaurantId: number, reservationId: string, createMessageContract: models.CreateMessage, extraHttpRequestParams?: any): ng.IHttpPromise<models.Message>;
    setReservationSettings(restaurantId: number, settings: models.ReservationSettings, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    submitYelpReservation(extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    updateReservation(restaurantId: number, reservationId: string, value: models.CreateReservation, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
}
