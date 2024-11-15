
import { ref } from 'vue';
import { defineStore } from 'pinia';


interface City {
  name: string;
  lat: number;
  lon: number;
}

export const useWeatherStore = defineStore('weather', () => {
  const cities = ref<City[]>([
    { name: 'Москва', lat: 55.7558, lon: 37.6176 },
    { name: 'Китай', lat: 59.9343, lon: 30.3351 },  // Updated name
    { name: 'Амстердам', lat: 52.37125, lon: 4.89388 },
  ]);

  return {
    cities,
  };
});
