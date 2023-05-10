class IconSVG {
  private color: string;

  private id: number;

  private indexSVG: number;

  constructor(color: string, id: number) {
    this.color = color;
    this.id = id;
    this.indexSVG = this.setCarView();
  }

  setCarView() {
    if (this.id % 7 === 0) {
      return 3;
    } else if (this.id % 5 === 0) {
      return 2;
    } else if (this.id % 3 === 0) {
      return 1;
    } else {
      return 0;
    }
  }

  getElementTemplate() {
    if (this.indexSVG === 3) {
      return `<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 324 94" width="70" height="20">
                <path fill="${this.color}" d="m324 88.1c-0.5 3.4-4.3 5-23.9 5-3.9 0-8.3 0-13.6-0.2q1.4-1.2 2.6-2.6c0.7-0.8 1.4-1.6 2-2.6 2.6-4 4.2-8.7 4.2-13.8 0-14.1-11.5-25.6-25.6-25.6-14 0-25.5 11.5-25.5 25.6 0 4.6 1.4 8.9 3.5 12.6q0.8 1.4 1.8 2.7c0.7 0.9 1.4 1.9 2.2 2.7-56.5-1.3-139.3-1.7-168.7-1.8 1.2-0.8 2.3-1.7 3.3-2.6 0.8-0.8 1.6-1.7 2.4-2.7 3.5-4.3 5.7-9.8 5.7-15.9 0-14.1-11.4-25.5-25.5-25.5-14 0-25.5 11.4-25.5 25.5 0 2.7 0.6 5.3 1.4 7.8 0.3 0.9 0.5 1.7 0.9 2.5 0.3 0.9 0.8 1.7 1.3 2.4-6.6 1.8-16.2 4.2-20.8 4.2-1.6 0-15.3-0.2-21.3-7-1.8-2.1-2.7-4.7-2.7-7.4l-2.2-2.9v-19.1l3.8 3.1c0.5-0.8 2.8-5.1 2.8-23.4 0-2.2 0-3 13.9-4.4l-8.2-11-3.7-0.4c-2.9-0.3-6.3-2.3-7.5-4.6-1.3-2.2 0.1-3.7 3-3.4l24 2.5c2.9 0.3 6.2 2.4 7.5 4.6 1.2 2.2-0.1 3.7-3 3.4l-7.4-0.7 6.5 8.7c2.3-0.2 4.8-0.4 7.6-0.6 5.2-2.9 43.6-23.2 90.6-23.2 38.9 0 52.4 7.5 73 18.9 5.8 3.3 12.5 7 20.4 10.9 5.1 0.1 38.9 1.2 47.8 3.7l0.6 0.2 8.1 4.4c4.1 0.2 25.7 2 35.4 16.1 5.1 7.4 6 16.8 2.6 27.9 6.7 2.5 6.3 5 6.2 6z"/>
                <path fill="${this.color}" d="m50.9 77.8q-0.6-1.2-1-2.5c-0.7-2-1.2-4.2-1.2-6.4 0-11.2 9.1-20.2 20.2-20.2 11.2 0 20.2 9 20.2 20.2 0 6.5-3.1 12.2-7.9 15.9-1.3 1-2.7 2-4.3 2.6-2.3 1-4.7 1.5-7.3 1.6-0.2 0-0.4 0.1-0.7 0.1-6.9 0-13.1-3.5-16.7-8.9-0.5-0.8-0.9-1.6-1.3-2.4z"/>
                <path fill="${this.color}" d="m261.2 92.1c-1.5-0.7-2.9-1.6-4.2-2.7q-1.5-1.3-2.8-2.7c-2.8-3.5-4.7-8-4.7-12.8 0-11.2 9.1-20.3 20.3-20.3 11.1 0 20.2 9.1 20.2 20.3 0 5.2-2.1 10-5.5 13.6q-1.3 1.4-2.8 2.6-2.1 1.5-4.4 2.5c-2.4 0.9-4.9 1.5-7.5 1.5-3.1 0-6-0.8-8.6-2z"/>
              </svg>
      `;
    }
    if (this.indexSVG === 2) {
      return `<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 696 236" width="70" height="24">
                <path fill="${this.color}"
                  d="m683.3 193.3q-0.1 0-0.2 0h-37.1c-7.3 24.7-30.1 42.7-57.1 42.7-27.1 0-49.9-18-57.1-42.7h-349.1c-7.2 24.7-30.1 42.7-57.1 42.7-27 0-49.8-18-57.1-42.7h-39.5c-10.2 0-18.6-7.9-19.2-18l-2.5-37.2q0-0.9 0-1.8 0-1 0.1-1.9 0.2-0.9 0.4-1.8 0.2-0.9 0.5-1.8l9.6-29.2-5-27.2c-1.1-5.9 2.6-11.7 8.4-13.3l14.1-3.7-6.5-24.5-5.5-0.8c-14.8-2-25.1-15.6-23.1-30.3q0.1-0.4 0.3-0.8 0.2-0.3 0.5-0.6 0.4-0.2 0.8-0.3 0.4-0.1 0.8-0.1l36.2 5c14.7 2 25 15.6 23 30.3q-0.1 0.4-0.3 0.8-0.2 0.3-0.5 0.6-0.3 0.2-0.7 0.4-0.4 0.1-0.8 0l-14.4-2 5 18.4c28.4-7.2 57.2-13.4 86.1-18.4 29-5 58.1-8.9 87.4-11.6 29.2-2.8 58.5-4.3 87.9-4.8 29.4-0.4 58.8 0.3 88.1 2.2q2.5 0.1 5 0.4 2.4 0.3 4.9 0.7 2.5 0.4 4.9 1 2.4 0.5 4.8 1.1 2.4 0.7 4.8 1.5 2.4 0.7 4.7 1.6 2.3 0.9 4.6 1.9 2.3 1 4.5 2.1l90.2 45.4q3 1.5 6.2 2.8 3.1 1.4 6.3 2.5 3.2 1 6.5 1.9 3.2 0.9 6.6 1.6l83.1 16.1q4.9 1 9.5 2.9 4.6 1.8 8.8 4.5 4.2 2.7 7.9 6.1 3.6 3.4 6.5 7.4l13.7 18.9c1.9 0.8 3.6 1.8 5.2 3 1.6 1.2 2.9 2.7 4 4.4 1.2 1.6 2 3.4 2.6 5.3 0.6 1.9 0.9 3.9 0.9 5.9v14.5c0 2-0.3 4-0.9 5.9-0.5 1.9-1.4 3.8-2.5 5.4-1.1 1.7-2.5 3.2-4 4.5-1.6 1.2-3.3 2.3-5.2 3.1zm-624.5-72.5l-3.8-9.9q-0.2-0.4-0.4-0.8-0.3-0.4-0.6-0.7-0.4-0.4-0.8-0.6-0.4-0.2-0.8-0.4l-16.8-5.8q-0.9-0.3-1.8-0.2-0.9 0.1-1.7 0.5-0.8 0.5-1.4 1.2-0.5 0.7-0.7 1.6l-3.9 15c-0.6 2.7 1.4 5.3 4.1 5.4l24.5 0.7c3.1 0 5.3-3.1 4.1-6zm32.1 55.7q0 2.2 0.3 4.4 0.3 2.2 0.9 4.3 0.5 2.1 1.3 4.2 0.8 2 1.9 3.9c5.9 10.7 17.3 17.9 30.3 17.9 13 0 24.4-7.2 30.3-17.9q1.1-1.9 1.9-3.9 0.8-2.1 1.4-4.2 0.5-2.1 0.8-4.3 0.3-2.2 0.3-4.4c0-19.1-15.6-34.7-34.7-34.7-19.1 0-34.7 15.6-34.7 34.7zm112.9-132.8l-37.4 5.4q-3.4 0.5-6.7 1.6-3.3 1.1-6.3 2.8-3 1.8-5.6 4-2.7 2.3-4.8 5c-1.7 2.1-0.1 5.2 2.6 5l32.6-2.1q4-0.2 7.9-1.4 3.8-1.1 7.3-3 3.5-1.9 6.5-4.6 3.1-2.6 5.4-5.8l1.5-2c1.6-2.2-0.3-5.2-3-4.9zm17.7 73.7l11.5 30.6q1.4 3.7 3.6 7.1 2.2 3.3 5 6.1 2.9 2.8 6.3 4.9 3.4 2.2 7.2 3.5l2.3 0.8c2.6 0.9 4.9-1.8 3.8-4.3l-16.1-34.2q-1.4-3.1-3.5-6-2-2.8-4.5-5.1-2.6-2.4-5.5-4.2-2.9-1.9-6.1-3.2c-2.5-1-5 1.5-4 4zm295.6-18.6h-0.1l-90.2-45.4q-3.4-1.7-6.9-3-3.5-1.3-7.1-2.3-3.6-1-7.3-1.6-3.7-0.6-7.4-0.8-8.7-0.6-17.4-1-8.8-0.4-17.5-0.7-8.7-0.3-17.5-0.4-8.7-0.2-17.5-0.2-28 0-56.1 1.5-2.7 0.1-5.3 0.7-2.7 0.6-5.2 1.6-2.5 1-4.9 2.4-2.3 1.4-4.3 3.2c-15.6 13.5-31.3 29.6-29.8 38.9 2.9 17.2 266.6 19.7 285 19.8q0.2 0 0.5 0 0.2 0 0.5-0.1 0.2 0 0.5-0.1 0.2 0 0.4-0.1l7.2-2.9c4.1-1.6 4.4-7.4 0.4-9.5zm71.8 43c-19.1 0-34.7 15.6-34.7 34.7q0 2.2 0.3 4.4 0.3 2.2 0.8 4.3 0.6 2.1 1.4 4.2 0.8 2 1.9 3.9c5.9 10.7 17.2 17.9 30.3 17.9 13 0 24.4-7.2 30.3-17.9q1.1-1.9 1.9-3.9 0.8-2.1 1.3-4.2 0.6-2.1 0.9-4.3 0.2-2.2 0.2-4.4c0-19.1-15.5-34.7-34.6-34.7zm74.1-2.4l-14.2-17.8q-0.1-0.1-0.2-0.2-0.2-0.1-0.3-0.2-0.1 0-0.3-0.1-0.1 0-0.3-0.1l-31.5-5.3c-1.7-0.3-2.6 1.9-1.2 2.9l22.6 17.2q0.1 0.1 0.1 0.1 0.1 0.1 0.2 0.1 0 0 0.1 0.1 0.1 0 0.2 0l23.1 6c1.6 0.4 2.7-1.4 1.7-2.7z" />
                  <path fill="${this.color}" d="m588.9 163.4c7.2 0 13 5.9 13 13.1 0 7.2-5.8 13.1-13 13.1-7.3 0-13.1-5.9-13.1-13.1 0-7.2 5.8-13.1 13.1-13.1zm-463.3 0c7.3 0 13.1 5.9 13.1 13.1 0 7.2-5.8 13.1-13.1 13.1-7.2 0-13.1-5.9-13.1-13.1 0-7.2 5.9-13.1 13.1-13.1z" />
              </svg>`;
    }
    if (this.indexSVG === 1) {
      return `<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492 133" width="70" height="19">
                <path fill="${this.color}" d="m0.6 58.9c0.3-8.5 7.9-20.5 10.4-24.2-1.7-2.7-2.6-4.8-1.7-6.5 1-1.8 3.1-1.8 3.9-1.8 1.3 0 2.9 0.3 4.9 0.5 4.5 0.7 11.1 1.4 16.5 0.3 11.1-2 26.3-3.2 41.7-3.2 4 0 7.7 0.1 11.1 0.3 12.6 0.5 35.1-5.6 64.1-13.4l10.8-2.9c14.5-3.9 25.6-5.9 33.1-5.9 4 0 6.2 0.6 7.4 1.2q1.3-0.4 2.5-0.4c4 0 5.9 3.4 6.6 6.3 2.2-0.1 3.7 1.1 4.6 2.3 3.4-0.3 5 2 5.1 2.3l0.3 0.4v19.8c7 1.8 44.8 4 73.5 5.4q-1.3-1.3-2.1-2.8c-1.6-3.2-1.2-6.5-0.7-8.5l-31.7-13.9-0.2-0.9c-0.1-0.2-1.2-5.1 1.7-8.8 2-2.5 5.3-3.8 9.9-3.8q1.9 0 4.3 0.3c16.4 2.4 81.9 33 88 35.9 77.6 3 126 43.2 126.4 43.6l0.7 0.6v22.2l-0.4 0.5c-9.5 12.3-45.1 17.8-77.9 19.1 0.5-0.7 1-1.4 1.5-2.1 0.5-0.6 0.8-1.3 1.2-2 4.1-6.7 6.4-14.5 6.4-22.8 0-24.5-19.9-44.4-44.4-44.4-24.4 0-44.4 19.9-44.4 44.4 0 6.6 1.5 12.9 4.2 18.6q0.4 1 0.9 2 0.6 1 1.2 2c-33.5-1.6-100-1.9-160.4-2.1-21.6-0.1-42.9-0.2-62-0.3 0.3-0.6 0.6-1.3 0.9-2 0.3-0.6 0.7-1.2 0.9-1.9 2.5-5.7 3.9-12 3.9-18.5 0-26-21.2-47.1-47.1-47.1-26 0-47.2 21.1-47.2 47.1 0 5 0.9 9.8 2.3 14.4q0.4 1.2 0.9 2.4 0.4 1.1 0.9 2.3c-10.1-2.4-18-6.7-23.5-13-11.2-12.8-9.8-30-9.2-38.3 0.1-1 0.2-2 0.2-2.7z"/>
                <path fill="${this.color}" d="m378.2 132.5c-11.4 0-21.4-5.2-28.1-13.3-0.5-0.7-1.2-1.4-1.7-2.1-0.5-0.7-0.9-1.3-1.3-2-3.4-5.6-5.5-12.1-5.5-19.1 0-20.2 16.4-36.6 36.6-36.6 20.2 0 36.5 16.4 36.5 36.6 0 8.9-3.3 16.9-8.5 23.2-0.6 0.6-1 1.4-1.6 2-0.7 0.7-1.5 1.3-2.2 2-6.5 5.7-14.9 9.3-24.2 9.3z"/>
                <path fill="${this.color}" d="m109.5 114.2c-0.4 0.7-0.7 1.3-1.1 2-7.1 10.1-18.9 16.8-32.2 16.8-14.1 0-26.3-7.4-33.3-18.5-0.4-0.7-0.7-1.5-1.1-2.2-0.4-0.7-0.9-1.4-1.2-2.2-2.3-5-3.7-10.5-3.7-16.3 0-21.7 17.6-39.3 39.3-39.3 21.6 0 39.2 17.6 39.2 39.3 0 6.7-1.8 12.9-4.8 18.4-0.3 0.7-0.7 1.4-1.1 2z"/>
              </svg>
      `;
    }
    if (this.indexSVG === 0) {
      return `<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 331 105" width="70" height="22">
                <path fill="${this.color}" d="m324.3 91.9c-6.6 1.8-15.2 2.2-15.2 2.2h-2.3c2-3.9 3.1-8.3 3.1-13.1 0-15.9-13-28.9-29-28.9-16 0-29 13-29 28.9 0 4.7 1.2 9.2 3.2 13.1l-156-1.2c1.6-3.6 2.5-7.6 2.5-11.9 0-15.9-13-28.9-29-28.9-15.9 0-29 13-29 28.9 0 3.4 0.6 6.5 1.7 9.5-14.5-2.1-34.7-5.3-39.4-7.1-7.7-3-5.7-27.2-5.7-27.2 0 0 6.3-1.5 6.3-7.6 0-6.2 0-16.6 0-16.6 0 0 5.7 0 2.5-3.1-3.1-3.2 5.2-2.9 5.2-2.9 0 0 17.4 5.2 27.8-1.8 10.4-6.9 49.5-19.5 49.5-19.5v-4.1c6.8-1.4 13.3 1.1 13.3 1.1 27-2.5 52.5 0 67.6 1.1 15.1 1.2 51.2 23.1 56.3 26.2 5.2 3.2 14.5 4.2 34 4.2 19.4 0 26.7 5.9 26.7 5.9 39.8 9.1 35.3 18.8 38.2 23.2 2.9 4.4 3.3 25.7 3.3 25.7-8.1 0.6-6.6 3.9-6.6 3.9z"/>
                <path fill="${this.color}" d="m280.9 57.4c13.1 0 23.7 10.6 23.7 23.6 0 4.9-1.4 9.4-3.9 13.1-4.3 6.4-11.5 10.6-19.8 10.6-8.2 0-15.5-4.2-19.7-10.6-2.5-3.7-4-8.2-4-13 0-13.1 10.7-23.7 23.7-23.7z"/>
                <path fill="${this.color}" d="m72.7 57.4c13 0 23.7 10.6 23.7 23.6 0 4.4-1.3 8.4-3.3 11.9-4.1 7-11.7 11.8-20.4 11.8-9.4 0-17.4-5.5-21.3-13.3-1.5-3.2-2.4-6.6-2.4-10.4 0-13 10.6-23.6 23.7-23.6z"/>
              </svg>
      `;
    }
  }
}

export default IconSVG;