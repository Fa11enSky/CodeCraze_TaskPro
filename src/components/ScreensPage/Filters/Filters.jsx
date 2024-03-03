import React from 'react';
import './Styles.css';

const Filters = ({ onFilterPriority }) => {
  const handleFilterPriority = () => {
    if (typeof onFilterPriority === 'function') {
      onFilterPriority();
    }
  };

  return (
    <div className="filters-wrapper">
      {/* Кнопка для фільтрації за пріоритетом */}
      <button onClick={handleFilterPriority} className="filter-button">
        {/* Використання SVG-іконки */}
        <div className="filter-icon">
          <svg className="svg-icon">
            <use xlinkHref="#icon-filter" />
          </svg>
        </div>
        {/* Текст фільтра */}
        <div className="filters-text">Filters</div>
      </button>
    </div>
  );
};

export default Filters;
