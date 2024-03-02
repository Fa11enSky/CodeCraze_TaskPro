import React from 'react';
import './Card.css';

const Card = ({
  card,
  title,
  description,
  priority,
  deadline,
  text,
  onDelete,
}) => {
  const cardTitle = card ? card.title : title;
  const cardDescription = card ? card.description : description;
  const cardPriority = card ? card.priority : priority;
  const cardDeadline = card ? card.deadline : deadline;

  return (
    <div className="card">
      {cardTitle && <h4>{cardTitle}</h4>}
      {cardDescription && <p>{cardDescription}</p>}
      {cardPriority && <p>Пріоритет: {cardPriority}</p>}
      {cardDeadline && <p>Дедлайн: {cardDeadline}</p>}
      {text && <p>{text}</p>}
      <div className="actions">
        <button className="edit-button">Edit</button>
        <button className="delete-button" onClick={onDelete}>
          Delete
        </button>
        <button className="move-button">Move</button>
        <button className="bell-button">Bell</button>
      </div>
    </div>
  );
};

export default Card;
