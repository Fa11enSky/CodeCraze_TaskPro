import { useDispatch } from 'react-redux';

import sprite from '../../../assets/svgSprite/iconsSprite.svg';
import { replaceCard } from '../../../redux/boards/operationsCards';
import {
  TooltipButton,
  TooltipIcon,
  TooltipText,
} from './TooltipOption.styled';

/* Компонент TooltipOption отримує айді картки (cardId - string) і

інформацію про колонку активної дошки (columnData), що включає в себе:

title - string, назва колонки.

id - string, айді колонки.
*/

const TooltipOption = ({ cardId, columnData }) => {
  const { _id, title } = columnData;

  const dispatch = useDispatch();

  const moveCard = (cardId, newColumnId) =>
    dispatch(replaceCard([cardId, { newColumnId }]));

  return (
    <TooltipButton onClick={() => moveCard(cardId, _id)}>
      <TooltipText>{title}</TooltipText>
      <TooltipIcon width={16} height={16}>
        <use xlinkHref={`${sprite}#icon-arrov_circle`} />
      </TooltipIcon>
    </TooltipButton>
  );
};

export default TooltipOption;
