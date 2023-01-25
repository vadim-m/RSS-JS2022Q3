import Component from '../common/Component';

class Winners extends Component {
  constructor(tagName: string, className: string, id: string) {
    super(tagName, className);
    this.container.id = id;
  }

  getElementTemplate() {
    const htmlTemplate = `
      <p>Друзья, на прошлой неделе сильно заболел, не мог нормально кодить. Если не сложно, пожалуйста проверьте работу после 24 января. Буду признателен, спасибо. Мой дискорд @Vadim_M#0673.
      
      <b>UPD 25.01.23 04:09:25</b> - Блин, не могу никак разобраться как реализовать гонку на все тачки, из-за это завис другой функционал. Если есть возможность проверьте после 25). Буду очень благодарен!\
      </p>
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
