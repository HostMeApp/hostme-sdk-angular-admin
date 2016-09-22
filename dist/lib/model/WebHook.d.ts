export interface WebHook {
    id?: string;
    webHookUri?: string;
    secret?: string;
    description?: string;
    isPaused?: boolean;
    filters?: Array<string>;
    headers?: {
        [key: string]: string;
    };
    properties?: {
        [key: string]: any;
    };
}
