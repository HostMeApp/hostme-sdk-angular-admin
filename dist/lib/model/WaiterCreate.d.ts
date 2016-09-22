import * as models from './models';
export interface WaiterCreate {
    color?: string;
    fullName?: string;
    base64DataUrl?: string;
    invitation?: models.WaiterInvitation;
}
