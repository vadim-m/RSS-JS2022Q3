import Component from '../common/Component';

class Winners extends Component {
  constructor(tagName: string, className: string, id: string) {
    super(tagName, className);
    this.container.id = id;
  }

  getElementTemplate() {
    const htmlTemplate = `
      <h1 class="winners__title">Winners (4)</h1>
      <h2 class="winners__page">Page #1</h2>
    `;

    return htmlTemplate;
  }

  async render() {
    const htmlTemplate = this.getElementTemplate();
    this.container.innerHTML = htmlTemplate;

    return this.container;
  }
}

export default Winners;
