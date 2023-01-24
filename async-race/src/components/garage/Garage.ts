import { getCars } from '../../helpers/api';
import { ICar } from '../../interfaces/interfaces';
import Car from '../car/Car';
import Component from '../common/Component';

class Garage extends Component {
  private cars: ICar[];

  private carsCount: string;

  constructor(tagName: string, className: string, id: string) {
    super(tagName, className);
    this.container.id = id;
    this.cars = [];
    this.carsCount = '0';
  }

  async getGarageData() {
    const response = await getCars();
    this.cars = response.cars;
    this.carsCount = response.carsCount;
  }

  async addListeners() {
    const createBtn = this.container.querySelector('#create');
    createBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      this.reRender();
    });
  }

  getCarItems() {
    const carList = this.cars.map((el: ICar) => new Car(el.name, el.color, el.id).render()).join('');

    return carList;
  }

  getElementTemplate() {
    const htmlTemplate = `
      <div class="garage__manipulation">
        <div class="garage__manipulation-icon"></div>
        <div class="garage__manipulation-controls">
          <div class="garage__control">
            <input class="garage__input" type="text">
            <input class="garage__input" type="color" value="#2962e3">
            <button class=" garage__btn btn" type="button" id="create">Create</button>
          </div>
          <div class="garage__control">
            <input class="garage__input" type="text" disabled>
            <input class="garage__input" type="color" disabled>
            <button class="garage__btn btn" type="button" disabled id="update">Customize</button>
          </div>
        </div>
      </div>
      <h1 class="garage__title">Cars in garage (${this.carsCount})</h1>
      <ul class="garage__list">
         ${this.getCarItems()}
      </ul>
      <div class="garage__pages">
        <button class="garage__page garage__page_prev" type="button" disabled></button>
        <span class="garage__current-page">Page #1</span>
        <button class="garage__page garage__page_next" type="button"></button>
      </div>
    `;

    return htmlTemplate;
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

export default Garage;
