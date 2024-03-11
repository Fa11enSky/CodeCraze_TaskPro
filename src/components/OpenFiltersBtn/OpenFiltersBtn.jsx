// OpenFiltersButton.jsx
import React, { useState } from 'react';
import sprite from '../../assets/svgSprite/iconsSprite.svg';
import { Wrapper, Button, SvgIcon, Text } from './OpenFiltersBtn.styled';
// import { Container } from './ColumnFiltersModal';

const OpenFiltersButton = ({ onFilterPriority }) => {
  const [, setShowModal] = useState(false);

  const handleClick = () => {
    
    setShowModal(!setShowModal);
    
  };

  return (
    <Wrapper>
      <Button onClick={handleClick}>
        <SvgIcon>
          <use xlinkHref={`${sprite}#icon-filter`} width={16} height={16} />
        </SvgIcon>
        <Text>Filters</Text>
      </Button>
    </Wrapper>
  );
};

export default OpenFiltersButton;
