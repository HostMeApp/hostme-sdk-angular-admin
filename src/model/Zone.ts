'use strict';
import * as models from './models';

export interface Zone {

    id?: number;

    name?: string;

    tableNumbers?: Array<string>;

    days?: Array<number>;

    waiter?: models.Waiter;
}

