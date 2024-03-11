import styled from 'styled-components';

export const ModalOverlay = styled.div`
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
`;

// export const ModalContent = styled.div`
// background-color: var(--modal_content_bg);
// border-radius: 8px;
// z-index: 20;
// position: relative;
// padding: 24px;

// @media screen and (min-width: 1440px) {
//   margin-left: 24px;
//   width: 212px;
//   height: 272px;
//   padding: 20px;
// }
// `;

// export const CloseButton = styled.svg`
//   position: absolute;
//   top: 14px;
//   right: 14px;
//   width: 18px;
//   height: 18px;
//   stroke: var(--main_text_color);
//   cursor: pointer;
// `;
