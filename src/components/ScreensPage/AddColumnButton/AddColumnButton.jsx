import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  position: absolute;
  width: 334px;
  height: 56px;
  left: 284px;
  top: 116px;
  background: #121212;
  border-radius: 8px;
  color: #ffffff;
`;

function AddColumnButton({ onAddColumn }) {
  return <Button onClick={onAddColumn}>Add Column</Button>;
}

export default AddColumnButton;
