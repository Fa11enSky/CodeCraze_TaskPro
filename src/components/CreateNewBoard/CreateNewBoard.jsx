import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import sprite from '../../assets/svgSprite/iconsSprite.svg';
import data from '../../assets/backgroundIcons/data';
import { createBoard } from '../../redux/boards/operationsBoards';

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
  ErrorMessage,
  Button,
  ContainerSvg,
  Svg,
} from './CreateNewBoard.styled';

const TitleSchema = Yup.object({
  title: Yup.string()
    .min(3, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Title is required'),
}).required();

const CreateNewBoard = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(TitleSchema),
    mode: 'onChange',
  });
  const [selectedIcon, setSelectedIcon] = useState('project');
  const [selectedBackgroundId, setSelectedBackgroundId] = useState('bgIcon');
  const dispatch = useDispatch();

  const handleTitleChange = event => {
    setValue('title', event.target.value.toString());
  };

  const handleIconSelect = icon => {
    setSelectedIcon(icon);
    setValue('icon', icon);
  };

  const handleBackgroundSelect = backgroundId => {
    setSelectedBackgroundId(backgroundId);
    setValue('background', backgroundId.toString());
  };

  const handleCreateBoard = data => {
    dispatch(createBoard(data)).then(() => {
      setValue('title', '');
      setValue('icon', '');
      setValue('background', '');
      onClose();
    });
  };

  const renderIcons = () => {
    const icons = [
      'project',
      'star',
      'loading',
      'puzzle',
      'container',
      'lightning',
      'colors',
      'hexagon',
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

  return (
    <div>
      <NewBoardTitle>New Board</NewBoardTitle>
      <form onSubmit={handleSubmit(handleCreateBoard)}>
        <Input
          id="newBoardInput"
          type="text"
          placeholder="Title"
          {...register('title')}
          onChange={handleTitleChange}
        />
        <ErrorMessage>{errors.title?.message}</ErrorMessage>

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
          Create
        </Button>
      </form>
    </div>
  );
};

export default CreateNewBoard;
