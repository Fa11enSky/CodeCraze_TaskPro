import styled from 'styled-components';

// Стилі для кнопки
export const Button = styled.button`
  position: absolute;
  width: 334px;
  height: 56px;
  left: 284px;
  top: 116px;
  background: #121212;
  border-radius: 8px;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 8px;
`;

// Стилі для тексту кнопки
export const ButtonText = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: #ffffff;
  border: 1px solid #000000;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

// Компонент "Заголовок"
export const Title = styled.div`
  position: absolute;
  top: -40px;
  left: 0;
  font-size: 20px;
  color: #ffffff;
`;
