
namespace HostMe.Sdk {
    'use strict';

    export interface IEdmTerm {

        "termKind"?: IEdmTerm.TermKindEnum;

        "schemaElementKind"?: IEdmTerm.SchemaElementKindEnum;

        "namespace"?: string;

        "name"?: string;
    }

    export namespace IEdmTerm {

        export enum TermKindEnum { 
            None = <any> 'None',
            Type = <any> 'Type',
            Value = <any> 'Value'
        }

        export enum SchemaElementKindEnum { 
            None = <any> 'None',
            TypeDefinition = <any> 'TypeDefinition',
            Function = <any> 'Function',
            ValueTerm = <any> 'ValueTerm',
            EntityContainer = <any> 'EntityContainer'
        }
    }
}
