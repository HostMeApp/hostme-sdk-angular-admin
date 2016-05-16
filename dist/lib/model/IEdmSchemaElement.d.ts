export interface IEdmSchemaElement {
    schemaElementKind?: IEdmSchemaElement.SchemaElementKindEnum;
    namespace?: string;
    name?: string;
}
export declare namespace IEdmSchemaElement {
    enum SchemaElementKindEnum {
        None,
        TypeDefinition,
        Function,
        ValueTerm,
        EntityContainer,
    }
}
