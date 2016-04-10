
namespace HostMe.Sdk {
    'use strict';

    export interface WaitingItem {

        "id"?: number;

        "status"?: string;

        "created"?: Date;

        "closed"?: Date;

        "phoneId"?: string;

        "confirmationCode"?: number;

        "customerName"?: string;

        "groupSize"?: number;

        "phone"?: string;

        "registrationMethod"?: string;

        "deviceType"?: string;

        "notificationUrl"?: string;

        "areas"?: string;

        "expectedTime"?: Date;

        "position"?: number;

        "note"?: string;

        "tableNumber"?: string;

        "statusTime"?: Date;

        "restaurantId"?: number;

        "highChair"?: boolean;

        "stroller"?: boolean;

        "onHoldMode"?: string;

        "onHoldTime"?: Date;

        "onHoldEndTime"?: Date;

        "messages"?: Array<Message>;

        "membership"?: MembershipInfo;

        "reservation"?: ReservationInfo;

        "estimatedTurnOverTime"?: number;

        "unreadMessageCount"?: number;
    }

}
