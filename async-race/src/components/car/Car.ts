import IconSVG from '../iconSVG/IconSVG';

class Car {
  private name: string;

  private color: string;

  private id: number;

  private icon: IconSVG;

  constructor(name: string, color: string, id: number) {
    this.name = name;
    this.color = color;
    this.id = id;
    this.icon = new IconSVG(this.color);
  }

  getElementTemplate() {
    const htmlTemplate = `
    <li class="garage__item">
      <div class="car" id="${this.id}">
        <div class="car__controls">
          <button class="car__btn car__btn_start btn" type="button" data-id=${this.id}></button>
          <button class="car__btn car__btn_stop btn" type="button" data-id=${this.id}></button>
          <span class="car__name">${this.name}</span>
          <button class="car__btn car__btn_custom btn" type="button" data-id=${this.id}>Customize</button>
          <button class="car__btn car__btn_delete btn" type="button" data-id=${this.id}>Delete</button>
        </div>
        <div class="car__race">
          <div class="car__ride">
            ${this.icon.getElementTemplate()}
          </div>
          <div class="car__track"></div>
        </div>
      </div>
    </li>
    `;

    return htmlTemplate;
  }

  render() {
    const htmlTemplate = this.getElementTemplate();

    return htmlTemplate;
  }
}

export default Car;
