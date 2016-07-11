'use strict';
import * as models from './models';

export interface WaiterCreate {

    color?: string;

    fullName?: string;

    invitation?: models.WaiterInvitation;
}

