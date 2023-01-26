import Component from '../common/Component';
import { getWinners } from '../../helpers/api';
import { IWinner } from '../../interfaces/interfaces';
import Winner from '../winner/Winner';

class Winners extends Component {
  private winners: IWinner[];

  private winnersCount: string;

  private curentPage: number;

  constructor(tagName: string, className: string, id: string) {
    super(tagName, className);
    this.container.id = id;
    this.winners = [];
    this.winnersCount = '0';
    this.curentPage = 1;
  }

  async getGarageData() {
    const response = await getWinners(this.curentPage);

    this.winners = response.items;
    this.winnersCount = response.count;
  }

  getWinnerRow() {
    const carList = this.winners
      .map((w: IWinner, ind: number) => new Winner(ind, w.wins, w.time, w.car?.color, w.car?.name, w.car?.id).render())
      .join('');

    return carList;
  }

  isPrevPageBtnDisable() {
    return this.curentPage <= 1 ? 'disabled' : '';
  }

  isNextPageBtnDisable() {
    return this.curentPage * 10 >= +this.winnersCount ? 'disabled' : '';
  }

  getElementTemplate() {
    const htmlTemplate = `
      <h1 class="winners__title">Winners (${this.winnersCount})</h1>
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
        <button class="winners__page winners__page_prev" type="button" ${this.isPrevPageBtnDisable()}></button>
        <span class="winners__current-page">Page #${this.curentPage}</span>
        <button class="winners__page winners__page_next" type="button" ${this.isNextPageBtnDisable()}></button>
      </div>
    `;

    return htmlTemplate;
  }

  async addListeners() {
    const updateInfoBtn = this.container.querySelector('.winners__update') as HTMLButtonElement;
    const prevPageBtn = this.container.querySelector('.winners__page_prev') as HTMLButtonElement;
    const nextPageBtn = this.container.querySelector('.winners__page_next') as HTMLButtonElement;
    updateInfoBtn.addEventListener('click', (e) => {
      e.preventDefault();
      this.reRender();
    });

    prevPageBtn.addEventListener('click', (e) => {
      e.preventDefault();
      this.curentPage--;
      this.reRender();
    });

    nextPageBtn.addEventListener('click', (e) => {
      e.preventDefault();
      this.curentPage++;
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
