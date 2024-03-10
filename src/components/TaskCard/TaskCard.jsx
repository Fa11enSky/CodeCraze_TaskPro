import React, { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import { useDispatch } from 'react-redux';

import './index.css';

import sprite from '../../assets/svgSprite/iconsSprite.svg';
import { CardModal } from 'components/CardModal/CardModal/index';
import TooltipOption from './TooltipOption/TooltipOption';
import { deleteCard } from '../../redux/boards/operationsCards';

/* Компонент TaskCard отримує об'єкт картки який включає:

title - string, назва картки.

description - string, опис картки.

label - string, пріорітетність. Можливі значення without | low | medium | high.

deadline - string(date-time), дедлайн картки. По замовчанню +1 день від поточної дати. Не допустима минула дата

id - string.
*/

const TaskCard = ({ cardData }) => {
  const { title, description, label, deadline, id } = cardData;

  const [showEditModal, setShowEditModal] = useState(false);

  const dispatch = useDispatch();

  /* -------------------- TEST COLUMNS DATA --------------------*/

  const testColumnsData = [
    { id: 'column1 id', title: 'Column1' },
    { id: 'column2 id', title: 'Column2' },
    { id: 'column3 id', title: 'Column3' },
  ];

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

  const editCard = () => {
    return setShowEditModal(!showEditModal);
  };

  const removeCard = () => dispatch(deleteCard(id));

  /* -------------------- IS SHOW NOTIFICATION ICON (not ready yet) --------------------*/
  const isDeadlineToday = deadline;

  return (
    <div className="card-full-wrapper">
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
              <button type="button" id="replace-tooltip">
                <svg className="card-control">
                  <use xlinkHref={`${sprite}#icon-arrov_circle`} />
                </svg>
              </button>

              {/* Tooltip */}

              <Tooltip
                anchorSelect="#replace-tooltip"
                place="bottom"
                clickable="true"
                className="replace-tooltip"
              >
                {testColumnsData.map(column => (
                  <TooltipOption
                    key={column.id}
                    cardId={id}
                    columnData={column}
                  />
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
      {showEditModal && <CardModal />}
    </div>
  );
};

export default TaskCard;
