import React, { useState } from 'react';
import './Styles.css';

const Filters = ({ onFilterPriority }) => {
  const [showModal, setShowModal] = useState(false);

  const handleFilterPriority = () => {
    if (typeof onFilterPriority === 'function') {
      onFilterPriority();
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="filters-wrapper">
      <button onClick={handleFilterPriority} className="filter-button">
        <svg className="svg-icon" id="icon-filter">
          <use href="../../../assets/svgSprite/iconsSprite.svg#icon-filter" />
        </svg>
        <span className="filters-text">Filters</span>
      </button>

      {showModal && (
        <div className="modal-wrapper">
          <div className="modal-content">
            <button onClick={closeModal} className="close-button">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 4.5L4.5 13.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.5 4.5L13.5 13.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="modal-header">
              <span className="modal-title">Filter</span>
              <span className="modal-vector"></span>
            </div>
            <div className="modal-body">
              <span className="modal-text">Label color</span>
              <span className="modal-show-all">Show all</span>
              <div className="modal-priorities">
                <div className="priority-item">
                  <svg
                    className="priority-circle"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="rgba(255, 255, 255, 0.3)"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="7"
                      cy="7"
                      r="7"
                      fill="white"
                      fillOpacity="0.3"
                    />
                  </svg>
                  <span>Without priority</span>
                </div>
                <div className="priority-item">
                  <svg
                    className="priority-circle"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="7" cy="7" r="4" fill="#8FA1D0" />
                    <circle
                      cx="7"
                      cy="7"
                      r="6.5"
                      strokeWidth="1px"
                      stroke="#8FA1D0"
                    />
                  </svg>
                  <span>Low</span>
                </div>
                <div className="priority-item">
                  <svg
                    className="priority-circle"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="#e09cb5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="7" cy="7" r="7" fill="#E09CB5" />
                  </svg>
                  <span>Medium</span>
                </div>
                <div className="priority-item">
                  <svg
                    className="priority-circle"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="#bedbb0"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="7" cy="7" r="7" fill="#BEDBB0" />
                  </svg>
                  <span>High</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;
