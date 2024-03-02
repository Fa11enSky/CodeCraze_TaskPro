import React, { useState } from 'react';
import './CreateColumnModal.css';

const CreateColumnModal = ({ onAddColumn }) => {
  const [columnName, setColumnName] = useState('');

  const handleAddColumn = () => {
    if (columnName.trim() !== '') {
      onAddColumn(columnName);
      setColumnName('');
    }
  };

  return (
    <div className="create-column-modal">
      <h2>Create New Column</h2>
      <input
        type="text"
        placeholder="Enter column name"
        value={columnName}
        onChange={e => setColumnName(e.target.value)}
      />
      <button onClick={handleAddColumn}>Add Column</button>
    </div>
  );
};

export default CreateColumnModal;
