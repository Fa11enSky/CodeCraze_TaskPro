import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { Button, ButtonText, Title } from './styles';

function AddColumnButton({ onAddColumn }) {
  return (
    <div>
      <Title>Project office</Title>
      <Button onClick={onAddColumn}>
        <AiOutlinePlus size={24} />
        <ButtonText>Add another column</ButtonText>
      </Button>
    </div>
  );
}

export default AddColumnButton;
