import * as models from './models';
export interface OrderByClause {
    thenBy?: models.OrderByClause;
    expression?: models.SingleValueNode;
    direction?: OrderByClause.DirectionEnum;
    rangeVariable?: models.RangeVariable;
    itemType?: models.IEdmTypeReference;
}
export declare namespace OrderByClause {
    enum DirectionEnum {
        Ascending,
        Descending,
    }
}
