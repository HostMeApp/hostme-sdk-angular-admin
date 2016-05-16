export interface IEdmType {
    typeKind?: IEdmType.TypeKindEnum;
}
export declare namespace IEdmType {
    enum TypeKindEnum {
        None,
        Primitive,
        Entity,
        Complex,
        Row,
        Collection,
        EntityReference,
        Enum,
    }
}
