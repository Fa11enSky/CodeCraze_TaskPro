import React, { useState } from 'react';
import Modal from '../Modal';

const CreateCardModal = ({ isOpen, onClose, onCreateCard }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleCreateCard = () => {
    const newCard = { title, description, priority, deadline };
    onCreateCard(newCard);
    setTitle('');
    setDescription('');
    setPriority('');
    setDeadline('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2>Create New Card</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Priority"
        value={priority}
        onChange={e => setPriority(e.target.value)}
      />
      <input
        type="date"
        placeholder="Deadline"
        value={deadline}
        onChange={e => setDeadline(e.target.value)}
      />
      <button onClick={handleCreateCard}>Create Card</button>
    </Modal>
  );
};

export default CreateCardModal;
