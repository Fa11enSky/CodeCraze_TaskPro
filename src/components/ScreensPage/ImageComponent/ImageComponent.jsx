import React from 'react';
import styled from 'styled-components';

const StyledBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #1f1f1f; /* Змінено background-color на background */
  left: 0;
  top: 0;
`;

function ImageComponent() {
  return <StyledBackground />;
}

export default ImageComponent;
