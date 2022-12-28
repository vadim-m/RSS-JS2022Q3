import { URLOptions,IRespObj, callbackFn, RespStatus } from '../types'

class Loader {
    private baseLink: string;
    private options: URLOptions;

   constructor(baseLink: string, options: URLOptions) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp<T>(
        { endpoint, options = {} }: IRespObj,
        callback: callbackFn<T>  = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === RespStatus.unauthorized || res.status === RespStatus.notFound)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: URLOptions, endpoint: string) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load<T>(method: string, endpoint: string, callback: callbackFn<T>, options: URLOptions = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res: Response) => res.json())
            .then((data: T) => callback(data))
            .catch((err: Error) => console.error(err));
    }
}

export default Loader;
