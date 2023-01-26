import { carBrands, carModels } from '../constants/constants';

const getRandomColor = () => {
  return (
    '#' +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')
  );
};

const getRandomCarName = () => {
  const brand = carBrands[Math.floor(Math.random() * carBrands.length)];
  const model = carModels[Math.floor(Math.random() * carModels.length)];

  return `${brand} ${model}`;
};

export const getRandomCar = () => {
  const name = getRandomCarName();
  const color = getRandomColor();

  return { name, color };
};
