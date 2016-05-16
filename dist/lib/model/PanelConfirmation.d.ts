import * as models from './models';
export interface PanelConfirmation {
    customerName?: string;
    phoneNumber?: string;
    confirmationMethod?: string;
    groupSize?: number;
    areas?: string;
    note?: string;
    highChair?: boolean;
    stroller?: boolean;
    party?: boolean;
    customerProfile?: models.Profile;
}
