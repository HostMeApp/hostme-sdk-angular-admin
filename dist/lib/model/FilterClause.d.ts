import * as models from './models';
export interface FilterClause {
    expression?: models.SingleValueNode;
    rangeVariable?: models.RangeVariable;
    itemType?: models.IEdmTypeReference;
}
