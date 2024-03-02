import styled from 'styled-components';

export const NewBoardTitle = styled.h2`
  margin: 0 0 24px 0;
  width: 96px;
  height: 27px;
  left: 24px;
  top: 24px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: #ffffff;

  @media screen and (min-width: 1440px) {
    margin-left: 24px;
    width: 212px;
    height: 272px;
    padding: 20px;
  }
`;

export const ErrorMessage = styled.p`
  color: #ffffff;
  margin-bottom: 10px;
  text-align: center;
`;

export const Input = styled.input`
  box-sizing: border-box;
  margin: 0 0 24px 0;
  width: 302px;
  height: 49px;
  padding-left: 20px;
  background: transparent;
  opacity: 0.4;
  border: 1px solid #bedbb0;
  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
  border-radius: 8px;
  color: #ffffff;

  &::placeholder {
    width: 28px;
    height: 21px;
    left: 18px;
    top: 14px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.02em;
    color: #bedbb0;
  }

  &:not(:placeholder-shown) {
    opacity: 1;
    color: #ffffff;
  }

  &:focus {
    opacity: 1;
    outline: none;
    border: 1px solid #bedbb0;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 24px;
    width: 212px;
    height: 272px;
    padding: 20px;
  }
`;

export const IconTitle = styled.h3`
  margin: 0 0 14px 0;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: #ffffff;

  @media screen and (min-width: 1440px) {
    margin-left: 24px;
    width: 212px;
    height: 272px;
    padding: 20px;
  }
`;

export const IconWrap = styled.div`
  margin: 0 0 24px 0;
`;

export const Icon = styled.svg`
  margin-right: 8px;
  width: 18px;
  height: 18px;
  fill: transparent;
  stroke: ${({ selected }) => (selected ? '#ffffff' : 'grey')};
  cursor: pointer;

  @media screen and (min-width: 1440px) {
    margin-left: 24px;
    width: 212px;
    height: 272px;
    padding: 20px;
  }
`;

export const BackgroundTitle = styled.h3`
  margin: 0 0 14px 0;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: #ffffff;

  @media screen and (min-width: 1440px) {
    margin-left: 24px;
    width: 212px;
    height: 272px;
    padding: 20px;
  }
`;

export const BgIcon = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 260px;
  gap: 4px;
  margin-bottom: 40px;
`;

export const BackgroundItem = styled.div`
  cursor: pointer;
  transition: transform 0.3s;
  transform: ${({ selected }) => (selected ? 'scale(0.85)' : 'scale(1)')};
  filter: ${({ selected }) => (selected ? 'grayscale(100%)' : 'none')};
  filter: ${({ selected }) => (selected ? 'brightness(85%)' : 'none')};
  border-radius: 6px;
  overflow: hidden;

  &:hover {
    transform: scale(1.1);
  }
`;

export const BackgroundImage = styled.img`
  width: 28px;
  height: 28px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px 0 11px;
  border-radius: 8px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #bedbb0;
  color: #161616;
  font-size: 14px;
  font-weight: 500;
  border-color: transparent;
  transition: scale 250ms ease-in 0s;

  &:hover,
  &focus {
    scale: 1.05;
  }
`;

export const ContainerSvg = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: #161616;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;

  & + p {
    color: #ffffff;
    letter-spacing: -0.28px;
  }
`;

export const Svg = styled.svg`
  stroke: #ffffff;
`;
