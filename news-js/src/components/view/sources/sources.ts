import './sources.css';
import { ISourceData } from '../../types';

class Sources {
    draw(data: ISourceData[]): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = <HTMLTemplateElement>(
            document.querySelector('#sourceItemTemp')
        );

        data.forEach((item: ISourceData) => {
            const sourceClone: HTMLTemplateElement | null = <HTMLTemplateElement>sourceItemTemp.content.cloneNode(true);
            sourceClone.querySelector('.source__item')?.setAttribute('data-source-id', item.id);
            (<HTMLTemplateElement>sourceClone.querySelector('.source__item-name')).textContent = item.name;

            fragment.append(sourceClone);
        });

        document.querySelector('.sources')?.append(fragment);
    }
}

export default Sources;
