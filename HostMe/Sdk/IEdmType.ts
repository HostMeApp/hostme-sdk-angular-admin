
namespace HostMe.Sdk {
    'use strict';

    export interface IEdmType {

        "typeKind"?: IEdmType.TypeKindEnum;
    }

    export namespace IEdmType {

        export enum TypeKindEnum { 
            None = <any> 'None',
            Primitive = <any> 'Primitive',
            Entity = <any> 'Entity',
            Complex = <any> 'Complex',
            Row = <any> 'Row',
            Collection = <any> 'Collection',
            EntityReference = <any> 'EntityReference',
            Enum = <any> 'Enum'
        }
    }
}
