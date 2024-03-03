import React from 'react';
import HeaderDashboard from '../HeaderDashboard/HeaderDashboard';
import MainDashboard from '../MainDashboard/MainDashboard';
import Column from '../Column/Column';
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
      <HeaderDashboard />
      <div className="content">
        <MainDashboard
          columns={columns}
          onCreateCard={onCreateCard}
          onEditCard={onEditCard}
          onDeleteCard={onDeleteCard}
        />
        <div className="columns">
          {columns &&
            columns.map(column => (
              <Column
                key={column.id}
                column={column}
                onCreateCard={onCreateCard}
                onEditCard={onEditCard}
                onDeleteCard={onDeleteCard}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
