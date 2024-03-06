import React, { useState } from 'react';
import sprite from '../../../assets/svgSprite/iconsSprite.svg';
import {
  Wrapper,
  Button,
  CloseButton,
  SvgIcon,
  Text,
  ModalWrapper,
  ModalContent,
  ModalTitle,
  ModalVector,
  ModalText,
  ModalShowAll,
  ModalPriorities,
  PriorityItem,
  PriorityCircle,
  CircleSvg,
  PriorityText,
} from './styles';

const Filters = ({ onFilterPriority }) => {
  const [showModal, setShowModal] = useState(false);

  const handleFilterPriority = () => {
    if (typeof onFilterPriority === 'function') {
      onFilterPriority();
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Wrapper>
      <Button onClick={handleFilterPriority}>
        <SvgIcon>
          <use xlinkHref={`${sprite}#icon-filter`} width={16} height={16} />
        </SvgIcon>
        <Text>Filters</Text>
      </Button>

      {showModal && (
        <ModalWrapper>
          <ModalContent>
            <CloseButton onClick={closeModal}>
              <CircleSvg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 4.5L4.5 13.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.5 4.5L13.5 13.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </CircleSvg>
            </CloseButton>
            <ModalTitle>Filter</ModalTitle>
            <ModalVector />
            <ModalText>Label color</ModalText>
            <ModalShowAll>Show all</ModalShowAll>
            <ModalPriorities>
              <PriorityItem>
                <PriorityCircle>
                  <CircleSvg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="7"
                      cy="7"
                      r="7"
                      fill="white"
                      fillOpacity="0.3"
                    />
                  </CircleSvg>
                </PriorityCircle>
                <PriorityText>Without priority</PriorityText>
              </PriorityItem>
              <PriorityItem>
                <PriorityCircle>
                  <CircleSvg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="7" cy="7" r="4" fill="#8FA1D0" />
                    <circle cx="7" cy="7" r="6.5" stroke="#8FA1D0" />
                  </CircleSvg>
                </PriorityCircle>
                <PriorityText>Low</PriorityText>
              </PriorityItem>
              <PriorityItem>
                <PriorityCircle>
                  <CircleSvg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="7" cy="7" r="7" fill="#E09CB5" />
                  </CircleSvg>
                </PriorityCircle>
                <PriorityText>Medium</PriorityText>
              </PriorityItem>
              <PriorityItem>
                <PriorityCircle>
                  <CircleSvg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="7" cy="7" r="7" fill="#BEDBB0" />
                  </CircleSvg>
                </PriorityCircle>
                <PriorityText>High</PriorityText>
              </PriorityItem>
            </ModalPriorities>
          </ModalContent>
        </ModalWrapper>
      )}
    </Wrapper>
  );
};

export default Filters;
