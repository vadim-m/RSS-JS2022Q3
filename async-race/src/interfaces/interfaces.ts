export interface ICar {
  name: string;
  color: string;
  id: number;
}

export interface INewCar {
  name: string;
  color: string;
}

export interface IAnimationState {
  id?: number;
}

export interface IAnimationStore {
  [key: string]: IAnimationState;
}

export interface IDrivePromise {
  success: boolean;
  carId: number;
  time: number;
}

export interface IPromise {
  time: string;
  name?: string;
  color?: string;
  id?: number;
}
