
namespace HostMe.Sdk {
    'use strict';

    export interface OrderByClause {

        "thenBy"?: OrderByClause;

        "expression"?: SingleValueNode;

        "direction"?: OrderByClause.DirectionEnum;

        "rangeVariable"?: RangeVariable;

        "itemType"?: IEdmTypeReference;
    }

    export namespace OrderByClause {

        export enum DirectionEnum { 
            Ascending = <any> 'Ascending',
            Descending = <any> 'Descending'
        }
    }
}
