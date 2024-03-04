import styled from 'styled-components';

const NeedHelpInner = styled('div')`
  width: 335px;
  height: 355px;
  padding: 24px;
  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.05);
  background: #151515;
  border: 1px solid rgba(190, 219, 176, 0.5);
  border-radius: 8px;
  position: absolute;
  top: 25%;
  .NeedHelpInner__text {
    font-weight: 500;
    font-size: 18px;
    letter-spacing: -0.02em;
    color: #fff;
    margin-bottom: 24px;
  }
  .NeedHelpInner__form {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .NeedHelpInner__email {
    border: 1px solid #bedbb0;
    border-radius: 8px;
    padding-left: 18px;
    width: 287px;
    height: 49px;
    background-color: #151515;
    opacity: 0.4;
    color: #fff;
  }
  .NeedHelpInner__email::placeholder {
    font-size: 14px;
    letter-spacing: -0.02em;
    color: #fff;
  }
  .NeedHelpInner__email:focus {
    padding-left: 18px;
  }
  .NeedHelpInner__email:focus::placeholder {
    color: transparent;
  }
  .NeedHelpInner__comment {
    border: 1px solid #bedbb0;
    border-radius: 8px;
    padding-left: 14px;
    padding-right: 14px;
    padding-top: 18px;
    width: 287px;
    height: 120px;
    background-color: #151515;
    opacity: 0.4;
    resize: none;
    color: #fff;
  }
  .NeedHelpInner__comment::placeholder {
    font-size: 14px;
    letter-spacing: -0.02em;
    color: #fff;
  }
  .NeedHelpInner__comment:focus {
    padding-left: 18px;
    padding-top: 14px;
  }
  .NeedHelpInner__comment:focus::placeholder {
    color: transparent;
  }
  .NeedHelpInner__btn {
    padding: 14px 122px;
    margin-top: 12px;
    background: #bedbb0;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: -0.02em;
  }
  @media screen and (min-width: 768px) {
    width: 400px;
    left: 25%;
    .NeedHelpInner__email {
      width: 352px;
    }
    .NeedHelpInner__comment {
      width: 352px;
    }
  }
  @media screen and (min-width: 1440px) {
    left: 38%;
  }
`;

export default NeedHelpInner;
