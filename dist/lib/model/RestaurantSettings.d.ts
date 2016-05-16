import * as models from './models';
export interface RestaurantSettings {
    areas?: Array<string>;
    openingHours?: Array<models.WeekDayOpenHours>;
    tableSizes?: Array<number>;
}
