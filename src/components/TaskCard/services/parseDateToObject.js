
/* Функція отримує дату у форматі "дд/мм/рррр" і повертає об'єкт new Date */

export const parseDateToObject = dataString => {
  // Розбиваємо рядок на день, місяць та рік
  let [day, month, year] = dataString.split('/');

  // Перевірка чи всі дані є числами
  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    throw new Error('Некоректний формат дати');
  }

  // Перетворення рядкових значень у числа
  day = parseInt(day);
  month = parseInt(month) - 1; // -1 щоб місяці відповідали формату new Date
  year = parseInt(year);

  return new Date(year, month, day);
};
