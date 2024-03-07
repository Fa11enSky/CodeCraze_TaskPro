import sprite from '../../../assets/svgSprite/iconsSprite.svg';

const TooltipOption = ({ optionName }) => {
  return (
    <button className="replace-tooltip-btn">
      <p className="replace-tooltip-option-text">{optionName}</p>
      <svg className="card-control">
        <use xlinkHref={`${sprite}#icon-arrov_circle`} />
      </svg>
    </button>
  );
};

export default TooltipOption;
