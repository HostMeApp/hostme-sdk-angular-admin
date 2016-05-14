'use strict';
import * as models from './models';

export interface SelectExpandClause {

    selectedItems?: Array<models.SelectItem>;

    allSelected?: boolean;
}

