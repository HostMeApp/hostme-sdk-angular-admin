'use strict';
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

    tableStates?: Array<models.TableState>;

    tableTurnOver?: number;

    tableTurnOverByGroup?: Array<Array<number>>;

    totalCovers?: number;
}

export namespace ReservationSettings {

    export enum AvailabilityMethodEnum { 
        Cover = <any> 'Cover',
        Table = <any> 'Table',
        Default = <any> 'Default',
    }
}
