import styled from 'styled-components';

const NeedHelpInnerText = styled('p')`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: var(--main_text_color);
  margin-bottom: 24px;
`;
const NeedHelpInnerForm = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
const NeedHelpInnerEmail = styled('input')`
  border: 1px solid var(--accent);
  border-radius: 8px;
  padding-left: 18px;
  width: 287px;
  height: 49px;
  background-color: var(--background_help);
  opacity: 0.4;
  color: var(--main_text_color);
  .NeedHelpInner__email::placeholder {
    font-size: 14px;
    letter-spacing: -0.02em;
    color: var(--main_text_color);
  }
  .NeedHelpInner__email:focus {
    padding-left: 18px;
  }
  .NeedHelpInner__email:focus::placeholder {
    color: transparent;
  }
  @media screen and (min-width: 768px) {
    .NeedHelpInner__email {
      width: 352px;
    }
  }
`;

const NeedHelpInnerComment = styled('textarea')`
  border: 1px solid var(--accent);
  border-radius: 8px;
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 18px;
  width: 287px;
  height: 120px;
  background-color: var(--background_help);
  opacity: 0.4;
  resize: none;
  color: var(--main_text_color);
  .NeedHelpInner__comment::placeholder {
    font-size: 14px;
    letter-spacing: -0.02em;
    color: var(--main_text_color);
  }
  .NeedHelpInner__comment:focus {
    padding-left: 18px;
    padding-top: 14px;
  }
  .NeedHelpInner__comment:focus::placeholder {
    color: transparent;
  }
  @media screen and (min-width: 768px) {
    .NeedHelpInner__comment {
      width: 352px;
    }
  }
`;

const NeedHelpInnerBtn = styled('button')`
  padding: 14px 122px;
  margin-top: 12px;
  background: var(--accent);
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
`;

export {
  NeedHelpInnerText,
  NeedHelpInnerForm,
  NeedHelpInnerEmail,
  NeedHelpInnerComment,
  NeedHelpInnerBtn,
};
