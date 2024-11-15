import { computed } from 'vue';

export const useFilters = () => {
  // Функция для форматирования времени
  const formattedTime = (obsTime: number) => {
    const date = new Date(obsTime * 1000); // Умножаем на 1000 для преобразования в миллисекунды
    return date.toLocaleString(); // Отображаем время в локальном формате
  };

  return {
    formattedTime,
  };
};
