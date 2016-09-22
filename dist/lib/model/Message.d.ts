export interface Message {
    id?: number;
    body?: string;
    time?: string;
    origin?: string;
    isAutoMessage?: boolean;
    deliveryStatus?: string;
    deliveryTime?: string;
    deliveryFailureReason?: string;
    isRead?: boolean;
}
