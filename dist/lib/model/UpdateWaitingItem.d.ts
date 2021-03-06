import * as models from './models';
export interface UpdateWaitingItem {
    customerName?: string;
    groupSize?: number;
    phone?: string;
    areas?: string;
    note?: string;
    tableNumber?: string;
    highChair?: boolean;
    stroller?: boolean;
    party?: boolean;
    customerProfile?: models.Profile;
}
