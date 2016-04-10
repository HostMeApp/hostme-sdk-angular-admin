
namespace HostMe.Sdk {
    'use strict';

    export interface ReservationSettings {

        "availabilityMethod"?: ReservationSettings.AvailabilityMethodEnum;

        "confirmationMessageRequestTemplate"?: string;

        "coversAvailableForWait"?: number;

        "coversAvaliableForReservation"?: number;

        "defaultMaxCoversPerSlot"?: number;

        "enableAutoScheduling"?: boolean;

        "isEnabled"?: boolean;

        "maxCoversPerSlotExceptions"?: Array<SlotSetting>;

        "maxMinutesLate"?: number;

        "maxPartySize"?: number;

        "miniutesToConfirm"?: number;

        "minPartySize"?: number;

        "minutesToNotifyManager"?: number;

        "requireReservationConfirmation"?: boolean;

        "reservationEmail"?: string;

        "reservationHours"?: Array<WeekDayOpenHours>;

        "reservationHoursStep"?: number;

        "reservationInboxEmail"?: string;

        "statusMessages"?: Array<StatusMessage>;

        "tableTurnOver"?: number;

        "tableTurnOverByGroup"?: Array<number>;

        "totalCovers"?: number;
    }

    export namespace ReservationSettings {

        export enum AvailabilityMethodEnum { 
            Cover = <any> 'Cover',
            Table = <any> 'Table',
            Default = <any> 'Default'
        }
    }
}
