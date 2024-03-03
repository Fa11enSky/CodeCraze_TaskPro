import React from 'react';
import iconsSprite from '../../../assets/svgSprite/iconsSprite.svg';
import { Link } from 'react-router-dom';

import { LogoContainer, LogoIcon, LogoTitle } from './LogoComponent.styled';

const LogoComponent = () => {
  return (
    <Link to={'/'}>
      <LogoContainer>
        <LogoIcon>
          <use xlinkHref={`${iconsSprite}#icon-logo`} />
        </LogoIcon>
        <LogoTitle>Task Pro</LogoTitle>
      </LogoContainer>
    </Link>
  );
};

export default LogoComponent;
