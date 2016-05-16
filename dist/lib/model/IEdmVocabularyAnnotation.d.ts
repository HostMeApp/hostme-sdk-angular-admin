import * as models from './models';
export interface IEdmVocabularyAnnotation {
    qualifier?: string;
    term?: models.IEdmTerm;
    target?: models.IEdmVocabularyAnnotatable;
}
