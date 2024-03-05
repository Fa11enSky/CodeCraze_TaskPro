import React, { useState } from 'react';
import styled from 'styled-components';
import AddColumnButton from '../AddColumnButton/AddColumnButton';
import ColumnFormModal from '../Modal/ModalColum/Modal';
import Filters from '../Filters/Filters'; // Імпорт компонента Filters

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 82px;
  left: 0;
`;

const ColumnContainer = styled.div`
  flex: 1;
`;

function MainDashboard({ onBoardNameChange }) {
  const initialColumns = [
    { id: 1, title: 'To Do', cards: [] },
    { id: 2, title: 'In Progress', cards: [] },
    { id: 3, title: 'Done', cards: [] },
  ];

  const [columns, setColumns] = useState(initialColumns);
  const [isColumnFormModalOpen, setIsColumnFormModalOpen] = useState(false);

  const handleOpenColumnFormModal = () => {
    setIsColumnFormModalOpen(true);
  };

  const handleCloseColumnFormModal = () => {
    setIsColumnFormModalOpen(false);
  };

  const handleCreateColumn = columnName => {
    setColumns(prevColumns => {
      const newColumn = { id: Date.now(), title: columnName, cards: [] };
      return [...prevColumns, newColumn];
    });
    setIsColumnFormModalOpen(false);
  };

  return (
    <MainContainer>
      {/* Додайте компонент Filters тут */}
      <Filters />
      {columns.map(column => (
        <ColumnContainer key={column.id}>
          {/* Ваш код для кожного стовпця тут */}
        </ColumnContainer>
      ))}
      <AddColumnButton onAddColumn={handleOpenColumnFormModal} />
      <ColumnFormModal
        isOpen={isColumnFormModalOpen}
        onClose={handleCloseColumnFormModal}
        onCreateColumn={handleCreateColumn}
      />
    </MainContainer>
  );
}

export default MainDashboard;
