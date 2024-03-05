import React from 'react';
import MainDashboard from '../MainDashboard/MainDashboard';
import './styles.js';

const Board = ({
  boardName,
  columns,
  onCreateCard,
  onEditCard,
  onDeleteCard,
}) => {
  return (
    <div className="board">
      <div className="content">
        <MainDashboard
          columns={columns}
          onCreateCard={onCreateCard}
          onEditCard={onEditCard}
          onDeleteCard={onDeleteCard}
        />
      </div>
    </div>
  );
};

export default Board;
