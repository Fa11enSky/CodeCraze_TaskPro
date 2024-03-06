import React, { useState } from 'react';
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  AddButton,
  AddButtonText,
  EditColumnTitle,
  Input,
} from './EditColumStyle';

const EditColumModal = ({ isOpen, onClose, onSubmit, children }) => {
  const [inputValue, setInputValue] = useState('Text');

  // if (!isOpen) return null;

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
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>✕</CloseButton>
        <EditColumnTitle>Edit column</EditColumnTitle>
        <Input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        <AddButton onClick={onSubmit}>
          <div
            style={{
              border: '2px solid #161616',
              borderRadius: '6px',
              width: '28px',
              height: '28px',
              background: '#151515',
            }}
          >
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
          </div>
          <AddButtonText>Add</AddButtonText>
        </AddButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default EditColumModal;
