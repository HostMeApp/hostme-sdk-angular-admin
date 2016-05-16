import * as models from './models';
export interface TableAvailability {
    minCoversRequired?: number;
    reservable?: boolean;
    hours?: Array<models.WeekDayOpenHours>;
}
