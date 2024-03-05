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
  margin: 0 0 25px 0;
`;

export const AvatarImageContainer = styled.div`
  width: 68px;
  height: 68px;

  & img {
    max-width: 100%;
    max-height: 100%;
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

export const EditProfileForm = styled.form`
  display: flex;
  flex-direction: column;

  & input {
    max-height: 49px;
    margin: 0 0 14px 0;
    padding: 14px 18px;
    border: solid 1px var(--accent);
    border-radius: 8px;
    color: var(--main_text_color);
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.02em;
    line-height: 1.5;

    &:focus-visible {
      outline: 0;
    }

    &::placeholder {
      color: var(--light_text);
    }
  }

  & input[name='password'] {
    margin: 0 0 24px 0;
  }

  & button {
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
  }
`;
