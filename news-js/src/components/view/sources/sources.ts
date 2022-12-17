import './sources.css';

interface ISourceData {
    id: string;
    name: string;
    description: string;
    category: string;
    language: string;
}

class Sources {
    draw(data: ISourceData[]): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');
        if (!(sourceItemTemp instanceof HTMLTemplateElement)) {
            throw new Error('Could not sourceItemTemp element.');
        }

        data.forEach((item: ISourceData) => {
            const sourceClone: HTMLTemplateElement | null = <HTMLTemplateElement>sourceItemTemp.content.cloneNode(true);
            sourceClone.querySelector('.source__item')?.setAttribute('data-source-id', item.id);

            const sourceCloneItemName: HTMLTemplateElement | null = sourceClone.querySelector('.source__item-name');
            if (!sourceCloneItemName) {
                throw new Error('Could not sourceCloneItemName element.');
            }
            sourceCloneItemName.textContent = item.name;

            fragment.append(sourceClone);
        });

        document.querySelector('.sources')?.append(fragment);
    }
}

export default Sources;
