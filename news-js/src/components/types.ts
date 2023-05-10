export interface INewsData {
    author: string | null;
    content: string;
    description: string;
    publishedAt: string;
    source: { id: string; name: string };
    title: string;
    url: string;
    urlToImage: string;
}

export interface INewsResp {
    status: string;
    articles: INewsData[];
}

export interface ISourceData {
    id: string;
    name: string;
    description: string;
    category: string;
    language: string;
}

export interface ISourceResp {
    status: string;
    sources: ISourceData[];
}

export type URLOptions = {
    [key: string]: string;
};

export type RespOptions = {
    [key: string]: string;
};

export type callbackFn<T> = (data: T) => void;

export interface IRespObj {
    endpoint: string;
    options?: RespOptions;
}

export interface IRespStatus {
    ok: string;
    status: number;
    statusText: string;
}

export const enum RespStatus {
    'unauthorized' = 401,
    'notFound' = 404,
}
