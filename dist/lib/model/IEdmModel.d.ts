import * as models from './models';
export interface IEdmModel {
    schemaElements?: Array<models.IEdmSchemaElement>;
    vocabularyAnnotations?: Array<models.IEdmVocabularyAnnotation>;
    referencedModels?: Array<models.IEdmModel>;
    directValueAnnotationsManager?: models.IEdmDirectValueAnnotationsManager;
}
