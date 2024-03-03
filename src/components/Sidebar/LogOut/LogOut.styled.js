import styled from 'styled-components';

const LogOutContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 14px;
`;

const LogoutButton = styled.button`
  background: transparent;
  border: none;
`;

const IconLogOut = styled.svg`
  width: 32px;
  height: 32px;
`;

const LogOutText = styled.span`
  font-size: 14px;
  color: var(--sidebar_text_color);
`;

export { LogOutContainer, LogoutButton, IconLogOut, LogOutText };
