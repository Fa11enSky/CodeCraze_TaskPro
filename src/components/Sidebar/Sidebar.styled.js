import styled from 'styled-components';

const StyledSidebar = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  max-width: 197px;
  outline: 1px solid red;
  padding-top: 14px;
  padding-bottom: 14px;

  @media screen and (min-width: 768px) {
    max-width: 212px;
    padding-top: 14px;
    padding-bottom: 14px;
  }
`;

const SidebarContainer = styled.div`
  padding-left: 14px;
  padding-right: 14px;

  @media screen and (min-width: 768px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export { StyledSidebar, SidebarContainer };
