import React from 'react';

const Filters = ({ onChangeBackground, onFilterPriority }) => {
  const handleBackgroundChange = () => {
    // Логіка зміни фону дошки
    if (typeof onChangeBackground === 'function') {
      onChangeBackground();
    }
  };

  const handleFilterPriority = () => {
    // Логіка фільтрації за пріоритетом
    if (typeof onFilterPriority === 'function') {
      onFilterPriority();
    }
  };

  return (
    <div className="filters">
      {/* Кнопка для зміни фону */}
      <button onClick={handleBackgroundChange}>Change Background</button>
      {/* Кнопка для фільтрації за пріоритетом */}
      <button onClick={handleFilterPriority}>Filter Priority</button>
    </div>
  );
};

export default Filters;
