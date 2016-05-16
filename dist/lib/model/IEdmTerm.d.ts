export interface IEdmTerm {
    termKind?: IEdmTerm.TermKindEnum;
    schemaElementKind?: IEdmTerm.SchemaElementKindEnum;
    namespace?: string;
    name?: string;
}
export declare namespace IEdmTerm {
    enum TermKindEnum {
        None,
        Type,
        Value,
    }
    enum SchemaElementKindEnum {
        None,
        TypeDefinition,
        Function,
        ValueTerm,
        EntityContainer,
    }
}
