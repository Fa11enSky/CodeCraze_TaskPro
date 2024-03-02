import React from 'react';
import styled from 'styled-components';
import Filters from '../Filters/Filters';
import './HeaderDashboard.css';

const HeaderContainer = styled.header`
  position: absolute;
  width: 113px;
  height: 28px;
  left: 284px;
  top: 78px;
  font-family: var(--font-family);
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: #ffffff;
`;

function HeaderDashboard({ boardName, onToggleModal }) {
  return (
    <HeaderContainer>
      <h1>{boardName}</h1>
      <Filters onToggleModal={onToggleModal} />
    </HeaderContainer>
  );
}

export default HeaderDashboard;
