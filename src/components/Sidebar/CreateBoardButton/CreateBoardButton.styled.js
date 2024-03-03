import styled from 'styled-components';

const ContainerBoards = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }
`;

const TitleBoard = styled.div`
  font-size: 12px;
  letter-spacing: -0.02em;
  color: rgba(22, 22, 22, 0.5);
  margin-bottom: 8px;
`;

const ButtonBoardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 14px;
  padding-top: 14px;
  border-bottom: 1px solid rgba(22, 22, 22, 0.1);
  border-top: 1px solid rgba(22, 22, 22, 0.1);
`;

const CreateBoard = styled.span`
  width: 76px;
  font-size: 14px;
  flex-shrink: 0;
  letter-spacing: -0.02em;
  color: var(--sidebar_text_color);
`;

const ButtonBoard = styled.button`
  width: 40px;
  height: 36px;
  background-color: var(--accent);
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #9dc888;
  }
`;

const ButtonIcon = styled.svg`
  stroke: var(--sidebar_text_color);
  width: 20px;
  height: 20px;
`;

export {
  ContainerBoards,
  TitleBoard,
  ButtonBoardContainer,
  CreateBoard,
  ButtonBoard,
  ButtonIcon,
};
