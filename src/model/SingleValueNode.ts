'use strict';
import * as models from './models';

export interface SingleValueNode {

    typeReference?: models.IEdmTypeReference;

    kind?: SingleValueNode.KindEnum;
}

export namespace SingleValueNode {

    export enum KindEnum { 
        None = <any> 'None',
        Constant = <any> 'Constant',
        Convert = <any> 'Convert',
        NonentityRangeVariableReference = <any> 'NonentityRangeVariableReference',
        BinaryOperator = <any> 'BinaryOperator',
        UnaryOperator = <any> 'UnaryOperator',
        SingleValuePropertyAccess = <any> 'SingleValuePropertyAccess',
        CollectionPropertyAccess = <any> 'CollectionPropertyAccess',
        SingleValueFunctionCall = <any> 'SingleValueFunctionCall',
        Any = <any> 'Any',
        CollectionNavigationNode = <any> 'CollectionNavigationNode',
        SingleNavigationNode = <any> 'SingleNavigationNode',
        SingleValueOpenPropertyAccess = <any> 'SingleValueOpenPropertyAccess',
        SingleEntityCast = <any> 'SingleEntityCast',
        All = <any> 'All',
        EntityCollectionCast = <any> 'EntityCollectionCast',
        EntityRangeVariableReference = <any> 'EntityRangeVariableReference',
        SingleEntityFunctionCall = <any> 'SingleEntityFunctionCall',
        CollectionFunctionCall = <any> 'CollectionFunctionCall',
        EntityCollectionFunctionCall = <any> 'EntityCollectionFunctionCall',
        NamedFunctionParameter = <any> 'NamedFunctionParameter',
    }
}
