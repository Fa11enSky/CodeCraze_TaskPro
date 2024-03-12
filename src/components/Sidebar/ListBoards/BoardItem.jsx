import { useEffect, useState } from 'react';
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

import { useDispatch } from 'react-redux';
import { deleteBoard } from '../../../redux/boards/operationsBoards';
import { Link, useNavigate } from 'react-router-dom';

const BoardItem = ({ isActive, title, icon, id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [click, setClick] = useState(false);

  const openModalBoard = () => {
    setIsModalOpen(true);
  };

  const closeModalBoard = () => {
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    dispatch(deleteBoard(id));
    setClick(true);
  };

  useEffect(() => {
    if (click) {
      navigate('/home');
    }
  }, [click, navigate]);

  return (
    <>
      <Link to={`/home/${id}`}>
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

              <ToolBarButton onClick={handleDelete}>
                <ToolBarIcon>
                  <use xlinkHref={`${iconsSprite}#icon-trash`} />
                </ToolBarIcon>
              </ToolBarButton>
            </ToolBar>
          )}
        </BoardWrapper>
      </Link>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModalBoard}>
          <EditBoard onClose={closeModalBoard} />
        </Modal>
      )}
    </>
  );
};

export default BoardItem;
