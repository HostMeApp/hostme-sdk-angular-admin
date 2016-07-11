import * as models from './models';
export interface RestaurantConfiguration {
    name?: string;
    timeZone?: string;
    address?: string;
    settings?: models.RestaurantSettings;
    waitingSettings?: models.WaitingSettings;
    loyaltySettings?: models.LoyaltySettings;
    reservationSettings?: models.ReservationSettings;
    tableStates?: Array<models.TableState>;
}
