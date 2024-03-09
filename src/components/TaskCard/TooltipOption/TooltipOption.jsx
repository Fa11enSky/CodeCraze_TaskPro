import { useDispatch } from 'react-redux';

import sprite from '../../../assets/svgSprite/iconsSprite.svg';
import { replaceCard } from '../../../redux/boards/operationsCards';

/* Компонент TooltipOption отримує айді картки (cardId - string) і

інформацію про колонку активної дошки (columnData), що включає в себе:

title - string, назва колонки.

id - string, айді колонки.
*/

const TooltipOption = ({ cardId, columnData }) => {
  const { id, title } = columnData;

  const dispatch = useDispatch();

  const moveCard = (cardId, newColumnId) =>
    dispatch(replaceCard([cardId, { newColumnId }]));

  return (
    <button
      className="replace-tooltip-btn"
      onClick={() => moveCard(cardId, id)}
    >
      <p className="replace-tooltip-option-text">{title}</p>
      <svg className="card-control">
        <use xlinkHref={`${sprite}#icon-arrov_circle`} />
      </svg>
    </button>
  );
};

export default TooltipOption;
