import React, { useState } from 'react';
import './EditCardModal.css';

const EditCardModal = ({ isOpen, onClose, onEditCard, card }) => {
  const [newTitle, setNewTitle] = useState(card.title);

  const handleEditCard = () => {
    if (newTitle.trim() !== '') {
      onEditCard({ ...card, title: newTitle });
      setNewTitle('');
      onClose();
    }
  };

  return (
    isOpen && (
      <div className="edit-card-modal">
        <div className="modal-header">
          <h2>Edit Card</h2>
          <button className="close-button" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="modal-content">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={newTitle}
            onChange={e => setNewTitle(e.target.value)}
          />
        </div>
        <div className="modal-footer">
          <button className="add-button" onClick={handleEditCard}>
            Save
          </button>
        </div>
      </div>
    )
  );
};

export default EditCardModal;
