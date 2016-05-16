import * as models from './models';
export interface SingleValueNode {
    typeReference?: models.IEdmTypeReference;
    kind?: SingleValueNode.KindEnum;
}
export declare namespace SingleValueNode {
    enum KindEnum {
        None,
        Constant,
        Convert,
        NonentityRangeVariableReference,
        BinaryOperator,
        UnaryOperator,
        SingleValuePropertyAccess,
        CollectionPropertyAccess,
        SingleValueFunctionCall,
        Any,
        CollectionNavigationNode,
        SingleNavigationNode,
        SingleValueOpenPropertyAccess,
        SingleEntityCast,
        All,
        EntityCollectionCast,
        EntityRangeVariableReference,
        SingleEntityFunctionCall,
        CollectionFunctionCall,
        EntityCollectionFunctionCall,
        NamedFunctionParameter,
    }
}
