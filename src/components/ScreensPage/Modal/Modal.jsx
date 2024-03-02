import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, onSubmit, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ✕
        </button>
        {children}
        <button onClick={onSubmit}>Додати</button>
      </div>
    </div>
  );
};

export default Modal;
