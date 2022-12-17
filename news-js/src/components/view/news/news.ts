import './news.css';

interface INewsData {
    author: string | null;
    content: string;
    description: string;
    publishedAt: string;
    source: { id: string; name: string };
    title: string;
    url: string;
    urlToImage: string;
}

class News {
    draw(data: INewsData[]): void {
        const news: INewsData[] =
            data.length >= 10 ? data.filter((_item: INewsData, idx: number): boolean => idx < 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');

        if (!(newsItemTemp instanceof HTMLTemplateElement)) {
            throw new Error('Could not newsItemTemp element.');
        }

        news.forEach((item: INewsData, idx: number): void => {
            const newsClone: HTMLTemplateElement | null = <HTMLTemplateElement>newsItemTemp.content.cloneNode(true);

            if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');

            const newsCloneMetaPhoto: HTMLTemplateElement | null = newsClone.querySelector('.news__meta-photo');
            if (!newsCloneMetaPhoto) {
                throw new Error('Could not newsCloneMetaPhoto element.');
            }
            newsCloneMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;

            const newsCloneMetaAuthor: HTMLTemplateElement | null = newsClone.querySelector('.news__meta-author');
            if (!newsCloneMetaAuthor) {
                throw new Error('Could not newsCloneMetaAuthor element.');
            }
            newsCloneMetaAuthor.textContent = item.author || item.source.name;

            const newsCloneMetaDate: HTMLTemplateElement | null = newsClone.querySelector('.news__meta-date');
            if (!newsCloneMetaDate) {
                throw new Error('Could not newsCloneMetaDate element.');
            }
            newsCloneMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

            const newsCloneDescTitle: HTMLTemplateElement | null = newsClone.querySelector('.news__description-title');
            if (!newsCloneDescTitle) {
                throw new Error('Could not newsCloneDescTitle element.');
            }
            newsCloneDescTitle.textContent = item.title;

            const newsCloneDescSource: HTMLTemplateElement | null = newsClone.querySelector(
                '.news__description-source'
            );
            if (!newsCloneDescSource) {
                throw new Error('Could not newsCloneDescSource element.');
            }
            newsCloneDescSource.textContent = item.source.name;

            const newsCloneDescContent: HTMLTemplateElement | null = newsClone.querySelector(
                '.news__description-content'
            );
            if (!newsCloneDescContent) {
                throw new Error('Could not newsCloneDescContent element.');
            }
            newsCloneDescContent.textContent = item.description;

            const newsCloneLink: HTMLTemplateElement | null = newsClone.querySelector('.news__description-content');
            if (!newsCloneLink) {
                throw new Error('Could not newsnewsCloneLinkCloneDescContent element.');
            }
            newsCloneLink.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsEl: HTMLTemplateElement | null = document.querySelector('.news');
        if (!newsEl) {
            throw new Error('Could not newsEl element.');
        }
        newsEl.innerHTML = '';
        document.querySelector('.news')?.appendChild(fragment);
    }
}

export default News;
