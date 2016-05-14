'use strict';
import * as models from './models';

export interface InvitationInfo {

    email?: string;

    role?: string;

    isRedeemed?: boolean;

    code?: string;

    fullName?: string;

    phoneNumber?: string;
}

