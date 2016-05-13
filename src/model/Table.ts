'use strict';
import * as models from './models';

export interface Table {

    tableNumber?: string;

    tableTopSize?: number;

    area?: string;

    tags?: Array<string>;

    reservability?: models.TableAvailability;

    waitability?: models.TableAvailability;
}

