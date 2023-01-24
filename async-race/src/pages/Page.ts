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

  lister() {
    this.header.addListeners();
  }

  render() {
    document.body.append(this.header.render());
    document.body.append(this.main.render());
    document.body.append(this.footer.render());
  }
}

export default Page;
