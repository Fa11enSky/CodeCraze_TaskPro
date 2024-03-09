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
import Modal from 'components/Modal/Modal';
// import EditBoard from 'components/EditBoard/EditBoard';

const BoardItem = ({ isActive, title, icon }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalEdit = () => {
    setIsModalOpen(true);
  };

  const closeModalEdit = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <BoardWrapper $isActive={isActive}>
        <TitleWrapper $isActive={isActive}>
          <BoardIcon $isActive={isActive}>
            <use xlinkHref={`${iconsSprite}#${icon}`} />
          </BoardIcon>
          <p>{title}</p>
        </TitleWrapper>
        {isActive && (
          <ToolBar>
            <ToolBarButton onClick={openModalEdit}>
              <ToolBarIcon>
                <use xlinkHref={`${iconsSprite}#icon-pencil`} />
              </ToolBarIcon>
            </ToolBarButton>
            <ToolBarButton>
              <ToolBarIcon>
                <use xlinkHref={`${iconsSprite}#icon-trash`} />
              </ToolBarIcon>
            </ToolBarButton>
          </ToolBar>
        )}
      </BoardWrapper>
      {isModalOpen && (
        <Modal onClose={closeModalEdit}>
          {/* <EditBoard onClose={closeModalEdit} /> */}
        </Modal>
      )}
    </>
  );
};

export default BoardItem;
