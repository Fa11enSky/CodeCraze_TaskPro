import { ErrorMessage, Form } from 'formik';
import styled from 'styled-components';

export const EditProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 335px;
  max-height: 440px;
  padding: 24px;

  & h2 {
    margin: 0 0 24px 0;
    color: var(--main_text_color);
    font-size: 18px;
    font-weight: 500;
    letter-spacing: -0.02em;
    line-height: 1.5;
  }
`;

export const AvatarContainer = styled.div`
  align-self: center;
  position: relative;
  /* margin: 0 0 25px 0; */
`;

export const AvatarImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 68px;
  height: 68px;
  background-color: var(--avatar-bg);

  & img {
    max-width: 100%;
    max-height: 100%;
  }

  & svg {
    display: block;
    align-self: flex-end;
    max-width: 56px;
    max-height: 50px;
    fill: var(--avatar-icon);

    & use {
      margin: auto;
    }
  }
`;

export const UploadAvatarButton = styled.div`
  position: absolute;
  top: 55px;
  left: 22px;
  max-width: 24px;
  max-height: 24px;
  padding: 7px;
  border: 0;
  border-radius: 6px;
  background-color: var(--accent);
  cursor: pointer;

  & svg {
    display: block;
    max-width: 10px;
    max-height: 10px;
    margin: auto;
    stroke: #161616;

    & use {
      margin: auto;
    }
  }
`;

export const EditProfileForm = styled(Form)`
  display: flex;
  flex-direction: column;
  position: relative;

  & input {
    width: 100%;
    height: 100%;
    height: 49px;
    padding: 14px 18px;
    border: solid 1px var(--accent);
    border-radius: 8px;
    color: var(--main_text_color);
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.02em;
    line-height: 1.5;
    opacity: 0.4;

    &:focus-visible {
      outline: 0;
      opacity: 1;
    }

    &:focus-visible + span {
      outline: 0;
      opacity: 1;
    }

    &::placeholder {
      color: var(--light_text);
    }
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  color: red;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  margin: 0 0 14px 0;

  &[data-last-child] {
    margin: 0 0 24px 0;
  }

  &[data-avatar] {
    margin: 0 0 25px 0;
  }
`;

export const PasswordInputContainer = styled.div`
  position: relative;
`;

export const ShowHideButton = styled.button`
  position: absolute;
  top: calc(50% - 9px);
  right: 18px;
  max-width: 18px;
  max-height: 18px;
  padding: 0;
  border: 0;
  background-color: transparent;

  & svg {
    stroke: var(--main_text_color);
    opacity: 0.4;
  }
`;

export const SubmitButton = styled.button`
  max-height: 49px;
  padding: 14px 0;
  border: 0;
  border-radius: 8px;
  background-color: var(--accent);
  color: var(--main_text_color);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1.5;
`;
