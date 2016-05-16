export interface WaitingReportItem {
    status?: string;
    created?: Date;
    groupSize?: number;
    startPosition?: number;
    timeToCall?: number;
    timeToSeat?: number;
    timeToCancel?: number;
}
