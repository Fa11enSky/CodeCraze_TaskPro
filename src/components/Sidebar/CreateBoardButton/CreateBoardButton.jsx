import React, { useState } from 'react';
import {
  ContainerBoards,
  TitleBoard,
  ButtonBoardContainer,
  CreateBoard,
  ButtonBoard,
  ButtonIcon,
} from './CreateBoardButton.styled';
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
    <ContainerBoards>
      <TitleBoard>My boards</TitleBoard>
      <ButtonBoardContainer>
        <CreateBoard>Create a new board</CreateBoard>
        <ButtonBoard
          onClick={openModalBoard}
          type="submit"
          aria-label="CreateBoard"
        >
          <ButtonIcon>
            <use xlinkHref={`${iconsSprite}#plus`} />
          </ButtonIcon>
        </ButtonBoard>
      </ButtonBoardContainer>
      {/* ///////////////////////// */}
      {/* вставити модальне вікно */}
      {/* {isModalOpen && <Modal onClose={closeModalBoard} />} */}
      {/* ///////////////////////// */}
    </ContainerBoards>
  );
};

export default CreateBoardButton;
