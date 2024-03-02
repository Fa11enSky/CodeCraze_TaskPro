import React from 'react';
import HeaderDashboard from './HeaderDashboard';
import Sidebar from './Sidebar';
import MainDashboard from './MainDashboard';
import Column from './Column';
import './Board.css';

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
        <Sidebar />
        <MainDashboard
          columns={columns}
          onCreateCard={onCreateCard}
          onEditCard={onEditCard}
          onDeleteCard={onDeleteCard}
        />
        <div className="columns">
          {columns.map(column => (
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
