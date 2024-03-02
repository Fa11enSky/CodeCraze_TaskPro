import React from 'react';
import './MoveCardModal.css';

const MoveCardModal = ({ isOpen, onClose, columnTitle, onMoveCard }) => {
  const handleMoveCard = newColumnTitle => {
    onMoveCard(newColumnTitle);
    onClose();
  };

  return (
    isOpen && (
      <div className="move-card-modal">
        <h2>Move Card to:</h2>
        <div className="columns">
          <div className="column" onClick={() => handleMoveCard('In Progress')}>
            <span className="column-title">In Progress</span>
            <span className="icon">&#9899; &#8594;</span>
          </div>
          <div className="column" onClick={() => handleMoveCard('Done')}>
            <span className="column-title">Done</span>
            <span className="icon">&#9899; &#8594;</span>
          </div>
        </div>
        <button className="close-button" onClick={onClose}>
          ✕
        </button>
      </div>
    )
  );
};

export default MoveCardModal;
