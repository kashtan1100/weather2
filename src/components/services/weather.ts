import axios from 'axios';

const API_KEY = '210bb145-147d-4489-ac9e-2eed72b17194';
const BASE_URL = 'https://api.weather.yandex.ru/v2/forecast';

export const getWeather = async (lat: number, lon: number, limit: number = 1) => {
  try {
    const response = await axios.get(BASE_URL, {
      headers: {
        'X-Yandex-Weather-Key': API_KEY,
      },
      params: {
        lat,
        lon,
        lang: 'ru_RU',
        limit,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Ошибка получения данных о погоде:', error);
    throw error;
  }
};
