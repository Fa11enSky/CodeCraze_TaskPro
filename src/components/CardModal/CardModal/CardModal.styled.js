import styled from 'styled-components';
import { Field } from 'formik';

export const ModalDiv = styled.div`
  font-family: Poppins;
  color: rgba(255, 255, 255, 1);
  max-width: 335px;
  width: 100%;
  max-height: 522px;
  margin: 10% auto;

  border-radius: 8px;
  border: 1px;
  background: var(--background_task_item);
  border: 1px solid var(--accent);
  padding: 24px;

  @media screen and (min-width: 768px) {
    width: 350px;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -2px;
  right: 0;
  border: none;
  background-color: inherit;
  width: 18px;
  height: 18px;
  margin-right: -8px;
  rotate: 45deg;

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 18px;
    height: 18px;
    border-radius: 50%;

    background-color: inherit;

    &::before {
      content: ' ';
      position: absolute;
      width: 8px;
      height: 8px;
      border: 1px solid var(--main_text_color);
      border-width: 0 0 2px 2px;
    }

    &::after {
      content: ' ';
      top: 8px;
      left: 1px;
      position: absolute;
      width: 8px;
      height: 8px;
      border: 1px solid var(--main_text_color);
      border-width: 2px 2px 0 0;
    }
    &:hover {
      &::before,
      &::after {
        transform: rotate(360deg);
        transition: border-color, rotate, 0.3s ease-in-out;
        border-color: grey;
      }
    }
  }
`;

export const H3 = styled.h3`
  color: var(--main_text_color);
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: -0.32px;
  margin-bottom: 24px;
`;

export const TitleInput = styled(Field)`
  font-family: Poppins;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.32px;
  text-align: left;
  color: var(--main_text_color);

  background-color: inherit;
  max-width: 287px;
  width: 100%;
  height: 49px;
  border-radius: 8px;
  border: 1px solid var(--accent);
  opacity: 40%;
  padding: 14px 18px;
  margin-bottom: 14px;

  &:focus {
    opacity: 100%;
    outline: none;
  }

  @media screen and (min-width: 768px) {
    width: 302px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const DescriptionTextArea = styled(Field)`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.32px;
  text-align: left;

  color: var(--main_text_color);
  background-color: inherit;
  max-width: 287px;
  width: 100%;
  height: 154px;
  border-radius: 8px;
  border: 1px solid var(--accent);
  opacity: 40%;
  padding: 14px 18px;
  margin-bottom: 24px;

  resize: none;

  /* Стилізація скроллбара */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 8px;

    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--scroll_bar_color);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--accent);
  }

  &:focus {
    opacity: 100%;
    outline: none;
  }

  @media screen and (min-width: 768px) {
    width: 302px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 14px;

  span {
  }
`;

export const RadioButtonDiv = styled.div`
  display: flex;
  gap: 10px;
`;

export const RadioBtn = styled(Field)`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const RadioLabel = styled.label`
  display: inline-block;
  position: relative;
  width: 14px;
  height: 14px;
  border-radius: 50%;

  cursor: pointer;
  &.blue {
    background-color: rgba(143, 161, 208, 1);

    transition: background-color, 0.3s;
    &:hover {
      background-color: rgba(143, 161, 208, 0.5);
    }
  }

  &.red {
    background-color: rgba(224, 156, 181, 1);

    transition: background-color, 0.3s;
    &:hover {
      background-color: rgba(224, 156, 181, 0.5);
    }
  }

  &.green {
    background-color: rgba(190, 219, 176, 1);

    transition: background-color, 0.3s;
    &:hover {
      background-color: rgba(190, 219, 176, 0.5);
    }
  }

  &.grey {
    background-color: grey;

    transition: background-color, 0.3s;
    &:hover {
      opacity: 0.5;
      background-color: grey;
    }
  }

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;

    background-color: inherit;
    border: 1.5px solid var(--background_task_item);

    opacity: 0;
    transition: border, opacity 0.3s;
  }

  input:checked ~ span {
    opacity: 1;
  }
`;

export const StyledP = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.32px;
  text-align: left;
  opacity: 40%;
  color: var(--title_board);
`;

export const SubmitButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  max-width: 287px;
  width: 100%;
  height: 49px;
  padding: 10px 0px 11px 0px;
  border-radius: 8px;
  border: none;
  background: var(--accent);
  transition: background 0.3s;

  p {
    margin-left: 8px;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: -0.32px;
    color: var(--modal_button_text);
  }

  &:hover {
    background: var(--accent_hover);
    span::before,
    span::after {
      transform: rotate(360deg);
      transition: rotate, 0.3s;
    }
  }

  @media screen and (min-width: 768px) {
    width: 302px;
  }
`;

export const SubmitSpan = styled.span`
  position: relative;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: var(--button_svg_background);

  &::before {
    content: ' ';
    position: absolute;
    top: 10px;
    left: 14px;
    width: 4px;
    height: 4px;
    border: 1px solid var(--add_card_btn_svg);
    border-width: 0 0 1px 1px;
  }

  &::after {
    content: ' ';
    position: absolute;
    top: 14px;
    left: 10px;
    width: 4px;
    height: 4px;
    border: 1px solid var(--add_card_btn_svg);
    border-width: 1px 1px 0 0;
  }

  /* @media screen and (min-width: 768px) {
  left: 120px;
  &::before{
    
  }
  } */
`;
