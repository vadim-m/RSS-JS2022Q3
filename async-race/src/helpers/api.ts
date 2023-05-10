import { pathURL, ItemsPerPage } from '../constants/constants';
import { INewCar, ICar, IWinner } from '../interfaces/interfaces';

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

export const getCars = async (page = 1, limit = ItemsPerPage.garage) => {
  const response = await fetch(`${pathURL.garage}?_page=${page}&_limit=${limit}`);
  const cars: ICar[] = await response.json();
  const carsCount: string = response.headers.get('X-Total-Count') ?? '0';

  return {
    cars,
    carsCount,
  };
};

export const startEngine = async (id: number) =>
  (await fetch(`${pathURL.engine}?id=${id}&status=started`, { method: 'PATCH' })).json();

export const stopEngine = async (id: number) =>
  (await fetch(`${pathURL.engine}?id=${id}&status=stopped`, { method: 'PATCH' })).json();

export const drive = async (id: number) => {
  const result = await fetch(`${pathURL.engine}?id=${id}&status=drive`, { method: 'PATCH' }).catch();

  return result.status !== 200 ? { success: false } : { ...(await result.json()) };
};

export const getWinners = async (page = 1, limit = ItemsPerPage.winners, sort = 'wins', order = 'DESC') => {
  const response = await fetch(`${pathURL.winners}?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`);
  const items = await response.json();
  const count: string = response.headers.get('X-Total-Count') ?? '0';

  return {
    items: await Promise.all(items.map(async (winner: IWinner) => ({ ...winner, car: await getCar(winner.id) }))),
    count,
  };
};

export const getWinner = async (id: number) => {
  try {
    const response = await fetch(`${pathURL.winners}/${id}`);
    return await response.json();
  } catch {
    throw new Error('Ошибка');
  }
};

export const getWinnerStatus = async (id: number) => {
  const response = await fetch(`${pathURL.winners}/${id}`);
  return response.status;
};

export const deleteWinner = async (id: number) => {
  const response = await fetch(`${pathURL.winners}/${id}`, { method: 'DELETE' });
  return response.json();
};

export const createWinner = async (body: IWinner) => {
  const response = await fetch(pathURL.winners, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};

export const updateWinner = async (id: number, body: IWinner) => {
  const response = await fetch(`${pathURL.winners}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};

export const saveWinner = async (id: number, time: number) => {
  const winnerStatus = await getWinnerStatus(id);

  if (winnerStatus === 404) {
    await createWinner({
      id,
      wins: 1,
      time,
    });
  } else {
    const winner = await getWinner(id);
    await updateWinner(id, {
      id,
      wins: +winner.wins + 1,
      time: time < +winner.time ? time : winner.time,
    });
  }
};
