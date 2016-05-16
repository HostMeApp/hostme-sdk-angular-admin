import * as models from './models';
export interface RestaurantConfiguration {
    settings?: models.RestaurantSettings;
    waitingSettings?: models.WaitingSettings;
    loyaltySettings?: models.LoyaltySettings;
    reservationSettings?: models.ReservationSettings;
}
