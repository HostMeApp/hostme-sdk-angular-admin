'use strict';
import * as models from './models';

export interface ModelState {

    value?: models.ValueProviderResult;

    errors?: Array<models.ModelError>;
}

