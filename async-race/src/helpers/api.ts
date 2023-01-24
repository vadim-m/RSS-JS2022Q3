import { pathURL, ItemsPerPage } from '../constants/constants';
import { INewCar, ICar } from '../interfaces/interfaces';

export const getCar = async (id: number) => {
  const response = await fetch(`${pathURL.garage}/${id}`);
  return response.json();
};

export const createCar = async (body: INewCar) => {
  const response = await fetch(pathURL.garage, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};

export const deleteCar = async (id: number) => {
  const response = await fetch(`${pathURL.garage}/${id}`, { method: 'DELETE' });
  return response.json();
};

export const updateCar = async (id: number, body: INewCar) => {
  const response = await fetch(`${pathURL.garage}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};

export const getCars = async (page = 1, itemsCount = ItemsPerPage.garage) => {
  const response = await fetch(`${pathURL.garage}?_page=${page}&_limit=${itemsCount}`);
  const cars: ICar[] = await response.json();
  const carsCount: string = response.headers.get('X-Total-Count') ?? '0';

  return {
    cars,
    carsCount,
  };
};

// export const startEngine = async (id: number) =>
//   (await fetch(`${pathURL.engine}?id=${id}&status=started`, { method: 'PATCH' })).json();

// export const stopEngine = async (id: number) =>
//   (await fetch(`${pathURL.engine}?id=${id}&status=stopped`, { method: 'PATCH' })).json();

// export const dance = async (id: number) => {
//   const result = await fetch(`${pathURL.engine}?id=${id}&status=drive`, { method: 'PATCH' }).catch();
//   return result.status !== 200 ? { success: false } : { ...(await result.json()) };
// };

// const getSortOrder = (sort: number, order: number) => {
//   if (sort && order) {
//     return `&_sort=${sort}&_order=${order}`;
//   }
//   return '';
// };
