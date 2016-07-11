'use strict';
import * as models from './models';

export interface ZoneCreate {

    name?: string;

    tableNumbers?: Array<string>;

    days?: Array<number>;
}

