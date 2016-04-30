
namespace HostMe.Sdk {
    'use strict';

    export interface IEdmModel {

        "schemaElements"?: Array<IEdmSchemaElement>;

        "vocabularyAnnotations"?: Array<IEdmVocabularyAnnotation>;

        "referencedModels"?: Array<IEdmModel>;

        "directValueAnnotationsManager"?: IEdmDirectValueAnnotationsManager;
    }

}
