export const footerLinks = {
  author: 'https://github.com/vadim-m',
  rss: 'https://rs.school/js/',
};

const API_URL = 'http://127.0.0.1:3000';

export const pathURL = {
  garage: `${API_URL}/garage`,
  engine: `${API_URL}/engine`,
  winners: `${API_URL}/winners`,
};

export const enum ItemsPerPage {
  garage = 7,
  winners = 10,
}

// import { getCars } from '../helpers/api';
// export const { cars, carsCount } = await getCars();
