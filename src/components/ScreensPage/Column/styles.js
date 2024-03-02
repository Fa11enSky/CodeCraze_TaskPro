import styled from 'styled-components';

export const Column = styled.div`
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
`;

export const CardList = styled.div`
  margin-top: 10px;
`;

export const AddCardButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
