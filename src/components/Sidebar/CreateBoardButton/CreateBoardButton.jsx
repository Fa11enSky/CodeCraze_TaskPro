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

// import CreateNewBoard from 'components/CreateNewBoard/CreateNewBoard';
import Modal from 'components/Modal/Modal';

const CreateBoardButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalBoard = () => {
    setIsModalOpen(true);
  };

  const closeModalBoard = () => {
    setIsModalOpen(false);
  };
  return (
    <>
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
      </ContainerBoards>
      {isModalOpen && (
        <Modal onClose={closeModalBoard}>
          {/* <CreateNewBoard onClose={closeModalBoard} /> */}
        </Modal>
      )}
    </>
  );
};

export default CreateBoardButton;
