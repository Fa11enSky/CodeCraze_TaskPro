import styled from 'styled-components';

export const CreateColumnModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var (--main_text_color);
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

export const CreateColumnModalTitle = styled.h2`
  margin-top: 0;
`;

export const CreateColumnModalInput = styled.input`
  width: 100%;
  margin-bottom: 10px;
`;

export const CreateColumnModalButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px 0;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const CreateColumnModalButtonHover = styled.button`
  background-color: #0056b3;
`;
