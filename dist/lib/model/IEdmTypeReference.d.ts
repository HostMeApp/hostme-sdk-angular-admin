import * as models from './models';
export interface IEdmTypeReference {
    isNullable?: boolean;
    definition?: models.IEdmType;
}
