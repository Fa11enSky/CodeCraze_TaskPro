import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import sprite from '../../assets/svgSprite/iconsSprite.svg';
import data from '../../assets/backgroundIcons/data';
import { updateBoard } from '../../redux/boards/operationsBoards';
import { selectAllBoards } from '../../redux/boards/selectors';

import {
  NewBoardTitle,
  IconTitle,
  IconWrap,
  Icon,
  BackgroundTitle,
  BgIcon,
  BackgroundItem,
  BackgroundImage,
  Input,
  Button,
  ContainerSvg,
  Svg,
  ModalContent,
  CloseButton,
} from '../CreateNewBoard/CreateNewBoard.styled';

const EditBoard = ({ onClose }) => {
  const { register, handleSubmit, setValue } = useForm();
  const [selectedIcon, setSelectedIcon] = useState('');
  const [selectedBackgroundId, setSelectedBackgroundId] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const board = useSelector(selectAllBoards);

  useEffect(() => {
    setValue('title', board.title);
    setSelectedIcon(board.icon);
    setSelectedBackgroundId(board.background);
  }, [board.background, board.icon, board.title, setValue]);

  const handleTitleChange = event => {
    setValue('title', event.target.value.toString());
  };

  const handleIconSelect = icon => {
    setSelectedIcon(icon);
    setValue('selectedIcon', icon);
  };

  const handleBackgroundSelect = backgroundId => {
    setSelectedBackgroundId(backgroundId);
    setValue('selectedBackgroundId', backgroundId.toString());
  };

  const handleEditBoard = data => {
    const updateData = {
      id: board._id,
      board: {
        title: data.title,
        icon: data.selectedIcon,
        background: data.selectedBackgroundId,
      },
    };

    dispatch(updateBoard(updateData)).then(() => {
      setValue('title', data.title);
      setValue('selectedIcon', data.selectedIcon);
      setValue('selectedBackgroundId', data.selectedBackgroundId);
      onClose();
    });

    toast.success(`${data.title} has been successfully edited!`, {
      theme: 'colored',
      autoClose: 2500,
    });

    navigate(`${data.title.toLowerCase()}`);
  };

  const renderIcons = () => {
    const icons = [
      'icon-project',
      'icon-star',
      'icon-loading',
      'icon-puzzle',
      'icon-container',
      'icon-lightning',
      'icon-colors',
      'icon-hexagon',
    ];

    return icons.map(icon => (
      <Icon
        key={icon}
        selected={selectedIcon === icon}
        onClick={() => handleIconSelect(icon)}
      >
        <use href={`${sprite}#${icon}`} />
      </Icon>
    ));
  };

  const renderBackgrounds = () => {
    return data.map(item => (
      <BackgroundItem
        key={item.id}
        selected={selectedBackgroundId === item.id}
        onClick={() => handleBackgroundSelect(item.id)}
      >
        <BackgroundImage src={item.image} alt="Background" />
      </BackgroundItem>
    ));
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div>
      <ModalContent>
        <NewBoardTitle>Edit Board</NewBoardTitle>
        <form onSubmit={handleSubmit(handleEditBoard)}>
          <Input
            id="newBoardInput"
            type="text"
            placeholder="Title"
            {...register('title')}
            onChange={handleTitleChange}
          />

          <IconTitle>Icons</IconTitle>
          <IconWrap>{renderIcons()}</IconWrap>

          <BackgroundTitle>Background</BackgroundTitle>
          <BgIcon>{renderBackgrounds()}</BgIcon>

          <Button type="submit">
            <ContainerSvg>
              <Svg width="14px" height="14px">
                <use href={`${sprite}#plus`} />
              </Svg>
            </ContainerSvg>
            Edit
          </Button>
        </form>

        <CloseButton onClick={handleClose}>
          <use href={`${sprite}#close`} />
        </CloseButton>
      </ModalContent>
    </div>
  );
};

export default EditBoard;
