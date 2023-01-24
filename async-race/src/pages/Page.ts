import Header from '../components/header/Header';
import Main from '../components/main/Main';
import Footer from '../components/footer/Footer';

class Page {
  private header: Header;

  private main: Main;

  private footer: Footer;

  constructor() {
    this.header = new Header('header', 'header');
    this.main = new Main('main', 'content');
    this.footer = new Footer('footer', 'footer');
  }

  async listen() {
    await this.header.addListeners();
    await this.main.addListeners();
  }

  async render() {
    document.body.append(await this.header.render());
    document.body.append(await this.main.render());
    document.body.append(await this.footer.render());
  }
}

export default Page;
