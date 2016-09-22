'use strict';
import * as models from './models';

export interface ValueProviderResult {

    attemptedValue?: string;

    culture?: string;

    rawValue?: any;
}

