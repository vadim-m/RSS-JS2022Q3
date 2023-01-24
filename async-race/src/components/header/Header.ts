import Component from '../common/Component';

class Header extends Component {
  getElementTemplate() {
    const htmlTemplate = `
      <div class="header__container container">
        <button class="header__btn header__btn_active btn" type="button" id="toGarage" data-section="garage">
        </button>
        <button class="header__btn btn" type="button" id="toWinner" data-section="winners"></button>
      </div>
    `;

    return htmlTemplate;
  }

  addListeners() {
    const buttons = this.container.querySelectorAll('.header__btn');
    const sections = document.querySelectorAll('section');

    buttons.forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        buttons.forEach((btn) => (<HTMLButtonElement>btn).classList.remove('header__btn_active'));
        const button = <HTMLButtonElement>e.target;
        button.classList.toggle('header__btn_active');

        sections.forEach((section) => (<HTMLElement>section).classList.remove('active'));
        const targetSection = button.dataset.section;
        if (targetSection) {
          document.getElementById(targetSection)?.classList.add('active');
        }
      });
    });
  }

  render() {
    const htmlTemplate = this.getElementTemplate();
    this.container.innerHTML = htmlTemplate;

    return this.container;
  }
}

export default Header;
