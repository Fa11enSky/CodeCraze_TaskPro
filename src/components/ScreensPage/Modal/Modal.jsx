import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, onSubmit, children }) => {
  const [inputValue, setInputValue] = useState('Text');

  if (!isOpen) return null;

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleInputFocus = () => {
    if (inputValue === 'Text') {
      setInputValue('');
    }
  };

  const handleInputBlur = () => {
    if (inputValue.trim() === '') {
      setInputValue('Text');
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ✕
        </button>
        <h2>Add column</h2>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          style={{ color: inputValue === 'Text' ? 'white' : 'white' }}
        />
        <button className="add-button" onClick={onSubmit}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-plus"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Modal;
