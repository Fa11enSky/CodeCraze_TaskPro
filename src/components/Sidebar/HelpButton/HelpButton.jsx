import React, { useState } from 'react';
import PlantMobile from '../../../assets/img/plant-mobile.png';
import PlantMobileRetina from '../../../assets/img/plant-mobile@2x.png';

import PlantDeskAndTab from '../../../assets/img/plant-tab-des.png';
import PlantDeskAndTabRetina from '../../../assets/img/plant-tab-des@2x.png';

import iconsSprite from '../../../assets/svgSprite/iconsSprite.svg';

import styled from './HelpButton.module.css';

const CreateHelpButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalHelp = () => {
    setIsModalOpen(true);
  };

  const closeModalHelp = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={styled.helpContainer}>
      <picture>
        <source
          srcSet={`${PlantDeskAndTab}, ${PlantDeskAndTabRetina}`}
          media="(min-width: 1440px)"
        />
        <source
          srcSet={`${PlantDeskAndTab} , ${PlantDeskAndTabRetina}`}
          media="(min-width: 768px)"
        />
        <source
          srcSet={`${PlantMobile} , ${PlantMobileRetina}`}
          media="(max-width: 767px)"
        />
        <img src={PlantMobile} alt="Plant" />
      </picture>
      <p className={styled.textHelp}>
        If you need help with <br />
        <span className={styled.textHelpDecor}>TaskPro</span>, check out our
        support resources or reach out to our customer support team.
      </p>

      <div className={styled.buttonHelpContainer}>
        <button
          className={styled.buttonHelp}
          onClick={openModalHelp}
          type="submit"
          aria-label="Need help"
        >
          <svg className={styled.buttonIcon}>
            <use xlinkHref={`${iconsSprite}#icon-help-circle`} />
          </svg>
        </button>
        <p className={styled.textHelpButton}>Need help?</p>
      </div>
      {/* ///////////////////////// */}
      {/* вставити модальне вікно */}
      {/* {isModalOpen && <Modal onClose={closeModalHelp} />} */}
      {/* ///////////////////////// */}
    </div>
  );
};

export default CreateHelpButton;
