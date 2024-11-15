import { computed } from 'vue';

export const useFilters = () => {
  // Функция для форматирования времени
  const formattedTime = (obsTime: string | number) => {  // Указываем тип, что это может быть строка или число
    const obsTimeNumber = typeof obsTime === 'string' ? parseInt(obsTime, 10) : obsTime;  // Преобразуем в число, если это строка
    const date = new Date(obsTimeNumber * 1000); // Умножаем на 1000 для преобразования в миллисекунды
    return date.toLocaleString(); // Отображаем время в локальном формате
  };

  return {
    formattedTime,
  };
};
