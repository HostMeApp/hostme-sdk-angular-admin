'use strict';
import * as models from './models';

export interface PositionMessage {

    minPos?: number;

    maxPos?: number;

    messageTemplate?: string;
}

