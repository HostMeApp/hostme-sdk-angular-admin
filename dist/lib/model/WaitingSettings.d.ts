import * as models from './models';
export interface WaitingSettings {
    acceptRemoteRegistration?: boolean;
    enableManualHold?: boolean;
    maximumHoldTime?: number;
    positionMessages?: Array<models.PositionMessage>;
    statusMessages?: Array<models.StatusMessage>;
}
