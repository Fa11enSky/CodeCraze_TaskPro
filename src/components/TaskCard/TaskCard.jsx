import React, { useState } from 'react';
import sprite from '../../assets/svgSprite/iconsSprite.svg';

import { Tooltip } from 'react-tooltip';
import './index.css';
import Modal from 'components/Modal/Modal';
import { CardModal } from 'components/CardModal/CardModal/index';
import TooltipOption from './TooltipOption/TooltipOption';

const TaskCard = ({ cardData }) => {
  const { title, description, label, deadline, id } = cardData;

  const [showEditModal, setShowEditModal] = useState(false);

  /* -------------------- TEST COLUMN NAMES --------------------*/

  const testColumnNames = ['Column1', 'Column2', 'Column3'];

  /* -------------------- PICK A PRIORITY COLOR --------------------*/
  let cardColor = '';

  switch (label) {
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
    return setShowEditModal(!showEditModal);
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
              <p className="card-info-value">{label}</p>
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
                {testColumnNames.map(name => (
                  <TooltipOption key={name} optionName={name} />
                ))}
              </Tooltip>

              {/* Tooltip */}
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
      {showEditModal && (
        <Modal onClose={editCard}>
          <CardModal></CardModal>
        </Modal>
      )}
    </div>
  );
};

export default TaskCard;
