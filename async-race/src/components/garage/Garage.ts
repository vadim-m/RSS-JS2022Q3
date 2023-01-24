import { createCar, deleteCar, getCars, updateCar } from '../../helpers/api';
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
    const createForm = this.container.querySelector('#create') as HTMLFormElement;
    const updateForm = this.container.querySelector('#update') as HTMLFormElement;
    const deleteCarBtns = this.container.querySelectorAll('.car__btn_delete');
    const customizeCarBtns = this.container.querySelectorAll('.car__btn_custom');

    createForm?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const input = createForm.input.value as string;
      const color = createForm.color.value as string;
      if (input && color) {
        const body = { name: input, color: color };
        await createCar(body);
        this.reRender();
      }
    });

    updateForm?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const id = updateForm.dataset.id;
      const input = updateForm.input.value as string;
      const color = updateForm.color.value as string;
      if (input && color && id) {
        const body = { name: input, color: color };
        await updateCar(+id, body);
        this.reRender();
      }
    });

    deleteCarBtns.forEach((el) => {
      el.addEventListener('click', async (e) => {
        e.preventDefault();
        const targetBtn = <HTMLButtonElement>e.target;
        const id = targetBtn.dataset.id;
        if (id) {
          await deleteCar(+id);
          this.reRender();
        }
      });
    });

    customizeCarBtns.forEach((el) => {
      el.addEventListener('click', async (e) => {
        e.preventDefault();
        const targetBtn = <HTMLButtonElement>e.target;
        targetBtn.style.color = '#7afeff';
        const id = targetBtn.dataset.id;

        createForm.input.disabled = true;
        createForm.color.disabled = true;
        createForm.btn.disabled = true;

        updateForm.dataset.id = id;
        updateForm.input.disabled = false;
        updateForm.color.disabled = false;
        updateForm.btn.disabled = false;
      });
    });

    // updateForm?.addEventListener('submit', (e) => {
    //   e.preventDefault();
    //   const form = <HTMLFormElement>e.target;
    //   console.log(form.name);

    //   this.reRender();
    // });
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
          <form class="garage__control" id="create">
            <input class="garage__input" type="text" name="input">
            <input class="garage__input" type="color" name="color" value="#2962e3">
            <button class=" garage__btn btn" name="btn" type="submit">Create</button>
          </form>
          <form class="garage__control" id="update">
            <input class="garage__input" type="text" name="input" disabled>
            <input class="garage__input" type="color" name="color" disabled>
            <button class="garage__btn btn" type="submit" name="btn" disabled>Customize</button>
          </form>
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
