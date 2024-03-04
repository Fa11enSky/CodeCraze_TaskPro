import styled from 'styled-components';

const HelpContainer = styled.div`
  background: #f6f6f7;
  padding: 14px;
  margin-bottom: 24px;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    padding: 20px;
    width: 172px;
  }
`;

const TextHelp = styled.p`
  margin-top: 12px;
  margin-bottom: 18px;
  font-size: 12px;
  line-height: 133%;
  letter-spacing: -0.02em;
  color: var(--sidebar_text_color);
  @media screen and (min-width: 768px) {
    line-height: 143%;
  }
`;

const TextHelpDecor = styled.span`
  color: var(--accent);
`;

const ButtonHelpContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const ButtonHelp = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
`;

const ButtonIcon = styled.svg`
  width: 20px;
  height: 20px;
`;

const TextHelpButton = styled.span`
  font-size: 12px;
  letter-spacing: -0.02em;
  color: var(--sidebar_text_color);
`;

export {
  HelpContainer,
  TextHelp,
  TextHelpDecor,
  ButtonHelpContainer,
  ButtonHelp,
  ButtonIcon,
  TextHelpButton,
};
