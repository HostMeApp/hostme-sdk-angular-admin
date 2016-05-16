import * as models from './models';
export interface ReservationSettings {
    availabilityMethod?: ReservationSettings.AvailabilityMethodEnum;
    confirmationMessageRequestTemplate?: string;
    coversAvailableForWait?: number;
    coversAvaliableForReservation?: number;
    defaultMaxCoversPerSlot?: number;
    enableAutoScheduling?: boolean;
    isEnabled?: boolean;
    maxCoversPerSlotExceptions?: Array<models.SlotSetting>;
    maxMinutesLate?: number;
    maxPartySize?: number;
    miniutesToConfirm?: number;
    minPartySize?: number;
    minutesToNotifyManager?: number;
    requireReservationConfirmation?: boolean;
    reservationEmail?: string;
    reservationHours?: Array<models.WeekDayOpenHours>;
    reservationHoursStep?: number;
    statusMessages?: Array<models.StatusMessage>;
    tableTurnOver?: number;
    tableTurnOverByGroup?: Array<Array<number>>;
    totalCovers?: number;
}
export declare namespace ReservationSettings {
    enum AvailabilityMethodEnum {
        Cover,
        Table,
        Default,
    }
}
