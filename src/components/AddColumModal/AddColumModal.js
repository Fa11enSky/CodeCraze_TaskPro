import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: #161616;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 350px;
  border: 1px solid rgba(190, 219, 176, 0.5);
  background: #151515;
  height: 221px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  color: white;
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #161616;
  width: 302px;
  height: 49px;
  background: #bedbb0;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 5px 10px;
  cursor: pointer;
`;

export const AddButtonText = styled.span`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #161616;
  margin-left: 8px;
`;

export const EditColumnTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: white;
`;

export const Input = styled.input`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid #bedbb0;
  border-radius: 8px;
  width: 302px;
  height: 49px;
  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.08);
  background: #1f1f1f;
  opacity: 0.4;
  color: white;
  padding: 0 15px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
`;
