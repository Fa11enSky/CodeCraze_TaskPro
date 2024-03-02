import React from 'react';
import sprite from '../../assets/svgSprite/iconsSprite.svg';
import './index.css';

const TaskCard = ({ cardData }) => {
  const { title, description, priority, deadline, id } = cardData;

  const replaceCard = id => {
    return;
  };
  const editCard = id => {
    return;
  };
  const removeCard = id => {
    return;
  };

  const isDeadlineToday = deadline;

  return (
    <div className="card-full-wrapper">
      <div className="color-tag"></div>
      <div data-id={id} className="card-wrapper">
        <div className="card-top">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
        <hr className="card-hr"></hr>
        <div className="card-bottom">
          <div className="card-info-wrapper">
            <h5 className="card-info-header">Prority</h5>
            <p className="card-info-value">{priority}</p>
          </div>
          <div className="card-info-wrapper">
            <h5 className="card-info-header">Deadline</h5>
            <p className="card-info-value">{deadline}</p>
          </div>
          <div className="card-controls-wrapper">
            {isDeadlineToday && (
              <svg className="card-control">
                <use xlinkHref={`${sprite}#icon-bell`} />
              </svg>
            )}
            <svg className="card-control" onClick={replaceCard}>
              <use xlinkHref={`${sprite}#icon-arrov_circle`} />
            </svg>
            <svg className="card-control" onClick={editCard}>
              <use xlinkHref={`${sprite}#icon-pencil`} />
            </svg>
            <svg className="card-control" onClick={removeCard}>
              <use xlinkHref={`${sprite}#icon-trash`} />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
