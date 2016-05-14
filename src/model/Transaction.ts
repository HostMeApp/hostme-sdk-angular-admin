'use strict';
import * as models from './models';

export interface Transaction {

    id?: number;

    time?: Date;

    type?: string;

    points?: number;

    note?: string;

    units?: number;

    status?: string;

    statusReason?: string;
}

