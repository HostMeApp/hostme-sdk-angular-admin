'use strict';
import * as models from './models';

export interface OrderByClause {

    thenBy?: models.OrderByClause;

    expression?: models.SingleValueNode;

    direction?: OrderByClause.DirectionEnum;

    rangeVariable?: models.RangeVariable;

    itemType?: models.IEdmTypeReference;
}

export namespace OrderByClause {

    export enum DirectionEnum { 
        Ascending = <any> 'Ascending',
        Descending = <any> 'Descending',
    }
}
