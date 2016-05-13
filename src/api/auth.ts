export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(httpRequestParams: any): void;
}

export class HttpBasicAuth implements Authentication {
    public username: string;
    public password: string;
    applyToRequest(httpRequestParams: any): void {
        httpRequestParams.auth = {
            username: this.username, password: this.password
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string;

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(httpRequestParams: any): void {
        if (this.location === 'query') {
            (<any>httpRequestParams.qs)[this.paramName] = this.apiKey;
        } else if (this.location === 'header') {
            httpRequestParams.headers[this.paramName] = this.apiKey;
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string;

    applyToRequest(httpRequestParams: any): void {
        httpRequestParams.headers['Authorization'] = 'Bearer ' + this.accessToken;
    }
}

export class VoidAuth implements Authentication {
    public username: string;
    public password: string;
    applyToRequest(httpRequestParams: any): void {
        // Do nothing
    }
}
