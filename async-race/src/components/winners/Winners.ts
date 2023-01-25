import Component from '../common/Component';
import { getWinners } from '../../helpers/api';
import { IWinner } from '../../interfaces/interfaces';
import Winner from '../winner/Winner';

class Winners extends Component {
  private winners: IWinner[];

  private winnerCount: string;

  constructor(tagName: string, className: string, id: string) {
    super(tagName, className);
    this.container.id = id;
    this.winners = [];
    this.winnerCount = '0';
  }

  async getGarageData() {
    const response = await getWinners();

    this.winners = response.items;
    this.winnerCount = response.count;
  }

  getWinnerRow() {
    const carList = this.winners
      .map((el: IWinner, indx: number) => new Winner(indx, el.wins, el.time, el.car?.color, el.car?.name).render())
      .join('');

    return carList;
  }

  getElementTemplate() {
    const htmlTemplate = `
      <h1 class="winners__title">Winners (${this.winnerCount})</h1>
      <div class="winners__content"">
        <table class="winners__table">
          <tr class="winners__table-header">
            <th>#</th>
            <th>Car</th>
            <th>Name</th>
            <th>Wins</th>
            <th>Best time</th>
          </tr>
          ${this.getWinnerRow()}
        </table>
      </div>
      <button class="winners__update btn"></button>
      <div class="winners__pages">
        <button class="winners__page winners__page_prev" type="button" disabled></button>
        <span class="winners__current-page">Page #1</span>
        <button class="winners__page winners__page_next" type="button"></button>
      </div>
    `;

    return htmlTemplate;
  }

  async addListeners() {
    const updateInfoBtn = this.container.querySelector('.winners__update') as HTMLButtonElement;
    updateInfoBtn.addEventListener('click', (e) => {
      e.preventDefault();
      this.reRender();
    });
  }

  async render() {
    await this.getGarageData();
    const htmlTemplate = this.getElementTemplate();
    this.container.innerHTML = htmlTemplate;

    return this.container;
  }

  async reRender() {
    await this.getGarageData();
    const htmlTemplate = this.getElementTemplate();
    this.container.innerHTML = htmlTemplate;
    this.addListeners();
  }
}

export default Winners;
