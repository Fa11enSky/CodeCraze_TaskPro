import React, { useEffect } from 'react';

import sprite from '../../assets/svgSprite/iconsSprite.svg';
import { ModalOverlay, ModalContent, CloseButton } from './Modal.styled';

const Modal = ({ onClose, children }) => {
  const handleClose = () => {
    onClose();
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeydown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose]);

  return (
    <ModalOverlay onClick={handleBackdropClick}>
      <ModalContent>
        <CloseButton onClick={handleClose}>
          <use href={`${sprite}#close`} />
        </CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
