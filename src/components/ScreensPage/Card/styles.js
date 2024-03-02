import styled from 'styled-components';

export const CardWrapper = styled.div`
  position: relative;
  width: 334px;
  height: 154px;
  left: 284px;
  top: 186px;
  background: #121212;
  border-radius: 8px;

  h4,
  p {
    color: white;
    margin: 0;
  }

  .actions {
    margin-top: 10px;

    button {
      margin-right: 10px;
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
  }
`;

export const Tooltip = styled.div`
  /* Стилі для тултипу */
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 5px 10px;
`;

export const TooltipButton = styled.button`
  /* Стилі для кнопок тултипу */
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
`;

export const EditButton = styled.button`
  /* Стилі для кнопки редагування */
  background-color: #28a745;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  /* Стилі для кнопки видалення */
  background-color: #dc3545;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
`;

export const BellButton = styled.button`
  /* Стилі для кнопки дзвоника */
  background-color: #ffc107;
  color: #212529;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
`;

/* Додаткові стилі */
export const Card = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin: 5px 0;

  h4 {
    margin: 0 0 5px;
  }

  p {
    margin: 0;
  }

  .actions {
    margin-top: 10px;

    button {
      margin-right: 10px;
    }
  }
`;
