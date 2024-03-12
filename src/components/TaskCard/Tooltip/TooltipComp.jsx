import { useDispatch, useSelector } from 'react-redux';
import { Tooltip } from 'react-tooltip';

import { selectedBoard } from '../../../redux/boards/selectors';
import sprite from '../../../assets/svgSprite/iconsSprite.svg';
import { replaceCard } from '../../../redux/boards/operationsCards';
import { TooltipButton, TooltipIcon, TooltipText } from './TooltipComp.styled';

/* Компонент TooltipOption отримує айді картки (cardId - string) і

інформацію про колонку активної дошки (columnData), що включає в себе:

title - string, назва колонки.

id - string, айді колонки.
*/

const TooltipComp = ({ cardId }) => {
  const dispatch = useDispatch();

  /* -------------------- SELECT COLUMNS DATA --------------------*/

  const { columns } = useSelector(selectedBoard);

  /* -------------------- FILTERED COLUMNS --------------------*/

  // const filteredColumns =
  //   columns &&
  //   columns.filter(column => column.cards.every(card => card._id !== cardId));

  /* -------------------- FUNCTIONS --------------------*/

  const moveCard = (cardId, newColumnId) =>
    dispatch(replaceCard([cardId, { newColumnId }]));

  return (
    <Tooltip
      // anchorSelect={`#${cardId}`}
      anchorSelect={`[name^='${cardId}']`}
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
        <TooltipButton
          key={column._id}
          onClick={() => moveCard(cardId, column._id)}
        >
          <TooltipText>{column.title}</TooltipText>
          <TooltipIcon width={16} height={16}>
            <use xlinkHref={`${sprite}#icon-arrov_circle`} />
          </TooltipIcon>
        </TooltipButton>
      ))}
    </Tooltip>
  );
};

export default TooltipComp;
