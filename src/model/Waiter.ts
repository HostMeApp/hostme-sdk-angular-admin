'use strict';
import * as models from './models';

export interface Waiter {

    id?: number;

    fullName?: string;

    phoneNumber?: string;

    email?: string;

    color?: string;

    tables?: Array<string>;

    workLoad?: number;

    image?: string;
}

