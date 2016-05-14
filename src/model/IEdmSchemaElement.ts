'use strict';
import * as models from './models';

export interface IEdmSchemaElement {

    schemaElementKind?: IEdmSchemaElement.SchemaElementKindEnum;

    namespace?: string;

    name?: string;
}

export namespace IEdmSchemaElement {

    export enum SchemaElementKindEnum { 
        None = <any> 'None',
        TypeDefinition = <any> 'TypeDefinition',
        Function = <any> 'Function',
        ValueTerm = <any> 'ValueTerm',
        EntityContainer = <any> 'EntityContainer',
    }
}
