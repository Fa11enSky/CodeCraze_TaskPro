import React, { useState } from 'react';
import Modal from './Modal';

const ColumnFormModal = ({ isOpen, onClose, onCreateColumn }) => {
  const [columnName, setColumnName] = useState('');

  const handleCreateColumn = () => {
    if (columnName.trim() !== '') {
      onCreateColumn(columnName);
      setColumnName('');
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2>Create New Column</h2>
      <input
        type="text"
        placeholder="Enter column name"
        value={columnName}
        onChange={e => setColumnName(e.target.value)}
      />
      <button onClick={handleCreateColumn}>Create Column</button>
    </Modal>
  );
};

export default ColumnFormModal;
