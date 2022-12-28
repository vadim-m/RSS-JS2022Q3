import AppLoader from './appLoader';
import { callbackFn } from '../types'

class AppController extends AppLoader {
    getSources<INewsData>(callback: callbackFn<INewsData>) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews<ISourceData>(e: Event, callback: callbackFn<ISourceData>) {
        let target = <HTMLTemplateElement>e.target;
        const newsContainer = <HTMLTemplateElement>e.currentTarget;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id') as string;
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = <HTMLTemplateElement>target.parentNode;
        }
    }
}

export default AppController;
