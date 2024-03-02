import React from 'react';
import iconsSprite from '../../../assets/svgSprite/iconsSprite.svg';
import { Link } from 'react-router-dom';
import styled from './LogoComponent.module.css';

const LogoComponent = () => {
  return (
    <Link to={'/'}>
      <div className={styled.logoContainer}>
        <svg className={styled.logoIcon}>
          <use xlinkHref={`${iconsSprite}#icon-logo`} />
        </svg>
        <h1 className={styled.logoTitle}>Task Pro</h1>
      </div>
    </Link>
  );
};

export default LogoComponent;
