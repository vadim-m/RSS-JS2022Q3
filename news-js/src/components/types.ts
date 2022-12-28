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

export interface ISourceData {
  id: string;
  name: string;
  description: string;
  category: string;
  language: string;
}

