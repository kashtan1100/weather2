<template>
  <div class="WeekContent">
    <!-- Дропдаун для выбора города -->
    <BDropdown :text="title" variant="primary">
      <BDropdownItem
        v-for="city in cities"
        :key="city.name"
        @click="fetchWeather(city)">
        {{ city.name }}
      </BDropdownItem>
    </BDropdown>

    <div v-if="weatherData">
      <h2>Прогноз на неделю для {{ title }}</h2>
      <div v-for="(day, index) in weatherData?.forecasts" :key="index" class="weather-day">
        <div class="date">{{ day.date }}</div>
        <div class="temp">Температура: {{ day.parts.day.temp_max }}°C - {{ day.parts.day.temp_min }}°C</div>
        <div class="condition">Состояние: {{ day.parts.day.condition }}</div>
        <div class="precipitation">Осадки: {{ day.parts.day.prec_mm }} мм</div>
      </div>
    </div>
    <div v-else>Загрузка данных...</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { getWeather } from "@/components/services/weather";
import {useWeatherStore} from "@/stores/useWeatherStore";
import {type City} from "@/types/city";

const weatherStore = useWeatherStore();  // Access store
const { cities } = weatherStore;  // Get cities from the store


const title = ref<string>('Выберите город');
const weatherData = ref<any>(null);

// Функция для получения прогноза на неделю
const fetchWeather = async (city: City) => {
  title.value = city.name;
  if (city) {
    try {
      weatherData.value = await getWeather(city.lat, city.lon, 7);
    } catch (error) {
      console.error('Ошибка при загрузке данных о погоде:', error);
    }
  }
};

// При монтировании компонента отображаем прогноз для Москвы
onMounted(() => {
  const defaultCity = cities.find((c) => c.name === 'Москва');
  if (defaultCity) {
    fetchWeather(defaultCity);
  }
});
</script>

<style lang="scss">
.WeekContent {
  width: 100%;
  height: auto;
  padding: 20px;
}

.container {
  overflow-y: auto;
}

.weather-day {
  background-color: #f4f4f4;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;

  .date {
    color: black;
    font-size: 18px;
    font-weight: bold;
  }

  .temp {
    color: black;
    font-size: 16px;
  }

  .condition {
    color: black;
    font-size: 14px;
  }

  .precipitation {
    color: black;
    font-size: 14px;
    color: #555;
  }
}
</style>
