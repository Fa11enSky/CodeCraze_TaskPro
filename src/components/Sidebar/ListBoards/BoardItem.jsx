import { useState } from 'react';
import iconsSprite from '../../../assets/svgSprite/iconsSprite.svg';
import {
  BoardIcon,
  BoardWrapper,
  TitleWrapper,
  ToolBar,
  ToolBarButton,
  ToolBarIcon,
} from './ListBoards.styled';

import Modal from '../../Modal/Modal';
import EditBoard from '../../EditBoard/EditBoard';

const BoardItem = ({ isActive, title, icon }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalBoard = () => {
    setIsModalOpen(true);
  };

  const closeModalBoard = () => {
    setIsModalOpen(false);
  };

  return (
    <BoardWrapper $isActive={isActive}>
      <TitleWrapper $isActive={isActive}>
        <BoardIcon $isActive={isActive}>
          <use xlinkHref={`${iconsSprite}#${icon}`} />
        </BoardIcon>
        <p>{title}</p>
      </TitleWrapper>
      {isActive && (
        <ToolBar>
          <ToolBarButton onClick={openModalBoard}>
            <ToolBarIcon>
              <use xlinkHref={`${iconsSprite}#icon-pencil`} />
            </ToolBarIcon>
          </ToolBarButton>

          {isModalOpen && (
            <Modal isOpen={isModalOpen} onClose={closeModalBoard}>
              <EditBoard onClose={closeModalBoard} />
            </Modal>
          )}

          <ToolBarButton>
            <ToolBarIcon>
              <use xlinkHref={`${iconsSprite}#icon-trash`} />
            </ToolBarIcon>
          </ToolBarButton>
        </ToolBar>
      )}
    </BoardWrapper>
  );
};

export default BoardItem;
