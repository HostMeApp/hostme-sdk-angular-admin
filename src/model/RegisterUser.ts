'use strict';
import * as models from './models';

export interface RegisterUser {

    email?: string;

    fullName?: string;

    phoneNumber?: string;

    password?: string;

    confirmPassword?: string;
}

