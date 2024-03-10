import React, { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import { useDispatch, useSelector } from 'react-redux';

import sprite from '../../assets/svgSprite/iconsSprite.svg';
import { CardModal } from 'components/CardModal/CardModal/index';
import TooltipOption from './TooltipOption/TooltipOption';
import { deleteCard } from '../../redux/boards/operationsCards';
import { selectedBoard } from '../../redux/boards/selectors';
import {
  CardBottom,
  CardContentWrapper,
  CardControlsButton,
  CardControlsIcon,
  CardControlsList,
  CardDescription,
  CardHR,
  CardInfoHeader,
  CardInfoItem,
  CardInfoList,
  CardInfoValue,
  CardNotificationIcon,
  CardTitle,
  ColorTag,
  FullCardWrapper,
} from './TaskCard.styled';
import Modal from 'components/Modal/Modal';
/* Компонент TaskCard отримує об'єкт картки який включає:

title - string, назва картки.

description - string, опис картки.

label - string, пріорітетність. Можливі значення without | low | medium | high.

deadline - string(date-time), дедлайн картки. По замовчанню +1 день від поточної дати. Не допустима минула дата

id - string.
*/

const TaskCard = ({ cardData }) => {
  const { title, description, label, deadline, _id } = cardData;

  const [showEditModal, setShowEditModal] = useState(false);

  const dispatch = useDispatch();

  /* -------------------- SELECT COLUMNS DATA --------------------*/

  const { columns } = useSelector(selectedBoard);

  /* -------------------- PICK A PRIORITY COLOR + RADIO NUMBER --------------------*/

  let cardColor = '';
  let radio = '';

  switch (label) {
    case 'low':
      cardColor = '#8fa1d0';
      radio = '1';
      break;
    case 'medium':
      cardColor = '#e09cb5';
      radio = '2';
      break;
    case 'high':
      cardColor = '#bedbb0';
      radio = '3';
      break;

    default:
      cardColor = 'gray';
      radio = '4';
      break;
  }

  /* -------------------- CARD CONTROLS FUNCTIONS --------------------*/

  const editCard = () => {
    return setShowEditModal(!showEditModal);
  };

  const removeCard = () => dispatch(deleteCard(_id));

  /* -------------------- IS SHOW NOTIFICATION ICON (not ready yet) --------------------*/
  const isDeadlineToday = deadline;

  /* -------------------- CREATE INITIAL VALUES OBJ --------------------*/

  const initValues = {
    title,
    description,
    radio,
    //? date: deadline
    id: _id,
  };

  return (
    <FullCardWrapper>
      <ColorTag style={{ background: `${cardColor}` }} />
      <CardContentWrapper>
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <CardHR />
        <CardBottom>
          <CardInfoList>
            <CardInfoItem>
              <CardInfoHeader>Priority</CardInfoHeader>
              <CardInfoValue>{label}</CardInfoValue>
            </CardInfoItem>
            <CardInfoItem>
              <CardInfoHeader>Deadline</CardInfoHeader>
              <CardInfoValue>{deadline}</CardInfoValue>
            </CardInfoItem>
          </CardInfoList>
          <CardControlsList>
            {isDeadlineToday && (
              <li>
                <CardControlsButton>
                  <CardNotificationIcon width={16} height={16}>
                    <use xlinkHref={`${sprite}#icon-bell`} />
                  </CardNotificationIcon>
                </CardControlsButton>
              </li>
            )}
            <li>
              <CardControlsButton id="replace-tooltip">
                <CardControlsIcon width={16} height={16}>
                  <use xlinkHref={`${sprite}#icon-arrov_circle`} />
                </CardControlsIcon>
              </CardControlsButton>

              {/* Tooltip */}
              <Tooltip
                anchorSelect="#replace-tooltip"
                place="bottom"
                clickable="true"
                style={{
                  backgroundColor: 'var(--background_task_item)',
                  boxShadow: '0 0 10px 0 var(--calendar_help)',
                  padding: 18,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                }}
              >
                {columns.map(column => (
                  <TooltipOption
                    key={column._id}
                    cardId={_id}
                    columnData={column}
                  />
                ))}
              </Tooltip>
              {/* Tooltip */}
            </li>
            <li>
              <CardControlsButton onClick={editCard}>
                <CardControlsIcon width={16} height={16}>
                  <use xlinkHref={`${sprite}#icon-pencil`} />
                </CardControlsIcon>
              </CardControlsButton>
            </li>
            <li>
              <CardControlsButton onClick={removeCard}>
                <CardControlsIcon width={16} height={16}>
                  <use xlinkHref={`${sprite}#icon-trash`} />
                </CardControlsIcon>
              </CardControlsButton>
            </li>
          </CardControlsList>
        </CardBottom>
      </CardContentWrapper>
      {showEditModal && (
        <Modal onClose={editCard}>
          <CardModal
            initialValues={initValues}
            newCard={false}
            onClose={editCard}
          />
        </Modal>
      )}
    </FullCardWrapper>
  );
};

export default TaskCard;
