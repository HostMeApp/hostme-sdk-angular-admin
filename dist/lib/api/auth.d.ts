export interface Authentication {
    applyToRequest(httpRequestParams: any): void;
}
export declare class HttpBasicAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(httpRequestParams: any): void;
}
export declare class ApiKeyAuth implements Authentication {
    private location;
    private paramName;
    apiKey: string;
    constructor(location: string, paramName: string);
    applyToRequest(httpRequestParams: any): void;
}
export declare class OAuth implements Authentication {
    accessToken: string;
    applyToRequest(httpRequestParams: any): void;
}
export declare class VoidAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(httpRequestParams: any): void;
}
