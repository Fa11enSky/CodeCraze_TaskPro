import React, { useState } from 'react';
import styled from './CreateBoardButton.module.css';
import iconsSprite from '../../../assets/svgSprite/iconsSprite.svg';

const CreateBoardButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalBoard = () => {
    setIsModalOpen(true);
  };

  const closeModalBoard = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={styled.containerBoards}>
      <p className={styled.titleBoard}>My boards</p>
      <div className={styled.buttonBoardContainer}>
        <p className={styled.createBoard}>Create a new board</p>
        <button
          className={styled.buttonBoard}
          onClick={openModalBoard}
          type="submit"
          aria-label="CreateBoard"
        >
          <svg className={styled.buttonIcon}>
            <use xlinkHref={`${iconsSprite}#icon-plus`} />
          </svg>
        </button>
      </div>
      {/* ///////////////////////// */}
      {/* вставити модальне вікно */}
      {/* {isModalOpen && <Modal onClose={closeModalBoard} />} */}
      {/* ///////////////////////// */}
    </div>
  );
};

export default CreateBoardButton;
