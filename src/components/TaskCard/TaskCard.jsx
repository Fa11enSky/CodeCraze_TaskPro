import React from 'react';
import sprite from '../../assets/svgSprite/iconsSprite.svg';

import { Tooltip } from 'react-tooltip';
import './index.css';

const TaskCard = ({ cardData }) => {
  const { title, description, priority, deadline, id } = cardData;

  /* -------------------- PICK A PRIORITY COLOR --------------------*/
  let cardColor = '';

  switch (priority) {
    case 'Low':
      cardColor = '#8fa1d0';
      break;
    case 'Medium':
      cardColor = '#e09cb5';
      break;
    case 'High':
      cardColor = '#bedbb0';
      break;

    default:
      cardColor = 'gray';
      break;
  }

  /* -------------------- CARD CONTROLS FUNCTIONS --------------------*/
  const replaceCard = () => {
    return;
  };
  const editCard = () => {
    return;
  };
  const removeCard = () => {
    return;
  };

  /* -------------------- IS SHOW NOTIFICATION ICON ? --------------------*/
  const isDeadlineToday = deadline;

  return (
    <div data-id={id} className="card-full-wrapper">
      <div style={{ background: `${cardColor}` }} className="color-tag"></div>
      <div className="card-content-wrapper">
        <div className="card-top">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
        <hr className="card-hr"></hr>
        <div className="card-bottom">
          <ul className="card-info-list">
            <li className="card-info-item">
              <h5 className="card-info-header">Prority</h5>
              <p className="card-info-value">{priority}</p>
            </li>
            <li className="card-info-item">
              <h5 className="card-info-header">Deadline</h5>
              <p className="card-info-value">{deadline}</p>
            </li>
          </ul>
          <ul className="card-controls-list">
            {isDeadlineToday && (
              <li>
                <button type="button">
                  <svg className="card-notification-icon">
                    <use xlinkHref={`${sprite}#icon-bell`} />
                  </svg>
                </button>
              </li>
            )}
            <li>
              <button type="button" onClick={replaceCard} id="replace-card">
                <svg className="card-control">
                  <use xlinkHref={`${sprite}#icon-arrov_circle`} />
                </svg>
              </button>

              {/* Tooltip */}
              <Tooltip
                anchorSelect="#replace-card"
                place="bottom"
                clickable="true"
                className="replace-tooltip"
              >
                <button className="replace-tooltip-btn">
                  <p className="replace-tooltip-option-text">Column1</p>
                  <svg className="card-control">
                    <use xlinkHref={`${sprite}#icon-arrov_circle`} />
                  </svg>
                </button>
                <button className="replace-tooltip-btn">
                  <p className="replace-tooltip-option-text">Column2</p>
                  <svg className="card-control">
                    <use xlinkHref={`${sprite}#icon-arrov_circle`} />
                  </svg>
                </button>
              </Tooltip>
              {/*Tooltip */}
            </li>
            <li>
              <button type="button" onClick={editCard}>
                <svg className="card-control">
                  <use xlinkHref={`${sprite}#icon-pencil`} />
                </svg>
              </button>
            </li>
            <li>
              <button type="button" onClick={removeCard}>
                <svg className="card-control">
                  <use xlinkHref={`${sprite}#icon-trash`} />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
