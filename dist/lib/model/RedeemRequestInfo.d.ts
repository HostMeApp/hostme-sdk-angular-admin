export interface RedeemRequestInfo {
    id?: string;
    status?: RedeemRequestInfo.StatusEnum;
    statusComment?: string;
    tableNumber?: string;
}
export declare namespace RedeemRequestInfo {
    enum StatusEnum {
        Submited,
        Approved,
        Rejected,
    }
}
