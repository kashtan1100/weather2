<template>
  <div class="weather-app">
    <!-- Дропдаун для выбора города -->
    <BDropdown :text="title" variant="primary">
      <BDropdownItem
        v-for="city in cities"
        :key="city.name"
        @click="fetchWeather(city)">
        {{ city.name }}
      </BDropdownItem>
    </BDropdown>

    <div>Сегодня</div>
    <div v-if="weather" class="weather-card">
      <div>{{ formattedTime(weather.fact.obs_time) }}</div>
      <div>Облачность: {{ weather.fact.cloudness }}</div>
      <div>Погодные условия: {{ weather.fact.condition }}</div>
      <div>Температура на ощупь {{ weather.fact.feels_like }} C</div>
      <div>Вероятность осадков {{ weather.fact.prec_prob }} %</div>
      <div>Температура {{ weather.fact.temp }} C</div>
      <div>Порывы ветра {{ weather.fact.wind_gust }} м/с</div>
      <h3>{{ title }}</h3>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useWeatherStore } from '@/stores/useWeatherStore';  // Import store
import { getWeather } from '@/components/services/weather';
import { useFilters } from '@/composables/use-filters';

const weatherStore = useWeatherStore();  // Access store
const { cities } = weatherStore;  // Get cities from the store

const title = ref<string>('Выберите город');
const weather = ref(null);

// Получаем погоду для города
const fetchWeather = async (city) => {
  title.value = city.name;
  if (city) {
    try {
      weather.value = await getWeather(city.lat, city.lon, 1);
    } catch (error) {
      console.error('Ошибка при запросе погоды:', error);
    }
  }
};

// Используем функцию из composables
const { formattedTime } = useFilters();

// При монтировании компонента отображаем погоду для Москвы
onMounted(() => {
  const defaultCity = cities.find((c) => c.name === 'Москва');
  if (defaultCity) {
    fetchWeather(defaultCity);
  }
});
</script>

<style lang="scss">
.weather-app {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.weather-card {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
}
</style>
