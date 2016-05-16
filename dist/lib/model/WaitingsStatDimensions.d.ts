import * as models from './models';
export interface WaitingsStatDimensions {
    time?: models.TimeDimension;
    groupSize?: number;
    topSize?: number;
    linePosition?: number;
    status?: string;
}
