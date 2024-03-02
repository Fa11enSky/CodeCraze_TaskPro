import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  position: absolute;
  width: 1180px;
  height: 770px;
  left: 260px;
  top: 0px;
`;

function ImageComponent() {
  return (
    <StyledImage src="diego-ph-wyeapf7Gy-U-unsplash.jpg" alt="Some image" />
  );
}

export default ImageComponent;
