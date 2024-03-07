import React from 'react';
import { Button, ButtonText, PlusIcon, Title } from './styles';

function AddColumnButton({ onAddColumn }) {
  return (
    <div>
      <Title>Project office</Title>
      <Button onClick={onAddColumn}>
        <PlusIcon size={24} />
        <ButtonText>Add another column</ButtonText>
      </Button>
    </div>
  );
}

export default AddColumnButton;
