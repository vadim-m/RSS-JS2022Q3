import { currentAnimation, RANDOM_CARS_COUNT } from '../../constants/constants';
import {
  createCar,
  deleteCar,
  deleteWinner,
  drive,
  getCars,
  saveWinner,
  startEngine,
  stopEngine,
  updateCar,
} from '../../helpers/api';
import { animateMovement, getDistanceBetweenElements } from '../../helpers/driving';
import { getRandomCar } from '../../helpers/utils';
import { ICar, IDrivePromise, IPromise } from '../../interfaces/interfaces';
import Car from '../car/Car';
import Component from '../common/Component';

class Garage extends Component {
  private cars: ICar[];

  private carsCount: string;

  private randomCarsCount: number;

  private curentPage: number;

  constructor(tagName: string, className: string, id: string) {
    super(tagName, className);
    this.container.id = id;
    this.cars = [];
    this.carsCount = '0';
    this.curentPage = 1;
    this.randomCarsCount = RANDOM_CARS_COUNT;
  }

  async getGarageData() {
    const response = await getCars(this.curentPage);
    this.cars = response.cars;
    this.carsCount = response.carsCount;
  }

  async addListeners() {
    const createForm = this.container.querySelector('#create') as HTMLFormElement;
    const updateForm = this.container.querySelector('#update') as HTMLFormElement;
    const raceBtn = this.container.querySelector('.garage__icon-race') as HTMLButtonElement;
    const resetBtn = this.container.querySelector('.garage__icon-reset') as HTMLButtonElement;
    const randomBtn = this.container.querySelector('.garage__icon-random') as HTMLButtonElement;
    const prevPageBtn = this.container.querySelector('.garage__page_prev') as HTMLButtonElement;
    const nextPageBtn = this.container.querySelector('.garage__page_next') as HTMLButtonElement;
    const deleteCarBtns = this.container.querySelectorAll('.car__btn_delete');
    const customizeCarBtns = this.container.querySelectorAll('.car__btn_custom');
    const startCarBtns = this.container.querySelectorAll('.car__btn_start');
    const stopCarBtns = this.container.querySelectorAll('.car__btn_stop');
    const resultText = this.container.querySelector('.garage__result') as HTMLSpanElement;

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
          await deleteWinner(+id);
          const updateWinnersInfo = document.querySelector('.winners__update') as HTMLButtonElement;
          const clickEvent = new Event('click');
          updateWinnersInfo.dispatchEvent(clickEvent);
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
        updateForm.input.value = 'nissan';
        updateForm.color.disabled = false;
        updateForm.btn.disabled = false;
      });
    });

    startCarBtns.forEach((el) => {
      el.addEventListener('click', async (e) => {
        e.preventDefault();
        const targetBtn = <HTMLButtonElement>e.target;
        const id = targetBtn.dataset.id;
        if (id) {
          this.startMoving(+id);
        }
      });
    });

    stopCarBtns.forEach((el) => {
      el.addEventListener('click', async (e) => {
        e.preventDefault();
        const targetBtn = <HTMLButtonElement>e.target;
        const id = targetBtn.dataset.id;
        if (id) {
          this.stopMoving(+id);
        }
      });
    });

    raceBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      raceBtn.disabled = true;
      randomBtn.disabled = true;
      let promiseArr: Promise<IDrivePromise>[] = [];
      promiseArr = this.cars.map((car) => this.startMoving(car.id));
      const ids = this.cars.map((car: ICar) => car.id);
      try {
        const winner = await this.raceAll(promiseArr, ids);
        if (winner.id && winner.time) {
          resultText.textContent = `Best Result: ${winner.name} - ${winner.time}s`;
          await saveWinner(winner.id, +winner.time);
        }
        const updateWinnersInfo = document.querySelector('.winners__update') as HTMLButtonElement;
        const clickEvent = new Event('click');
        updateWinnersInfo.dispatchEvent(clickEvent);
        resetBtn.disabled = false;
        randomBtn.disabled = false;
      } catch (err) {
        alert('All engines were broken.');
        resetBtn.disabled = false;
        randomBtn.disabled = false;
      }
    });

    resetBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      this.cars.map((car) => this.stopMoving(car.id));
      resetBtn.disabled = true;
      setTimeout(() => {
        resultText.textContent = '';
        raceBtn.disabled = false;
      }, 1200);
    });

    randomBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      randomBtn.disabled = true;
      const cars = await this.getRandomCars();
      for (const car of cars) {
        await createCar(car);
      }
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

  async getRandomCars() {
    return new Array(this.randomCarsCount).fill('_').map(() => getRandomCar());
  }

  async raceAll(promises: Promise<IDrivePromise>[], ids: number[]): Promise<IPromise> {
    const { success, carId, time } = await Promise.any(promises);

    if (!success) {
      const failIndex = ids.findIndex((i) => i === carId);
      const restPromises = [...promises.slice(0, failIndex), ...promises.slice(failIndex + 1, promises.length)];
      const restIds = [...ids.slice(0, failIndex), ...ids.slice(failIndex + 1, ids.length)];
      return this.raceAll(restPromises, restIds);
    }

    return { ...this.cars.find((car: ICar) => car.id === carId), time: (+time / 1000).toFixed(3) };
  }

  async startMoving(carId: number): Promise<IDrivePromise> {
    const startButton = document.getElementById(`btn-start-${carId}`) as HTMLButtonElement;
    const stopButton = document.getElementById(`btn-stop-${carId}`) as HTMLButtonElement;
    startButton.disabled = true;
    const { velocity, distance } = await startEngine(carId);
    stopButton.disabled = false;
    const time = Math.round(distance / velocity);

    const car = document.getElementById(`car-${carId}`) as HTMLElement;
    const finish = document.getElementById(`finish-${carId}`) as HTMLElement;
    const distanceBetweenPoints = Math.floor(getDistanceBetweenElements(car, finish)) - 38;
    currentAnimation[carId] = animateMovement(car, distanceBetweenPoints, time);

    const { success } = await drive(carId);
    if (!success) {
      window.cancelAnimationFrame(currentAnimation[carId].id as number);
    }

    return { success, carId, time };
  }

  async stopMoving(carId: number) {
    const stopButton = document.getElementById(`btn-stop-${carId}`) as HTMLButtonElement;
    stopButton.disabled = true;
    await stopEngine(carId);
    const startButton = document.getElementById(`btn-start-${carId}`) as HTMLButtonElement;
    startButton.disabled = false;

    const car = document.getElementById(`car-${carId}`) as HTMLElement;
    car.style.transform = 'translateX(0)';

    if (currentAnimation[carId]) {
      window.cancelAnimationFrame(currentAnimation[carId].id as number);
    }
  }

  getCarItems() {
    const carList = this.cars.map((el: ICar) => new Car(el.name, el.color, el.id).render()).join('');

    return carList;
  }

  isPrevPageBtnDisable() {
    return this.curentPage <= 1 ? 'disabled' : '';
  }

  isNextPageBtnDisable() {
    return this.curentPage * 7 >= +this.carsCount ? 'disabled' : '';
  }

  getElementTemplate() {
    const htmlTemplate = `
      <div class="garage__manipulation">
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
        <button class="garage__icon garage__icon-random btn"></button>
        <button class="garage__icon garage__icon-race btn"></button>
        <button class="garage__icon garage__icon-reset btn" disabled></button>
      </div>
      <h1 class="garage__title">Cars in garage (${this.carsCount}) <span class="garage__result"></span></h1>
      <ul class="garage__list">
         ${this.getCarItems()}
      </ul>
      <div class="garage__pages">
        <button class="garage__page garage__page_prev" type="button" ${this.isPrevPageBtnDisable()}></button>
        <span class="garage__current-page">Page #${this.curentPage}</span>
        <button class="garage__page garage__page_next" type="button" ${this.isNextPageBtnDisable()}></button>
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
