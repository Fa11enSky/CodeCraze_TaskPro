import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  background: #1f1f1f;
  border-radius: 8px;
  right: 24px;
  top: 14%;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  cursor: pointer;
  right: 0;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  border: none;
  background: #151515;
`;

export const SvgIcon = styled.svg`
  width: 16px;
  height: 16px;
  stroke-width: 1.5px;
  stroke-width: 1.5px;
  stroke: rgba(255, 255, 255, 0.8);
`;

export const Text = styled.span`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #ffffff;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

export const ModalContent = styled.div`
  border: 1px solid rgba(190, 219, 176, 0.5);
  border-radius: 8px;
  width: 380px;
  height: 234px;
  background: #151515;
  position: relative;
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

export const ModalTitle = styled.span`
  position: absolute;
  width: 51px;
  height: 27px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: #ffffff;
  left: 24px;
  top: 24px;
`;

export const ModalVector = styled.span`
  position: absolute;
  width: 252px;
  height: 0px;
  left: calc(50% - 252px / 2);
  top: 65px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const ModalText = styled.span`
  position: absolute;
  width: 74px;
  height: 21px;
  left: 24px;
  top: 79px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-bottom: 14px;
`;

export const ModalShowAll = styled.span`
  position: absolute;
  width: 48px;
  height: 18px;
  left: 228px;
  top: 79px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-decoration-line: underline;
  color: rgba(255, 255, 255, 0.5);
`;

export const ModalPriorities = styled.div`
  width: 125px;
  height: 96px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: absolute;
  left: 24px;
  top: 114px;
`;

export const PriorityItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

export const PriorityCircle = styled.svg`
  width: 14px;
  height: 14px;
`;

export const PriorityCircleFill = styled.circle`
  fill: ${props => props.fillColor || 'rgba(255, 255, 255, 0.3)'};
`;

export const PriorityCircleStroke = styled.circle`
  stroke: ${props => props.strokeColor || 'rgba(255, 255, 255, 0.3)'};
  stroke-width: 1px;
`;

export const PriorityCircleLow = styled.div`
  width: 110px;
  height: 18px;
  border-radius: 100%;
  fill: rgba(255, 255, 255, 0.3);
`;

export const PriorityCircleMedium = styled.div`
  width: 70px;
  height: 18px;
  border-radius: 100%;
  fill: #e09cb5;
`;

export const PriorityCircleHigh = styled.div`
  width: 49px;
  height: 18px;
  border-radius: 100%;
  fill: #bedbb0;
`;

export const CircleSvg = styled.svg`
  width: 14px;
  height: 14px;
`;

export const PriorityText = styled.span`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: ${props =>
    props.theme === 'Dark' ? 'rgba(255, 255, 255, 0.5)' : '#fff'};
  padding-left: 8px;
`;
