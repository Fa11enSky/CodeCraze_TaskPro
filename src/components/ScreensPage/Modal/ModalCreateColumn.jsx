import React, { useState } from 'react';

const CreateColumnModal = ({ isOpen, onClose, onAddColumn }) => {
  const [columnTitle, setColumnTitle] = useState('');

  const handleAddColumn = () => {
    if (columnTitle.trim() !== '') {
      onAddColumn(columnTitle);
      setColumnTitle('');
    }
  };

  return (
    isOpen && (
      <div className="modal">
        <h2>Create New Column</h2>
        <input
          type="text"
          placeholder="Enter column title"
          value={columnTitle}
          onChange={e => setColumnTitle(e.target.value)}
        />
        <button onClick={handleAddColumn}>Add</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    )
  );
};

export default CreateColumnModal;
