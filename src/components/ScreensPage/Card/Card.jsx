import React, { useState } from 'react';
import {
  CardWrapper,
  Tooltip,
  TooltipButton,
  EditButton,
  DeleteButton,
  BellButton,
} from './styles';

const Card = ({ card, title, description, priority, deadline, onDelete }) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const handleTooltipToggle = () => {
    setIsTooltipOpen(!isTooltipOpen);
  };

  const handleMoveCard = column => {
    // тут повинна бути логіка переміщення картки в обрану колонку
  };

  const cardTitle = card ? card.title : title;
  const cardDescription = card ? card.description : description;
  const cardPriority = card ? card.priority : priority;
  const cardDeadline = card ? card.deadline : deadline;

  const currentDate = new Date();
  const isDeadlineToday =
    deadline &&
    new Date(deadline).toDateString() === currentDate.toDateString();

  return (
    <CardWrapper>
      <h4>{cardTitle}</h4>
      <p>{cardDescription}</p>
      {cardPriority && <p>Priority: {cardPriority}</p>}
      {cardDeadline && <p>Deadline: {cardDeadline}</p>}
      {isDeadlineToday && <p>Deadline today!</p>}
      <div className="actions">
        <TooltipButton className="move-button" onClick={handleTooltipToggle}>
          {/* іконка переміщення */}
        </TooltipButton>
        {isTooltipOpen && (
          <Tooltip>
            <TooltipButton onClick={() => handleMoveCard('In Progress')}>
              In Progress
            </TooltipButton>
            <TooltipButton onClick={() => handleMoveCard('Done')}>
              Done
            </TooltipButton>
          </Tooltip>
        )}
        <EditButton>{/* іконка редагування */}</EditButton>
        <DeleteButton onClick={onDelete}>{/* іконка видалення */}</DeleteButton>
        <BellButton>{/* іконка дзвоника */}</BellButton>
      </div>
    </CardWrapper>
  );
};

export default Card;
