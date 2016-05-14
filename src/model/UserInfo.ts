'use strict';
import * as models from './models';

export interface UserInfo {

    id?: string;

    userName?: string;

    email?: string;

    fullName?: string;

    phoneNumber?: string;

    roles?: Array<models.RoleInfo>;
}

