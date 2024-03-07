// ButtonStyles.js
import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';

export const Button = styled.button`
  position: absolute;
  width: 334px;
  height: 56px;
  left: 24px;
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
  border: 2px solid rgb(16, 16, 16);
`;

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

export const PlusIcon = styled(AiOutlinePlus)`
  background-color: white;
  border: 1px solid black;
  border-radius: 6px;
  fill: #151515;
  padding: 4px;
`;

export const Title = styled.div`
  position: absolute;
  top: 80px;
  left: 27px;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
`;
