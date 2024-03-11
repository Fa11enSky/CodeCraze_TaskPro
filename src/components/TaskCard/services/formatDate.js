
/* Функція отримує дату у форматі "д/м/рррр" і повертає дату у форматі "дд/мм/рррр" */

export const formatDate = dateString => {
  let [day, month, year] = dateString.split('/');

  // Додавання нуля перед числами, якщо вони менші за 10
  if (day.length === 1) {
    day = '0' + day;
  }
  if (month.length === 1) {
    month = '0' + month;
  }

  return `${day}/${month}/${year}`;
};
