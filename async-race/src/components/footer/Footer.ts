import { footerLinks } from '../../constants/constants';
import Component from '../common/Component';

class Footer extends Component {
  getElementTemplate() {
    const htmlTemplate = `
      <div class="footer__container container">
        <span class="footer__info">© 2023</span>
        <a class="footer__link" href="${footerLinks.author}" target="_blank">@vadim-m</a>
        <a class="footer__link" href="${footerLinks.rss}" target="_blank">RS School</a>
      </div>
    `;

    return htmlTemplate;
  }

  render() {
    const htmlTemplate = this.getElementTemplate();
    this.container.innerHTML = htmlTemplate;

    return this.container;
  }
}

export default Footer;
