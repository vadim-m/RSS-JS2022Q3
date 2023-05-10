import './news.css';
import { INewsData } from '../../types';

class News {
    draw(data: INewsData[]): void {
        const news: INewsData[] =
            data.length >= 10 ? data.filter((_item: INewsData, idx: number): boolean => idx < 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');

        if (newsItemTemp instanceof HTMLTemplateElement) {
            news.forEach((item: INewsData, idx: number): void => {
                const newsClone = <HTMLTemplateElement>newsItemTemp.content.cloneNode(true);

                if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');

                (<HTMLTemplateElement>newsClone.querySelector('.news__meta-photo')).style.backgroundImage = `url(${
                    item.urlToImage || 'img/news_placeholder.jpg'
                })`;

                (<HTMLTemplateElement>newsClone.querySelector('.news__meta-author')).textContent =
                    item.author || item.source.name;

                (<HTMLTemplateElement>newsClone.querySelector('.news__meta-date')).textContent = item.publishedAt
                    .slice(0, 10)
                    .split('-')
                    .reverse()
                    .join('-');

                (<HTMLTemplateElement>newsClone.querySelector('.news__description-title')).textContent = item.title;

                (<HTMLTemplateElement>newsClone.querySelector('.news__description-source')).textContent =
                    item.source.name;

                (<HTMLTemplateElement>newsClone.querySelector('.news__description-content')).textContent =
                    item.description;

                (<HTMLTemplateElement>newsClone.querySelector('.news__description-content')).setAttribute(
                    'href',
                    item.url
                );

                fragment.append(newsClone);
            });
        }

        const newsEl = <HTMLTemplateElement>document.querySelector('.news');
        newsEl.innerHTML = '';
        document.querySelector('.news')?.appendChild(fragment);
    }
}

export default News;
