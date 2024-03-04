import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const LogoIcon = styled.svg`
  width: 32px;
  height: 32px;
`;

const LogoTitle = styled.h1`
  font-size: 16px;
  letter-spacing: -0.04em;
  color: var(--sidebar_text_color);
`;

export { LogoContainer, LogoIcon, LogoTitle };
