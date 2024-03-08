import iconsSprite from '../../../assets/svgSprite/iconsSprite.svg';
import {
  BoardIcon,
  BoardWrapper,
  TitleWrapper,
  ToolBar,
  ToolBarButton,
  ToolBarIcon,
} from './ListBoards.styled';

const BoardItem = ({ isActive, title, icon }) => {
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
          <ToolBarButton>
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
  );
};

export default BoardItem;
