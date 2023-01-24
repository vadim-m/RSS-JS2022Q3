import Component from '../common/Component';
import Garage from '../garage/Garage';
import Winners from '../winners/Winners';

class Main extends Component {
  private garage: Garage;

  private winners: Winners;

  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.garage = new Garage('section', 'garage active', 'garage');
    this.winners = new Winners('section', 'winners', 'winners');
  }

  async getContentNode() {
    const container = document.createElement('div');
    container.className = 'content__container container';

    container.append(await this.garage.render());
    container.append(await this.winners.render());

    return container;
  }

  async addListeners() {
    await this.garage.addListeners();
  }

  async render() {
    this.container.append(await this.getContentNode());

    return this.container;
  }
}

export default Main;
