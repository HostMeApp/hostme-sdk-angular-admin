'use strict';
import * as models from './models';

export interface RangeVariable {

    name?: string;

    typeReference?: models.IEdmTypeReference;

    kind?: number;
}

