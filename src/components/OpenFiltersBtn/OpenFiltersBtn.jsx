// OpenFiltersButton.jsx
import React, { useState } from 'react';
import sprite from '../../assets/svgSprite/iconsSprite.svg';
import { Wrapper, Button, SvgIcon, Text } from './OpenFiltersBtn.styled';
import ColumnFiltersModal from './OpenFiltersBtn.styled';
// import { Container } from './ColumnFiltersModal';

const OpenFiltersButton = ({ onFilterPriority }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    console.log('handleClick function called');
    if (typeof onFilterPriority === 'function') {
      onFilterPriority();
    }
    setShowModal(true);
    console.log(showModal);
    console.log('Opening modal');
  };

  return (
    <Wrapper>
      <Button onClick={handleClick}>
        <SvgIcon>
          <use xlinkHref={`${sprite}#icon-filter`} width={16} height={16} />
        </SvgIcon>
        <Text>Filters</Text>
      </Button>

      {/* Відображення модального вікна */}
      <ColumnFiltersModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </Wrapper>
  );
};

export default OpenFiltersButton;
