import { IAnimationStore } from '../interfaces/interfaces';

export const RANDOM_CARS_COUNT = 100;
const API_URL = 'http://127.0.0.1:3000';

export const pathURL = {
  garage: `${API_URL}/garage`,
  engine: `${API_URL}/engine`,
  winners: `${API_URL}/winners`,
};

export const footerLinks = {
  author: 'https://github.com/vadim-m',
  rss: 'https://rs.school/js/',
};

export const enum ItemsPerPage {
  garage = 7,
  winners = 10,
}

export const currentAnimation: IAnimationStore = {};

export const carBrands = [
  'Peugeot',
  'Nissan',
  'BMW',
  'Audi',
  'Toyota',
  'Honda',
  'Cadillac',
  'Ford',
  'Infiniti',
  'Pontiac',
  'Hummer',
  'Subaru',
  'Lexus',
  'Mazda',
  'Acura',
  'Opel',
];

export const carModels = [
  '206',
  'Skyline',
  'Lancer',
  'TT',
  'Crown',
  'MX-5',
  'Escalade',
  'Mustang',
  'IX35',
  'GTP',
  'H2',
  'Impreza',
  'LS400',
  'Civic',
  'Integra',
  'Corsa',
];
